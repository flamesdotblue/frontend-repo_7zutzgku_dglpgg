import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative bg-black">
      <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_40%,rgba(63,63,70,0.35),rgba(0,0,0,0.9))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-400">
              Stryker Tees
            </h1>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg">
              Futuristic streetwear for the bold. Minimal silhouettes, premium cotton, and a glow that stands out in the dark.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#new" className="inline-flex rounded-md bg-zinc-100 text-black px-5 py-2.5 font-medium hover:bg-white transition-colors">
                Shop New Arrivals
              </a>
              <a href="#bestsellers" className="inline-flex rounded-md border border-zinc-700 text-zinc-200 px-5 py-2.5 font-medium hover:bg-zinc-800/60 transition-colors">
                View Bestsellers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
