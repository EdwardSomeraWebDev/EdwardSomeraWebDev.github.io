import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Edward Somera Home">
        <span>ES</span>
      </a>

      <nav className={open ? 'nav nav-open' : 'nav'}>
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
        <a className="nav-cv" href="/assets/Edward_Somera_CV.pdf" target="_blank" rel="noreferrer">
          Download CV
        </a>
      </nav>

      <button className="menu-button" type="button" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
