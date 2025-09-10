import { Icon } from "@iconify/react/dist/iconify.js";

export default function ForTechnologyPartners() {
  return (
    <section id="for-technology-partners">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative w-full overflow-hidden rounded-3xl bg-[#FEE4EF] p-10 md:p-20">
          <div className="relative z-10 flex flex-col gap-14 md:gap-24 md:flex-row">
            <div className="flex flex-shrink-0 flex-col justify-between gap-10">
              <div className="flex flex-col gap-6">
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">For Technology<br />Partners</h3>
                <div className="text-base text-slate-900/60 md:text-lg">Partnering with Dimmo means:</div>
              </div>

              <a href="#" className="bg-primary hover:bg-primary/80 flex items-center gap-3 rounded-full px-8 py-3 text-sm font-medium text-slate-900 duration-300 md:text-base">
                Book Your Free Tech Stack Audit
                <Icon icon="tabler:arrow-right" width="20" height="20" />
              </a>
            </div>

            <div className="flex flex-1 flex-col gap-6">
              <div className="flex flex-col gap-10 rounded-3xl bg-white p-8 md:p-10 shadow-xl shadow-slate-400/5 md:flex-row md:items-center">
                <div className="border-primary w-max rounded-2xl border bg-[#FFF3F8] p-2">
                  <div className="rounded-xl bg-white p-3 shadow shadow-slate-400/5">
                    <Icon icon="ph:handshake" width="30" height="30" className="text-[#FF509A]"/>
                  </div>
                </div>

                <div className="text-lg font-medium text-slate-900 md:text-xl">Warm introductions to organizations with active problems and initiatives.</div>
              </div>

              <div className="flex flex-col gap-10 rounded-3xl bg-white p-8 md:p-10 shadow-xl shadow-slate-400/5 md:flex-row md:items-center">
                <div className="border-primary w-max rounded-2xl border bg-[#FFF3F8] p-2">
                  <div className="rounded-xl bg-white p-3 shadow shadow-slate-400/5">
                    <Icon icon="lets-icons:chat-plus" width="30" height="30" className="text-[#FF509A]"/>
                  </div>
                </div>

                <div className="text-lg font-medium text-slate-900 md:text-xl">Conversations with leaders who already understand why your solution fits.</div>
              </div>

              <div className="flex flex-col gap-10 rounded-3xl bg-white p-8 md:p-10 shadow-xl shadow-slate-400/5 md:flex-row md:items-center">
                <div className="border-primary w-max rounded-2xl border bg-[#FFF3F8] p-2">
                  <div className="rounded-xl bg-white p-3 shadow shadow-slate-400/5">
                    <Icon icon="ix:trend-upward-circle" width="30" height="30" className="text-[#FF509A]"/>
                  </div>
                </div>

                <div className="text-lg font-medium text-slate-900 md:text-xl">Shorter sales cycles and more qualified opportunities.</div>
              </div>
            </div>
          </div>

          <img src="/images/grid-line-mask.png" className="absolute inset-0 h-full w-full object-cover"/>
        </div>
      </div>
    </section>
  );
}
