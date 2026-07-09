import { profile } from '../data';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        <p>About</p>
        <h2>Building clean, responsive, and business-focused websites.</h2>
      </div>
      <div className="about-grid">
        <p>
          I specialize in creating websites that are easy to use, mobile-friendly, optimized for search engines,
          and aligned with business goals. My experience covers front-end development, WordPress theme development,
          e-commerce websites, API integrations, accessibility, and website performance improvements.
        </p>
        <div className="info-list">
          <div><strong>Email</strong><span>{profile.email}</span></div>
          <div><strong>Phone</strong><span>{profile.phone}</span></div>
          <div><strong>Location</strong><span>{profile.location}</span></div>
        </div>
      </div>
    </section>
  );
}
