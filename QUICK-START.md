# Quick Start - EOrder Next.js Docker Swarm

## 🚀 Deploy ngay

```bash
cd /home/tnkas/docker/apps/frontend/eorder-nextjs

# Cách 1: Dùng script tự động
sudo ./deploy.sh

# Cách 2: Deploy thủ công
sudo docker build -t eorder-nextjs:eorder-dev-1.0 .
docker stack deploy -c docker-compose.swarm.yml eorder-nextjs
```

## ✅ Kiểm tra

```bash
# Xem services
docker service ls | grep eorder

# Xem logs real-time
docker service logs -f eorder-nextjs_eorder-nextjs

# Xem status
docker service ps eorder-nextjs_eorder-nextjs
```

## 🔧 Troubleshooting

### Build fails with package-lock.json error
✅ **Đã fix**: Dockerfile đã được cập nhật với fallback logic

### Service won't start
```bash
# Xem logs chi tiết
docker service logs eorder-nextjs_eorder-nextjs --tail 100

# Exec vào container
CONTAINER_ID=$(docker ps -q -f name=eorder-nextjs | head -1)
sudo docker exec -it $CONTAINER_ID /bin/sh
```

### Scale up/down
```bash
# Tăng lên 5 replicas
docker service scale eorder-nextjs_eorder-nextjs=5

# Giảm xuống 2 replicas
docker service scale eorder-nextjs_eorder-nextjs=2
```

## 📝 Notes

- **Port**: 3000
- **Replicas**: 3 (default)
- **Memory**: 1GB limit, 512M reservation
- **Networks**: proxy_net, backend_net
- **NPM Registry**: https://registry.npmjs.org/

## 🌐 Cấu hình NPM

1. Truy cập Nginx Proxy Manager: `http://your-ip:81`
2. Tạo proxy host:
   - Domain: your-domain.tnone.de
   - Forward to: `eorder-nextjs_eorder-nextjs:3000`
   - Enable: Block Common Exploits, Websockets

