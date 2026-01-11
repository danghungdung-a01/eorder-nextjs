# 🚀 NPM Quick Reference - EOrder Next.js

## ⚡ Setup Nhanh

### 1. Truy cập NPM:
```
http://YOUR_IP:81
```

### 2. Tạo Proxy Host:

```
Proxy Hosts → Add Proxy Host → Details Tab:
─────────────────────────────────────────────
Domain Names:    your-domain.com
Scheme:          http
Forward Host:    eorder-nextjs_eorder-nextjs
Forward Port:    3000
─────────────────────────────────────────────

SSL Tab:
─────────────────────────────────────────────
Certificate:     Let's Encrypt
Email:           your-email@example.com
Force SSL:       ✓
─────────────────────────────────────────────

Advanced Tab (Security):
─────────────────────────────────────────────
Block Common Exploits:     ✓
Websockets Support:        ✓
Force SSL:                 ✓
HTTP Strict Transport:     ✓
─────────────────────────────────────────────
```

## 🔍 Service Information

**Service Name**: `eorder-nextjs_eorder-nextjs`  
**Port**: `3000`  
**Network**: `core_proxy_net`  
**Stack**: `eorder-nextjs`

## ✅ Verify Commands

```bash
# Check service running
docker service ls | grep eorder

# Check logs
docker service logs eorder-nextjs_eorder-nextjs --tail 50

# Test connectivity
curl http://localhost:3000
```

## 🎯 Typical Flow

1. Deploy service → `docker stack deploy ...`
2. Wait for service to be ready (30-60s)
3. Create proxy host in NPM
4. Add SSL certificate
5. Test: `https://your-domain.com`

## ⚠️ Common Issues

| Error | Solution |
|-------|----------|
| 502 Bad Gateway | Check service name & port |
| DNS resolution failed | Use full service name: `stack_service` |
| Connection refused | Service not running, check logs |
| SSL not working | Verify DNS points to server |

## 📌 Notes

- Service discovery qua Docker Swarm DNS
- Automatic load balancing với multiple replicas
- Health checks ensure only healthy containers serve traffic

