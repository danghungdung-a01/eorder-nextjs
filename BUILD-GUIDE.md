# Hướng dẫn Build Docker Image

## 🎯 Quan trọng: Đúng thư mục

**PHẢI** build từ thư mục:
```bash
cd /home/tnkas/docker/apps/frontend/eorder-nextjs
```

**KHÔNG** build từ thư mục `fontend` (thiếu chữ 'r')

---

## 🚀 Cách 1: Build với Standalone Mode (Recommended - Smaller image)

### Prerequisites
Đảm bảo `next.config.ts` có:
```typescript
output: 'standalone'
```

### Build Command
```bash
cd /home/tnkas/docker/apps/frontend/eorder-nextjs
sudo docker build -t eorder-nextjs:eorder-dev-1.0 .
```

### Nếu gặp lỗi "server.js not found"
Có nghĩa là standalone mode không hoạt động, dùng Cách 2 bên dưới.

---

## 🔧 Cách 2: Build không Standalone (Larger image, hoạt động chắc chắn)

### Build Command
```bash
cd /home/tnkas/docker/apps/frontend/eorder-nextjs
sudo docker build -f Dockerfile.alternative -t eorder-nextjs:eorder-dev-1.0 .
```

### Hoặc đổi tên file
```bash
cd /home/tnkas/docker/apps/frontend/eorder-nextjs
mv Dockerfile Dockerfile.standalone
mv Dockerfile.alternative Dockerfile
sudo docker build -t eorder-nextjs:eorder-dev-1.0 .
```

---

## ✅ Kiểm tra trước khi build

```bash
cd /home/tnkas/docker/apps/frontend/eorder-nextjs

# Check current directory
pwd
# Output phải là: /home/tnkas/docker/apps/frontend/eorder-nextjs

# Check files exist
ls -lh package*.json
ls -d src/ public/ .next/ 2>/dev/null || echo "Source files exist"

# Check Dockerfile
cat Dockerfile | head -20
```

---

## 🐛 Troubleshooting

### Lỗi: "package.json not found"
**Nguyên nhân**: Build từ sai thư mục hoặc context sai
**Giải pháp**: 
```bash
cd /home/tnkas/docker/apps/frontend/eorder-nextjs
pwd  # Verify đúng thư mục
ls package*.json  # Verify file tồn tại

### Lỗi: "server.js not found"
**Nguyên nhân**: Standalone mode không tạo được server.js
**Giải pháp**: Dùng Dockerfile.alternative (Cách 2)

### Lỗi: "npm ci failed"
**Nguyên nhân**: package-lock.json không compatible
**Giải pháp**: Dockerfile đã có fallback logic, tự động dùng `npm install`

### Lỗi: Permission denied
**Nguyên nhân**: Cần quyền sudo
**Giải pháp**: 
```bash
sudo docker build -t eorder-nextjs:eorder-dev-1.0 .
```

---

## 📊 So sánh 2 Dockerfiles

| Feature | Dockerfile (Standalone) | Dockerfile.alternative |
|---------|------------------------|------------------------|
| Image size | ~150MB | ~300MB |
| Build time | Nhanh hơn | Chậm hơn |
| Reliability | Cần standalone mode | Hoạt động mọi trường hợp |
| Memory usage | Thấp hơn | Cao hơn |

---

## 🚢 Sau khi build xong

```bash
# Deploy lên Swarm
docker stack deploy -c docker-compose.swarm.yml eorder-nextjs

# Check status
docker service ls | grep eorder
docker service logs -f eorder-nextjs_eorder-nextjs
```

---

## 📝 Quick Commands

```bash
# Full deployment flow
cd /home/tnkas/docker/apps/frontend/eorder-nextjs
sudo docker build -t eorder-nextjs:eorder-dev-1.0 .
docker stack deploy -c docker-compose.swarm.yml eorder-nextjs
docker service logs -f eorder-nextjs_eorder-nextjs
```

---

## ⚡ Dùng Deploy Script

```bash
cd /home/tnkas/docker/apps/frontend/eorder-nextjs
sudo ./deploy.sh
```

