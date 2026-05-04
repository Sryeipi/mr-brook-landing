
// Hero Section v2 — Mr Brook
// Changes: EC copy, IG/TT icons in nav, parallax on scroll, stagger motion

const IGIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill={color} stroke="none"/>
  </svg>
);

const TTIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

const WAIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

// Export icons for other components
Object.assign(window, { IGIcon, TTIcon, WAIcon });

const HeroSection = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const winH = typeof window !== 'undefined' ? window.innerHeight : 800;

  React.useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 0→1 as user scrolls through the hero
  const scrollProgress = Math.min(scrollY / (winH * 0.7), 1);
  // Content fades out and rises
  const contentOpacity = Math.max(1 - scrollProgress * 1.4, 0);
  const contentTranslate = scrollY * -0.18;
  // Nav fades slightly then re-solidifies (stays readable but dims at mid-scroll)
  const navOpacity = scrollProgress < 0.5
    ? 1 - scrollProgress * 0.4
    : 0.6 + (scrollProgress - 0.5) * 0.8;
  const navBlur = 20 + scrollProgress * 10;

  return (
    <section id="hero" data-screen-label="01 Hero" style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      minHeight: '600px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0B0B0D',
    }}>
      {/* Video — parallax shift on scroll */}
      <video autoPlay muted loop playsInline style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '110%',
        objectFit: 'cover',
        opacity: 0.5,
        zIndex: 0,
        transform: `translateY(${scrollY * 0.25}px)`,
        top: '-5%',
      }}>
        <source src="assets/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(11,11,13,0.55) 0%, rgba(11,11,13,0.2) 40%, rgba(11,11,13,0.85) 100%)',
      }} />

      {/* Nav — floating glassmorphism pill with scroll fade */}
      <nav style={{
        position: 'fixed', top: '20px', left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex', alignItems: 'center', gap: '4px',
        background: `rgba(11,11,13,${0.55 + scrollProgress * 0.35})`,
        backdropFilter: `blur(${navBlur}px)`,
        WebkitBackdropFilter: `blur(${navBlur}px)`,
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '100px',
        padding: '8px 12px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        whiteSpace: 'nowrap',
        opacity: Math.max(navOpacity, 0.5),
        transition: 'opacity 0.1s ease, background 0.1s ease',
      }}>
        {/* Logo + wordmark */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', padding: '4px 10px 4px 4px', marginRight: '4px' }}>
          <img src="assets/logos/logo-01.png" alt="Mr Brook"
            style={{ width: '28px', height: '28px', filter: 'brightness(10)' }} />
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '16px', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.04em',
          }}>Mr Brook</span>
        </a>

        {/* Divider */}
        <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)', margin: '0 4px' }} />

        {/* Links */}
        {[
          { label: 'Servicios', href: '#servicios' },
          { label: 'Sedes', href: '#sedes' },
        ].map(({ label, href }) => (
          <a key={label} href={href} style={{
            color: 'rgba(255,255,255,0.6)', fontSize: '12px',
            textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '6px 14px', borderRadius: '100px',
            transition: 'color 0.2s, background 0.2s',
          }}
            onMouseEnter={e => { e.target.style.color = '#FFFFFF'; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
            onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.6)'; e.target.style.background = 'transparent'; }}
          >{label}</a>
        ))}

        {/* Divider */}
        <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)', margin: '0 4px' }} />

        {/* Social icons */}
        <a href="https://www.instagram.com/mrbrook.bs/" target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s, background 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#C8B08A'; e.currentTarget.style.background = 'rgba(200,176,138,0.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'transparent'; }}
        ><IGIcon size={16} color="currentColor" /></a>

        <a href="https://www.tiktok.com/@mrbrook.bs" target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s, background 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#C8B08A'; e.currentTarget.style.background = 'rgba(200,176,138,0.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'transparent'; }}
        ><TTIcon size={16} color="currentColor" /></a>

        {/* Divider */}
        <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)', margin: '0 4px' }} />

        {/* CTA pill */}
        <a href="https://api.whatsapp.com/send/?phone=593969012964&text&type=phone_number&app_absent=0"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: '7px',
            background: '#8A6A4B',
            color: '#FFFFFF',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '12px', fontWeight: 600,
            letterSpacing: '0.04em',
            padding: '8px 18px',
            borderRadius: '100px',
            textDecoration: 'none',
            transition: 'background 0.2s',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#9E7A58'}
          onMouseLeave={e => e.currentTarget.style.background = '#8A6A4B'}
        >
          <WAIcon size={13} color="currentColor" />
          Reservar
        </a>
      </nav>

      {/* Hero content — fades out + rises on scroll */}
      <div style={{
        position: 'relative', zIndex: 5,
        textAlign: 'center',
        padding: '0 24px',
        maxWidth: '860px',
        width: '100%',
        opacity: contentOpacity,
        transform: `translateY(${contentTranslate}px)`,
        transition: 'opacity 0.05s linear, transform 0.05s linear',
        pointerEvents: contentOpacity < 0.05 ? 'none' : 'auto',
      }}>
        <div className="fade-up" style={{ animationDelay: '0.1s', marginBottom: '20px' }}>
          <img src="assets/logos/logo-01.png" alt="Mr Brook" style={{
            width: '64px', height: '64px',
            filter: 'brightness(10) drop-shadow(0 0 24px rgba(200,176,138,0.5))',
            margin: '0 auto',
          }} />
        </div>

        <p className="fade-up" style={{
          animationDelay: '0.2s',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase',
          color: '#C8B08A', marginBottom: '18px',
        }}>Barber Shop & SPA — Guayaquil</p>

        <h1 className="fade-up" style={{
          animationDelay: '0.3s',
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(48px, 8vw, 96px)',
          fontWeight: 600, color: '#FFFFFF',
          lineHeight: 0.95, letterSpacing: '-0.025em',
          marginBottom: '24px',
        }}>
          La mejor barbería<br />
          <span style={{ color: '#C8B08A', fontStyle: 'italic' }}>del Ecuador.</span>
        </h1>

        <p className="fade-up" style={{
          animationDelay: '0.38s',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(14px, 1.8vw, 17px)',
          color: 'rgba(255,255,255,0.55)',
          maxWidth: '480px', margin: '0 auto 36px',
          lineHeight: 1.55,
        }}>
          Corte, barba, color, ondas, Hair SPA, facial, uñas y coffee.<br />
          <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Dos sedes en Guayaquil.</strong>
        </p>

        {/* CTAs */}
        <div className="fade-up" style={{
          animationDelay: '0.46s',
          display: 'flex', gap: '10px',
          justifyContent: 'center', flexWrap: 'wrap',
        }}>
          <a href="https://api.whatsapp.com/send/?phone=593969012964&text&type=phone_number&app_absent=0"
            target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WAIcon size={16} color="currentColor" /> Urdesa
          </a>
          <a href="https://api.whatsapp.com/message/UC2TTGZTJAXOB1?autoload=1&app_absent=0"
            target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WAIcon size={16} color="currentColor" /> La Joya
          </a>
          <a href="#servicios" className="btn-ghost">Ver servicios</a>
        </div>

        {/* Stats */}
        <div className="fade-up" style={{
          animationDelay: '0.56s',
          display: 'flex', justifyContent: 'center',
          marginTop: '52px', flexWrap: 'wrap',
        }}>
          {[
            { value: '21.3K', label: 'seguidores IG' },
            { value: '2', label: 'sedes GYE' },
            { value: 'Coffee', label: '+ SPA' },
            { value: '★ 5.0', label: 'Google Reviews' },
          ].map((item, i) => (
            <div key={i} style={{
              padding: '14px 24px',
              borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 600, color: '#C8B08A' }}>{item.value}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll line */}
      <div style={{
        position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
        zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{ width: '1px', height: '44px', background: 'linear-gradient(to bottom, rgba(200,176,138,0.5), transparent)', animation: 'pulse 2s ease-in-out infinite' }} />
      </div>
    </section>
  );
};

Object.assign(window, { HeroSection, IGIcon, TTIcon, WAIcon });
