
// Social + Reviews + Final CTA + Footer v2
// Changes: remove PirateTips, EC copy, real IG/TT icons, less text, scroll motion

// ─── Social ───────────────────────────────────────────────────────────────────

const SOCIAL_VIDEOS = [
  // REPLACE_WITH_REAL_REEL_URL
  { platform: 'Instagram', title: 'Fade perfecto', category: 'cortes', url: 'https://www.instagram.com/mrbrook.bs/', thumbnail: 'assets/generated/haircut-side.png' },
  { platform: 'Instagram', title: 'Platinado completo', category: 'color', url: 'https://www.instagram.com/mrbrook.bs/', thumbnail: 'assets/generated/platinum-blonde.png' },
  { platform: 'TikTok', title: 'Rizos chevere', category: 'ondas', url: 'https://www.tiktok.com/@mrbrook.bs', thumbnail: 'assets/generated/curly-hair.png' },
  { platform: 'Instagram', title: 'El ritual del SPA', category: 'hair-spa', url: 'https://www.instagram.com/mrbrook.bs/', thumbnail: 'assets/generated/hair-spa-wash.png' },
  { platform: 'TikTok', title: 'Mr Brook Coffee', category: 'coffee', url: 'https://www.tiktok.com/@mrbrook.bs', thumbnail: 'assets/photos/foto-03.jpg' },
  { platform: 'Instagram', title: 'La tripulación', category: 'equipo', url: 'https://www.instagram.com/mrbrook.bs/', thumbnail: 'assets/photos/foto-01.jpg' },
  { platform: 'TikTok', title: 'Barba de pirata', category: 'barba', url: 'https://www.tiktok.com/@mrbrook.bs', thumbnail: 'assets/generated/beard-razor.png' },
  { platform: 'Instagram', title: 'Sede La Joya', category: 'sedes', url: 'https://www.instagram.com/mrbrook.bs/', thumbnail: 'assets/photos/foto-09.jpg' },
];

const IGBadge = () => (
  <div style={{
    width: '22px', height: '22px', borderRadius: '6px',
    background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  }}>
    <IGIcon size={13} color="#fff" />
  </div>
);

const TTBadge = () => (
  <div style={{
    width: '22px', height: '22px', borderRadius: '6px',
    background: '#000000',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  }}>
    <TTIcon size={12} color="#fff" />
  </div>
);

