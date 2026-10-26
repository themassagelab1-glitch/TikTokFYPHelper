# ✅ Checklist Build di Laptop Teman

## 📋 Yang Perlu Dibawa:

### 1. **USB Flashdisk** (Minimal 500MB kosong)
Berisi folder: `TikTokFYPHelper`

### 2. **File ini:** `TRANSFER_DAN_BUILD.md`
Panduan lengkap untuk teman kamu.

---

## ⏱️ Estimasi Waktu:

| Step | Waktu | Keterangan |
|------|-------|------------|
| Transfer files | 2-5 menit | Copy dari USB ke laptop |
| Cek prerequisites | 5 menit | Node.js, Java, Android Studio |
| Install prerequisites (jika belum ada) | 15-45 menit | Download + install |
| Install npm packages | 3-10 menit | `npm install` |
| Build APK | 10-20 menit | First build paling lama |
| **TOTAL** | **35-85 menit** | Tergantung laptop sudah ada tools atau belum |

---

## 🖥️ Spesifikasi Laptop Teman yang Dibutuhkan:

### Minimal:
- ✅ Windows 10/11, macOS 10.15+, atau Linux
- ✅ RAM 4GB (recommended 8GB)
- ✅ Storage kosong 15GB
- ✅ Internet connection (untuk download tools & dependencies)
- ✅ Processor: Intel i3 / AMD Ryzen 3 atau lebih baik

### Bonus (mempercepat):
- ⚡ SSD (bukan HDD)
- ⚡ RAM 8GB+
- ⚡ Internet cepat (10 Mbps+)

---

## 📝 Step-by-Step untuk Teman Kamu:

### **Step 1: Cek Prerequisites**

Buka Terminal/Command Prompt, ketik:

```bash
# Cek Node.js
node --version
# Harus: v18.0.0 atau lebih baru

# Cek Java
java -version
# Harus: Java 17 (bukan 8, bukan 21)

# Cek Android Studio
# Cek di Applications (Mac) atau Start Menu (Windows)
```

---

### **Step 2A: Jika Prerequisites SUDAH ADA ✅**

```bash
# 1. Copy folder TikTokFYPHelper ke laptop
# 2. Buka Terminal/Command Prompt
# 3. Masuk ke folder project

cd /path/to/TikTokFYPHelper

# 4. Install dependencies
npm install

# 5. Build APK
cd android
./gradlew assembleDebug

# (Windows: gunakan gradlew.bat bukan ./gradlew)

# 6. APK ada di:
# android/app/build/outputs/apk/debug/app-debug.apk
```

**Waktu total: ~20-30 menit**

---

### **Step 2B: Jika Prerequisites BELUM ADA ❌**

Ikuti panduan lengkap di file: **`TRANSFER_DAN_BUILD.md`**

**Singkatnya:**

#### Install Node.js:
- Windows/Mac: https://nodejs.org/ → Download LTS → Install
- Linux: `sudo apt install nodejs npm` (Ubuntu/Debian)

#### Install Java JDK 17:
- Windows/Mac: https://adoptium.net/temurin/releases/ → Download JDK 17 → Install
- Linux: `sudo apt install openjdk-17-jdk`

#### Install Android Studio:
- Semua OS: https://developer.android.com/studio
- Saat install, centang:
  - ✅ Android SDK
  - ✅ Android SDK Platform
  - ✅ Android Virtual Device

#### Setup Environment Variables:
```bash
# Windows (PowerShell as Admin):
[System.Environment]::SetEnvironmentVariable('ANDROID_HOME', 'C:\Users\[USERNAME]\AppData\Local\Android\Sdk', 'Machine')
[System.Environment]::SetEnvironmentVariable('JAVA_HOME', 'C:\Program Files\Java\jdk-17', 'Machine')

# Mac/Linux (tambahkan ke ~/.bashrc atau ~/.zshrc):
export ANDROID_HOME=$HOME/Library/Android/sdk
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

**Waktu total: ~60-90 menit**

---

## 🎯 Output yang Diharapkan:

Setelah build berhasil:

```
BUILD SUCCESSFUL in 12m 34s
156 actionable tasks: 156 executed
```

File APK ada di:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

**Ukuran file:** ~30-50 MB

---

## 📱 Setelah Dapat APK:

### Copy APK kembali ke USB flashdisk

```bash
# Copy APK ke USB
cp android/app/build/outputs/apk/debug/app-debug.apk /path/to/usb/
```

### Install ke HP Android:

1. **Via USB Cable + ADB:**
   ```bash
   adb install app-debug.apk
   ```

2. **Via File Transfer:**
   - Copy `app-debug.apk` ke HP
   - Buka di File Manager
   - Tap file APK
   - Klik "Install"
   - Jika muncul warning "Unknown Sources" → Settings → Allow

---

## 🔧 Troubleshooting Cepat:

### Error: "SDK location not found"
**Fix:**
```bash
echo "sdk.dir=/path/to/android/sdk" > android/local.properties
```

### Error: "JAVA_HOME not set"
**Fix:**
```bash
# Windows
set JAVA_HOME=C:\Program Files\Java\jdk-17

# Mac/Linux
export JAVA_HOME=/path/to/jdk-17
```

### Error: "Gradle build failed"
**Fix:**
```bash
# Clean build
cd android
./gradlew clean
./gradlew assembleDebug
```

### Build stuck/lambat
Pastikan:
- Internet connection stabil
- Antivirus tidak block Gradle
- Storage cukup (min 10GB kosong)

---

## 💰 Biaya:

- **GRATIS** jika teman kamu sudah punya semua tools
- **GRATIS** jika belum ada tools tapi mau install
- **0 Rupiah** tidak ada biaya tersembunyi

---

## 🙏 Tips untuk Teman:

1. **Build pertama memang lama (10-20 menit)**
   - Gradle harus download dependencies ~500MB
   - Build berikutnya cuma 1-2 menit

2. **Laptop akan sibuk saat build**
   - CPU usage 80-100% normal
   - Jangan panik kalau kipas laptop bunyi kencang

3. **Jika error, coba:**
   - Restart terminal
   - Run `./gradlew clean` lalu build lagi
   - Google error message

4. **Backup file penting**
   - Jaga-jaga kalau ada yang tidak sengaja terhapus

---

## 📞 Kontak Darurat:

Jika stuck dan butuh bantuan remote:
- Stack Overflow: https://stackoverflow.com/questions/tagged/react-native
- React Native Discord: https://discord.gg/react-native
- Reddit: r/reactnative

---

## ✨ Setelah Berhasil:

**APK file bisa:**
- ✅ Diinstall langsung ke HP
- ✅ Dibagikan ke teman lain
- ✅ Di-upload ke Google Play Store (butuh akun developer)
- ✅ Disimpan sebagai backup

**Aplikasi ini:**
- 🎯 100% offline, tidak butuh internet
- 🆓 Gratis, no ads, no in-app purchase
- 🔒 Privacy-first, no data collection
- 📱 Support Android 5.0 keatas

---

## 🎉 Good Luck!

Kalau berhasil build, jangan lupa bilang makasih ke teman ya! 😊

---

**Created by:** TikTok FYP Helper Team  
**Version:** 1.0  
**Date:** 2026
