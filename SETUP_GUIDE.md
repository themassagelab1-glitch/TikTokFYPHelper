# 📱 Panduan Setup TikTok FYP Helper

Panduan lengkap untuk setup dan menjalankan aplikasi TikTok FYP Helper di Windows.

## ✅ Prasyarat yang Harus Diinstall

### 1. Node.js (WAJIB)
- Download dari: https://nodejs.org/
- Pilih versi **LTS** (Long Term Support)
- Saat install, centang **"Add to PATH"**
- Verifikasi instalasi:
```bash
node --version
npm --version
```

### 2. JDK (Java Development Kit) - WAJIB
- Download **JDK 17** dari: https://adoptium.net/
- Install dengan klik next-next
- Set JAVA_HOME:
  1. Cari "Environment Variables" di Windows Search
  2. Klik "Environment Variables"
  3. Di System Variables, klik "New"
  4. Variable name: `JAVA_HOME`
  5. Variable value: `C:\Program Files\Eclipse Adoptium\jdk-17.x.x.x-hotspot` (sesuaikan path)
  6. OK, lalu edit PATH, tambahkan: `%JAVA_HOME%\bin`

- Verifikasi:
```bash
java -version
```

### 3. Android Studio (WAJIB)
- Download dari: https://developer.android.com/studio
- Install dengan konfigurasi default
- Saat pertama buka, akan ada setup wizard:
  - Install **Android SDK**
  - Install **Android SDK Platform**
  - Install **Android Virtual Device (AVD)**

#### Setup Android SDK:
1. Buka Android Studio
2. Klik "More Actions" > "SDK Manager"
3. Di tab "SDK Platforms", install:
   - ✅ Android 14.0 (UpsideDownCake) - API 34
   - ✅ Android 13.0 (Tiramisu) - API 33
   
4. Di tab "SDK Tools", install:
   - ✅ Android SDK Build-Tools 34
   - ✅ Android SDK Command-line Tools
   - ✅ Android Emulator
   - ✅ Android SDK Platform-Tools
   - ✅ Intel x86 Emulator Accelerator (HAXM)

#### Setup Environment Variables untuk Android:
1. Buka "Environment Variables"
2. Tambahkan di System Variables:
   - Variable: `ANDROID_HOME`
   - Value: `C:\Users\<USERNAME>\AppData\Local\Android\Sdk`
   
3. Edit PATH, tambahkan:
   ```
   %ANDROID_HOME%\platform-tools
   %ANDROID_HOME%\emulator
   %ANDROID_HOME%\tools
   %ANDROID_HOME%\tools\bin
   ```

4. Verifikasi:
```bash
adb --version
```

### 4. Setup Android Emulator atau Device Fisik

#### Opsi A: Android Emulator (Recommended untuk Testing)
1. Buka Android Studio
2. Klik "More Actions" > "Virtual Device Manager"
3. Klik "Create Device"
4. Pilih **Pixel 5** atau phone apapun
5. Download dan pilih system image: **Android 13 (API 33)**
6. Finish
7. Jalankan emulator dengan klik tombol Play

#### Opsi B: Device Fisik Android
1. Di HP Android kamu:
   - Masuk ke Settings > About Phone
   - Tap "Build Number" 7 kali untuk aktifkan Developer Mode
   - Kembali ke Settings > Developer Options
   - Aktifkan **USB Debugging**
   
2. Hubungkan HP ke komputer via USB
3. Izinkan USB Debugging di HP
4. Verifikasi koneksi:
```bash
adb devices
```

## 🚀 Cara Menjalankan Aplikasi

### Step 1: Install Dependencies

Buka Command Prompt atau PowerShell, masuk ke folder project:

```bash
cd TikTokFYPHelper
npm install
```

Tunggu sampai selesai (5-10 menit tergantung internet).

### Step 2: Jalankan Metro Bundler

Di terminal pertama, jalankan:

```bash
npm start
```

Biarkan terminal ini tetap jalan. Metro bundler adalah JavaScript bundler yang compile kode React Native.

### Step 3: Jalankan di Android

Buka terminal **BARU** (jangan tutup yang pertama), jalankan:

```bash
npm run android
```

Command ini akan:
1. Build aplikasi Android
2. Install APK ke emulator/device
3. Jalankan aplikasi

**Pertama kali build akan lama (10-15 menit)** karena download dependencies Gradle.

### Jika Build Berhasil:

Aplikasi akan otomatis terbuka di emulator/device kamu! 🎉

## 🐛 Troubleshooting

