# 🎯 BUILD APK ONLINE - PANDUAN LENGKAP DARI NOL

## TUJUAN: Dapat file APK yang bisa diinstall ke HP Android

**Waktu total: 45-60 menit**

---

## 📋 PERSIAPAN

Yang kamu butuhkan:
- ✅ Komputer dengan internet
- ✅ Browser (Chrome/Edge)
- ✅ Folder project: `d:\CreatBot\TikTokFYPHelper\`

---

# BAGIAN 1: INSTALL GIT (Sekali doang, 10 menit)

## Step 1.1: Download Git

1. Buka browser, ketik: **https://git-scm.com/download/win**
2. Akan auto-download file `.exe` (~50 MB)
3. Tunggu download selesai

## Step 1.2: Install Git

1. Double-click file yang barusan di-download
2. Muncul installer, klik **"Next"** terus sampai selesai (pakai default settings semua)
3. Klik **"Install"**
4. Tunggu ~5 menit
5. Klik **"Finish"**

## Step 1.3: Test Git

1. **Tutup semua PowerShell yang sedang dibuka**
2. Buka PowerShell **BARU** (Win+X → Windows PowerShell)
3. Ketik: `git --version`
4. Enter
5. Harus muncul: `git version 2.xx.x`

✅ **Kalau muncul versi = Git sudah terinstall!**

❌ **Kalau error = Restart komputer, lalu tes lagi**

---

# BAGIAN 2: DAFTAR GITHUB (Sekali doang, 5 menit)

## Step 2.1: Buka GitHub

1. Buka browser
2. Ketik: **https://github.com/**

## Step 2.2: Sign Up

**Kalau sudah punya akun:** Klik **"Sign in"** → Login → Skip ke BAGIAN 3

**Kalau belum punya akun:**

1. Klik **"Sign up"** (pojok kanan atas)
2. Isi form:
   - Email: email kamu
   - Password: buat password (minimal 8 karakter)
   - Username: terserah (misal: `tiktokfypbuilder`)
3. Klik **"Continue"**
4. Verify email (cek inbox email)
5. Klik link verifikasi
6. Login ke GitHub

✅ **Kalau sudah login = Siap lanjut!**

---

# BAGIAN 3: UPLOAD PROJECT KE GITHUB (15 menit)

## Step 3.1: Buat Repository Baru

1. Di GitHub (browser), klik icon **"+"** di kanan atas (sebelah foto profil)
2. Klik **"New repository"**
3. Isi form:
   - **Repository name:** `TikTokFYPHelper` (copy-paste!)
   - **Description:** `Android app untuk TikTok FYP`
   - **Public/Private:** Pilih **"Public"** ⚠️ WAJIB PUBLIC biar gratis!
   - **Add a README:** ❌ Jangan centang apapun
   - **Add .gitignore:** ❌ Jangan centang
   - **Choose a license:** None
4. Klik tombol hijau **"Create repository"**

✅ **Muncul halaman dengan command = Repository berhasil dibuat!**

**JANGAN TUTUP halaman GitHub ini! Akan kita pakai nanti.**

---

## Step 3.2: Buka PowerShell

1. Tekan **Win + X**
2. Pilih **"Windows PowerShell"** atau **"Terminal"**
3. PowerShell terbuka (layar biru/hitam)

---

## Step 3.3: Masuk ke Folder Project

Copy-paste command ini ke PowerShell, tekan Enter:

```powershell
cd d:\CreatBot\TikTokFYPHelper
```

✅ **Kalau berhasil, prompt berubah jadi: `PS D:\CreatBot\TikTokFYPHelper>`**

❌ **Kalau error "path not found":** Pastikan folder memang ada di `d:\CreatBot\TikTokFYPHelper\`

---

## Step 3.4: Setup Git Config

Copy-paste command ini **SATU PER SATU**, tekan Enter setelah setiap command:

**⚠️ GANTI `emailkamu@gmail.com` dengan email GitHub kamu!**

```powershell
git config --global user.name "TikTokFYPHelper"
```
Enter, tunggu selesai.

```powershell
git config --global user.email "emailkamu@gmail.com"
```
Enter, tunggu selesai.

```powershell
git config --global http.sslVerify false
```
Enter, tunggu selesai.

✅ **Tidak ada error = Config berhasil!**

---

## Step 3.5: Buat File .gitignore

Copy-paste command ini ke PowerShell, Enter:

```powershell
@"
node_modules/
android/.gradle/
android/app/build/
*.log
.DS_Store
"@ | Out-File -FilePath .gitignore -Encoding utf8
```

✅ **Tidak ada error = File berhasil dibuat!**

---

## Step 3.6: Init Git & Commit

Copy-paste command ini **SATU PER SATU**, Enter setelah setiap command:

```powershell
git init
```
Muncul: `Initialized empty Git repository...` ✅

```powershell
git add .
```
Tunggu ~10-30 detik (scan semua file)

```powershell
git commit -m "Initial commit"
```
Muncul banyak text (file yang di-commit) ✅

---

## Step 3.7: Connect & Push ke GitHub

**Kembali ke browser GitHub** (halaman repository yang tadi dibuat)

Di halaman itu, cari bagian **"...or push an existing repository from the command line"**

Ada 3 baris command, **COPY 3 baris itu** (klik icon copy di sebelah kanan)

Contoh (URL-nya akan beda sesuai username kamu):
```
git remote add origin https://github.com/USERNAME/TikTokFYPHelper.git
git branch -M main
git push -u origin main
```

**Paste ke PowerShell**, Enter!

**Akan muncul warning SSL certificate** → ABAIKAN, tunggu saja!

**Proses upload akan berjalan:**
```
Enumerating objects: xxx
Counting objects: 100%
Compressing objects: 100%
Writing objects: xx% (xxx/xxx), xxx MiB | xxx KiB/s
```

⏱️ **Tunggu 5-15 menit** (tergantung internet, file ~200-300MB)

✅ **Muncul: "branch 'main' set up to track 'origin/main'" = UPLOAD SUKSES!**

---

## Step 3.8: Verifikasi di GitHub

1. **Kembali ke browser GitHub**
2. **Refresh halaman** (tekan F5)
3. Kamu akan lihat semua file sudah muncul:
   - 📁 src/
   - 📁 android/
   - 📁 assets/
   - 📄 package.json
   - dll.

✅ **Semua file muncul = Upload berhasil!**

---

# BAGIAN 4: SETUP GITHUB ACTIONS (10 menit)

## Step 4.1: Buat File Workflow

Di PowerShell (masih di folder yang sama), copy-paste command ini **SATU PER SATU**:

```powershell
mkdir -Force .github\workflows
```
Folder dibuat ✅

```powershell
@"
name: Build Android APK

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Setup Java JDK
      uses: actions/setup-java@v4
      with:
        distribution: 'temurin'
        java-version: '17'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Make gradlew executable
      run: chmod +x android/gradlew
    
    - name: Build Android APK
      run: |
        cd android
        ./gradlew assembleDebug --no-daemon
    
    - name: Upload APK
      uses: actions/upload-artifact@v4
      with:
        name: app-debug
        path: android/app/build/outputs/apk/debug/app-debug.apk
        retention-days: 7
