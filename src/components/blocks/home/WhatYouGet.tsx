import Button from "@/components/ui/Button";

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="relative py-12 md:py-20">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-10 px-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">What You Get</h2>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          <Card image="/images/what-you-get-1.png" description="A clear shortlist of technologies to evaluate." />
          <Card image="/images/what-you-get-2.png" description="Expert insight into why those tools fit your business." />
          <Card image="/images/what-you-get-3.png" description="Confidence you're only speaking with qualified vendors." />
        </div>

        <Button href="#" label="View GTM Marketplace" />
      </div>
    </section>
  );
}

const Card = ({
  description,
  image,
}: {
  description: string,
  image: string,
}) => {
  return (
    <div className="flex flex-col justify-between rounded-3xl bg-white shadow-xl shadow-slate-400/5">
      <div className="relative flex flex-1 items-center justify-center p-8 md:p-10">
        <img src={image} className="relative z-10 shadow-xl shadow-slate-400/5" draggable="false"/>
        <img src="/images/grid-line.png" className="absolute inset-0" draggable="false"/>
      </div>

      <div className="p-7 text-lg font-medium text-slate-900 md:text-xl">{description}</div>
    </div>
  );
};