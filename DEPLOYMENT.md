# Deploy với Vercel

## Cách 1: Sử dụng Vercel CLI

1. Cài đặt Vercel CLI:
```bash
npm install -g vercel
```

2. Đăng nhập Vercel:
```bash
vercel login
```

3. Deploy từ thư mục project:
```bash
cd d:\test-pv\my-nuskin-project
vercel
```

4. Làm theo hướng dẫn:
   - Chọn "Set up and deploy"
   - Xác nhận project name
   - Chọn "No" cho modify settings (hoặc "Yes" nếu cần custom)

5. Deploy production:
```bash
vercel --prod
```

## Cách 2: Sử dụng Vercel Web Dashboard

1. Truy cập: https://vercel.com
2. Đăng ký/Đăng nhập với GitHub
3. Click "New Project"
4. Import từ GitHub repository
5. Vercel sẽ tự động detect Vite và deploy

---

## Deploy với Netlify

1. Build project local:
```bash
npm run build
```

2. Truy cập: https://netlify.com
3. Drag & drop thư mục `dist` vào Netlify
4. Hoặc connect với Git repository

---

## Deploy với GitHub Pages

1. Cài đặt gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Thêm scripts vào package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Chạy deploy:
```bash
npm run deploy
```

---

## Deploy với Firebase Hosting

1. Cài đặt Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Đăng nhập Firebase:
```bash
firebase login
```

3. Khởi tạo Firebase:
```bash
firebase init hosting
```

4. Build và deploy:
```bash
npm run build
firebase deploy
```

---

## Environment Variables

Nếu project sử dụng environment variables, tạo file `.env.production`:

```
VITE_API_URL=https://your-api-url.com
VITE_APP_NAME=Nu Skin Project
```

## Build Commands

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`