"@ | Out-File -FilePath .github\workflows\build.yml -Encoding utf8
```

File workflow dibuat ✅

---

## Step 4.2: Push Workflow ke GitHub

Copy-paste command ini **SATU PER SATU**:

```powershell
git add .
```

```powershell
git commit -m "Add build workflow"
```

```powershell
git push
```

Upload ~10 detik ✅

---

# BAGIAN 5: TRIGGER BUILD & DOWNLOAD APK (20 menit)

## Step 5.1: Buka GitHub Actions

1. **Kembali ke browser GitHub**
2. **Refresh halaman** (F5)
3. Klik tab **"Actions"** (di menu atas, sebelah "Code")

## Step 5.2: Lihat Build Progress

Kamu akan lihat:
- **Workflow run** dengan nama: "Add build workflow"
- Status: 🟡 **Kuning (sedang berjalan)** atau ✅ **Hijau (selesai)**

**Klik pada workflow run itu**

## Step 5.3: Tunggu Build Selesai

Di halaman workflow run, kamu akan lihat:
- **Jobs:** build
- **Status:** Running / Completed

Proses build steps:
1. ✅ Checkout code (~10 detik)
2. ✅ Setup Node.js (~20 detik)
3. ✅ Setup Java JDK (~30 detik)
4. ✅ Install dependencies (~2-5 menit)
5. ✅ Make gradlew executable (~5 detik)
6. ✅ Build Android APK (~10-15 menit) ← **PALING LAMA**
7. ✅ Upload APK (~10 detik)

⏱️ **Total waktu: 15-25 menit**

**Refresh halaman** setiap 1-2 menit untuk lihat progress.

✅ **Status berubah hijau ✅ = Build berhasil!**

---

## Step 5.4: Download APK

Setelah status jadi **✅ hijau:**

1. **Scroll ke bawah** di halaman workflow run
2. Cari bagian **"Artifacts"**
3. Kamu akan lihat: **"app-debug"** dengan icon download
4. **Klik "app-debug"**
5. File ZIP akan download (~30-50 MB)
6. **Buka folder Downloads**
7. **Extract file ZIP** (klik kanan → Extract All)
8. Di dalam ada file: **`app-debug.apk`**

🎉 **INI FILE APK YANG KAMU CARI!**

---

# BAGIAN 6: INSTALL APK KE HP ANDROID (5 menit)

## Cara 1: Via USB Cable

1. **Colok HP ke komputer** dengan kabel USB
2. Di HP, pilih **"Transfer files"**
3. **Copy file `app-debug.apk`** ke folder Download di HP
4. **Buka File Manager** di HP
5. Masuk ke folder **Download**
6. **Tap file `app-debug.apk`**
7. **Klik "Install"**
8. Kalau muncul warning **"Unknown Sources"**:
   - Klik "Settings"
   - Aktifkan "Allow from this source"
   - Kembali, tap APK lagi
   - Klik "Install"
9. **Tunggu instalasi selesai**
10. Klik **"Open"**

## Cara 2: Via Bluetooth/WhatsApp

1. **Kirim file `app-debug.apk`** via Bluetooth/WhatsApp ke HP
2. **Download file** di HP
3. **Tap file APK**
4. Ikuti step 7-10 dari Cara 1

---

# 🎉 SELESAI!

Aplikasi **TikTok FYP Helper** sudah terinstall di HP!

Icon aplikasi akan muncul di **Home Screen** atau **App Drawer**.

---

# 🔄 CARA UPDATE APLIKASI DI MASA DEPAN

Kalau kamu mau ubah hashtags/konten/fitur:

1. Edit file di folder `d:\CreatBot\TikTokFYPHelper\`
2. Buka PowerShell di folder itu
3. Jalankan:
   ```powershell
   git add .
   git commit -m "Update konten"
   git push
   ```
4. GitHub Actions akan **otomatis build APK baru**!
5. Download APK baru dari Artifacts
6. Install lagi ke HP (overwrite yang lama)

---

# ❓ TROUBLESHOOTING

## Build Failed (❌ merah)

1. Klik workflow run yang failed
2. Klik job "build"
3. Lihat step mana yang error (icon ❌)
4. Klik step itu, baca error message
5. Google error message atau tanya saya

## APK Tidak Ada di Artifacts

- Pastikan step "Upload APK" berhasil (✅)
- Kalau gagal, berarti build error (cek step "Build Android APK")

## Aplikasi Tidak Bisa Diinstall

- Pastikan HP Android 5.0+
- Aktifkan "Install from Unknown Sources" di Settings

---

# 📞 BUTUH BANTUAN?

Kalau stuck di step manapun:
1. Screenshot error/halaman yang kamu lihat
2. Kasih tau di step berapa stuck
3. Saya akan bantu!

---

**Total waktu dari awal sampai dapat APK: ~45-60 menit**

**Setelah setup pertama kali, update berikutnya cuma 5-10 menit!**

Good luck bro! 🚀✨
