export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Stryker. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-zinc-400 hover:text-zinc-200 transition-colors">About</a>
            <a href="#contact" className="text-zinc-400 hover:text-zinc-200 transition-colors">Contact</a>
            <a href="#" className="text-zinc-400 hover:text-zinc-200 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
