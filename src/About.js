const ABOUT_TEXT = "I'm a software developer with 2 years of professional experience and an M.S. in Computer Engineering from California State University, Northridge. My work spans full-stack development, systems programming, and AI/ML applications. I've represented CSUN in competitive chess and built projects across hackathons, demonstrating a consistent ability to learn quickly and ship working solutions.";

export default function About() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <p className="leading-relaxed">{ABOUT_TEXT}</p>
      <span className="section-tail" />
    </section>
  );
}
