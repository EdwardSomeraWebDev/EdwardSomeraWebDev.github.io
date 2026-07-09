import { skills } from '../data';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p>Skills</p>
        <h2>Technologies and tools I use.</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
    </section>
  );
}
