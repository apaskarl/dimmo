import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="agents-hero" className="relative bg-gradient-to-b from-[#FEE4EF] to-transparent md:h-[743px] pt-36 pb-20">
      <div className="relative z-10 container mx-auto flex max-w-7xl flex-col items-center gap-14 px-4">
        <div className="flex flex-col gap-6 md:w-1/2 px-4">
          <h1 className="text-center text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">Meet Your New Dimmo Agents</h1>
          <p className="text-center text-base text-slate-900/60 md:text-lg">We’re your AI-powered partners that take on the hardest parts of sales so your team can focus on selling.</p>
        </div>

        <Button href="#" label="Chat With Us" arrow primary />
      </div>

      <img src="/images/agents-hero-bg.png" className="hidden md:block absolute left-0 bottom-0 w-full h-full object-cover" draggable="false" />
      <img src="/images/grid-line-mask.png" className="md:hidden absolute inset-0 w-full h-full object-cover"/>
    </section>
  );
}
