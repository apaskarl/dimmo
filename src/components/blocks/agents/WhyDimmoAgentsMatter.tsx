import { Icon } from "@iconify/react/dist/iconify.js";

export default function WhyDimmoAgentsMatter() {
  return (
    <section id="why-dimmo-agents-matter" className="relative py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-5">
                        <h3 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Why Dimmo Agents Matter</h3>
                        <p className="text-sm text-slate-600 md:text-base">Sales leaders don't lose because of effort. They lose because of:</p>
                    </div>
                    <ul className="list-inside list-disc pl-2 text-sm text-slate-600 md:text-base">
                        <li>Deals slipping through the cracks.</li>
                        <li>Leads that aren't really worth chasing.</li>
                        <li>Sellers being unprepared.</li>
                    </ul>
                </div>
                
                <div className="bg-white flex items-center gap-6 rounded-2xl p-5 shadow-xl shadow-slate-400/5">
                    <Icon icon="mdi:lightbulb-on-10" width="24" height="24" className="flex-shrink-0 text-[#FF509A]" />
                    <p className="text-sm md:text-base font-medium text-slate-900">
                        These gaps cost pipeline, waste time, and drag down performance. That's where Dimmo Agents come in.
                    </p>
                </div>
            </div>

            <img src="/images/why-dimmo-agents-kv.png" draggable="false" />
        </div>
    </section>
  );
}