export default function TheProblem() {
  return (
    <section id="the-problem" className="py-20">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-10 px-4">
        <div className="grid w-full grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-400/5 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-10 p-8 md:p-10">
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">The Problem</h3>
              <p className="text-sm text-slate-600 md:text-base">Choosing GTM technology is overwhelming. 300+ tools. Endless vendor pitches. Internal pressure to “get it right.”</p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-slate-600 md:text-base">
              <p>Leaders are left guessing:</p>
              <ul className="list-inside list-disc pl-2">
                <li>Do we already have overlap in our stack?</li>
                <li>Which tools will actually move the needle?</li>
                <li>Will this vendor really work for a company like ours?</li>
              </ul>
            </div>
          </div>

          <img src="/images/the-problem.png" draggable="false" />
        </div>

        <div className="grid w-full grid-cols-1 overflow-hidden rounded-3xl bg-[#FEE4EF] shadow-xl shadow-slate-400/5 md:grid-cols-2">
          <img src="/images/the-dimmo-approach.png" draggable="false" />

          <div className="flex flex-col justify-between gap-10 p-8 md:p-10">
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">The Dimmo Approach</h3>
              <p className="text-sm text-slate-600 md:text-base">We're not a vendor. We're your partner.</p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-slate-600 md:text-base">
              <p>Here's how we work with GTM leaders:</p>
              <ol className="list-inside list-decimal pl-2 marker:font-bold marker:text-slate-900">
                <li><span className="font-bold text-slate-900">Listen deeply.</span> We learn your goals, challenges, initiatives, and what's blocking results.</li>
                <li><span className="font-bold text-slate-900">Spot the gaps.</span> We identify where your tech stack is falling short.</li>
                <li><span className="font-bold text-slate-900">Recommend smartly.</span> We shortlist tools that match your needs, with expert reasoning for why.</li>
                <li><span className="font-bold text-slate-900">Make the right intro.</span> We only connect you with vendors who have solved problems like yours for companies like yours.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
