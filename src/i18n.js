import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'; // اختياري لتحميل الترجمات بشكل ديناميكي

import translationEN from "./locales/en/translation.json";
import translationAR from "./locales/ar/translation.json";

// تهيئة i18n مع خيارات متقدمة
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // اكتشاف اللغة تلقائياً من المتصفح
  .use(Backend) // اختياري: لتحميل الترجمات من الخادم عند الحاجة
  .init({
    // موارد الترجمات المحملة مسبقاً
    resources: {
      en: { translation: translationEN },
      ar: { translation: translationAR },
    },
    
    // اللغة الافتراضية
    lng: "en",
    
    // اللغة الاحتياطية عند عدم توفر الترجمة
    fallbackLng: "en",
    
    // تفعيل وضع التصحيح في التطوير
    debug: process.env.NODE_ENV === 'development',
    
    // إعدادات الاكتشاف التلقائي للغة
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie', 'localStorage'],
    },
    
    // إعدادات الاستيفاء (التعامل مع المتغيرات في النصوص المترجمة)
    interpolation: { 
      escapeValue: false, // ليس ضرورياً لأن React تقوم بالهروب تلقائياً
    },
    
    // إعدادات إضافية
    react: {
      useSuspense: false, // يمكن تفعيله إذا كنت تستخدم React Suspense
      bindI18n: 'languageChanged', // الأحداث التي تسبب إعادة التحميل
      bindI18nStore: '', // الأحداث التي تسبب تحديث المتجر
    },
    
    // إعدادات التحميل الخلفي (إذا استخدمت Backend)
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // مسار تحميل ملفات الترجمات
    },
    
    // مساحة الأسماء الافتراضية
    ns: ['translation'],
    defaultNS: 'translation',
    
    // معالجة المفاتيح المفقودة
    saveMissing: true, // إرسال المفاتيح المفقودة إلى الخادم
    missingKeyHandler: (lng, ns, key, fallbackValue) => {
      console.warn(`[i18next] Key '${key}' not found in '${lng}' for namespace '${ns}'`);
    }
  });

export default i18n;