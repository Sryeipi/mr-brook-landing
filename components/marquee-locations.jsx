
// Marquee + Quote + Locations v2
// Changes: EC copy, IG/TT icons, scroll reveal stagger, cleaner location cards

const MARQUEE_PHOTOS = [
  { src: 'assets/photos/foto-01.jpg', label: 'Tripulación' },
  { src: 'assets/photos/foto-02.jpg', label: 'Proceso' },
  { src: 'assets/photos/foto-03.jpg', label: 'Coffee' },
  { src: 'assets/photos/foto-04.jpg', label: 'Sede' },
  { src: 'assets/photos/foto-05.jpg', label: 'Uñas' },
  { src: 'assets/photos/foto-06.jpg', label: 'Hair SPA' },
  { src: 'assets/photos/foto-07.jpg', label: 'Coffee' },
  { src: 'assets/photos/foto-08.jpg', label: 'SPA' },
  { src: 'assets/generated/haircut-side.png', label: 'Corte' },
  { src: 'assets/generated/hair-spa-wash.png', label: 'Hair SPA' },
  { src: 'assets/generated/curly-hair.png', label: 'Ondas' },
  { src: 'assets/generated/beard-razor.png', label: 'Barba' },
];

const MarqueeSection = () => {
  const doubled = [...MARQUEE_PHOTOS, ...MARQUEE_PHOTOS];
  return (
    <section data-screen-label="02 Marquee" style={{
      background: '#0B0B0D',
      padding: '64px 0 52px',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '0 40px', marginBottom: '28px' }}>
        <div style={{ width: '20px', height: '1px', background: '#8A6A4B' }} />
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8A6A4B' }}>Felices siempre por atenderte</span>
      </div>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, #0B0B0D, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, #0B0B0D, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div className="marquee-track">
          {doubled.map((photo, i) => (
            <div key={i} style={{
              flexShrink: 0, width: '200px', height: '280px',
              borderRadius: '14px', overflow: 'hidden',
              marginRight: '14px',
              border: '1px solid rgba(138,106,75,0.12)',
              position: 'relative',
            }}>
              <img src={photo.src} alt={photo.label} style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'transform 0.5s ease',
              }}
                onMouseEnter={e => { e.target.style.transform = 'scale(1.06)'; }}
                onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(11,11,13,0.8), transparent)',
                padding: '20px 14px 12px',
              }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>{photo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Experience Quote ─────────────────────────────────────────────────────────
const ExperienceQuote = () => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const badges = ['Cortes', 'Barba', 'Hair SPA', 'Coffee', 'Color', 'Uñas', 'Rizos'];

  return (
    <section ref={ref} data-screen-label="03 Quote" style={{ background: '#1B1D21', padding: '88px 40px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div className={visible ? 'fade-up visible' : 'fade-up'} style={{ animationDelay: '0.05s', marginBottom: '28px' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8A6A4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
          </svg>
        </div>

        <blockquote className={visible ? 'fade-up visible' : 'fade-up'} style={{
          animationDelay: '0.15s',
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(34px, 5vw, 60px)',
          fontWeight: 500, color: '#FFFFFF',
          lineHeight: 1.1, letterSpacing: '-0.02em',
          marginBottom: '24px', fontStyle: 'italic',
        }}>
          "Te ayudamos a encontrar<br />
          el estilo que <span style={{ color: '#C8B08A' }}>va contigo.</span>"
        </blockquote>

        <p className={visible ? 'fade-up visible' : 'fade-up'} style={{
          animationDelay: '0.25s',
          fontFamily: "'DM Sans', sans-serif", fontSize: '12px',
          color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em',
          textTransform: 'uppercase', marginBottom: '40px',
        }}>— Mr Brook Barber Shop & SPA</p>

        <div className={visible ? 'fade-up visible' : 'fade-up'} style={{ animationDelay: '0.35s', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {badges.map((b, i) => (
            <span key={i} style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#C8B08A', border: '1px solid rgba(200,176,138,0.25)',
              borderRadius: '100px', padding: '7px 18px',
              transition: 'all 0.2s', cursor: 'default',
            }}
              onMouseEnter={e => { e.target.style.background = 'rgba(200,176,138,0.1)'; e.target.style.borderColor = '#C8B08A'; }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'rgba(200,176,138,0.25)'; }}
            >{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Locations ────────────────────────────────────────────────────────────────
const LocationCard = ({ name, address, schedule, whatsappUrl, mapsUrl, image, delay }) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={visible ? 'fade-up visible' : 'fade-up'} style={{ animationDelay: `${delay}s` }}>
      <div style={{
        background: '#111214',
        borderRadius: '28px',
        overflow: 'hidden',
        border: '1px solid rgba(138,106,75,0.18)',
        transition: 'transform 0.35s ease, border-color 0.25s',
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'rgba(200,176,138,0.4)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(138,106,75,0.18)'; }}
      >
        {/* Image */}
        <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
            onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(17,18,20,0.95) 100%)' }} />
          {/* Sede badge */}
          <div style={{
            position: 'absolute', top: '18px', left: '18px',
            background: 'rgba(11,11,13,0.65)', backdropFilter: 'blur(10px)',
            borderRadius: '100px', padding: '5px 14px',
            border: '1px solid rgba(200,176,138,0.25)',
          }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8B08A' }}>Sede {name}</span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '24px 28px 28px' }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontWeight: 600, color: '#FFFFFF', marginBottom: '14px', lineHeight: 1 }}>{name}</h3>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '6px', alignItems: 'flex-start' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8A6A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px', flexShrink: 0 }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{address}</p>
          </div>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', alignItems: 'flex-start' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8A6A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px', flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{schedule}</p>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '13px', padding: '11px 20px' }}>
              <WAIcon size={14} color="currentColor" /> Reservar
            </a>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: '13px', padding: '11px 18px' }}>
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const LocationsSection = () => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="sedes" ref={ref} data-screen-label="04 Sedes" style={{ background: '#0B0B0D', padding: '88px 40px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ marginBottom: '52px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
            <div style={{ width: '20px', height: '1px', background: '#8A6A4B' }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8A6A4B' }}>Dos sedes</span>
          </div>
          <h2 className={visible ? 'fade-up visible' : 'fade-up'} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(38px, 5vw, 62px)',
            fontWeight: 600, color: '#FFFFFF',
            lineHeight: 1.02, letterSpacing: '-0.02em',
          }}>
            Te esperamos<br />
            <span style={{ color: '#C8B08A', fontStyle: 'italic' }}>en nuestras sedes.</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginTop: '14px', letterSpacing: '0.04em' }}>
            Reservá tu cita en:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '20px' }}>
          <LocationCard
            name="Urdesa"
            address="Av. Victor Emilio Estrada 1116, entre Laureles y Jiguas"
            schedule={"Lunes–Sábado: 10:00 – 19:45\nDomingo: 10:00 – 17:30"}
            whatsappUrl="https://api.whatsapp.com/send/?phone=593969012964&text&type=phone_number&app_absent=0"
            mapsUrl="https://maps.google.com/?q=Mr+Brook+Barber+Urdesa+Guayaquil"
            image="assets/photos/foto-04.jpg"
            delay={0.1}
          />
          <LocationCard
            name="La Joya"
            address="Local #25, La Piazza / Plaza Vienna, Urb. La Joya"
            schedule={"Horario — consultar por WhatsApp"}
            whatsappUrl="https://api.whatsapp.com/message/UC2TTGZTJAXOB1?autoload=1&app_absent=0"
            mapsUrl="https://maps.google.com/?q=Mr+Brook+La+Joya+Guayaquil"
            image="assets/photos/foto-09.jpg"
            delay={0.2}
          />
        </div>

        {/* Map visual */}
        <div className={visible ? 'fade-up visible' : 'fade-up'} style={{
          animationDelay: '0.3s', marginTop: '40px',
          borderRadius: '18px', overflow: 'hidden', height: '240px',
          position: 'relative', border: '1px solid rgba(138,106,75,0.12)',
        }}>
          <img src="assets/generated/map-locations.png" alt="Mapa sedes Mr Brook"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{
            position: 'absolute', inset: 0, background: 'rgba(11,11,13,0.45)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px',
          }}>
            {['Urdesa', 'La Joya'].map((sede, i) => (
              <React.Fragment key={sede}>
                {i > 0 && <div style={{ width: '1px', height: '44px', background: 'rgba(200,176,138,0.25)' }} />}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 600, color: '#FFFFFF' }}>{sede}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8B08A', marginTop: '2px' }}>{i === 0 ? 'Estrada 1116' : 'Plaza Vienna'}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { MarqueeSection, ExperienceQuote, LocationsSection });
