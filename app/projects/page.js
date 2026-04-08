const PROJECTS = [
  {
    title: "منصة سند",
    desc: "منصة تربط العملاء بمقدمي الخدمات بواجهة عالية الثقة.",
    tag: "Platform",
  },
  {
    title: "Video Downloader",
    desc: "نظام تحميل يدعم تحليل الروابط واختيار الجودة.",
    tag: "Automation",
  },
  {
    title: "Arabic Tooling",
    desc: "تعريب وتحسين تجربة هواتف وأنظمة مختلفة.",
    tag: "Localization",
  },
  {
    title: "Business Website",
    desc: "هوية شخصية فاخرة تشبه مواقع الشركات العالمية.",
    tag: "Brand",
  },
  {
    title: "Telegram Suite",
    desc: "بوتات تيليجرام لخدمات التحميل والتواصل والأتمتة.",
    tag: "Bots",
  },
  {
    title: "Operations Dashboard",
    desc: "لوحة لإدارة البيانات، الرسائل، والمهام التشغيلية.",
    tag: "Dashboard",
  },
];

export default function ProjectsPage() {
  return (
    <section className="px-6 py-28 md:py-40 bg-white/[0.02]">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 text-xs uppercase tracking-[0.45em] text-green-400/80">المشاريع</div>
        <h1 className="text-4xl font-semibold md:text-6xl">محفظة أعمال دقيقة وواضحة</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          كل بطاقة هنا مصممة لتبدو كمنتج حقيقي، لا مجرد اسم عابر.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((p) => (
          <div key={p.title} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_28%)] opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-gray-400">
                <span>{p.tag}</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-green-300">Premium</span>
              </div>
              <h2 className="text-2xl font-semibold">{p.title}</h2>
              <p className="mt-4 leading-8 text-gray-400">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
