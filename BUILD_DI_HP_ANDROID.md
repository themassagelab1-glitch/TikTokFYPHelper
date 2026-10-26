# 📱 Cara Build Aplikasi Android di HP (ADVANCED & LAMBAT)

## ⚠️ WARNING: TIDAK DISARANKAN

Build di HP akan:
- ⏱️ Memakan waktu **1-3 JAM** (vs 10 menit di laptop)
- 🔥 HP jadi **panas** dan **boros baterai**
- 💾 Butuh **storage kosong 10GB+**
- 🐌 **Sangat lambat** dan sering error

**Hanya lakukan ini kalau:**
- ✅ Kamu suka eksperimen & sabar
- ✅ HP kamu flagship (Snapdragon 8 Gen/Dimensity 9000+)
- ✅ RAM minimal 8GB
- ✅ Baterai penuh + sambil charge
- ✅ Punya waktu 3-4 jam

---

## Step 1: Install Termux

1. **Download Termux:**
   - Jangan dari Play Store! (versi lama)
   - Download dari: https://f-droid.org/packages/com.termux/
   - Install APK Termux

2. **Buka Termux** → akan muncul terminal hitam

---

## Step 2: Update Termux & Install Tools

```bash
# Update package list
pkg update -y && pkg upgrade -y

# Install essential tools
pkg install -y git wget curl nano

# Install Node.js
pkg install -y nodejs

# Install OpenJDK 17
pkg install -y openjdk-17

# Install Build Tools
pkg install -y make cmake clang
```

**Waktu: ~30-60 menit** (tergantung internet)

---

## Step 3: Setup Storage Access

```bash
# Izinkan Termux akses storage HP
termux-setup-storage

# Nanti muncul popup → klik "Allow"
```

---

## Step 4: Transfer Project ke HP

### Opsi A: Via USB Cable
1. Colok HP ke komputer
2. Copy folder `TikTokFYPHelper` ke `Internal Storage/Download/`

### Opsi B: Via Google Drive/Dropbox
1. Compress folder jadi ZIP di komputer
2. Upload ke Google Drive
3. Download di HP
4. Extract pakai app seperti ZArchiver

---

## Step 5: Copy Project ke Termux

```bash
# Pindah ke home directory
cd ~

# Copy dari Download folder ke Termux
cp -r /sdcard/Download/TikTokFYPHelper ~/TikTokFYPHelper

# Masuk ke project folder
cd ~/TikTokFYPHelper
```

---

## Step 6: Install Dependencies

```bash
# Install npm packages
npm install

# Ini bisa 30 menit - 1 jam!
# HP akan panas, pastikan ada ventilasi
```

---

## Step 7: Setup Android SDK (PALING RIBET)

```bash
# Install Android SDK command line tools
mkdir -p ~/android-sdk/cmdline-tools
cd ~/android-sdk/cmdline-tools

# Download SDK tools for Android (ARM64)
wget https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip

# Extract
unzip commandlinetools-linux-9477386_latest.zip -d latest

# Set environment variables
echo 'export ANDROID_SDK_ROOT=$HOME/android-sdk' >> ~/.bashrc
echo 'export PATH=$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin' >> ~/.bashrc
source ~/.bashrc

# Install SDK components
sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0"

# Ini download ~2-3GB, bisa 1-2 jam
```

---

## Step 8: Build APK

```bash
cd ~/TikTokFYPHelper/android

# Build debug APK
./gradlew assembleDebug

# Ini SANGAT LAMA: 1-3 jam
# HP akan SANGAT PANAS
# Pastikan:
# - Baterai penuh + charging
# - Ada pendingin (kipas/AC)
# - Jangan pakai HP untuk hal lain
```

**Progress yang akan muncul:**
```
> Configuring > 12% CONFIGURING
> Task :app:compileDebugJavaWithJavac
> Task :app:dexBuilderDebug
...
(ini bisa stuck di satu task 20-30 menit, SABAR!)
```

---

## Step 9: APK Location

Kalau berhasil (BIG IF):
```bash
# APK ada di:
~/TikTokFYPHelper/android/app/build/outputs/apk/debug/app-debug.apk

# Copy ke storage HP
cp ~/TikTokFYPHelper/android/app/build/outputs/apk/debug/app-debug.apk /sdcard/Download/

# Install dari File Manager
```

---

## ⚠️ Masalah yang Sering Muncul:

### 1. Out of Memory
```
Error: Java heap space
```
**Fix:** HP RAM kecil, tidak bisa fix, harus pakai laptop.

### 2. HP Overheat → Throttling
Build makin lambat karena CPU di-throttle untuk cegah kerusakan.
**Fix:** Dinginkan HP (kipas, AC, pause 30 menit).

### 3. Gradle Daemon Crash
```
Gradle daemon disappeared unexpectedly
```
**Fix:** Reboot HP, coba lagi.

### 4. SSL Certificate Error (sama seperti di PC)
Yep, error yang sama bisa muncul di HP juga!

---

## 💡 Kesimpulan Jujur:

**Secara TEKNIS bisa**, tapi:
- ❌ Tidak efisien
- ❌ Sangat lambat
- ❌ HP cepat rusak (overheat berulang)
- ❌ Banyak error

**Lebih baik:**
1. ⭐ Pakai laptop teman (30 menit selesai)
2. ⭐ Cloud build service (gratis, 10 menit)
3. ⭐ Beli laptop murah bekas ($150-200)

**Build di HP hanya untuk:**
- 🎓 Belajar & eksperimen
- 🏆 Challenge "bisa gak ya?"
- 🤪 Fun project

Tapi kalau mau aplikasi jadi cepat → **jangan di HP**.

---

## 🆘 Need Help?

Kalau stuck:
1. Google error message + "termux android"
2. Reddit: r/termux
3. Stack Overflow
4. Termux Discord/Telegram group

Good luck, semoga sabar ya! 😅
