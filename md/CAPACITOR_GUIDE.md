# 📱 Capacitor - מדריך Native Apps (iOS + Android)

## ⏰ זמן משוער: 2-3 שעות

---

## 📋 דרישות מקדימות

### לכולם:
- ✅ Node.js 18+ מותקן
- ✅ הפרויקט עובד ב-Vercel/Local
- ✅ Git & GitHub

### ל-iOS (צריך Mac!):
- ✅ **Xcode 14+** (חינם מ-App Store)
- ✅ **Apple Developer Account** ($99/שנה)
- ✅ **macOS Ventura** או חדש יותר

### ל-Android:
- ✅ **Android Studio** (חינם)
- ✅ **Java JDK 17+**
- ✅ **Google Play Developer Account** ($25 חד-פעמי)

---

## 🚀 שלב 1: התקן Capacitor

```bash
# בתיקיית הפרויקט:
cd wedding-crm-app

# התקן Capacitor
npm install @capacitor/core @capacitor/cli

# אתחל (רק בפעם הראשונה)
npx cap init "Wedding CRM" "com.weddingstudio.crm" --web-dir=dist
```

**💡 זה יוצר:** `capacitor.config.ts`

---

## 📱 שלב 2: הוסף פלטפורמות

### iOS (רק ב-Mac):

```bash
# התקן iOS plugin
npm install @capacitor/ios

# הוסף פלטפורמת iOS
npx cap add ios
```

זה יוצר תיקיה: `ios/`

### Android:

```bash
# התקן Android plugin
npm install @capacitor/android

# הוסף פלטפורמת Android
npx cap add android
```

זה יוצר תיקיה: `android/`

---

## 🔨 שלב 3: בנה את האפליקציה

```bash
# בנה את ה-Web app
npm run build

# העתק את הקבצים ל-Native projects
npx cap sync
```

**❗ חשוב:** תריץ `npx cap sync` אחרי כל שינוי בקוד!

---

## 🍎 שלב 4: iOS Setup

### 1. פתח ב-Xcode:

```bash
npx cap open ios
```

### 2. הגדרות חשובות:

**Signing & Capabilities:**
1. בחר **Team** (Apple Developer Account שלך)
2. שנה **Bundle Identifier** ל-unique:
   ```
   com.weddingstudio.crm
   או
   com.[your-name].weddingcrm
   ```
3. בחר **Automatically manage signing**

**Info.plist הרשאות:**
```xml
<key>NSCameraUsageDescription</key>
<string>צריך גישה למצלמה להעלאת תמונות</string>

<key>NSPhotoLibraryUsageDescription</key>
<string>צריך גישה לתמונות</string>
```

### 3. בדוק ב-Simulator:

1. בחר iPhone simulator (למעלה)
2. לחץ **Play** (▶️)
3. האפליקציה תיפתח!

### 4. Deploy למכשיר אמיתי:

1. חבר iPhone עם USB
2. **Trust** את המחשב
3. בחר את המכשיר ב-Xcode
4. לחץ **Play**

### 5. העלאה ל-App Store:

```
1. Product → Archive
2. Upload to App Store Connect
3. לך ל-appstoreconnect.apple.com
4. צור App חדש
5. העלה screenshots
6. שלח לבדיקה (Review)
7. לאחר אישור - פרסם!
```

**⏱️ זמן בדיקה:** 1-3 ימים

---

## 🤖 שלב 5: Android Setup

### 1. פתח ב-Android Studio:

```bash
npx cap open android
```

### 2. הגדרות חשובות:

**build.gradle (app):**
```gradle
android {
    namespace "com.weddingstudio.crm"
    compileSdk 34
    
    defaultConfig {
        applicationId "com.weddingstudio.crm"
        minSdk 22
        targetSdk 34
        versionCode 1
        versionName "1.0.0"
    }
}
```

**AndroidManifest.xml הרשאות:**
```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
```

### 3. בדוק ב-Emulator:

1. **Tools** → **Device Manager**
2. צור **Virtual Device** (Pixel 6)
3. לחץ **Run** (▶️)

