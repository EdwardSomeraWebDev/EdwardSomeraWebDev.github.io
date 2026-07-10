import {
  ArrowRight, CalendarDays, Code2, Download, ExternalLink,
  Mail, MapPin, Menu, Phone, Send, Star, UserRound, X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import portrait from './assets/edward-portrait.jpg';

const skills = [
  { title: 'Front-end', items: [
    ['HTML5','H5','html'], ['CSS3','C3','css'], ['SCSS / LESS','SC','css'], ['JavaScript','JS','js'],
    ['React','⚛','react'], ['Vue.js','V','vue'], ['Next.js','N','next'], ['Tailwind CSS','TW','css']
  ]},
  { title: 'CMS & E-commerce', items: [
    ['WordPress','W','wp'], ['WooCommerce','WC','wp'], ['Shopify','S','shopify'], ['Kentico','K','kentico'],
    ['ACF','ACF','php'], ['PHP','php','php'], ['MySQL','My','mysql']
  ]},
  { title: 'Tools & Quality', items: [
    ['Git','◆','git'], ['GitHub','GH','git'], ['Bitbucket','BB','git'], ['CI/CD','CI','rest'],
    ['REST APIs','⚙','rest'], ['WCAG','A11Y','rest'], ['SEO','SEO','rest'], ['Agile','AG','rest']
  ]},
];

const projects = [
  {
    title: 'Sovereign Duty Free',
    description: 'Wholesale e-commerce platform for a Canadian First Nations vape and smoke distributor, with account registration, product navigation and retailer-focused purchasing flows.',
    tags: ['WordPress', 'WooCommerce', 'B2B'],
    className: 'project-dutyfree',
    url: 'https://sovereigndutyfree.com/'
  },
  {
    title: 'Sovereign Smoke',
    description: 'Responsive Canadian retail store for vape, smoke and nicotine products featuring category merchandising, nationwide shipping content and conversion-focused shopping experiences.',
    tags: ['WordPress', 'WooCommerce', 'SEO'],
    className: 'project-smoke',
    url: 'https://sovereignsmoke.ca/'
  },
  {
    title: 'Sovereign Cigarettes',
    description: 'Mobile-friendly e-commerce website for First Nations tobacco products with product bundles, brand browsing, streamlined checkout and discreet-delivery messaging.',
    tags: ['WordPress', 'WooCommerce', 'JavaScript'],
    className: 'project-cigarettes',
    url: 'https://sovereigncigarettes.com/'
  },
  {
    title: 'Mount Solar Power',
    description: 'Professional solar-energy website designed to present services clearly, build customer trust and generate qualified residential and commercial installation inquiries.',
    tags: ['WordPress', 'Responsive Design', 'Lead Generation'],
    className: 'project-solar',
    url: 'https://mountsolarpower.com/'
  },
  {
    title: 'Coefficients',
    description: 'Corporate website for outsourcing, digital solutions and skills development, presenting service offerings, business capabilities and consultation pathways.',
    tags: ['WordPress', 'Corporate Website', 'SEO'],
    className: 'project-coefficients',
    url: 'https://coefficientsco.com/'
  },
  {
    title: 'Toro Vape',
    description: 'Canadian vape retail website with location-specific shopping experiences, product discovery, subscription flows and conversion-focused WooCommerce customization.',
    tags: ['WordPress', 'WooCommerce', 'Subscriptions'],
    className: 'project-toro',
    url: 'https://torovape.com/'
  },
  {
    title: 'Sativa Bliss',
    description: 'Multi-store cannabis e-commerce website featuring store selection, branch-specific online menus, custom product integrations and location-aware shopping flows.',
    tags: ['WordPress', 'WooCommerce', 'API Integration'],
    className: 'project-sativa',
    url: 'https://sativabliss.ca/'
  },
  {
    title: 'HaulSaver',
    description: 'Reverse logistics marketplace connecting shippers and carriers through shipment requests, competitive offers, role-based accounts and transaction workflows.',
    tags: ['React', 'Node.js', 'Marketplace'],
    className: 'project-haulsaver',
    url: 'https://haulsaver.com/'
  },
];

const experience = [
  {
    dates: 'Jul 2025 – Present',
    role: 'Freelance Web Developer',
    company: 'Freelance',
    details: [
      'Design, develop and maintain e-commerce websites for a Canadian client, with a focus on responsive layouts, usability, product presentation and conversion-friendly experiences.',
      'Built and supported online storefronts for Sovereign Duty Free, Sovereign Smoke, Sovereign Cigarettes, Toro Vape and Sativa Bliss.',
      'Implement custom sections, landing pages, product pages, navigation, forms, promotional content and CMS updates.',
      'Handle troubleshooting, browser and device testing, performance checks and SEO-friendly content improvements.'
    ]
  },
  {
    dates: 'Nov 2019 – Jun 2025',
    role: 'Applications Engineer / Developer 4 – App Dev',
    company: 'Seven Seven Global Services Inc.',
    details: [
      'Developed and maintained scalable, responsive and user-friendly websites and web applications.',
      'Created a reusable internal design system for headers, footers, forms, tabs, modals and other shared UI components.',
      'Built mobile-first, SEO-friendly campaign microsites and optimized them for performance.',
      'Integrated internal APIs and web services for real-time data, and created interactive forms using JavaScript and AJAX.',
      'Performed accessibility, cross-browser and cross-device testing while working through Git-based reviews and Agile sprints.'
    ]
  },
  {
    dates: '2015 – 2019',
    role: 'Web Developer',
    company: 'Blueprint Solutions Group',
    details: [
      'Developed and maintained client websites with a focus on front-end design, responsiveness, usability and functionality.',
      'Built fully custom WordPress themes from scratch using PHP, HTML5, CSS3 and JavaScript.',
      'Integrated custom post types, Advanced Custom Fields and theme options for flexible content management.',
      'Optimized websites for performance, accessibility, mobile-first layouts, SEO, security and scalability.',
      'Translated wireframes and brand guidelines into polished production websites in collaboration with designers and clients.'
    ]
  },
  {
    dates: '2014 – 2015',
    role: 'Web Developer',
    company: 'Click4Corp',
    details: [
      'Converted PSD designs into responsive, standards-compliant HTML and CSS websites.',
      'Balanced client requirements with accessibility, usability and established web-development practices.',
      'Worked closely with UX and UI designers to implement clear, user-friendly interfaces.'
    ]
  },
  {
    dates: '2012 – 2014',
    role: 'Web Development Consultant',
    company: 'Coefficients Co. Ltd.',
    details: [
      'Advised clients throughout the full web-development cycle and translated business requirements into functional websites.',
      'Redeveloped static and dynamic websites and created e-commerce solutions using CMS platforms and third-party APIs.',
      'Converted PSD designs into HTML, CSS and WordPress websites while collaborating with designers on clean interfaces.'
    ]
  },
];

export default function App(){
  const [menuOpen,setMenuOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>16); window.addEventListener('scroll',fn); return()=>window.removeEventListener('scroll',fn)},[]);
  const close=()=>setMenuOpen(false);
  return <div className="site-shell">
    <header className={`site-header ${scrolled?'scrolled':''}`}>
      <a className="brand" href="#home" onClick={close}>
        <span className="brand-mark">ES</span><span><strong>Edward Somera</strong><small>Web Developer</small></span>
      </a>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button>
      <nav className={menuOpen?'open':''}>
        {['About','Skills','Projects','Experience','Contact'].map(i=><a key={i} href={`#${i.toLowerCase()}`} onClick={close}>{i}</a>)}
        <a className="button button-outline nav-cta" href="/assets/Edward_Somera_CV.pdf" download>Download CV <Download size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section" id="home">
        <div className="hero-copy">
          <span className="eyebrow">Hi, I'm</span>
          <h1>Edward Somera</h1><h2>Web Developer</h2>
          <p>I build responsive, accessible and performance-focused websites, e-commerce stores and web applications using modern front-end technologies and WordPress.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">View my work <ArrowRight size={17}/></a><a className="button button-outline" href="#contact">Contact me <Mail size={16}/></a></div>
          <div className="socials"><a href="https://github.com/EdwardSomeraWebDev" target="_blank" rel="noreferrer"><b>GH</b></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><b>IN</b></a><a className="cube" href="#skills">◇</a><a href="mailto:edwardsomerawebdev@gmail.com"><Mail/></a></div>
        </div>
        <div className="hero-visual">
          <div className="portrait-wrap"><img src={portrait} alt="Edward Somera"/></div>
          <div className="code-card"><span className="code-dots"><i/><i/><i/></span><pre>{`const developer = {\n  name: 'Edward Somera',\n  skills: ['JavaScript',\n    'React', 'Node.js',\n    'WordPress'],\n  passion: 'Building things\n    that make impact'\n};`}</pre></div>
          <Code2 className="hero-code-icon"/>
          <div className="dot-grid"/>
        </div>
      </section>

      <section className="section bordered" id="about"><div className="about-grid">
        <div><SectionTitle>About me</SectionTitle><p className="muted">Web Developer with 12 years of experience delivering responsive websites, e-commerce stores, web applications and user interfaces for clients in Canada, the United States and enterprise teams. I specialize in front-end development, custom WordPress builds, CMS implementation, API integration, SEO, accessibility and performance optimization.</p><a href="#contact" className="mini-button">More about me <UserRound size={14}/></a></div>
        <div className="stats-grid"><Stat icon={<CalendarDays/>} value="12+" label={<>Years<br/>Experience</>}/><Stat icon={<Code2/>} value="50+" label={<>Projects<br/>Completed</>}/><Stat icon={<Star/>} value="100%" label={<>Client<br/>Satisfaction</>}/><Stat icon={<MapPin/>} value="Philippines" label={<>Based in<br/>Lucena City</>} compact/></div>
      </div></section>

      <section className="section bordered" id="skills"><SectionTitle>Skills & tools</SectionTitle><div className="skills-grid">
        {skills.map(group=><div className="skill-group" key={group.title}><h3>{group.title}</h3><div className="skill-list">{group.items.map(([name,mark,cls])=><div className="skill" key={name}><span className={`skill-icon ${cls}`}>{mark}</span><small>{name}</small></div>)}</div></div>)}
      </div></section>

      <section className="section bordered" id="projects"><div className="section-heading-row"><SectionTitle>Projects</SectionTitle><a className="text-link" href="https://edwardsomerawebdev.github.io" target="_blank" rel="noreferrer">View all projects <ArrowRight size={15}/></a></div><div className="projects-grid">
        {projects.map(p=><article className="project-card" key={p.title}><a className={`project-image ${p.className}`} href={p.url} target="_blank" rel="noreferrer" aria-label={`Visit ${p.title}`}><span className="mock-site"><b>{p.title}</b><em>Selected client project</em><i>Visit website</i></span><ExternalLink size={16}/></a><div className="project-body"><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}
      </div></section>

      <section className="section bordered" id="experience"><SectionTitle>Experience</SectionTitle><div className="timeline-grid">{experience.map(e=><article className="timeline-item" key={`${e.company}-${e.dates}`}><span className="timeline-dot"/><small>{e.dates}</small><h3>{e.role}</h3><strong>{e.company}</strong><ul>{e.details.map(detail=><li key={detail}>{detail}</li>)}</ul></article>)}</div></section>

      <section className="section contact-section bordered" id="contact"><div className="contact-copy"><SectionTitle>Let's work together!</SectionTitle><p>I'm currently open to new opportunities.</p><a href="mailto:edwardsomerawebdev@gmail.com"><Mail size={17}/> edwardsomerawebdev@gmail.com</a><a href="tel:+639999969821"><Phone size={17}/> +63 999 996 9821</a><span><MapPin size={17}/> Lucena City, Philippines</span></div><form className="contact-form" action="https://formsubmit.co/edwardsomerawebdev@gmail.com" method="POST"><div className="form-row"><input name="name" placeholder="Your Name" required/><input type="email" name="email" placeholder="Your Email" required/></div><textarea name="message" placeholder="Your Message" rows="4" required/><button className="button button-primary" type="submit">Send message <Send size={15}/></button></form></section>
    </main>
    <footer><span>© {new Date().getFullYear()} Edward Somera. All rights reserved.</span><a href="#home">Back to top ↑</a></footer>
  </div>
}
function SectionTitle({children}){return <h2 className="section-title">{children}</h2>}
function Stat({icon,value,label,compact=false}){return <div className="stat-card"><span className="stat-icon">{icon}</span><strong className={compact?'compact':''}>{value}</strong><small>{label}</small></div>}
