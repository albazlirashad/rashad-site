# Rashad Premium Site

موقع شخصي فاخر متعدد الصفحات مبني بـ Next.js + React + Tailwind + Framer Motion + Prisma + SQLite.

## التشغيل السريع

1. ثبّت Node.js
2. افتح المجلد في الطرفية
3. انسخ `.env.example` إلى `.env`
4. نفّذ:

```bash
npm install
npx prisma migrate dev --name init
npm run dev
```

5. افتح:
- الموقع: `http://localhost:3000`
- لوحة الرسائل: `http://localhost:3000/admin`

## ما الذي يفعله المشروع؟
- واجهة سينمائية مع Cursor مخصص وLoading Screen
- صفحات متعددة: الرئيسية، نبذة، المشاريع، الخدمات، التواصل، الإدارة
- نموذج تواصل يحفظ الرسائل في قاعدة بيانات SQLite
- لوحة إدارة تعرض الرسائل المخزنة

## الملفات المهمة
- `app/page.js` الصفحة الرئيسية
- `app/contact/page.js` نموذج التواصل
- `app/admin/page.js` لوحة الإدارة
- `app/api/contact/route.js` API لحفظ الرسائل
- `prisma/schema.prisma` تعريف قاعدة البيانات

## ملاحظة
هذا مشروع بداية قوي. يمكن لاحقًا ربطه بـ Supabase أو PostgreSQL أو إضافة تسجيل دخول للمشرف.
