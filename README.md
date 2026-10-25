# syrianai.org

موقع مجتمع الذكاء الاصطناعي السوري (Syrian AI Community). موقع ثابت ثنائي اللغة مبني بـ Astro ويُنشر على GitHub Pages عبر GitHub Actions.

## التشغيل محليًا

```bash
npm install
npm run dev
```

ثم افتح `http://localhost:4321/` للعربية و`http://localhost:4321/en/` للإنجليزية.

## البناء

```bash
npm run build
npm run preview
```

## البنية

- `src/i18n/ar.ts` و`src/i18n/en.ts`: كل نصوص الموقع بلغتيه (المحتوى الحالي قبل اعتماد مجموعات المحتوى).
- `src/components/pages/`: مكوّنات الصفحات (الرئيسية، من نحن، المعسكر) تُستخدم من `src/pages/` و`src/pages/en/`.
- `src/layouts/Base.astro`: الترويسة والتذييل ووسوم SEO وروابط اللغات.
- `src/styles/global.css`: هوية الموقع (الألوان والخطوط والمكوّنات).
- `public/`: CNAME والأيقونة وصورة المشاركة.
- `docs/PLAN.md`: خطة التطوير الكاملة.

## النشر

كل دفعة إلى الفرع `main` تبني الموقع وتنشره تلقائيًا (`.github/workflows/deploy.yml`). النطاق المخصص `syrianai.org` مضبوط في إعدادات GitHub Pages وفي `public/CNAME`.

لبناء نسخة معاينة تُستضاف تحت مسار فرعي:

```bash
SITE=https://ibrahimalobaid.github.io PUBLIC_BASE=/saic-preview/ npm run build
```
