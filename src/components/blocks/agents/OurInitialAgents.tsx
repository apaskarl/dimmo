import { Icon } from "@iconify/react/dist/iconify.js";

export default function OurInitialAgents() {
  return (
    <section id="our-initial-agents" className="relative py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 flex flex-col gap-10">
            <h2 className="text-3xl md:text-4xl text-center font-bold tracking-tight text-slate-900">Our Initial Agents</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <OurInitialAgentsItem
                    title="Pipeline & Deal Health Agent"
                    description="Your safety net for revenue."
                    benefits={["Spots at-risk deals before they fall apart.", "Surfaces trends managers can coach on in real time.", "Automates pipeline hygiene so reps can focus on selling."]}
                    icon="mingcute:shield-line"
                    quote="We're the safety net for your pipeline and your managers."
                    image="/images/initial-agent-1.png"
                />
                <OurInitialAgentsItem
                    title="Weekly Lead Refresh Agent"
                    description="Your unfair advantage in prospecting."
                    benefits={["Delivers a fresh list of leads that perfectly match your ICP.", "Gives a “reason to reach out” for every single contact.", "Replaces hours of manual research and message drafting.", "Provides predictable, high-quality pipeline every week."]}
                    icon="mdi:user-plus-outline"
                    quote="We're the safety net for your pipeline and your managers."
                    image="/images/initial-agent-2.png"
                />
                <OurInitialAgentsItem
                    title="Meeting Prep Agent"
                    description="Your backstage pass to every conversation."
                    benefits={["Equips sellers with everything they need to know about the company and buyer.", "Cuts prep time while increasing confidence.", "Ensures every meeting starts strong and stays on track."]}
                    icon="material-symbols:trophy-outline-rounded"
                    quote="Every rep shows up ready to win."
                    image="/images/initial-agent-3.png"
                    horizontal={true}
                />
            </div>
        </div>
    </section>
  );
}

const OurInitialAgentsItem = (
{
    title,
    description,
    benefits,
    icon,
    quote,
    image,
    horizontal = false,
} : {
    title: string,
    description: string,
    benefits: string[],
    icon: string,
    quote: string,
    image: string,
    horizontal?: boolean,
}
) => {
  return (
    <div className={`${horizontal ? 'md:col-span-2 grid grid-cols-1 md:grid-cols-2' : 'flex flex-col justify-between'} bg-white rounded-3xl shadow-xl shadow-slate-400/5 overflow-hidden`}>
        <div className="p-6 md:p-10 flex flex-col gap-10 justify-between flex-1">
            <div className="flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">{title}</h3>
                <p className="text-sm md:text-base text-slate-600">{description}</p>
                <ul className="list-inside list-disc pl-2 text-sm md:text-base text-slate-600">
                    {benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-4">
                <Icon icon={icon} width="24" height="24" className="flex-shrink-0 text-[#FF509A]" />
                <p className="text-sm md:text-base font-medium text-slate-900">
                    {quote}
                </p>
            </div>
        </div>
        <img src={image} className="w-full" draggable="false" />
    </div>
  );
};