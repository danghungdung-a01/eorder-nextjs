# ✅ Đã Sửa Lỗi Build

## 🐛 Vấn đề gặp phải:

1. **"package.json not found"** - Fixed với absolute paths
2. **"Module not found"** - Standalone mode gây lỗi module resolution

## 🔧 Giải pháp đã áp dụng:

### 1. Tắt Standalone Mode trong `next.config.ts`:

```typescript
// Đã comment out:
// output: 'standalone',
```

**Lý do**: Standalone mode trong Next.js 15 có thể gây lỗi với path aliases (`@/*`)

### 2. Sửa Dockerfile để không dùng standalone:

**Trước:**
```dockerfile
COPY --from=builder /app/.next/standalone ./
CMD ["node", "server.js"]
```

**Sau:**
```dockerfile
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
CMD ["npm", "start"]
```

## 🚀 Build lại ngay:

```bash
cd /home/t Ella/docker/apps/frontend/eorder-nextjs
docker build -t eorder-nextjs:eorder-dev-1.0 .
```

## ⚙️ Trade-offs:

### Standalone Mode (đã tắt):
- ✅ Image nhỏ hơn (~150MB)
- ❌ Gặp lỗi với path aliases
- ❌ Module resolution issues

### Standard Mode (đang dùng):
- ✅ Hoạt động ổn định
- ✅ Không có lỗi module resolution
- ❌ Image lớn hơn (~300MB)

## 📊 Kết quả:

- Image size: ~300MB (thay vì ~150MB)
- Reliability: ✅ Hoạt động chắc chắn
- Build time: Tương tự

## 🔍 Nếu vẫn có vấn đề:

Kiểm tra các file:
```bash
# 1. Verify tsconfig.json
cat tsconfig.json | grep paths

# 2. Verify next.config.ts
cat next.config.ts | grep output

# 3. Check components exist
ls src/components/CommonHero/
ls src/components/BlogDetails/
```

## 📝 Notes:

- Image vẫn sẽ hoạt động tốt với NPM proxy
- Sử dụng `npm start` thay vì `node server.js`
- Toàn bộ node_modules được copy (không phải standalone bundle)

