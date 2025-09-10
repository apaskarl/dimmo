export default function WhoWeWorkWith() {
  return (
    <section id="who-we-work-with" className="relative py-20">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-10 px-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Who We Work With</h2>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col justify-between rounded-3xl bg-white shadow-xl shadow-slate-400/5">
            <div className="relative flex flex-1 items-center justify-center p-8 md:p-10">
              <img src="/images/who-we-work-with-1.png" className="relative z-10" draggable="false"/>
              <div className="absolute inset-0 bg-[radial-gradient(circle_175px_at_center,_rgba(252,167,203,0.5),_transparent)]"></div>
            </div>

            <div className="p-7 text-center text-lg font-medium text-slate-900 md:text-xl">
              <span className="font-bold">Revenue Leaders</span> looking to accelerate pipeline.
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-white shadow-xl shadow-slate-400/5">
            <div className="relative flex flex-1 items-center justify-center p-8 md:p-10">
              <img src="/images/who-we-work-with-2.png" className="relative z-10" draggable="false"/>
              <div className="absolute inset-0 bg-[radial-gradient(circle_175px_at_center,_rgba(252,167,203,0.5),_transparent)]"></div>
            </div>

            <div className="p-7 text-center text-lg font-medium text-slate-900 md:text-xl">
              <span className="font-bold">Marketing Leaders</span> driving demand and efficiency.
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-white shadow-xl shadow-slate-400/5">
            <div className="relative flex flex-1 items-center justify-center p-8 md:p-10">
              <img src="/images/who-we-work-with-3.png" className="relative z-10" draggable="false"/>
              <div className="absolute inset-0 bg-[radial-gradient(circle_175px_at_center,_rgba(252,167,203,0.5),_transparent)]"></div>
            </div>

            <div className="p-7 text-center text-lg font-medium text-slate-900 md:text-xl">
              <span className="font-bold">Customer Success Leaders</span> aiming to improve retention and expansion.
            </div>
          </div>
        </div>

        <a href="#" className="flex items-center gap-3 rounded-full border border-slate-300 bg-white/10 px-8 py-3 text-sm font-medium text-slate-900 backdrop-blur-xs duration-300 hover:bg-white/50 md:text-base">
          View GTM Marketplace
        </a>
      </div>
    </section>
  );
}
