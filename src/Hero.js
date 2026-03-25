const NAME = "Saurabh Gaglani";
const TAGLINE = "Software developer with an M.S. in Computer Engineering and a bias for building across domains.";
const INTRO = "I build across software, systems, and embedded domains. My background spans professional software development, academic work in robotics and computer engineering, hackathons, and competitive chess.";

export default function Hero() {
  return (
    <section className="mb-16">
      <h1 className="text-4xl font-semibold mb-2 grad-text">{NAME}</h1>
      <p className="text-xl text-gray-600 mb-4">{TAGLINE}</p>
      <p className="text-base leading-relaxed">{INTRO}</p>
      <span className="section-tail" />
    </section>
  );
}
