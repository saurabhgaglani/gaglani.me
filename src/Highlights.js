const HIGHLIGHTS = [
  "2 years in software development",
  "M.S. in Computer Engineering",
  "Represented CSUN in chess",
  "Multiple hackathon wins"
];

export default function Highlights() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
      <ul className="list-disc list-inside space-y-1">
        {HIGHLIGHTS.map(item => <li key={item}>{item}</li>)}
      </ul>
      <span className="section-tail" />
    </section>
  );
}
