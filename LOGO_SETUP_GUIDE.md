# 🎨 Logo Setup Guide

Panduan untuk setup logo aplikasi TikTok FYP Helper.

## 📁 File Logo

Logo aplikasi sudah tersedia di:
```
TikTokFYPHelper/assets/logo.svg
```

## 🎨 Design Logo

**Konsep:**
- Background: Dark gradient (black → dark gray)
- Main element: Circular badge dengan TikTok cyan gradient
- Center: Phone screen dengan play button (TikTok style)
- Icons: Hashtag (#), arrow up (FYP), rocket (boost), music note
- Text: "FYP HELPER" dengan TikTok branding colors

**Colors:**
- Cyan: #00f2ea (TikTok blue)
- Pink: #fe2c55 (TikTok pink)
- Background: #000000 - #1a1a1a (gradient)
- White: #ffffff (text & accents)

## 📱 Generate Android App Icons

Android membutuhkan icon dalam berbagai ukuran untuk berbagai device.

### Ukuran yang Dibutuhkan:

| Folder | Ukuran | Density |
|--------|--------|---------|
| mipmap-mdpi | 48x48 | 1x |
| mipmap-hdpi | 72x72 | 1.5x |
| mipmap-xhdpi | 96x96 | 2x |
| mipmap-xxhdpi | 144x144 | 3x |
| mipmap-xxxhdpi | 192x192 | 4x |

### Opsi 1: Menggunakan Online Tool (RECOMMENDED)

#### 1. Android Asset Studio
1. Buka: https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html
2. Upload `logo.svg`
3. Adjust padding kalau perlu
4. Download ZIP
5. Extract dan copy semua folder `mipmap-*` ke:
   ```
   android/app/src/main/res/
   ```

#### 2. Icon Kitchen
1. Buka: https://icon.kitchen/
2. Upload `logo.svg`
3. Pilih "Android" platform
4. Customize kalau perlu:
   - Background: Transparent atau solid
   - Padding: Adjust untuk fit
   - Shape: Square dengan rounded corners
5. Download ZIP
6. Extract dan copy ke `android/app/src/main/res/`

#### 3. AppIcon.co
1. Buka: https://appicon.co/
2. Upload `logo.svg` (atau convert ke PNG 1024x1024 dulu)
3. Generate icons
4. Download Android package
5. Copy ke project

### Opsi 2: Manual Convert dengan Tools

#### Menggunakan Inkscape (Free):

1. Download Inkscape: https://inkscape.org/
2. Buka `logo.svg` di Inkscape
3. Export ke PNG untuk setiap ukuran:

```
File → Export PNG Image

Ukuran exports:
- 48x48 → android/app/src/main/res/mipmap-mdpi/ic_launcher.png
- 72x72 → android/app/src/main/res/mipmap-hdpi/ic_launcher.png
- 96x96 → android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
- 144x144 → android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
- 192x192 → android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
```

#### Menggunakan ImageMagick (Command Line):

Install ImageMagick, lalu jalankan:

```bash
# Convert SVG to PNG 1024x1024
magick convert -background none logo.svg -resize 1024x1024 logo_1024.png

# Generate all sizes
magick convert logo_1024.png -resize 48x48 mipmap-mdpi/ic_launcher.png
magick convert logo_1024.png -resize 72x72 mipmap-hdpi/ic_launcher.png
magick convert logo_1024.png -resize 96x96 mipmap-xhdpi/ic_launcher.png
magick convert logo_1024.png -resize 144x144 mipmap-xxhdpi/ic_launcher.png
magick convert logo_1024.png -resize 192x192 mipmap-xxxhdpi/ic_launcher.png
```

### Opsi 3: Menggunakan Node.js Script

Buat script `generate-icons.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');

const sizes = [
  { folder: 'mipmap-mdpi', size: 48 },
  { folder: 'mipmap-hdpi', size: 72 },
  { folder: 'mipmap-xhdpi', size: 96 },
  { folder: 'mipmap-xxhdpi', size: 144 },
  { folder: 'mipmap-xxxhdpi', size: 192 },
];

async function generateIcons() {
  for (const { folder, size } of sizes) {
    const dir = `android/app/src/main/res/${folder}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    await sharp('assets/logo.svg')
      .resize(size, size)
      .png()
      .toFile(`${dir}/ic_launcher.png`);
    
    console.log(`✓ Generated ${folder}/ic_launcher.png (${size}x${size})`);
  }
}

