# EOrder Next.js - Docker Swarm Deployment Summary

## 📦 What's Been Configured

### 1. **Dockerfile** ✅
- **Multi-stage build** với Node.js 20 Alpine
- **Standalone output mode** để tối ưu kích thước image
- **NPM registry configuration** (registry.npmjs.org)
- **Security**: Chạy với non-root user (nextjs:nodejs)
- **Healthcheck**: wget tool được install cho Docker healthcheck
- **Optimized**: Chỉ copy files cần thiết từ builder stage

### 2. **docker-compose.swarm.yml** ✅
- **3 replicas** cho high availability
- **Resource limits**: 1GB memory limit, 512M reservation
- **Networks**: 
  - `proxy_net` (core_proxy_net) - Frontend
  - `backend_net` (core_backend_net) - Backend
- **Healthcheck**: wget check trên port 3000
- **Rolling update**: tự động rollback nếu fail
- **Port**: 3000 exposed

### 3. **next.config.ts** ✅
- **Standalone output** enabled
- **React strict mode** enabled
- **Image optimization** disabled (unoptimized)
- **Remote patterns** configured cho images

### 4. **.dockerignore** ✅
- Ignore node_modules, .git, logs
- Ignore config files không cần trong production
- Ignore Docker files, compose files
- Ignore development files

### 5. **deploy.sh** ✅
- Automated deployment script
- Build & deploy in one command
- Status checking
- Log viewing

### 6. **README-DEPLOY.md** ✅
- Complete deployment guide
- Troubleshooting section
- Environment variables guide
- Scale & update commands

## 🚀 Quick Start

### First Time Deployment

```bash
cd /home/tnkas/docker/apps/frontend/eorder-nextjs

# Option 1: Using deploy script
./deploy.sh

# Option 2: Manual
docker build -t eorder-nextjs:eorder-dev-1.0 .
docker stack deploy -c docker-compose.swarm.yml eorder-nextjs
```

### Verify Deployment

```bash
# Check services
docker service ls | grep eorder

# Check logs
docker service logs -f eorder-nextjs_eorder-nextjs

# Check health
docker service ps eorder-nextjs_eorder-nextjs
```

## 🔧 Configuration

### Environment Variables (Optional)

Edit `docker-compose.swarm.yml` to add:
```yaml
environment:
  - NEXT_PUBLIC_API_URL=https://api.example.com
  - CUSTOM_VAR=value
```

### NPM Configuration

The Dockerfile is pre-configured to use:
- Registry: https://registry.npmjs.org/
- Build: `npm ci --prefer-offline --no-audit`
- Production: Standalone mode

## 📊 Architecture

```
┌─────────────────────────────────────────────┐
│  Docker Swarm Manager                        │
│                                              │
│  ┌────────────────────────────────────┐    │
│  │  Core Stack (core/)                │    │
│  │  - nginx-proxy-manager:81          │    │
│  │  - mysql-shared:3306               │    │
│  │  - redis:6379                      │    │
│  │  - rabbitmq:5672                   │    │
│  └────────────────────────────────────┘    │
│                                              │
│  ┌────────────────────────────────────┐    │
│  │  EOrder Next.js Stack              │    │
│  │  - eorder-nextjs:3000 (x3 replicas)│    │
│  │  - Networks: proxy_net, backend_net│    │
│  └────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

## 🔍 Troubleshooting

### Service won't start
```bash
docker service logs eorder-nextjs_eorder-nextjs --tail 100
```

### Can't connect to backend
- Check if service is in `backend_net` network
- Verify service name in networks section
- Check DNS resolution within Swarm

### Image build fails
```bash
# Try building without cache
docker build --no-cache -t eorder-nextjs:eorder-dev-1.0 .

# Check npm registry
docker run --rm node:20-alpine npm config get registry
```

## 📝 Notes

- **Port 3000** is exposed from the service
- **Standalone mode** reduces image size significantly
- **3 replicas** provide redundancy
- **Rollback** is automatic on update failure
- **Healthcheck** ensures only healthy containers serve traffic

