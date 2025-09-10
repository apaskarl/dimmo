import { Icon } from "@iconify/react/dist/iconify.js";

export default function WhyDimmo() {
  return (
    <section id="why-dimmo-is-different" className="relative py-10">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-10 px-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Why Dimmo is Different
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-10 rounded-3xl bg-white p-8 md:p-10 shadow-xl shadow-slate-400/5">
            <div className="border-primary w-max rounded-lg border bg-[#FFF3F8] p-1.5">
              <div className="rounded-md bg-white p-2 shadow shadow-slate-400/5">
                <Icon icon="uil:book-reader" width="16" height="16" className="text-[#FF509A]"/>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-slate-900 md:text-2xl">Breadth of Knowledge </h3>
              <p className="text-sm text-slate-600 md:text-base">With 300+ GTM tools on Dimmo, we know the landscape inside and out.</p>
            </div>
          </div>

          <div className="flex flex-col gap-10 rounded-3xl bg-white p-8 md:p-10 shadow-xl shadow-slate-400/5">
            <div className="border-primary w-max rounded-lg border bg-[#FFF3F8] p-1.5">
              <div className="rounded-md bg-white p-2 shadow shadow-slate-400/5">
                <Icon icon="uil:user-check" width="16" height="16" className="text-[#FF509A]"/>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-slate-900 md:text-2xl">Trusted by Leaders</h3>
              <p className="text-sm text-slate-600 md:text-base">We work hand-in-hand with Revenue, Marketing, and Customer Success executives.</p>
            </div>
          </div>

          <div className="flex flex-col gap-10 rounded-3xl bg-white p-8 md:p-10 shadow-xl shadow-slate-400/5">
            <div className="border-primary w-max rounded-lg border bg-[#FFF3F8] p-1.5">
              <div className="rounded-md bg-white p-2 shadow shadow-slate-400/5">
                <Icon icon="uil:star" width="16" height="16" className="text-[#FF509A]"/>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-slate-900 md:text-2xl">Selective Intros</h3>
              <p className="text-sm text-slate-600 md:text-base">No spray-and-pray vendor lists. You only meet with qualified technologies that fit.</p>
            </div>
          </div>
        </div>

        <a href="#" className="bg-primary hover:bg-primary/80 flex items-center gap-3 rounded-full px-8 py-3 text-sm font-medium text-slate-900 duration-300 md:text-base">
          Book Your Free Tech Stack Audit
          <Icon icon="tabler:arrow-right" width="20" height="20" />
        </a>
      </div>
    </section>
  );
}