generateIcons();
```

Install dependency:
```bash
npm install sharp
```

Jalankan:
```bash
node generate-icons.js
```

## 🔄 Update Icon di Aplikasi

Setelah icon PNG generated dan ditempatkan di folder yang benar:

1. **Clean project:**
```bash
cd android
.\gradlew clean
```

2. **Rebuild:**
```bash
cd ..
npm run android
```

Icon baru akan muncul di launcher!

## 🎯 Round Icon (Adaptive Icon)

Untuk Android 8.0+ (API 26+), buat adaptive icon:

### File yang Perlu Dibuat:

1. **ic_launcher_round.png** - Version dengan rounded shape
2. **ic_launcher_foreground.xml** - Foreground layer
3. **ic_launcher_background.xml** - Background layer

### Cara Mudah dengan Android Asset Studio:

1. Buka: https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html
2. Upload logo
3. Centang "Generate Adaptive Icons"
4. Download dan extract
5. Copy semua file ke `android/app/src/main/res/`

## 🎨 Splash Screen (Optional)

Kalau mau tambahin splash screen dengan logo:

### React Native Splash Screen:

```bash
npm install react-native-splash-screen
```

Setup splash screen dengan logo di tengah dan background dark.

Detail: https://github.com/crazycodeboy/react-native-splash-screen

## 📋 Checklist

Setelah setup logo, pastikan:

- [ ] Logo SVG tersimpan di `assets/logo.svg`
- [ ] Icon PNG generated untuk semua densities
- [ ] Files ada di `android/app/src/main/res/mipmap-*/`
- [ ] Nama file: `ic_launcher.png` dan `ic_launcher_round.png`
- [ ] Clean & rebuild project
- [ ] Test di emulator/device - icon muncul dengan benar
- [ ] Test di berbagai Android versions
- [ ] Icon terlihat jelas di light & dark launcher backgrounds

## 🐛 Troubleshooting

### Icon tidak berubah setelah rebuild:

**Solusi 1:** Uninstall app dulu
```bash
adb uninstall com.tiktokfyphelper
npm run android
```

**Solusi 2:** Clear cache
```bash
cd android
.\gradlew clean
.\gradlew --stop
cd ..
npm start --reset-cache
npm run android
```

### Icon terlihat terlalu besar/kecil:

- Adjust padding di Android Asset Studio
- Atau manually edit SVG, resize main elements
- Atau add padding di PNG dengan image editor

### Icon terlihat blur:

- Pastikan export dalam resolusi yang benar
- Jangan scale up dari low resolution
- Generate dari SVG (vector) untuk best quality

## 🎨 Customization

Kalau mau edit logo:

1. **Edit SVG:**
   - Buka `assets/logo.svg` di text editor atau vector editor
   - Adjust colors, shapes, text
   - Save

2. **Re-generate icons:**
   - Ikuti salah satu opsi di atas
   - Replace icon files
   - Rebuild app

## 📸 Preview Logo

Logo saat ini memiliki:
- ✅ Dark background (match dengan app theme)
- ✅ TikTok colors (cyan & pink)
- ✅ Modern & clean design
- ✅ Recognizable dari jauh
- ✅ Professional look
- ✅ Memorable branding

## 🚀 Next Steps

1. Generate icons menggunakan salah satu opsi di atas
2. Place icons di folder yang benar
3. Rebuild aplikasi
4. Test icon appearance
5. (Optional) Setup splash screen
6. (Optional) Create app banner untuk Play Store

---

## 💡 Tips

- **Keep it simple:** Icon harus jelas meskipun ukuran kecil
- **Test on device:** Preview di real launcher, bukan hanya emulator
- **Dark & light backgrounds:** Test di berbagai launcher themes
- **Consistent branding:** Use same colors dengan app UI

---

**Logo sudah siap! Tinggal generate dan apply! 🎨✨**
