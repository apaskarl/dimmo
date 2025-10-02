import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@/components/ui/Button";

export default function ForTechnologyPartners() {
  return (
    <section id="for-technology-partners" className="relative py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative w-full overflow-hidden rounded-3xl bg-[#FEE4EF] p-10 md:p-20">
          <div className="relative z-10 flex flex-col gap-14 md:gap-24 md:flex-row">
            <div className="flex flex-shrink-0 flex-col justify-between gap-10">
              <div className="flex flex-col gap-6">
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">For Technology<br />Partners</h3>
                <div className="text-base text-slate-900/60 md:text-lg">Partnering with Dimmo means:</div>
              </div>

              <Button href="#" label="Book Your Free Tech Stack Audit" arrow primary /> 
            </div>

            <div className="flex flex-1 flex-col gap-6">
              <Card icon="ph:handshake" description="Warm introductions to organizations with active problems and initiatives." />
              <Card icon="lets-icons:chat-plus" description="Conversations with leaders who already understand why your solution fits." />
              <Card icon="ix:trend-upward-circle" description="Shorter sales cycles and more qualified opportunities." />
            </div>
          </div>

          <img src="/images/grid-line-mask.png" className="absolute inset-0 h-full w-full object-cover"/>
        </div>
      </div>
    </section>
  );
}

const Card = ({
  icon,
  description,
}: {
  icon: string,
  description: string,
}) => {
  return (
    <div className="flex flex-col gap-10 rounded-3xl bg-white p-8 md:p-10 shadow-xl shadow-slate-400/5 md:flex-row md:items-center">
      <div className="border-primary w-max rounded-2xl border bg-[#FFF3F8] p-2">
        <div className="rounded-xl bg-white p-3 shadow shadow-slate-400/5">
          <Icon icon={icon} width="30" height="30" className="text-[#FF509A]"/>
        </div>
      </div>

      <div className="text-lg font-medium text-slate-900 md:text-xl">{description}</div>
    </div>
  );
};