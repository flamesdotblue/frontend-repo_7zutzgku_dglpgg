const products = [
  {
    id: 1,
    name: 'Stryker Mono Tee',
    price: '$38',
    tag: 'New',
    gradient: 'from-zinc-700 via-zinc-800 to-black',
  },
  {
    id: 2,
    name: 'Neon Grid Tee',
    price: '$42',
    tag: 'Bestseller',
    gradient: 'from-slate-700 via-zinc-800 to-black',
  },
  {
    id: 3,
    name: 'Obsidian Oversize',
    price: '$45',
    tag: 'New',
    gradient: 'from-neutral-700 via-zinc-800 to-black',
  },
  {
    id: 4,
    name: 'Carbon Core Tee',
    price: '$40',
    tag: '',
    gradient: 'from-stone-700 via-zinc-800 to-black',
  },
];

function ProductCard({ product }) {
  return (
    <div className="group rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
      <div className="aspect-[4/3] relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(60%_60%_at_50%_50%,rgba(244,244,245,0.10),rgba(24,24,27,0.1)_80%,transparent_100%)]" />
        {product.tag && (
          <span className="absolute left-3 top-3 text-[11px] uppercase tracking-wide bg-zinc-200 text-black px-2 py-1 rounded">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-zinc-100 font-medium">{product.name}</h3>
          <span className="text-zinc-300">{product.price}</span>
        </div>
        <button className="mt-3 w-full rounded-md border border-zinc-700 text-zinc-200 px-3 py-2 text-sm hover:bg-zinc-800/60 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="new" className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-zinc-100 text-2xl sm:text-3xl font-semibold">Featured T‑Shirts</h2>
            <p className="text-zinc-400 mt-2">Minimal designs. Premium fabrics. Built for everyday performance.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-zinc-300 hover:text-white transition-colors">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
