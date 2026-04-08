import { prisma } from "../../lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <section className="px-6 py-28 md:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 text-xs uppercase tracking-[0.45em] text-green-400/80">الإدارة</div>
        <h1 className="text-4xl font-semibold md:text-6xl">رسائل الموقع</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          هذه الصفحة تقرأ البيانات مباشرة من قاعدة SQLite عبر Prisma.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl space-y-4">
        {messages.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-gray-400">
            لا توجد رسائل بعد.
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{msg.name}</h2>
                  <p className="text-sm text-gray-400">{msg.email}</p>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(msg.createdAt).toLocaleString("ar")}
                </div>
              </div>
              <p className="mt-4 leading-8 text-gray-300">{msg.message}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
