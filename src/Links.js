const LINKS = [
  { label: "GitHub", url: "https://github.com/saurabhgaglani" },
  { label: "Resume", url: "https://drive.google.com/file/d/1O55z6FDGsxBsQygQ3whENqrhVrSmwNTj/view?usp=sharing" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/saurabh-gaglani/" },
  { label: "Email", url: "mailto:saurabh.gaglani@my.csun.edu" }
];

export default function Links() {
  return (
    <footer className="border-t border-gray-100 pt-6 pb-12 flex items-center justify-between">
      <div className="flex gap-6">
        {LINKS.map(link => (
          <a key={link.label} href={link.url} className="nav-link text-sm text-gray-500 transition-colors" target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
      <span className="text-sm text-gray-400">© Saurabh Gaglani 2026</span>
    </footer>
  );
}
