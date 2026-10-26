═══════════════════════════════════════════════════════
  TikTok FYP Helper - Quick Build Guide
═══════════════════════════════════════════════════════

Halo! Tolong bantu build aplikasi Android ini ya 🙏

⏱️ WAKTU: 30-60 menit (tergantung laptop sudah ada tools atau belum)
💾 STORAGE: Butuh 15GB kosong
🌐 INTERNET: Butuh koneksi untuk download dependencies

═══════════════════════════════════════════════════════
📋 QUICK START (Jika sudah ada Node.js, Java 17, Android Studio)
═══════════════════════════════════════════════════════

1. Copy folder ini ke laptop
2. Buka Terminal/Command Prompt
3. Jalankan:

   cd TikTokFYPHelper
   npm install
   cd android
   gradlew assembleDebug

   (Mac/Linux: ./gradlew assembleDebug)

4. APK ada di:
   android/app/build/outputs/apk/debug/app-debug.apk

5. Copy APK ke USB flashdisk

═══════════════════════════════════════════════════════
❌ JIKA BELUM ADA TOOLS:
═══════════════════════════════════════════════════════

Baca file: TRANSFER_DAN_BUILD.md (panduan lengkap)
Atau baca file: CHECKLIST_UNTUK_TEMAN.md (step-by-step)

Download tools:
- Node.js: https://nodejs.org/
- Java JDK 17: https://adoptium.net/temurin/releases/
- Android Studio: https://developer.android.com/studio

═══════════════════════════════════════════════════════
📱 TENTANG APLIKASI:
═══════════════════════════════════════════════════════

Nama: TikTok FYP Helper
Fungsi: Bantu content creator TikTok dapat strategi FYP
Fitur:
  ✅ 12 kategori niche (Comedy, Dance, Music, dll)
  ✅ 144+ hashtags siap copy-paste
  ✅ 72+ tips konten
  ✅ Jadwal upload optimal
  ✅ Dark mode UI
  ✅ 100% offline & gratis

Target: Android 5.0+
Ukuran APK: ~30-50 MB

═══════════════════════════════════════════════════════
🆘 TROUBLESHOOTING:
═══════════════════════════════════════════════════════

Error "SDK location not found":
→ echo "sdk.dir=C:\Users\[USERNAME]\AppData\Local\Android\Sdk" > android\local.properties

Error "JAVA_HOME not set":
→ set JAVA_HOME=C:\Program Files\Java\jdk-17

Build gagal:
→ cd android
→ gradlew clean
→ gradlew assembleDebug

═══════════════════════════════════════════════════════
📞 BUTUH BANTUAN?
═══════════════════════════════════════════════════════

Cek file dokumentasi lengkap:
- TRANSFER_DAN_BUILD.md
- CHECKLIST_UNTUK_TEMAN.md
- BUILD_ON_ANOTHER_MACHINE.md

═══════════════════════════════════════════════════════

Terima kasih banyak sudah bantu build! 🙏😊

═══════════════════════════════════════════════════════
