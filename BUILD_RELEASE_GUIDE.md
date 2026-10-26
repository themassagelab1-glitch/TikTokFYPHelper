# 📦 Build Release APK - Panduan Lengkap

Panduan untuk build APK production yang siap di-install di HP Android atau upload ke Play Store.

## 🎯 Overview

Ada 2 jenis APK:
1. **Debug APK** - Untuk testing saja, ada dev tools
2. **Release APK** - Production ready, optimized, siap distribusi

Guide ini untuk build **Release APK**.

## 🔐 Step 1: Generate Signing Key (Optional tapi Recommended)

Release APK sebaiknya di-sign dengan keystore sendiri untuk security.

### Generate Keystore:

```bash
cd android/app
keytool -genkeypair -v -storetype PKCS12 -keystore tiktokfyphelper-release.keystore -alias tiktokfyphelper -keyalg RSA -keysize 2048 -validity 10000
```

Kamu akan ditanya:
- **Keystore password:** Buat password yang kuat (JANGAN LUPA!)
- **Alias password:** Bisa sama dengan keystore password
- **First and Last Name:** Nama kamu
- **Organizational Unit:** (Enter saja / isi nama)
- **Organization:** (Enter saja / isi nama)
- **City:** Kota kamu
- **State:** Provinsi kamu
- **Country Code:** ID (untuk Indonesia)

**⚠️ PENTING:**
- **BACKUP keystore file ini!** Kalau hilang, tidak bisa update app di Play Store
- **JANGAN commit ke Git!** Keystore harus private
- Simpan password di tempat aman (password manager)

### Setup Gradle untuk Use Keystore:

1. Edit file `android/gradle.properties`, tambahkan di akhir:

```properties
MYAPP_RELEASE_STORE_FILE=tiktokfyphelper-release.keystore
MYAPP_RELEASE_KEY_ALIAS=tiktokfyphelper
MYAPP_RELEASE_STORE_PASSWORD=your_keystore_password
MYAPP_RELEASE_KEY_PASSWORD=your_key_password
```

**⚠️ Security Note:** Jangan commit file ini dengan password! Untuk production, gunakan environment variables.

2. Edit `android/app/build.gradle`, cari bagian `android { ... }`, tambahkan:

```gradle
android {
    ...
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
```

## 🚀 Step 2: Build Release APK

### Cara 1: Build Unsigned (Paling Mudah)

Kalau tidak perlu sign (untuk testing pribadi):

```bash
cd TikTokFYPHelper
cd android
.\gradlew assembleRelease
```

APK akan ada di:
```
android\app\build\outputs\apk\release\app-release-unsigned.apk
```

### Cara 2: Build Signed (Recommended)

Kalau sudah setup keystore:

```bash
cd TikTokFYPHelper
cd android
.\gradlew assembleRelease
```

APK akan ada di:
```
android\app\build\outputs\apk\release\app-release.apk
```

### Cara 3: Build untuk Play Store (AAB Format)

Kalau mau upload ke Google Play Store, build AAB (Android App Bundle):

```bash
cd TikTokFYPHelper
cd android
.\gradlew bundleRelease
```

AAB akan ada di:
```
android\app\build\outputs\bundle\release\app-release.aab
```

## ⏱️ Waktu Build

- **First build:** 10-15 menit
- **Subsequent builds:** 3-5 menit

## 📱 Install APK ke HP

### Via USB:

1. Copy APK ke komputer
2. Hubungkan HP via USB
3. Run:
```bash
adb install android\app\build\outputs\apk\release\app-release.apk
```

### Via File Transfer:

1. Copy APK ke HP (Google Drive, Bluetooth, USB, etc.)
2. Di HP, buka file manager
3. Tap APK file
4. Tap "Install"
5. Kalau ada warning "Install from Unknown Sources":
   - Tap Settings
   - Enable "Allow from this source"
   - Kembali dan install

## 🎨 Customize App Info (Optional)

### Ganti Nama Aplikasi:

Edit `android/app/src/main/res/values/strings.xml`:

```xml
<resources>
    <string name="app_name">TikTok FYP Helper</string>
</resources>
```

### Ganti Package Name:

Lebih advanced, butuh refactor beberapa file. Google: "react native change package name"

### Ganti App Icon:

1. Buat icon 1024x1024 px
2. Gunakan generator: https://icon.kitchen/
3. Download dan replace di folder:
   - `android/app/src/main/res/mipmap-*/ic_launcher.png`

### Ganti Version:

Edit `android/app/build.gradle`:

```gradle
defaultConfig {
    ...
    versionCode 1        // Increment setiap release (1, 2, 3, ...)
    versionName "1.0.0"  // User-facing version
}
```

