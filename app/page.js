"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="mb-4 text-xs uppercase tracking-[0.45em] text-green-400/80">
        {eyebrow}
      </div>
      <h2 className="text-4xl font-semibold md:text-6xl">{title}</h2>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
        {desc}
      </p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="glass rounded-3xl p-6 shadow-glow">
      <div className="text-4xl font-semibold md:text-5xl">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.35em] text-gray-400">{label}</div>
    </div>
  );
}

function ProjectCard({ title, desc, tag }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_28%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">
        <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-gray-400">
          <span>{tag}</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-green-300">
            Premium
          </span>
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-4 grow leading-8 text-gray-400">{desc}</p>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-green-400/80 via-white/10 to-transparent" />
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 220]);
  const heroOpacity = useTransform(scrollY, [0, 420], [1, 0]);

  const projects = [
    {
      title: "منصة سند",
      desc: "منصة يمنية لربط العملاء بالمهن والخدمات بواجهة موثوقة وسريعة.",
      tag: "Platform",
    },
    {
      title: "Video Downloader",
      desc: "أداة تحميل احترافية للفيديو والصوت مع نظام اختيار الجودات.",
      tag: "Automation",
    },
    {
      title: "Arabic Tooling",
      desc: "أدوات تعريب وتحسين تجربة الهواتف والأنظمة الداعمة للعربية.",
      tag: "Localization",
    },
  ];

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.18),transparent_34%),radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.9))]" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-gray-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_18px_rgba(74,222,128,0.85)]" />
            Premium Personal Brand
          </div>

          <h1 className="text-5xl font-semibold leading-tight md:text-8xl">
            أبني المستقبل
            <span className="block bg-gradient-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent">
              رقميًا وفاخرًا
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-300 md:text-xl">
            موقع شخصي متعدد الصفحات مع تأثيرات سينمائية، نموذج تواصل، لوحة إدارة، وقاعدة بيانات حقيقية.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/projects" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-105">
              استعرض المشاريع
            </Link>
            <Link href="/contact" className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
              تواصل الآن
            </Link>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <Stat value="+6" label="Projects" />
            <Stat value="+3" label="Sectors" />
            <Stat value="∞" label="Ambition" />
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-28 md:py-40">
        <SectionTitle
          eyebrow="نبذة"
          title="هوية شخصية بمستوى شركة"
          desc="هذا التصميم مبني كي يبدو كواجهة شركة حقيقية: نظيف، فخم، متعدد الصفحات، وقابل للتوسع إلى نظام أكبر."
        />
        <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="glass rounded-[2rem] p-8">
            <h3 className="text-2xl font-semibold">الرسالة</h3>
            <p className="mt-5 leading-8 text-gray-400">
              بناء حضور رقمي يفتح أبواب العمل، الشراكات، والمشاريع الكبرى عبر تصميم يرسل الثقة والجدية.
            </p>
          </div>
          <div className="glass rounded-[2rem] p-8">
            <h3 className="text-2xl font-semibold">الأسلوب</h3>
            <p className="mt-5 leading-8 text-gray-400">
              مزيج من التدرجات الداكنة، الحركة السلسة، والفراغات البصرية التي تجعل التجربة فاخرة.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:py-40 bg-white/[0.02]">
        <SectionTitle
          eyebrow="المشاريع"
          title="محفظة أعمال منظمة"
          desc="كل مشروع بطاقة تعريف توضّح القيمة، التخصص، والاتجاه المستقبلي."
        />
        <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((item) => (
            <ProjectCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="px-6 py-28 md:py-40">
        <SectionTitle
          eyebrow="الخطوة القادمة"
          title="الموقع جاهز ليتحول إلى منتج"
          desc="يمكن ربطه بإدارة محتوى، لوحة رسائل، تسجيل مستخدمين، أو بيع خدمات لاحقًا."
        />
        <div className="mx-auto mt-10 flex justify-center gap-4">
          <Link href="/services" className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold transition hover:bg-white/10">
            استعراض الخدمات
          </Link>
          <Link href="/admin" className="rounded-full bg-green-500 px-7 py-3 text-sm font-semibold text-black transition hover:scale-105">
            فتح لوحة الإدارة
          </Link>
        </div>
      </section>
    </>
  );
}
