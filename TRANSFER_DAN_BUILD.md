# 📦 Cara Transfer & Build Aplikasi di Komputer Lain

## Kenapa Harus Pindah Komputer?

Komputer ini ada masalah **Java SSL Certificate** yang menyebabkan Gradle tidak bisa download dependencies dari internet. Ini **BUKAN salah kode**, tapi masalah environment komputer.

---

## Step 1: Copy Project Ini

### Opsi A: Via USB Flash Drive
1. Copy seluruh folder `d:\CreatBot\TikTokFYPHelper\` ke flashdisk
2. Bawa ke komputer/laptop lain
3. Copy ke folder manapun (misal: `D:\Projects\TikTokFYPHelper`)

### Opsi B: Via Google Drive / Dropbox
1. Compress folder ini jadi ZIP
2. Upload ke Google Drive
3. Download di komputer lain

### Opsi C: Via GitHub (Recommended untuk developer)
```bash
cd d:\CreatBot\TikTokFYPHelper
git init
git add .
git commit -m "Initial commit - TikTok FYP Helper"
git remote add origin https://github.com/USERNAME/TikTokFYPHelper.git
git push -u origin main
```

---

## Step 2: Setup di Komputer Baru

### ✅ Pastikan sudah install:

1. **Node.js** (v18 atau lebih baru)
   - Download: https://nodejs.org/
   - Test: `node --version`

2. **Java JDK 17**
   - Download: https://adoptium.net/temurin/releases/
   - Test: `java --version`

3. **Android Studio**
   - Download: https://developer.android.com/studio
   - Saat install, centang semua Android SDK components

### ⚙️ Setup Environment Variables:

**Windows:**
```
ANDROID_HOME = C:\Users\[USERNAME]\AppData\Local\Android\Sdk
JAVA_HOME = C:\Program Files\Java\jdk-17
Path += %ANDROID_HOME%\platform-tools
Path += %ANDROID_HOME%\cmdline-tools\latest\bin
```

**Mac/Linux:**
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/cmdline-tools/latest/bin
```

---

## Step 3: Install Dependencies

```bash
cd TikTokFYPHelper
npm install
```

Tunggu sampai selesai (~2-5 menit).

---

## Step 4: Build APK

### Via Android Studio (Paling Mudah):
1. Buka Android Studio
2. Open Project → Pilih folder `TikTokFYPHelper/android`
3. Tunggu Gradle sync selesai (5-10 menit pertama kali)
4. Klik **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
5. APK akan ada di: `android/app/build/outputs/apk/debug/app-debug.apk`

### Via Command Line:
```bash
cd android
./gradlew assembleDebug
```

APK location: `android/app/build/outputs/apk/debug/app-debug.apk`

---

## Step 5: Install ke HP Android

### Cara 1: Via USB + ADB
```bash
adb devices  # Pastikan HP terdeteksi
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

### Cara 2: Manual Copy
1. Copy file `app-debug.apk` ke HP (via USB, Bluetooth, atau email)
2. Buka file di HP
3. Klik "Install"
4. Kalau muncul warning "Unknown Sources", aktifkan di Settings

---

## 🎯 Spesifikasi Aplikasi

**Nama:** TikTok FYP Helper  
**Package:** com.tiktokfyphelper  
**Versi:** 1.0  
**Min Android:** 5.0 (Lollipop)  
**Target Android:** 14

**Fitur:**
- ✅ 12 kategori niche konten
- ✅ 144+ hashtags siap copy-paste
- ✅ 72+ tips konten
- ✅ Jadwal upload optimal
- ✅ Rekomendasi jumlah upload per hari
- ✅ Dark mode UI
- ✅ 100% offline, no internet required
- ✅ GRATIS, no ads

---

## ⚠️ Troubleshooting di Komputer Baru

### Error: "SDK location not found"
```bash
echo "sdk.dir=C:\\Users\\[USERNAME]\\AppData\\Local\\Android\\Sdk" > android/local.properties
```

### Error: "Java version incompatible"
Pastikan pakai Java 17, bukan Java 8 atau 21.

### Build terlalu lama
First build memang 10-15 menit karena download dependencies (~500MB). Build berikutnya cuma 1-2 menit.

---

## 📞 Support

Kalau masih ada error di komputer baru, kemungkinan besar masih masalah environment setup. Cek:
1. Node.js version (`node -v` harus >= 18)
2. Java version (`java -version` harus 17)
3. ANDROID_HOME di environment variables
4. Internet connection normal (tidak ada firewall/proxy)

---

## 🎉 Setelah Berhasil Build

APK file bisa:
- ✅ Diinstall ke HP pribadi
- ✅ Dibagikan ke teman via file APK
- ✅ Di-upload ke Google Play Store (butuh akun developer $25)
- ✅ Dibagikan via link download (upload ke hosting)

Selamat! Aplikasi TikTok FYP Helper sudah siap dipakai! 🚀
