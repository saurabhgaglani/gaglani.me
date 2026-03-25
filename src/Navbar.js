const LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Contact", href: "#links" },
];

export default function Navbar({ dark, onToggleDark }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-2xl mx-auto px-6 h-12 flex items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white hover:opacity-70 transition-opacity">
          SG
        </a>
        <div className="flex items-center gap-6">
          {LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="nav-link text-sm text-gray-500 dark:text-gray-400 transition-colors">
              {label}
            </a>
          ))}
          <button onClick={onToggleDark} aria-label="Toggle dark mode" className="text-gray-500 dark:text-gray-400 hover:opacity-70 transition-opacity text-base leading-none">
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}
