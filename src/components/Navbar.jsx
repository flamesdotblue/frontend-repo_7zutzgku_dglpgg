import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-gradient-to-br from-zinc-200 to-zinc-500" />
          <span className="text-zinc-200 tracking-wide font-semibold text-lg">Stryker</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#new" className="text-zinc-400 hover:text-zinc-200 transition-colors">New Arrivals</a>
          <a href="#bestsellers" className="text-zinc-400 hover:text-zinc-200 transition-colors">Bestsellers</a>
          <a href="#about" className="text-zinc-400 hover:text-zinc-200 transition-colors">About</a>
          <a href="#contact" className="text-zinc-400 hover:text-zinc-200 transition-colors">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-3 py-1.5 text-zinc-200 hover:bg-zinc-800/60 transition-colors">
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden sm:inline">Cart</span>
        </button>
      </div>
    </header>
  );
}
