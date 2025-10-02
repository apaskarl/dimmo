import Button from "@/components/ui/Button";

export default function WhoWeWorkWith() {
  return (
    <section id="who-we-work-with" className="relative py-12 md:py-20">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-10 px-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Who We Work With</h2>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          <Card title="Revenue Leaders" description="looking to accelerate pipeline." image="/images/who-we-work-with-1.png" />
          <Card title="Marketing Leaders" description="driving demand and efficiency." image="/images/who-we-work-with-2.png" />
          <Card title="Customer Success Leaders" description="aiming to improve retention and expansion." image="/images/who-we-work-with-3.png" />
        </div>

        <Button href="#" label="View GTM Marketplace" />
      </div>
    </section>
  );
}

const Card = ({
  title,
  description,
  image,
}: {
  title: string,
  description: string,
  image: string,
}) => {
  return (
    <div className="flex flex-col justify-between rounded-3xl bg-white shadow-xl shadow-slate-400/5">
      <div className="relative flex flex-1 items-center justify-center p-8 md:p-10">
        <img src={image} className="relative z-10" draggable="false"/>
        <div className="absolute inset-0 bg-[radial-gradient(circle_175px_at_center,_rgba(252,167,203,0.5),_transparent)]"></div>
      </div>

      <div className="p-7 text-center text-lg font-medium text-slate-900 md:text-xl">
        <span className="font-bold">{title}</span> {description}
      </div>
    </div>
  );
};