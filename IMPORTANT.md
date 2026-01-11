# ⚠️ QUAN TRỌNG - CÁCH BUILD ĐÚNG

## Vấn đề

Bạn có **2 thư mục**:
1. ❌ `/home/tnkas/docker/apps/fontend/eorder-nextjs` - CHỈ có config, KHÔNG có source code
2. ✅ `/home/tnkas/docker/apps/frontend/eorder-nextjs` - ĐẦY ĐỦ source code

## Giải pháp

### ✅ PHẢI build từ thư mục `frontend` (có chữ 'r'):

```bash
cd /home/tnkas/docker/apps/frontend/eorder-nextjs
sudo docker build -t eorder-nextjs:eorder-dev-1.0 .
```

### ❌ KHÔNG build từ thư mục `fontend` (thiếu chữ 'r') vì:
- Không có package.json
- Không có src/
- Không có public/
- Chỉ có các file Docker config

## Hướng dẫn đầy đủ

```bash
# 1. Di chuyển đến đúng thư mục
cd /home/tnkas/docker/apps/frontend/eorder-nextjs

# 2. Kiểm tra có package.json
ls package*.json

# 3. Build Docker image
sudo docker build -t eorder-nextjs:eorder-dev-1.0 .

# 4. Deploy lên Swarm
docker stack deploy -c docker-compose.swarm.yml eorder-nextjs

# 5. Kiểm tra
docker service ls | grep eorder
```

## Hoặc dùng script tự động

```bash
cd /home/tnkas/docker/apps/frontend/eorder-nextjs
sudo ./deploy.sh
```

## Checklist

- [ ] Bạn đã cd vào `/home/tnkas/docker/apps/frontend/eorder-nextjs`?
- [ ] Bạn thấy file `package.json` khi chạy `ls`?
- [ ] Bạn có thư mục `src/` và `public/`?
- [ ] Bạn đã chạy lệnh với `sudo`?

Nếu tất cả đều ✅, thì build sẽ thành công!

