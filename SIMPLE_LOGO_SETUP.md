# 🤖 Setup Logo CreatMate Bot - Super Simple!

## 🎯 Cara Paling Mudah (3 Langkah)

### 📥 Langkah 1: Download Logo Template

Saya sudah buat logo template yang siap pakai. Kamu tinggal:

1. **Buka website icon generator:** https://icon.kitchen/
2. **Upload gambar logo CreatMate Bot** yang kamu punya
3. **Atau gunakan logo yang saya buat** (ada di `assets/logo.svg`)

---

### 🔧 Langkah 2: Generate & Download Icons

Di website Icon Kitchen:

1. **Upload logo** (drag & drop atau click upload)
2. **Select platform:** Android
3. **Settings:**
   - Background: Keep original (biar navy blue tetap ada)
   - Shape: Square with rounded corners
   - Padding: 5-10%
4. **Click "Download"**
5. **Extract ZIP file** yang didownload

Kamu akan dapat folder seperti ini:
```
android/
  mipmap-mdpi/
  mipmap-hdpi/
  mipmap-xhdpi/
  mipmap-xxhdpi/
  mipmap-xxxhdpi/
```

---

### 📂 Langkah 3: Copy ke Project

1. **Copy semua folder `mipmap-*`** dari hasil download
2. **Paste ke:** `TikTokFYPHelper/android/app/src/main/res/`
3. **Replace/overwrite** folder yang sudah ada

**Done!** Icon sudah siap!

---

## 🚀 Setelah Icon Ready

Sekarang kamu perlu install prerequisites dulu sebelum bisa build app.

### Prerequisites (Install Dulu):

#### 1. Node.js ✅ (Sepertinya sudah ada)
Check: `node --version`

#### 2. Java JDK 17
- Download: https://adoptium.net/
- Install dengan default settings
- **Set JAVA_HOME** di Environment Variables

#### 3. Android Studio & SDK
- Download: https://developer.android.com/studio
- Install dengan default settings
- **Buka Android Studio** pertama kali untuk setup SDK
- **Set ANDROID_HOME** di Environment Variables

#### 4. Setup Environment Variables

**Cara:**
1. Search "Environment Variables" di Windows
2. Click "Environment Variables"
3. Di **System Variables**, add:

```
Variable: ANDROID_HOME
Value: C:\Users\Administrator\AppData\Local\Android\Sdk
```

4. Edit **PATH**, tambahkan:
```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
%ANDROID_HOME%\tools
```

5. **Restart PowerShell** setelah set environment variables

---

## ✅ Verify Prerequisites

Setelah install semua, test:

```powershell
node --version     # Should show: v18.x.x or higher
java -version      # Should show: openjdk version "17.x.x"
adb --version      # Should show: Android Debug Bridge version x.x.x
```

Kalau semua command berhasil, berarti prerequisites **OK!**

---

## 🏃 Jalankan Aplikasi

Setelah prerequisites & logo ready:

### 1. Install Dependencies (Sekali Aja)
```powershell
cd d:\CreatBot\TikTokFYPHelper
npm install
```

### 2. Start Emulator
Buka Android Studio → AVD Manager → Start emulator

**ATAU** connect HP Android via USB dengan USB Debugging ON

### 3. Run App (2 Terminal)

**Terminal 1:**
```powershell
cd d:\CreatBot\TikTokFYPHelper
npm start
```
*(Biarkan jalan)*

**Terminal 2:**
```powershell
cd d:\CreatBot\TikTokFYPHelper
npm run android
```

**Wait 10-15 menit** untuk first build.

App akan otomatis install & launch dengan **logo CreatMate Bot!** 🎉

---

## 🎨 Kalau Mau Pakai Logo Saya Buat

Saya sudah buat logo di `assets/logo.svg` yang bisa kamu pakai sementara.

Untuk convert SVG ke PNG:

### Online (Paling Mudah):
1. Buka: https://svgtopng.com/
2. Upload `assets/logo.svg`
3. Set size: 1024x1024
4. Download PNG
5. Upload PNG itu ke Icon Kitchen
6. Follow steps di atas

---

## 🐛 Troubleshooting

### "npm: command not found"
→ Install Node.js dari https://nodejs.org/

### "adb: command not found"
→ Install Android Studio & set ANDROID_HOME di PATH

### "JAVA_HOME is not set"
→ Install JDK 17 & set JAVA_HOME di Environment Variables

### "No devices found"
→ Start emulator atau connect HP dengan USB debugging ON

---

## 📞 Butuh Bantuan?

Kalau stuck di mana saja, screenshot error-nya dan tanya!

**Saya siap bantu! 🚀**

---

**Good luck bro! Logo CreatMate Bot bakal keren di aplikasi ini! 🤖✨**