const SocialVideoCard = ({ video, isActive, onClick }) => (
  <div onClick={onClick} style={{
    flexShrink: 0, width: '180px', cursor: 'pointer',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    opacity: isActive ? 1 : 0.55,
    transform: isActive ? 'scale(1.04)' : 'scale(0.97)',
  }}>
    <div style={{
      aspectRatio: '9/16', borderRadius: '14px', overflow: 'hidden',
      position: 'relative',
      border: isActive ? '1.5px solid #8A6A4B' : '1px solid rgba(255,255,255,0.07)',
    }}>
      <img src={video.thumbnail} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,11,13,0.92) 30%, transparent 65%)' }} />

      {/* Platform badge */}
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        {video.platform === 'Instagram' ? <IGBadge /> : <TTBadge />}
      </div>

      {/* Play */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '36px', height: '36px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid rgba(255,255,255,0.18)',
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFF"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      </div>

      <div style={{ position: 'absolute', bottom: '10px', left: '10px', right: '10px' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#FFFFFF', lineHeight: 1.3, fontWeight: 500 }}>{video.title}</p>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8B08A', marginTop: '3px', display: 'block' }}>{video.category}</span>
      </div>
    </div>
  </div>
);

const SocialSection = () => {
  const [active, setActive] = React.useState(0);
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} data-screen-label="08 Social" style={{
      background: '#0B0B0D', padding: '88px 0 72px',
      borderTop: '1px solid rgba(138,106,75,0.08)',
    }}>
      <div style={{ padding: '0 40px', maxWidth: '1120px', margin: '0 auto 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
          <div style={{ width: '20px', height: '1px', background: '#8A6A4B' }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8A6A4B' }}>@mrbrook.bs</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <h2 className={visible ? 'fade-up visible' : 'fade-up'} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(34px, 4vw, 52px)',
            fontWeight: 600, color: '#FFFFFF', lineHeight: 1.08,
          }}>
            Lo que pasa en Mr Brook<br />
            <span style={{ color: '#C8B08A', fontStyle: 'italic' }}>se ve en redes.</span>
          </h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <a href="https://www.instagram.com/mrbrook.bs/" target="_blank" rel="noopener noreferrer"
              className="btn-ghost" style={{ fontSize: '12px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '7px' }}>
              <IGIcon size={14} color="currentColor" /> Instagram
            </a>
            <a href="https://www.tiktok.com/@mrbrook.bs" target="_blank" rel="noopener noreferrer"
              className="btn-ghost" style={{ fontSize: '12px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '7px' }}>
              <TTIcon size={14} color="currentColor" /> TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Cards strip */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, #0B0B0D, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, #0B0B0D, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ display: 'flex', gap: '14px', padding: '12px 40px 20px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {SOCIAL_VIDEOS.map((v, i) => (
            <SocialVideoCard key={i} video={v} isActive={active === i} onClick={() => setActive(i)} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Reviews ─────────────────────────────────────────────────────────────────

// DEMO_REVIEWS_TO_REPLACE_WITH_GOOGLE_PLACES
const REVIEWS = [
  { name: 'Carlos M.', text: 'El corte más bacán que me han dado en Guayaquil. El café mientras esperas es un plus enorme.', location: 'Urdesa' },
  { name: 'Andrés P.', text: 'Vine por el platinado y quedé flipado. Capos de verdad.', location: 'La Joya' },
  { name: 'Roberto V.', text: 'El Hair SPA me cambió el cuero cabelludo. Llevo 6 meses viniendo y no cambio.', location: 'Urdesa' },
  { name: 'Sebastián L.', text: 'Tripulación de primer nivel. Los diseños en la nuca son otro nivel, chévere todo.', location: 'Urdesa' },
  { name: 'Diego F.', text: 'Vine por un corte y me quedé para el facial. Nunca lo había hecho pero fue lo máximo.', location: 'La Joya' },
];

const ReviewsSection = () => {
  const [current, setCurrent] = React.useState(0);
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  React.useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % REVIEWS.length), 4500);
    return () => clearInterval(t);
  }, []);

  const review = REVIEWS[current];

  return (
    <section ref={ref} data-screen-label="09 Reviews" style={{ background: '#1B1D21', padding: '88px 40px' }}>
      <div style={{ maxWidth: '740px', margin: '0 auto', textAlign: 'center' }}>
        <div className={visible ? 'fade-up visible' : 'fade-up'} style={{ display: 'flex', gap: '3px', justifyContent: 'center', marginBottom: '20px' }}>
          {[1,2,3,4,5].map(s => (
            <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#C8B08A">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          ))}
        </div>

        <blockquote style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(22px, 3vw, 34px)',
          fontWeight: 500, color: '#FFFFFF',
          lineHeight: 1.3, fontStyle: 'italic',
          marginBottom: '28px', minHeight: '100px',
          transition: 'opacity 0.4s',
        }}>"{review.text}"</blockquote>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: '#8A6A4B',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: '#fff', fontSize: '15px',
          }}>{review.name[0]}</div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '13px', color: '#FFFFFF' }}>{review.name}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#8A6A4B' }}>Sede {review.location}</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
          {REVIEWS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? '22px' : '7px', height: '7px',
              borderRadius: '100px',
              background: i === current ? '#8A6A4B' : 'rgba(255,255,255,0.18)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.3s ease', padding: 0,
            }} />
          ))}
        </div>

        <p style={{ marginTop: '20px', fontFamily: "'DM Sans', sans-serif", fontSize: '10px', color: 'rgba(255,255,255,0.18)', fontStyle: 'italic' }}>
          {/* DEMO_REVIEWS_TO_REPLACE_WITH_GOOGLE_PLACES */}
          Reseñas demo — integración Google Places pendiente
        </p>
      </div>
    </section>
  );
};

// ─── Final CTA ────────────────────────────────────────────────────────────────