### 4. Deploy למכשיר אמיתי:

1. **הפעל USB Debugging** במכשיר Android:
   - הגדרות → About Phone → לחץ 7 פעמים על Build Number
   - הגדרות → Developer Options → USB Debugging = ON
2. חבר עם USB
3. בחר את המכשיר ב-Android Studio
4. **Run**

### 5. צור Release APK:

```bash
# בתוך android/
./gradlew assembleRelease
```

**APK נמצא ב:**
```
android/app/build/outputs/apk/release/app-release.apk
```

### 6. צור Signed AAB (לGoogle Play):

1. **Build** → **Generate Signed Bundle/APK**
2. בחר **Android App Bundle**
3. צור **Key Store** חדש:
   ```
   Key store path: ~/wedding-crm-keystore.jks
   Password: [סיסמה חזקה]
   Alias: wedding-crm-key
   ```
4. **⚠️ שמור את הסיסמה במקום בטוח!**
5. בנה **Release**

**AAB נמצא ב:**
```
android/app/build/outputs/bundle/release/app-release.aab
```

### 7. העלאה ל-Google Play:

```
1. לך ל-play.google.com/console
2. צור App חדש
3. העלה את ה-AAB
4. מלא Store Listing (תמונות, תיאור)
5. בחר מחיר (חינם/בתשלום)
6. שלח לבדיקה
7. פרסם!
```

**⏱️ זמן בדיקה:** כמה שעות עד יום

---

## 🔌 שלב 6: Capacitor Plugins (אופציונלי)

### Camera:
```bash
npm install @capacitor/camera
```

### Push Notifications:
```bash
npm install @capacitor/push-notifications
```

### Geolocation:
```bash
npm install @capacitor/geolocation
```

**כל פעם שמוסיפים plugin:**
```bash
npx cap sync
```

---

## 🔄 Workflow יומיומי

```bash
# 1. ערוך קוד React
# 2. בנה:
npm run build

# 3. סנכרן:
npx cap sync

# 4. פתח ב-IDE:
npx cap open ios
# או
npx cap open android

# 5. Run!
```

---

## 🐛 Troubleshooting

### iOS

**שגיאה: "No signing certificate"**
```
פתרון: הוסף Apple Developer Account ב-Xcode
→ Preferences → Accounts → + → Apple ID
```

**שגיאה: "Module not found"**
```bash
# ב-ios/:
pod install
```

### Android

**שגיאה: "SDK not found"**
```
פתרון: Android Studio → SDK Manager
→ התקן Android SDK 34
```

**שגיאה: "Gradle build failed"**
```bash
# ב-android/:
./gradlew clean
```

---

## 📊 גדלי אפליקציה משוערים:

- **iOS:** ~25-30 MB
- **Android:** ~15-20 MB

---

## 💡 טיפים חשובים

### 1. Icons & Splash Screens:

```bash
npm install @capacitor/assets
```

שים תמונות ב:
```
resources/
├── icon.png (1024x1024)
└── splash.png (2732x2732)
```

ואז:
```bash
npx capacitor-assets generate
```

### 2. Live Reload (פיתוח מהיר):

```bash
# הרץ dev server:
npm run dev

# עדכן capacitor.config.ts:
server: {
  url: 'http://192.168.1.100:3000',
  cleartext: true
}

# סנכרן:
npx cap sync
```

עכשיו שינויים יופיעו ישר באפליקציה!

### 3. Environment Variables:

צור קובץ `.env.production`:
```
VITE_API_URL=https://your-api.com
VITE_SUPABASE_URL=...
```

---

## 🎯 סיכום:

| פלטפורמה | זמן | עלות | קושי |
|----------|-----|------|------|
| iOS | 2-3 שעות | $99/שנה | בינוני |
| Android | 1-2 שעות | $25 חד-פעמי | קל |

---

## 🆘 עזרה

- **Capacitor Docs:** https://capacitorjs.com/docs
- **iOS Signing:** https://developer.apple.com
- **Android Signing:** https://developer.android.com

---

**🎉 בהצלחה! בקרוב תהיה לך אפליקציה בחנויות!**
