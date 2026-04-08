"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="px-6 py-28 md:py-40 bg-white/[0.02]">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 text-xs uppercase tracking-[0.45em] text-green-400/80">
          تواصل
        </div>
        <h1 className="text-4xl font-semibold md:text-6xl">
          نموذج تواصل حقيقي
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          الرسائل تُخزن في قاعدة البيانات وتظهر في لوحة الإدارة.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold">بيانات التواصل</h2>
          <div className="mt-6 space-y-4 text-gray-300">
            <p>واتساب: 967778210288+</p>
            <p>إيميل: albazlir@gmail.com</p>
            <p>الموقع: اليمن</p>
          </div>
          <div className="mt-8 flex gap-4">
            <a
              href="https://wa.me/967778210288"
              className="rounded-full bg-green-500 px-6 py-3 font-semibold text-black"
            >
              WhatsApp
            </a>
            <a
              href="mailto:albazlir@gmail.com"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold"
            >
              Email
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-white/10 bg-black/40 p-8 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold">أرسل رسالة</h2>
          <div className="mt-6 space-y-4">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              placeholder="الاسم"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none placeholder:text-gray-500"
            />
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none placeholder:text-gray-500"
            />
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows="6"
              placeholder="الرسالة"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none placeholder:text-gray-500"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:scale-105 disabled:opacity-60"
          >
            {status === "sending" ? "جاري الإرسال..." : "إرسال"}
          </button>

          {status === "sent" && (
            <p className="mt-4 text-green-400">تم الإرسال بنجاح.</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-400">تعذر الإرسال. تحقق من الخادم.</p>
          )}
        </form>
      </div>
    </section>
  );
}