### Error: "JAVA_HOME is not set"
**Solusi:** 
- Pastikan JDK sudah terinstall
- Set JAVA_HOME di Environment Variables
- Restart Command Prompt/PowerShell

### Error: "SDK location not found"
**Solusi:**
- Set ANDROID_HOME di Environment Variables
- Restart Command Prompt/PowerShell

### Error: "adb: command not found"
**Solusi:**
- Pastikan Android SDK Platform-Tools sudah terinstall
- Tambahkan `%ANDROID_HOME%\platform-tools` ke PATH

### Error: Metro bundler tidak jalan
**Solusi:**
```bash
npm start --reset-cache
```

### Error: Build failed di Gradle
**Solusi:**
```bash
cd android
.\gradlew clean
cd ..
npm run android
```

### Error: "No devices/emulators found"
**Solusi:**
- Pastikan emulator sudah jalan ATAU
- Device fisik sudah connect dan USB debugging aktif
- Cek dengan: `adb devices`

### Aplikasi crash saat dibuka
**Solusi:**
1. Hapus aplikasi dari device/emulator
2. Clean project:
```bash
cd android
.\gradlew clean
cd ..
```
3. Install ulang:
```bash
npm run android
```

## 📦 Build APK untuk Install di HP

Kalau mau build APK yang bisa langsung install di HP tanpa kabel:

```bash
cd android
.\gradlew assembleRelease
```

APK akan ada di:
```
android\app\build\outputs\apk\release\app-release.apk
```

Copy APK ini ke HP dan install!

**Note:** APK ini belum di-sign, jadi ada warning saat install. Untuk production, perlu sign dengan keystore.

## 🎯 Tips Development

### 1. Hot Reload
Kalau edit kode JavaScript/TypeScript:
- Tekan `R` dua kali di emulator untuk reload
- Atau shake HP fisik dan pilih "Reload"

### 2. Developer Menu
Buka dengan:
- Emulator: Tekan `Ctrl+M` (Windows) atau `Cmd+M` (Mac)
- Device fisik: Shake HP

### 3. Debug dengan Chrome DevTools
1. Buka Developer Menu
2. Pilih "Debug"
3. Browser akan terbuka dengan Chrome DevTools

### 4. Check Logs
```bash
# Android logs
adb logcat
```

## 📱 Cara Menggunakan Aplikasi

1. **Buka aplikasi** TikTok FYP Helper
2. **Input username** TikTok (tanpa simbol @)
3. **Pilih niche** konten yang kamu buat
4. **Klik "Generate Strategi FYP"**
5. **Lihat hasil:**
   - 📋 Copy hashtag dengan satu klik
   - ⏰ Lihat jadwal upload terbaik
   - 🎯 Baca strategi konten untuk niche kamu
   - ✨ Tips umum untuk masuk FYP

## 🎨 Struktur Project

```
TikTokFYPHelper/
├── android/              # Native Android code
├── src/
│   ├── data/
│   │   └── hashtagDatabase.ts   # Database hashtag & tips
│   ├── screens/
│   │   ├── HomeScreen.tsx       # Halaman input
│   │   └── ResultScreen.tsx     # Halaman hasil
│   └── utils/
│       └── strategyGenerator.ts # Logic generate strategi
├── App.tsx               # Main app component
├── package.json          # Dependencies
└── README.md            # Dokumentasi
```

## ❓ FAQ

**Q: Apakah perlu internet untuk menjalankan app?**
A: Development perlu internet untuk download dependencies. Tapi setelah terinstall, app bisa jalan offline.

**Q: Apakah app ini connect ke TikTok API?**
A: Tidak. App ini pure offline, tidak ada koneksi ke server atau API manapun.

**Q: Berapa lama first build?**
A: Sekitar 10-15 menit untuk pertama kali. Build selanjutnya lebih cepat (2-3 menit).

**Q: Apakah bisa di-publish ke Google Play Store?**
A: Bisa! Tapi perlu sign dengan keystore dan ikuti guideline Google Play.

**Q: Apakah gratis?**
A: 100% gratis! Tidak ada biaya, tidak ada subscription, tidak ada ads.

## 🆘 Butuh Bantuan?

Kalau ada error yang tidak tercover di sini:
1. Cek error message dengan teliti
2. Google error messagenya
3. Cek Stack Overflow
4. Cek React Native documentation: https://reactnative.dev/

---

**Selamat Coding! 🚀**

Semoga aplikasi ini membantu konten TikTok kamu masuk FYP! 🎯
