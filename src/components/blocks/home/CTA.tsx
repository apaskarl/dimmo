import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="cta" className="relative py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative w-full overflow-hidden rounded-3xl bg-[#FEE4EF] p-10 md:p-20">
          <div className="relative z-20 mx-auto flex w-full max-w-2xl flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Next Step</h2>
              <div className="text-base text-slate-900/60 md:text-lg">You don't need another vendor pitch. You need a partner who knows the landscape.</div>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-3xl bg-white p-8 md:p-10 text-center shadow-xl shadow-slate-400/5">
              <img src="/images/avatars.png" className="h-11" draggable="false" />
              <h3 className="text-lg font-bold tracking-tight text-slate-900 md:text-xl">Book your free 1-hour Tech Stack Audit today</h3>
              <div className="text-base text-slate-600 md:text-lg">We'll show you where your stack falls short, what tools to evaluate, and introduce you to the best fits.</div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2">
              <Button href="#" label="Book Your Free Tech Stack Audit" arrow primary />
              <Button href="#" label="View GTM Marketplace" />
            </div>
          </div>

          <img src="/images/hero-bg.png" className="absolute inset-0 z-10 h-full w-full object-cover" draggable="false" />
        </div>
      </div>
    </section>
  );
}
