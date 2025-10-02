import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@/components/ui/Button";

export default function WhyDimmoIsDifferent() {
  return (
    <section id="why-dimmo-is-different" className="relative py-12 md:py-20">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-10 px-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Why Dimmo is Different
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          <Card icon="uil:book-reader" title="Breadth of Knowledge" description="With 300+ GTM tools on Dimmo, we know the landscape inside and out." />
          <Card icon="uil:user-check" title="Trusted by Leaders" description="We work hand-in-hand with Revenue, Marketing, and Customer Success executives." />
          <Card icon="uil:star" title="Selective Intros" description="No spray-and-pray vendor lists. You only meet with qualified technologies that fit." />
        </div>

        <Button href="#" label="Book Your Free Tech Stack Audit" arrow primary />
      </div>
    </section>
  );
}

const Card = ({
  icon,
  title,
  description,
}: {
  icon: string,
  title: string,
  description: string,
}) => {
  return (
    <div className="flex flex-col justify-between gap-10 rounded-3xl bg-white p-8 md:p-10 shadow-xl shadow-slate-400/5">
      <div className="border-primary w-max rounded-lg border bg-[#FFF3F8] p-1.5">
        <div className="rounded-md bg-white p-2 shadow shadow-slate-400/5">
          <Icon icon={icon} width="16" height="16" className="text-[#FF509A]"/>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold text-slate-900 md:text-2xl">{title}</h3>
        <p className="text-sm text-slate-600 md:text-base">{description}</p>
      </div>
    </div>
  );
};