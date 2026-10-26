# 🚀 Build Online dengan GitHub Actions (RECOMMENDED!)

## Build APK Gratis di Cloud GitHub!

**GitHub Actions** adalah CI/CD gratis dari GitHub untuk build aplikasi.

**Keuntungan:**
- ✅ 100% GRATIS untuk repo public
- ✅ Build di server GitHub (powerful)
- ✅ Unlimited builds
- ✅ Otomatis setiap kali ada update code
- ✅ Download APK dari Artifacts

---

## 📋 Step-by-Step (Tanpa Git):

### Step 1: Buat Akun GitHub

1. Buka: https://github.com/
2. Klik **"Sign Up"** (gratis)
3. Daftar dengan email
4. Verify email
5. Login

### Step 2: Create Repository Baru

1. Klik icon **"+"** di kanan atas
2. Klik **"New repository"**
3. Repository name: `TikTokFYPHelper`
4. Description: `Android app untuk TikTok FYP strategies`
5. **PENTING:** Pilih **"Public"** (biar gratis)
6. ✅ Centang **"Add a README file"**
7. Klik **"Create repository"**

### Step 3: Upload Files via Browser

Karena tidak ada Git, kita upload manual:

#### A. Compress Project Jadi ZIP (Skip node_modules):

1. Buka PowerShell:

```powershell
cd d:\CreatBot\TikTokFYPHelper

# Hapus folder besar dulu (temporary)
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force android\.gradle -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force android\app\build -ErrorAction SilentlyContinue

# Compress
Compress-Archive -Path * -DestinationPath ..\TikTokFYPHelper-Clean.zip
```

#### B. Upload ke GitHub:

1. Di halaman repository GitHub, klik **"Add file"** → **"Upload files"**
2. Drag & drop file `TikTokFYPHelper-Clean.zip`
3. Atau klik **"choose your files"** → Pilih ZIP
4. Tunggu upload selesai
5. Scroll ke bawah, klik **"Commit changes"**

#### C. Extract ZIP di GitHub:

GitHub tidak bisa extract ZIP otomatis. Kita harus upload file per file.

**Cara lebih mudah:** Upload folder-folder penting satu per satu:

1. Klik **"Add file"** → **"Upload files"**
2. Drag folder `src/` ke browser
3. Commit changes
4. Ulangi untuk:
   - `android/` (folder android)
   - `assets/`
   - `package.json`
   - `package-lock.json`
   - `babel.config.js`
   - `metro.config.js`
   - `tsconfig.json`
   - `App.tsx`
   - `index.js`

⚠️ **PROBLEM:** Upload manual ribet kalau banyak file!

---

### Step 4: Cara LEBIH MUDAH - Install Git Dulu

Kalau kamu install Git di komputer, jauh lebih mudah:

1. Download Git: https://git-scm.com/downloads
2. Install (5 menit)
3. Buka PowerShell di folder project:

```powershell
cd d:\CreatBot\TikTokFYPHelper

# Init git
git init

# Tambahkan .gitignore
echo "node_modules/" > .gitignore
echo "android/.gradle/" >> .gitignore
echo "android/app/build/" >> .gitignore
echo "*.log" >> .gitignore

# Add files
git add .

# Commit
git commit -m "Initial commit"

# Connect ke GitHub
git remote add origin https://github.com/USERNAME/TikTokFYPHelper.git

# Push
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub kamu.

---

### Step 5: Setup GitHub Actions Workflow

1. Di repository GitHub, klik tab **"Actions"**
2. Klik **"New workflow"**
3. Klik **"set up a workflow yourself"**
4. Paste code ini:

```yaml
name: Build Android APK

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
    
    - name: Setup Java JDK
      uses: actions/setup-java@v3
      with:
        distribution: 'temurin'
        java-version: '17'
    
    - name: Install dependencies
      run: npm install
    
    - name: Make gradlew executable
      run: chmod +x android/gradlew
    
    - name: Build Android APK
      run: |
        cd android
        ./gradlew assembleDebug
    
    - name: Upload APK
      uses: actions/upload-artifact@v3
      with:
        name: app-debug
        path: android/app/build/outputs/apk/debug/app-debug.apk
```

5. File name: `.github/workflows/build.yml`
6. Klik **"Commit changes"**

---

### Step 6: Trigger Build

Setelah commit workflow file, GitHub Actions akan:
1. Otomatis detect ada file baru
2. Mulai build (~10-15 menit)
3. Upload APK ke Artifacts

---

### Step 7: Download APK

1. Klik tab **"Actions"**
2. Klik workflow run yang baru (nama: "Build Android APK")
3. Tunggu sampai status jadi ✅ (hijau)
4. Scroll ke bawah, di bagian **"Artifacts"**
5. Klik **"app-debug"** untuk download
6. Extract ZIP, dapatkan `app-debug.apk`
7. Install ke HP Android!

---

## ⏱️ Estimasi Waktu:

| Step | Waktu |
|------|-------|
| Daftar GitHub | 5 menit |
| Upload files | 10-30 menit (tergantung cara) |
| Setup workflow | 5 menit |
| Build di GitHub | 10-15 menit |
| Download APK | 2 menit |
| **TOTAL** | **32-57 menit** |

---

## 💰 Biaya:

**100% GRATIS** untuk public repository!

GitHub Free tier:
- ✅ 2,000 menit build/bulan
- ✅ Unlimited public repos
- ✅ Unlimited storage

---

## 🎯 Keuntungan GitHub Actions:

- ✅ Build otomatis setiap kali update code
- ✅ Server powerful (build cepat)
- ✅ Bisa build multiple APK (debug, release)
- ✅ History semua builds
- ✅ Bisa setup auto-publish ke Google Play

---

## 🆘 Troubleshooting:

**Build failed?**
→ Klik workflow run → Lihat log error → Google error message

**APK tidak muncul di Artifacts?**
→ Pastikan workflow file correct (YAML format)

**Upload file gagal?**
→ File terlalu besar (>100MB per file), hapus `node_modules` dulu

---

## ✅ Kesimpulan:

**GitHub Actions adalah CARA TERBAIK untuk build online!**

Pros:
- ✅ Gratis unlimited
- ✅ Server powerful
- ✅ Otomatis
- ✅ Reliable

Cons:
- ❌ Butuh Git untuk upload (atau upload manual ribet)
- ❌ Setup workflow agak teknis

---

**Mau coba? Install Git dulu (~5 menit), terus saya bantu setup!** 🚀
