# ⚡ Quick Start Guide

Panduan singkat untuk langsung mulai!

## 🎯 Yang Harus Sudah Ada

✅ Node.js (v18+) - [Download](https://nodejs.org/)  
✅ JDK 17 - [Download](https://adoptium.net/)  
✅ Android Studio - [Download](https://developer.android.com/studio)  
✅ Android Emulator ATAU HP Android dengan USB Debugging aktif

## 🚀 3 Langkah Mudah

### 1️⃣ Install Dependencies
```bash
cd TikTokFYPHelper
npm install
```

### 2️⃣ Jalankan Metro (Terminal 1)
```bash
npm start
```

### 3️⃣ Jalankan di Android (Terminal 2 - Baru)
```bash
npm run android
```

## ✨ Done!

Aplikasi akan otomatis terbuka di emulator/HP kamu.

---

## 🐛 Ada Error?

### Pertama kali build lama?
Normal! Build pertama 10-15 menit. Santai aja ☕

### Metro error?
```bash
npm start --reset-cache
```

### Build error?
```bash
cd android
.\gradlew clean
cd ..
npm run android
```

### No devices found?
- Emulator: Pastikan sudah jalan
- HP Fisik: Check `adb devices` - harus muncul device

---

## 📱 Build APK untuk Install Langsung

```bash
cd android
.\gradlew assembleRelease
```

APK: `android\app\build\outputs\apk\release\app-release.apk`

Copy ke HP dan install! 📲

---

## 💡 Tips

- **Hot Reload:** Tekan `R` dua kali di emulator
- **Dev Menu:** `Ctrl+M` di emulator, Shake di HP fisik
- **Check Logs:** `adb logcat`

---

**Butuh panduan lengkap?** Baca `SETUP_GUIDE.md`

**Happy Coding! 🎉**
