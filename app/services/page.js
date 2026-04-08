const SERVICES = [
  ["تصميم العلامة الرقمية", "هوية بصرية، صفحة تعريفية، ورسائل تسويقية متناسقة."],
  ["تطوير واجهات احترافية", "واجهات React/Tailwind سريعة وأنيقة ومهيأة للتوسع."],
  ["ربط APIs وقواعد البيانات", "نماذج تواصل، تخزين بيانات، ولوحات إدارة حقيقية."],
  ["أتمتة العمليات", "بوتات، سكربتات، وأدوات تسرّع العمل وتقلل المهام اليدوية."],
  ["التحسين والتوسع", "تحسين الأداء، قابلية القراءة، وتجهيز البنية للنمو."],
  ["الاستشارات التقنية", "قرارات معمارية تربط بين الفكرة والتنفيذ والربحية."],
];

export default function ServicesPage() {
  return (
    <section className="px-6 py-28 md:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 text-xs uppercase tracking-[0.45em] text-green-400/80">الخدمات</div>
        <h1 className="text-4xl font-semibold md:text-6xl">خدمات مبنية لعلامة حقيقية</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          هذه الخدمات تمثل الطريق الطبيعي لتحويل المهارة إلى منتج أو خدمة مدفوعة.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map(([title, desc]) => (
          <div key={title} className="rounded-[1.75rem] border border-white/10 bg-black/40 p-7 backdrop-blur-md">
            <div className="mb-4 text-green-400">✦</div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-8 text-gray-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
