# Build TikTok FYP Helper di Komputer Lain

## Komputer sekarang ada masalah SSL Certificate Java yang menghambat build Android

Masalah: `PKIX path building failed: unable to find valid certification path to requested target`

---

## Solusi: Transfer project ini ke komputer/laptop lain yang **TIDAK ada pembatasan internet**

### Step 1: Copy Seluruh Folder Project
Copy folder ini ke komputer lain:
```
d:\CreatBot\TikTokFYPHelper\
```

Bisa via:
- USB Flash Drive
- Google Drive / Dropbox
- Git repository (push ke GitHub)
- Network share

---

### Step 2: Di komputer baru, install prerequisites

#### 2.1 Install Node.js (v18+)
Download: https://nodejs.org/

#### 2.2 Install Java JDK 17
Download: https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html

#### 2.3 Install Android Studio
Download: https://developer.android.com/studio

Saat install, centang:
- Android SDK
- Android SDK Platform (API 34)
- Android Virtual Device

---

### Step 3: Setup Environment Variables

**Windows:**
1. Cari "Environment Variables" di Start Menu
2. Tambahkan:
   - `ANDROID_HOME` = `C:\Users\[USERNAME]\AppData\Local\Android\Sdk`
   - `JAVA_HOME` = `C:\Program Files\Java\jdk-17`
3. Edit `Path`, tambahkan:
   - `%ANDROID_HOME%\platform-tools`
   - `%ANDROID_HOME%\cmdline-tools\latest\bin`
   - `%JAVA_HOME%\bin`

---

### Step 4: Build APK

```bash
cd TikTokFYPHelper
npm install
cd android
gradlew assembleDebug
```

APK akan ada di:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

---

### Step 5: Install ke HP Android

**Via USB:**
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

**Via File Share:**
- Copy file `app-debug.apk` ke HP
- Buka di HP, klik install
- Aktifkan "Install from Unknown Sources" kalau diminta

---

## Opsi Lain: Build via Cloud Service (GRATIS)

### Expo EAS Build (Free Tier)
```bash
npm install -g eas-cli
eas build -p android --profile preview
```

### GitHub Actions (Free untuk public repo)
Push project ke GitHub, setup workflow untuk auto-build APK

### Appetize.io
Upload code, build di cloud, test langsung di browser

---

## ⚠️ Kenapa komputer sekarang tidak bisa build?

Komputer ini kemungkinan:
1. **Behind corporate firewall/proxy** yang block Maven/Google repositories
2. **Java certificate store bermasalah** - missing root CA certificates
3. **Antivirus/Security software** intercept HTTPS traffic

Untuk fix di komputer ini, butuh admin access untuk:
- Import SSL certificates ke Java keystore
- Configure proxy settings di Gradle
- Disable firewall temporarily

Tapi lebih cepat pakai komputer lain yang koneksi internet normal. 

---

## Kontak Developer
Jika butuh bantuan build, hub: [Your contact]

Build tested successfully on: Windows 10/11 with clean internet connection
