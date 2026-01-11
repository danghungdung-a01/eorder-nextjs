# 🔄 Build Với No Cache

## Vấn đề
Docker đã cache build context và không nhận các file mới (index.tsx)

## Giải pháp: Build lại với --no-cache

```bash
cd /home/tnkas/docker/apps/frontend/eorder-nextjs

# Build với no-cache để force rebuild
docker build --no-cache -t eorder-nextjs:eorder-dev-1.0 .
```

## Hoặc cleanup trước khi build:

```bash
# Xóa old images
docker rmi eorder-nextjs:eorder-dev-1.0 2>/dev/null || true

# Build lại
docker build -t eorder-nextjs:eorder-dev-1.0 .
```

## Verify Files Trước Khi Build:

```bash
# Check index files tồn tại
ls -la src/components/*/index.tsx

# Check JSON files
ls -la src/lib/dataJson/

# Check imports đã sửa
grep -A 5 "import.*@/components" src/app/blog/\[id\]/page.tsx
```

## Files Đã Sửa:
- ✅ Created: `src/components/CommonHero/index.tsx`
- ✅ Created: `src/components/BlogDetails/index.tsx`
- ✅ Created: `src/components/SectionTitle/index.tsx`
- ✅ Created: `src/components/BlogCard/index.tsx`
- ✅ Updated: `src/app/blog/[id]/page.tsx` (imports)

