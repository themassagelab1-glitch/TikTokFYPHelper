# 🤝 Contributing to TikTok FYP Helper

Terima kasih atas interest kamu untuk contribute! 🎉

## 🌟 Cara Contribute

Ada banyak cara untuk contribute ke project ini:

### 1. 🐛 Report Bugs
Kalau menemukan bug:
- Buka issue baru di GitHub
- Jelaskan step untuk reproduce
- Include screenshots kalau perlu
- Sebutkan device & Android version

### 2. 💡 Suggest Features
Punya ide fitur baru?
- Buka issue dengan label "feature request"
- Jelaskan use case & benefit
- Boleh include mockup/wireframe

### 3. 📝 Improve Documentation
- Fix typos
- Tambah penjelasan yang kurang clear
- Translate ke bahasa lain
- Tambah examples

### 4. 💻 Code Contributions
- Fork repository
- Create feature branch
- Commit changes
- Create Pull Request

## 🚀 Development Setup

1. Fork repo ini
2. Clone fork kamu:
```bash
git clone https://github.com/YOUR_USERNAME/TikTokFYPHelper.git
cd TikTokFYPHelper
```

3. Install dependencies:
```bash
npm install
```

4. Create branch untuk feature/fix:
```bash
git checkout -b feature/nama-feature
```

5. Make changes & test

6. Commit dengan descriptive message:
```bash
git commit -m "Add: fitur xyz"
```

7. Push ke fork kamu:
```bash
git push origin feature/nama-feature
```

8. Create Pull Request di GitHub

## 📋 Code Guidelines

### TypeScript
- Gunakan TypeScript untuk semua file baru
- Define types & interfaces
- Avoid `any` type

### Naming Conventions
- Components: PascalCase (`HomeScreen.tsx`)
- Functions: camelCase (`generateStrategy`)
- Constants: UPPER_SNAKE_CASE (`MAX_HASHTAGS`)
- Files: kebab-case atau PascalCase

### Code Style
- Use Prettier formatting (sudah configured)
- 2 spaces indentation
- Single quotes untuk strings
- Semicolons optional (consistency)

### Comments
- Comment complex logic
- JSDoc untuk functions
- TODO comments untuk future improvements

## 🎯 Areas yang Butuh Help

### High Priority:
- [ ] **Hashtag Database Update** - Update trending hashtags
- [ ] **More Niches** - Add more content categories
- [ ] **Upload Time Research** - Verify optimal times dengan data terbaru
- [ ] **Testing** - Write unit & integration tests

### Medium Priority:
- [ ] **UI/UX Improvements** - Smoother animations, better transitions
- [ ] **Performance Optimization** - Reduce bundle size
- [ ] **Accessibility** - Screen reader support, color contrast
- [ ] **Internationalization** - Multi-language support

### Nice to Have:
- [ ] **Dark/Light Theme Toggle**
- [ ] **Custom Icons/Illustrations**
- [ ] **Onboarding Tutorial**
- [ ] **Analytics Integration**

## 🏗️ Project Structure

```
TikTokFYPHelper/
├── src/
│   ├── data/
│   │   └── hashtagDatabase.ts    # Database hashtag & tips
│   ├── screens/
│   │   ├── HomeScreen.tsx        # Input screen
│   │   └── ResultScreen.tsx      # Result screen
│   ├── utils/
│   │   └── strategyGenerator.ts  # Business logic
│   └── types/                    # TypeScript types (future)
├── android/                      # Android native code
├── App.tsx                       # Root component
└── [config files]
```

## ✅ Pull Request Checklist

Sebelum submit PR, pastikan:

- [ ] Code berjalan tanpa error
- [ ] Tested di Android (emulator atau device)
- [ ] Follow code style guidelines
- [ ] Update documentation kalau perlu
- [ ] No console.log yang tertinggal
- [ ] Descriptive commit messages
- [ ] PR description menjelaskan changes

## 🎨 Design Contributions

Kalau mau contribute design:
- Follow TikTok branding (cyan #00f2ea, pink #fe2c55)
- Dark mode first
- Mobile-first approach
- Include Figma/Sketch files kalau ada

## 📚 Documentation Contributions

Update documentation kalau:
- Add new feature
- Change existing behavior
- Find unclear explanations
- Add examples or tutorials

## 🐛 Bug Report Template

```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Device Info:**
- Device: [e.g. Samsung Galaxy S21]
- Android Version: [e.g. Android 13]
- App Version: [e.g. 1.0.0]

**Additional context**
Any other relevant info
```

## 💡 Feature Request Template

```markdown
**Feature Description**
Clear description of the feature

**Use Case**
Why this feature would be useful

**Proposed Solution**
How you think it should work

**Alternatives Considered**
Other ways to achieve the same goal

**Additional context**
Mockups, examples, etc.
```

## 🎉 Recognition

Contributors akan di-mention di:
- README.md (Contributors section)
- CHANGELOG.md
- GitHub contributors page

## 📫 Questions?

Kalau ada pertanyaan:
- Open a discussion di GitHub
- Create an issue dengan label "question"

---

**Thank you for making TikTok FYP Helper better! 🚀**
