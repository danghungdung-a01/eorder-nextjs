# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Thêm dòng này để cài SSL certificates
RUN apk add --no-cache ca-certificates

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Run
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Thêm dòng này ở runner nữa
RUN apk add --no-cache ca-certificates

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./

RUN npm ci --omit=dev
EXPOSE 3000

CMD ["npm", "start"]