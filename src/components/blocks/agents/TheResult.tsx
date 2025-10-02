import { Icon } from "@iconify/react/dist/iconify.js";

export default function TheResult() {
  return (
    <section id="the-result" className="relative py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center md:gap-10">
            <div className="flex flex-col gap-4"> 
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Result</h2>
                <p className="text-sm text-slate-600 md:text-base">With Dimmo Agents:</p>
            </div>

            <div className="bg-white flex items-center gap-4 rounded-2xl p-5 shadow-xl shadow-slate-400/5">
                <Icon icon="material-symbols:bolt-outline-rounded" width="24" height="24" className="flex-shrink-0 text-[#FF509A]" />
                <p className="text-sm md:text-base font-medium text-slate-900">
                    This isn't about replacing humans. It's about making sellers much more efficient.
                </p>
            </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-4">
          <Card description="Managers coach smarter." image="/images/the-result-1.png" />
          <Card description="Reps prospect faster." image="/images/the-result-2.png" />
          <Card description="Teams walk into meetings confident." image="/images/the-result-3.png" />
          <Card description="Pipeline grows consistently." image="/images/the-result-4.png" />
        </div>
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
        <div className="relative flex flex-1 items-center justify-center p-8">
          <img src={image} className="relative z-20" draggable="false"/>
          <div className="absolute z-10 inset-0 bg-[radial-gradient(circle_120px_at_center,_rgba(252,167,203,0.5),_transparent)]"></div>
          <img src="/images/grid-line.png" className="absolute inset-0" draggable="false"/>
        </div>
  
        <div className="p-7 text-center text-lg font-medium text-slate-900 md:text-xl">
          {description}
        </div>
      </div>
    );
  };