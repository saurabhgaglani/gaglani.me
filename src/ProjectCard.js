export default function ProjectCard({ name, description, tech, githubUrl, videoUrl, demoUrl, badge }) {
  return (
    <div className="relative border border-gray-200 rounded p-4">
      {badge && (
        <a href="https://www.hack4hope.com/" target="_blank" rel="noopener noreferrer" className="badge-sticker" style={{
          position: 'absolute', top: '12px', right: '12px',
          background: 'linear-gradient(135deg, #b8860b, #ffd700, #b8860b)',
          color: '#3a2a00',
          fontSize: '0.6rem',
          fontWeight: '700',
          lineHeight: '1.2',
          padding: '4px 7px',
          borderRadius: '4px',
          whiteSpace: 'pre',
          textAlign: 'center',
          letterSpacing: '0.02em',
          boxShadow: '0 1px 4px rgba(184,134,11,0.4)',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12) rotate(-3deg)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(184,134,11,0.6)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 1px 4px rgba(184,134,11,0.4)'; }}
        >
          {badge}
        </a>
      )}
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="mb-2">{description}</p>
      <p className="text-sm text-gray-500 mb-3">Tech: {tech}</p>
      {videoUrl && (
        videoUrl.includes('youtu') ? (
          <iframe
            title={`${name} demo video`}
            className="w-full rounded mb-3 aspect-video"
            src={`https://www.youtube.com/embed/${new URL(videoUrl.replace('youtu.be/', 'youtube.com/watch?v=')).searchParams.get('v') || videoUrl.split('youtu.be/')[1]?.split('?')[0]}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <video className="w-full rounded mb-3" autoPlay muted loop playsInline>
            <source src={videoUrl} type="video/mp4" />
          </video>
        )
      )}
      <div className="flex justify-between">
        <a href={githubUrl} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub →</a>
        {demoUrl && <a href={demoUrl} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Live Demo →</a>}
      </div>
    </div>
  );
}
