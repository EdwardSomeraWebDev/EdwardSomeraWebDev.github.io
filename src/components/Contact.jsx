import { Mail, Phone, MapPin } from 'lucide-react';
import { profile } from '../data';

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading">
        <p>Contact</p>
        <h2>Let’s build your next website.</h2>
      </div>
      <div className="contact-card">
        <a href={`mailto:${profile.email}`}><Mail size={20} /> {profile.email}</a>
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={20} /> {profile.phone}</a>
        <span><MapPin size={20} /> {profile.location}</span>
      </div>
    </section>
  );
}
