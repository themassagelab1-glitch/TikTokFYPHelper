# 🚀 TikTok FYP Helper

<div align="center">
  <h3>🤖 Powered by CreatMate Bot</h3>
  <p><i>Logo: CreatMate Bot - Your AI Content Strategy Assistant</i></p>
  <br/>
</div>

Aplikasi Android untuk membantu content creator TikTok mendapatkan strategi konten, hashtag optimal, dan jadwal upload ideal untuk meningkatkan peluang masuk FYP (For You Page).

> **Note:** Logo menggunakan CreatMate Bot character. Lihat `LOGO_INSTRUCTIONS.md` untuk setup logo.

## ✨ Fitur

- 📱 **Input Username TikTok** - Masukkan username untuk personalisasi
- 🎯 **12 Kategori Niche** - Comedy, Dance, Music, Beauty, Fashion, Food, Education, Motivation, Gaming, Lifestyle, Pets, Travel
- 🏷️ **Generator Hashtag** - Hashtag optimal berdasarkan niche dengan fitur copy-paste
- ⏰ **Jadwal Upload Ideal** - Rekomendasi waktu upload terbaik berdasarkan research
- 📊 **Frekuensi Upload** - Saran berapa kali upload per hari
- 💡 **Strategi Konten** - Tips dan trik khusus untuk setiap niche
- ✨ **Tips FYP Umum** - Best practices untuk masuk FYP

## 🛠️ Teknologi

- **React Native 0.73** - Framework cross-platform
- **React Navigation** - Navigasi antar screen
- **TypeScript** - Type safety
- **100% Offline** - Tidak memerlukan backend atau internet

## 📋 Prasyarat

Sebelum menjalankan aplikasi, pastikan sudah terinstall:

- Node.js (versi 18 atau lebih tinggi)
- npm atau yarn
- JDK 17
- Android Studio dengan Android SDK
- Android Emulator atau device fisik

## 🚀 Cara Install & Menjalankan

### 1. Install Dependencies

```bash
cd TikTokFYPHelper
npm install
# atau
yarn install
```

### 2. Jalankan Metro Bundler

```bash
npm start
# atau
yarn start
```

### 3. Jalankan di Android

Di terminal baru:

```bash
npm run android
# atau
yarn android
```

## 📱 Cara Menggunakan Aplikasi

1. **Buka aplikasi** TikTok FYP Helper
2. **Masukkan username** TikTok kamu (tanpa @)
3. **Pilih niche konten** yang sesuai dengan konten kamu
4. **Tekan tombol** "Generate Strategi FYP"
5. **Lihat hasil**:
   - Hashtag yang bisa langsung di-copy
   - Jadwal upload ideal
   - Strategi konten khusus niche kamu
   - Tips umum untuk FYP

## 📦 Build APK untuk Production

```bash
cd android
./gradlew assembleRelease
```

APK akan tersedia di: `android/app/build/outputs/apk/release/app-release.apk`

## 🎨 Fitur Mendalam

### Hashtag Database
- Primary hashtags (viral & general)
- Secondary hashtags (niche-specific)
- Trending hashtags (update berkala)

### Upload Schedule
Berdasarkan research behavior user TikTok Indonesia:
- Jam peak hours berdasarkan niche
- Optimal frequency per niche
- Penjelasan reasoning di balik rekomendasi

### Content Strategy
Tips spesifik untuk setiap niche:
- Hook yang efektif
- Durasi video ideal
- Teknik editing
- Best practices

## 🔧 Troubleshooting

### Metro Bundler Error
```bash
npm start --reset-cache
```

### Build Error di Android
```bash
cd android
./gradlew clean
cd ..
npm run android
```

### Dependencies Error
```bash
rm -rf node_modules
npm install
```

## 📝 Catatan Penting

- ✅ Aplikasi 100% gratis dan offline
- ✅ Tidak menggunakan TikTok API
- ✅ Tidak menyimpan atau mengirim data user
- ✅ Strategi berdasarkan best practices dan research

## 🎯 Roadmap

- [ ] Add more niche categories
- [ ] Local storage untuk save history
- [ ] Dark/Light mode toggle
- [ ] Export strategi ke PDF
- [ ] Bahasa Inggris

## 📄 License

MIT License - Bebas digunakan untuk personal maupun komersial

## 👨‍💻 Developer

Dibuat dengan ❤️ untuk TikTok Content Creators Indonesia

---

**Happy Creating! 🎬✨**
