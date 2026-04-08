export default function AboutPage() {
  const timeline = [
    ["2024", "بداية البناء الرقمي", "التركيز على الهوية الشخصية وتأسيس أسلوب عمل واضح."],
    ["2025", "تطوير الأدوات والمنصات", "بناء مشاريع صغيرة لكنها متراكمة لتشكيل قاعدة قوية."],
    ["2026", "الانتقال إلى هوية شركة", "تحويل العمل إلى منظومة ذات شكل احترافي قابل للتوسع."],
    ["2027", "المنتج القابل للربح", "إطلاق منتج أساسي بواجهة مبهرة وتجربة مستخدم عالية الجودة."],
  ];

  return (
    <section className="px-6 py-28 md:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 text-xs uppercase tracking-[0.45em] text-green-400/80">نبذة</div>
        <h1 className="text-4xl font-semibold md:text-6xl">قصة بناء طويلة</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          هذا القسم يشرح الرؤية، الدوافع، والاتجاه العام للعلامة الشخصية.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold">من أنا</h2>
          <p className="mt-5 leading-8 text-gray-400">
            مؤسس مشاريع تقنية يركز على بناء أدوات ومنصات توفر قيمة حقيقية وتخدم الناس بوضوح وسرعة.
          </p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold">المبدأ</h2>
          <p className="mt-5 leading-8 text-gray-400">
            البساطة لا تعني الفقر البصري. يمكن للواجهة الهادئة أن تبدو أغلى من واجهات مليئة بالزينة.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-4xl space-y-6">
        {timeline.map(([year, title, desc]) => (
          <div key={year} className="relative rounded-3xl border border-white/10 bg-black/40 p-6">
            <div className="text-sm tracking-[0.35em] text-green-300">{year}</div>
            <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
            <p className="mt-4 leading-8 text-gray-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