const FinalCTA = () => {
  const ref = React.useRef(null);
  const trailRef = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const thumbImages = [
    'assets/generated/haircut-side.png', 'assets/generated/beard-razor.png',
    'assets/generated/curly-hair.png', 'assets/generated/hair-spa-wash.png',
    'assets/generated/facial-care.png', 'assets/generated/platinum-blonde.png',
  ];
  let lastSpawn = 0;
  const handleMouseMove = React.useCallback((e) => {
    const now = Date.now();
    if (now - lastSpawn < 90) return;
    lastSpawn = now;
    const container = trailRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const img = document.createElement('img');
    img.src = thumbImages[Math.floor(Math.random() * thumbImages.length)];
    const rot = (Math.random() - 0.5) * 22;
    img.style.cssText = `position:absolute;left:${x-55}px;top:${y-75}px;width:110px;height:150px;object-fit:cover;border-radius:12px;transform:rotate(${rot}deg) scale(1);pointer-events:none;z-index:2;transition:opacity 0.8s ease,transform 0.8s ease;opacity:0.8;border:1px solid rgba(138,106,75,0.25);`;
    container.appendChild(img);
    requestAnimationFrame(() => { img.style.opacity = '0'; img.style.transform = `rotate(${rot}deg) scale(0.8)`; });
    setTimeout(() => img.remove(), 900);
  }, []);

  return (
    <section ref={ref} data-screen-label="10 Final CTA" style={{ background: '#0B0B0D', padding: '40px 40px 72px' }}>
      <div ref={trailRef} onMouseMove={handleMouseMove} style={{
        maxWidth: '1120px', margin: '0 auto',
        background: '#1B1D21',
        borderRadius: '28px', padding: '72px 48px',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
        border: '1px solid rgba(138,106,75,0.18)',
        cursor: 'crosshair',
        transition: 'border-color 0.3s',
      }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,176,138,0.35)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(138,106,75,0.18)'}
      >
        {/* Watermark logo */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 0, pointerEvents: 'none' }}>
          <img src="assets/logos/logo-01.png" alt="" style={{ width: '360px', height: '360px', filter: 'brightness(10)', opacity: 0.02 }} />
        </div>

        <div style={{ position: 'relative', zIndex: 3 }}>
          <div className={visible ? 'fade-up visible' : 'fade-up'} style={{ animationDelay: '0.1s', marginBottom: '14px' }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8A6A4B' }}>¿Listo para abordar?</span>
          </div>
          <h2 className={visible ? 'fade-up visible' : 'fade-up'} style={{
            animationDelay: '0.18s',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(44px, 6vw, 80px)',
            fontWeight: 600, color: '#FFFFFF',
            lineHeight: 0.95, letterSpacing: '-0.025em',
            marginBottom: '36px',
          }}>
            Elegí tu sede<br />
            <span style={{ color: '#C8B08A', fontStyle: 'italic' }}>y salís más bacán.</span>
          </h2>

          <div className={visible ? 'fade-up visible' : 'fade-up'} style={{
            animationDelay: '0.28s',
            display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap',
          }}>
            <a href="https://api.whatsapp.com/send/?phone=593969012964&text&type=phone_number&app_absent=0"
              target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WAIcon size={15} color="currentColor" /> Urdesa
            </a>
            <a href="https://api.whatsapp.com/message/UC2TTGZTJAXOB1?autoload=1&app_absent=0"
              target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WAIcon size={15} color="currentColor" /> La Joya
            </a>
            <a href="https://www.instagram.com/mrbrook.bs/" target="_blank" rel="noopener noreferrer"
              className="btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <IGIcon size={14} color="currentColor" /> Instagram
            </a>
            <a href="https://www.tiktok.com/@mrbrook.bs" target="_blank" rel="noopener noreferrer"
              className="btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <TTIcon size={14} color="currentColor" /> TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer = () => (
  <footer data-screen-label="11 Footer" style={{
    background: '#0B0B0D',
    borderTop: '1px solid rgba(138,106,75,0.12)',
    padding: '52px 40px 28px',
  }}>
    <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '48px' }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <img src="assets/logos/logo-01.png" alt="Mr Brook" style={{ width: '32px', height: '32px', filter: 'brightness(10)' }} />
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 600, color: '#FFFFFF' }}>Mr Brook</span>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>
            Barber Shop & SPA<br />Guayaquil, Ecuador
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
            <a href="https://www.instagram.com/mrbrook.bs/" target="_blank" rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C8B08A'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            ><IGIcon size={18} color="currentColor" /></a>
            <a href="https://www.tiktok.com/@mrbrook.bs" target="_blank" rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C8B08A'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            ><TTIcon size={18} color="currentColor" /></a>
          </div>
        </div>

        {/* Sedes */}
        <div>
          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8A6A4B', marginBottom: '18px' }}>Sedes</h4>
          {[
            { label: 'Urdesa', href: '#sedes' },
            { label: 'La Joya', href: '#sedes' },
            { label: 'Maps Urdesa', href: 'https://maps.google.com/?q=Mr+Brook+Barber+Urdesa' },
            { label: 'Maps La Joya', href: 'https://maps.google.com/?q=Mr+Brook+La+Joya' },
          ].map((l, i) => (
            <a key={i} href={l.href} target={l.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
              style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: '8px', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#C8B08A'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
            >{l.label}</a>
          ))}
        </div>

        {/* Reservas */}
        <div>
          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8A6A4B', marginBottom: '18px' }}>Reservas</h4>
          {[
            { label: 'WhatsApp Urdesa', href: 'https://api.whatsapp.com/send/?phone=593969012964&text&type=phone_number&app_absent=0' },
            { label: 'WhatsApp La Joya', href: 'https://api.whatsapp.com/message/UC2TTGZTJAXOB1?autoload=1&app_absent=0' },
            { label: 'Linktree', href: 'https://linktr.ee/MrBrook.bs' },
          ].map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: '8px', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#C8B08A'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
            >{l.label}</a>
          ))}
        </div>

        {/* Social */}
        <div>
          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8A6A4B', marginBottom: '18px' }}>Redes</h4>
          {[
            { label: 'Instagram', href: 'https://www.instagram.com/mrbrook.bs/', icon: <IGIcon size={14} color="currentColor" /> },
            { label: 'TikTok', href: 'https://www.tiktok.com/@mrbrook.bs', icon: <TTIcon size={14} color="currentColor" /> },
          ].map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C8B08A'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >{l.icon} {l.label}</a>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.18)' }}>© 2026 Mr Brook Barber Shop & SPA — Guayaquil</span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.18)' }}>Demo — pendiente producción</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { SocialSection, ReviewsSection, FinalCTA, Footer });
