# 🌐 Build Online dengan Replit

## Build Android APK di Browser!

**Replit** adalah online IDE yang bisa run code di cloud.

---

## 📋 Step-by-Step:

### Step 1: Daftar Replit

1. Buka: https://replit.com/
2. Klik **"Sign Up"** (gratis)
3. Daftar dengan Google/GitHub/Email
4. Login

### Step 2: Create New Repl

1. Klik **"+ Create Repl"**
2. Pilih Template: **"Node.js"**
3. Title: `TikTokFYPHelper`
4. Klik **"Create Repl"**

### Step 3: Upload Project Files

Ada 2 cara:

#### Cara A: Upload ZIP
1. Di sidebar kiri, klik icon **"Files"**
2. Klik **"..."** (three dots) → **"Upload Folder"**
3. Upload file `TikTokFYPHelper.zip` (compress dulu)
4. Extract di Replit

#### Cara B: Upload Manual (Folder by Folder)
1. Klik icon **"Upload"** (ikon folder dengan panah atas)
2. Upload folder-folder penting:
   - `src/`
   - `android/`
   - `package.json`
   - `babel.config.js`
   - `metro.config.js`
   - `tsconfig.json`
   - `App.tsx`
   - `index.js`

### Step 4: Install Dependencies

Di terminal Replit (bagian bawah), ketik:

```bash
npm install
```

Tunggu 5-10 menit.

### Step 5: Install Android SDK di Replit

```bash
# Install Java
apt-get update
apt-get install -y openjdk-17-jdk

# Download Android SDK
mkdir -p ~/android-sdk
cd ~/android-sdk
wget https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip
unzip commandlinetools-linux-9477386_latest.zip
```

⚠️ **MASALAH:** Replit free tier **tidak support** build Android karena:
- RAM terbatas (512MB)
- CPU terbatas
- Storage terbatas (500MB)

**Replit tidak cocok untuk build Android app.** ❌

---

## ❌ Kesimpulan: Tidak Recommended

Replit bagus untuk:
- ✅ Web development
- ✅ Small Node.js apps
- ✅ Python scripts

Tapi **tidak support** untuk:
- ❌ Android build (butuh Gradle + SDK ~3GB)
- ❌ React Native compilation

---

**Coba OPSI 3 di bawah** (GitHub Actions) - ini yang PALING RELIABLE! ✅
