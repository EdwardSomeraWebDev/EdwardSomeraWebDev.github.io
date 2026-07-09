import { experiences } from '../data';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-heading">
        <p>Experience</p>
        <h2>Professional work history.</h2>
      </div>
      <div className="timeline">
        {experiences.map((job) => (
          <article className="timeline-item" key={`${job.company}-${job.date}`}>
            <div className="timeline-date">{job.date}</div>
            <div className="timeline-content">
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>
              <ul>
                {job.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
