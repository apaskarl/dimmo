import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#FEE4EF] to-transparent pt-36 pb-20">
      <div className="relative z-10 container mx-auto flex max-w-7xl flex-col items-center gap-14 px-4">
        <div className="flex flex-col gap-6 md:w-2/3">
          <h1 className="text-center text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">Dimmo is the Trusted<br />GTM Technology Partner</h1>
          <p className="text-center text-base text-slate-900/60 md:text-lg">Helping Revenue, Marketing, and Customer Success leaders cut through the noise and choose the right technology for their business.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2">
          <Button href="#" label="Book Your Free Tech Stack Audit" arrow primary />
          <Button href="#" label="View GTM Marketplace" />
        </div>
      </div>

      <img src="/images/hero-bg.png" className="absolute inset-0 container mx-auto h-full max-w-7xl object-cover px-4" draggable="false" />
    </section>
  );
}
