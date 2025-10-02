import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="cta" className="relative py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="bg-white p-2 shadow-xl shadow-slate-400/5 rounded-4xl">
          <div className="relative w-full overflow-hidden rounded-3xl bg-[#FEE4EF] md:h-[564px] p-10 md:p-20">
            <div className="relative z-20 mx-auto flex w-full max-w-2xl flex-col items-center gap-10">
              <div className="flex flex-col items-center gap-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Next Step</h2>
                <div className="text-base text-slate-900/60 md:text-lg">
                  <span className="font-bold">Deploy Dimmo Agents Today:</span> Book a call with our team and learn how Dimmo Agents can help your sales team.
                </div>
              </div>
              <Button href="#" label="Deploy Dimmo Agents" arrow primary />
            </div>

            <img src="/images/agent-cta-kv.png" className="hidden md:block absolute inset-0 z-10 w-full h-full object-cover" draggable="false" />
            <img src="/images/grid-line-mask.png" className="absolute inset-0 w-full h-full object-cover"/>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 py-6 px-8 md:py-8 md:px-10">
            <img src="/images/agent-avatar.png" alt="" className="h-16 w-16 md:h-20 md:w-20 object-cover" />

            <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-6 md:gap-10">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">Request a Dimmo Agent</h3>
                <p className="text-sm md:text-base text-slate-600">Have a GTM challenge and curious if an Agent can solve for it? Tell us your problem and we’ll be brutally honest if an Agent can help.</p>
              </div>

              <Button href="#" label="Request an Agent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}