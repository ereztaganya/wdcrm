# 📱 Wedding CRM - מערכת ניהול סטודיו צילום חתונות

אפליקציה פרימיום ומינימליסטית לניהול סטודיו צילום חתונות, עם פורטלים נפרדים ללקוחות ולמנהלים.

## 🎨 עיצוב

- **UI דמוי אפליקציה** עם רקע לבן נקי
- **פלטת צבעים:** שחור/אפור כהה/אפור בהיר + ירוק זית כאקסנט
- **רדיוס מינימלי:** 4-6px מקסימום
- **RTL Support:** תמיכה מלאה בעברית
- **Responsive:** מותאם למובייל, טאבלט ודסקטופ

## 🚀 התקנה מקומית

```bash
# התקן dependencies
npm install

# הרץ בסביבת פיתוח
npm run dev

# בנה לייצור
npm run build

# תצוגה מקדימה
npm run preview
```

## 📱 בניה ל-Mobile (Capacitor)

```bash
# הוסף Capacitor
npm install @capacitor/core @capacitor/cli
npx cap init

# הוסף פלטפורמות
npx cap add ios
npx cap add android

# בנה ועדכן
npm run build
npx cap sync

# פתח ב-IDE מקורי
npx cap open ios
npx cap open android
```

## 🌐 Deploy ל-Web

### Vercel (מומלץ)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

## 📂 מבנה הפרויקט

```
wedding-crm-app/
├── pages/               # כל דפי האפליקציה
│   ├── Page_Login.tsx
│   ├── Page_ClientDashboard.tsx
│   ├── Page_AdminDashboard.tsx
│   ├── Page_Gallery.tsx
│   ├── Page_Video.tsx
│   ├── Page_Payments.tsx
│   ├── Page_Chat.tsx
│   └── Page_Documents.tsx
├── components/          # קומפוננטים מותאמים אישית
│   ├── Cmp_Header.tsx
│   ├── Cmp_ButtonPrimary.tsx
│   ├── Cmp_Sidebar.tsx
│   └── ui/             # shadcn/ui components
├── styles/
│   └── globals.css     # Tailwind + Custom styles
└── App.tsx             # Router ראשי
```

## 🔐 Authentication

כרגע משתמש ב-Mock Authentication לפיתוח:

**Admin:**
- Email: `admin@studio.com`
- Password: `admin123`

**Client:**
- Email: `client@example.com`
- Password: `client123`

לייצור: חבר ל-Supabase Auth (ראה `supabase_schema.sql`)

## 🗄️ Database

הפרויקט כולל schema מוכן ל-Supabase:
- `supabase_schema.sql` - SQL schema מלא
- `BRAVO_DATA_BINDING_EXAMPLES.md` - דוגמאות חיבור

## 📱 קונבנציות שמות (Bravo/FlutterFlow)

- `Page_*` - דפים
- `Frame_*` - containers
- `Cmp_*` - קומפוננטים
- `btn_*` - כפתורים
- `txt_*` - טקסטים
- `img_*` - תמונות
- `list_*` - רשימות

## 🎯 תכונות

### פורטל לקוחות:
- ✅ התחברות מאובטחת
- ✅ דשבורד אישי
- ✅ בחירת תמונות מגלריה
- ✅ הורדת וידאו
- ✅ ניהול תשלומים
- ✅ צ'אט עם הסטודיו
- ✅ מסמכים וחוזים

### פורטל מנהלים:
- ✅ ניהול לקוחות
- ✅ התראות ומעקב
- ✅ סטטיסטיקות

## 🛠️ טכנולוגיות

- **React 18** + TypeScript
- **Vite** - Build tool
- **React Router** - ניווט
- **Tailwind CSS v4** - עיצוב
- **shadcn/ui** - UI Components
- **Lucide React** - אייקונים
- **Supabase** (אופציונלי) - Backend

## 📄 רישיון

All rights reserved © 2026
