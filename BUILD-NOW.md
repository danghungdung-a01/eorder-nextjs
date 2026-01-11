# 🔧 Sửa Dockerfile - Build ngay bây giờ

## ✅ Đã sửa xong!

Tôi đã sửa Dockerfile để dùng **absolute paths** cho COPY commands, điều này sẽ fix lỗi "package.json not found".

### Thay đổi chính:
```dockerfile
# Trước (bị lỗi):
COPY package.json package-lock.json* ./

# Sau (đã sửa):
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
```

---

## 🚀 Build ngay:

```bash
cd /home/tnkas/docker/apps/frontend/eorder-nextjs
docker build -t eorder-nextjs:eorder-dev-1.0 .
```

---

## 🧪 Nếu vẫn lỗi, chạy test script:

```bash
cd /home/tnkas/docker/apps/frontend/eorder-nextjs
./test-build.sh
```

Hoặc kiểm tra thủ công:

```bash
# 1. Verify location
pwd
# Must be: /home/tnkas/docker/apps/frontend/eorder-nextjs

# 2. Schọn files
ls -lh package*.json

# 3. Build với verbose
docker build -t eorder-nextjs:test --progress=plain .

# 4. Hoặc thử với alternative Dockerfile
docker build -f Dockerfile.alternative -t eorder-nextjs:test .
```

---

## 🔍 Debug nếu cần:

### Kiểm tra build context:
```bash
docker build --no-cache -t eorder-nextjs:debug . 2>&1 | tee build.log
```

### Kiểm tra .dockerignore:
```bash
cat .dockerignore
# Đảm bảo KHÔNG có dòng nào với "package.json"
```

### Kiểm tra Docker context:
```bash
docker context ls
docker context use default  # Nếu có nhiều contexts
```

---

## 💡 Lưu ý:

- **Đúng thư mục**: `/home/tnkas/docker/apps/frontend/eorder-nextjs`
- **Không phải**: `/home/tnkas/docker/apps/fontend/eorder-nextjs` (thiếu chữ 'r')
- **Có file**: package.json, package-lock.json phải tồn tại
- **Context**: Build từ đúng thư mục có source code

---

## ⚡ Quick Commands:

```bash
# Full workflow
cd /home/tnkas/docker/apps/frontend/eorder-nextjs
docker build -t eorder-nextjs:eorder-dev-1.0 .
docker stack deploy -c docker-compose.swarm.yml eorder-nextjs
```

