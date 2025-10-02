import { Icon } from "@iconify/react/dist/iconify.js";

export default function WhatDimmoAgentsDo() {
  return (
    <section id="what-dimmo-agents-do" className="relative py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
            <img src="/images/what-dimmo-agents-do-kv.png" draggable="false" />

            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                    <h3 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">What Dimmo Agents Do</h3>
                    <p className="text-sm text-slate-600 md:text-base">Dimmo Agents are your AI-driven teammates that run quietly in the background. They catch the things humans miss. They do the heavy lifting reps hate. And they surface insights that help teams hit their number.</p>
                </div>
                
                <div className="bg-white flex items-center gap-6 rounded-2xl p-5 shadow-xl shadow-slate-400/5">
                    <Icon icon="mdi:lightbulb-on-10" width="24" height="24" className="flex-shrink-0 text-[#FF509A]" />
                    <p className="text-sm md:text-base font-medium text-slate-900">
                        No extra dashboards. No guesswork. Just clear, proactive support.
                    </p>
                </div>
            </div>  
        </div>
    </section>
  );
}