## 🐛 Troubleshooting Build

### Error: "Failed to install the app"
```bash
cd android
.\gradlew clean
.\gradlew assembleRelease
```

### Error: Task failed
```bash
# Clear gradle cache
cd android
.\gradlew clean
.\gradlew --stop
cd ..
npm start --reset-cache
cd android
.\gradlew assembleRelease
```

### Error: Out of memory
Edit `android/gradle.properties`, tambahkan:
```properties
org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=512m
```

### APK size terlalu besar
Enable ProGuard di `android/app/build.gradle`:
```gradle
def enableProguardInReleaseBuilds = true
```

## 📊 Check APK Info

### Check APK Size:
```bash
# Di Windows PowerShell
Get-Item android\app\build\outputs\apk\release\app-release.apk | Select-Object Length
```

Expected size: ~25-35 MB untuk release, ~40-50 MB untuk debug

### Check APK Content:
```bash
cd android
.\gradlew app:dependencies
```

## 🚀 Upload ke Google Play Store

### Prasyarat:
1. Google Play Developer Account ($25 one-time fee)
2. Signed AAB file
3. App screenshots (minimal 2)
4. App description
5. Privacy policy (kalau butuh)

### Steps:
1. Login ke [Google Play Console](https://play.google.com/console)
2. Create new app
3. Fill in app details
4. Upload AAB file
5. Add screenshots
6. Fill Store Listing
7. Submit for review

**Review time:** Usually 1-3 hari

## 🔍 Testing Release Build

Sebelum distribusi, test dulu:

1. **Install di berbagai device:**
   - Old device (Android 6-7)
   - Mid device (Android 8-10)
   - New device (Android 11+)

2. **Test semua fitur:**
   - Input validation
   - Navigation
   - Copy hashtag
   - Semua niche categories
   - Back button behavior

3. **Check performance:**
   - Launch time
   - Smooth scrolling
   - No crashes
   - Memory usage

4. **Test edge cases:**
   - Very long username
   - Rapid clicking
   - Rotation screen
   - Background/foreground switching

## 📋 Pre-Release Checklist

Sebelum release, pastikan:

- [ ] Version number updated
- [ ] Tested di real device
- [ ] No debug logs tersisa
- [ ] Keystore backed up (kalau signed)
- [ ] APK signed dengan benar
- [ ] Screenshots prepared (kalau untuk Store)
- [ ] Description & changelog ready
- [ ] Privacy policy ready (kalau butuh)
- [ ] README updated
- [ ] CHANGELOG updated

## 📝 Release Notes Template

```markdown
Version 1.0.0 - 2024-10-26

✨ New Features:
- 12 niche categories
- Smart hashtag generator
- Upload schedule recommendations
- Content strategy tips

🐛 Bug Fixes:
- None (initial release)

🎨 Improvements:
- Dark mode optimized UI
- Smooth navigation
- Fast performance
```

## 🎯 Distribution Options

### 1. Direct APK Distribution
✅ Mudah & cepat  
✅ No review process  
❌ Harus install dari "Unknown Sources"  
❌ No automatic updates  

**Best for:** Beta testing, personal use, small groups

### 2. Google Play Store
✅ Professional  
✅ Automatic updates  
✅ User reviews & ratings  
✅ Play Store visibility  
❌ $25 developer fee  
❌ Review process (1-3 hari)  
❌ Must follow Play Store policies  

**Best for:** Public release, monetization, wide distribution

### 3. Alternative App Stores
- **APKPure**
- **APKMirror**
- **F-Droid** (for open source)

## 💰 Monetization (Optional)

Kalau mau monetize di masa depan:

1. **Ads Integration:**
   - Google AdMob
   - Facebook Audience Network

2. **In-App Purchase:**
   - Premium features
   - Additional niches
   - Remove ads

3. **Freemium Model:**
   - Basic free
   - Pro version paid

4. **Affiliate Links:**
   - Tools recommendations
   - Course links

## 🔐 Security Best Practices

1. **Never commit:**
   - Keystore files (*.keystore)
   - Passwords in gradle.properties
   - API keys (kalau ada)

2. **Use .gitignore:**
```
*.keystore
gradle.properties (kalau ada password)
local.properties
```

3. **Use environment variables** untuk production builds

4. **Enable ProGuard** untuk obfuscate code

5. **Regular security updates** untuk dependencies

---

## 📞 Support

Kalau ada masalah saat build:
1. Check error message carefully
2. Google the error
3. Check Stack Overflow
4. Check React Native docs

**Happy Building! 🎉**

Your app is ready to reach millions of TikTok creators! 🚀
