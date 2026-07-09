import { ArrowRight, Download, Mail } from 'lucide-react';
import { profile } from '../data';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow">Available for web development projects</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View Projects <ArrowRight size={18} />
          </a>
          <a className="button secondary" href="/assets/Edward_Somera_CV.pdf" target="_blank" rel="noreferrer">
            <Download size={18} /> Download CV
          </a>
          <a className="button ghost" href={`mailto:${profile.email}`}>
            <Mail size={18} /> Email Me
          </a>
        </div>
      </div>
      <div className="hero-card" aria-label="Portfolio highlight card">
        <div className="card-orb" />
        <p>12+ Years Experience</p>
        <h3>Front-End, WordPress & E-commerce Development</h3>
        <span>Responsive • SEO-friendly • Accessible • Performance-focused</span>
      </div>
    </section>
  );
}
