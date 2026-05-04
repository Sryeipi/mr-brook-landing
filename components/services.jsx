
// Services + Catalog + Transformations + Products v2
// New: floating barber items parallax on sides, products with WhatsApp pre-fill

const SERVICE_GROUPS = [
  {
    category: 'Cortes',
    note: 'Sin cita — por orden de llegada',
    items: [
      { name: 'Express', price: '$12', desc: 'Rápido y bacán' },
      { name: 'Completo', price: '$15', desc: 'Con acabado y producto' },
      { name: 'VIP', price: '$25', desc: 'Con lavado incluido' },
      { name: 'Largo / mediano', price: '$20', desc: 'Cabello largo o mediano' },
    ]
  },
  {
    category: 'Barba',
    note: 'Sin cita — por orden',
    items: [
      { name: 'Arreglo de barba', price: '$10', desc: 'Diseño y perfilado' },
      { name: 'Cejas', price: '$3', desc: 'Perfilado preciso' },
      { name: 'Diseños / líneas', price: '$3–$10', desc: 'Desde básico hasta artístico' },
      { name: 'Tinturado barba', price: '$15', desc: 'Color natural o fantasía' },
      { name: 'Lavado', price: '$3', desc: 'Gratis con corte' },
    ]
  },
  {
    category: 'Rizos y ondas',
    note: 'Con cita previa',
    items: [
      { name: 'Permanente rizos', price: 'desde $40', desc: 'Textura definida y duradera' },
      { name: 'Permanente ondas', price: 'desde $50', desc: 'Ondas naturales estilizadas' },
    ]
  },
  {
    category: 'Alisados',
    note: 'Con cita previa',
    items: [
      { name: 'Alisado express', price: 'desde $40', desc: 'Liso de impacto' },
      { name: 'Alisado definitivo', price: 'desde $80', desc: 'Liso duradero' },
      { name: 'Trenzas', price: '$35–$55', desc: 'Varios estilos' },
    ]
  },
  {
    category: 'Hair SPA',
    note: 'Con cita previa',
    items: [
      { name: 'Diagnóstico capilar', price: '$15', desc: 'Evaluación profesional' },
      { name: 'Terapia SPA', price: '$45', desc: 'Terapia terapéutica' },
      { name: 'SPA completo', price: '$80', desc: 'Diagnóstico + terapia + producto' },
    ]
  },
  {
    category: 'Faciales',
    note: 'Con cita previa',
    items: [
      { name: 'Limpieza facial', price: '$30', desc: 'Limpieza profunda' },
      { name: 'Tratamiento facial', price: '$50', desc: 'Con productos especializados' },
    ]
  },
  {
    category: 'Uñas',
    note: 'Con cita o por orden',
    items: [
      { name: 'Manicure básico', price: '$10', desc: 'Limpieza y arreglo' },
      { name: 'Manicure completo', price: '$20', desc: 'Con tratamiento cutícula' },
      { name: 'Manicure + pedicure', price: '$30', desc: 'Pack completo' },
    ]
  },
  {
    category: 'Color',
    note: 'Con cita previa',
    items: [
      { name: 'Tinturado', price: 'desde $40', desc: 'Color parejo natural o fantasía' },
      { name: 'Mechas', price: 'desde $60', desc: 'Highlights libres o papel' },
      { name: 'Platinado', price: 'desde $100', desc: 'Decoloración total' },
      { name: 'Platinado premium', price: 'desde $150+', desc: 'Doble decoloración' },
    ]
  },
  {
    category: 'Coffee',
    note: 'Sede Urdesa',
    items: [
      { name: 'Café Mr Brook', price: 'consultar', desc: 'Espresso, frappé y más' },
      { name: 'Snacks & bebidas', price: 'consultar', desc: 'Mientras esperás o después' },
    ]
  },
];

// Floating barber items for parallax decoration
const FLOAT_ITEMS = [
  { src: 'assets/generated/tools-kit.png', x: '-12%', startY: '5%', speed: 0.08, size: 220 },
  { src: 'assets/generated/scissors.png', x: '-8%', startY: '55%', speed: 0.12, size: 160 },
  { src: 'assets/generated/beard-razor.png', x: '108%', startY: '15%', speed: 0.1, size: 180 },
  { src: 'assets/generated/facial-care.png', x: '105%', startY: '60%', speed: 0.07, size: 200 },
];

const FloatingItems = ({ sectionRef }) => {
  const [scrollY, setScrollY] = React.useState(0);
  const [sectionTop, setSectionTop] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    if (sectionRef.current) {
      setSectionTop(sectionRef.current.getBoundingClientRect().top + window.scrollY);
    }
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionRef]);

  const relScroll = scrollY - sectionTop + window.innerHeight * 0.5;

  return (
    <>
      {FLOAT_ITEMS.map((item, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: item.x,
          top: item.startY,
          transform: `translateY(${relScroll * item.speed * (i % 2 === 0 ? -1 : 1)}px) rotate(${i % 2 === 0 ? -8 : 8}deg)`,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.18,
          transition: 'transform 0.1s linear',
        }}>
          <img src={item.src} alt="" style={{ width: `${item.size}px`, filter: 'brightness(0.9) contrast(1.1)' }} />
        </div>
      ))}
    </>
  );
};

const ServicesSection = () => {
  const [activeGroup, setActiveGroup] = React.useState(0);
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.04 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const group = SERVICE_GROUPS[activeGroup];

  const SERVICE_IMAGES = [
    'assets/generated/haircut-side.png',
    'assets/generated/beard-razor.png',
    'assets/generated/curly-hair.png',
    'assets/photos/foto-02.jpg',
    'assets/generated/hair-spa-wash.png',
    'assets/generated/facial-care.png',
    'assets/photos/foto-05.jpg',
    'assets/generated/platinum-blonde.png',
    'assets/photos/foto-03.jpg',
  ];

  return (
    <section id="servicios" ref={ref} data-screen-label="05 Servicios" style={{
      background: '#0B0B0D',
      padding: '88px 40px',
      borderTop: '1px solid rgba(138,106,75,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Floating decorative items */}
      <FloatingItems sectionRef={ref} />

      <div style={{ maxWidth: '1120px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
            <div style={{ width: '20px', height: '1px', background: '#8A6A4B' }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8A6A4B' }}>Catálogo Mr Brook</span>
          </div>
          <h2 className={visible ? 'fade-up visible' : 'fade-up'} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(38px, 5vw, 60px)',
            fontWeight: 600, color: '#FFFFFF', lineHeight: 1.02,
          }}>
            Todo lo que hacemos,<br />
            <span style={{ color: '#C8B08A', fontStyle: 'italic' }}>lo hacemos capo.</span>
          </h2>
        </div>

        {/* Tab pills */}
        <div style={{
          display: 'flex', gap: '6px', flexWrap: 'wrap',
          marginBottom: '40px',
        }}>
          {SERVICE_GROUPS.map((g, i) => (
            <button key={i} onClick={() => setActiveGroup(i)} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px', letterSpacing: '0.04em',
              padding: '9px 18px', borderRadius: '100px',
              border: activeGroup === i ? 'none' : '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: activeGroup === i ? '#8A6A4B' : 'transparent',
              color: activeGroup === i ? '#FFFFFF' : 'rgba(255,255,255,0.4)',
              fontWeight: activeGroup === i ? 600 : 400,
            }}>{g.category}</button>
          ))}
        </div>

        {/* Content grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
          {/* Items */}
          <div>
            {/* Note badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(138,106,75,0.08)',
              border: '1px solid rgba(138,106,75,0.2)',
              borderRadius: '100px', padding: '5px 14px', marginBottom: '20px',
            }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#8A6A4B' }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.08em', color: '#C8B08A' }}>{group.note}</span>
            </div>

            {group.items.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '16px 0',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                gap: '16px',
                animation: visible ? `slideIn 0.4s ease-out ${i * 0.06}s both` : 'none',
              }}>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 500, color: '#FFFFFF', marginBottom: '1px' }}>{item.name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>{item.desc}</div>
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 600, color: '#C8B08A', flexShrink: 0 }}>{item.price}</div>
              </div>
            ))}

            {/* Sede selector */}
            <div style={{ marginTop: '28px' }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8A6A4B', marginBottom: '12px' }}>Escoge tu sede</p>
              <SedeSelector service={group.category} />
            </div>
          </div>

          {/* Visual */}
          <div style={{
            borderRadius: '20px', overflow: 'hidden',
            aspectRatio: '4/5',
            border: '1px solid rgba(138,106,75,0.12)',
            position: 'relative',
          }}>
            <img
              key={activeGroup}
              src={SERVICE_IMAGES[Math.min(activeGroup, SERVICE_IMAGES.length - 1)]}
              alt={group.category}
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                animation: 'imgFadeIn 0.5s ease-out both',
              }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(11,11,13,0.9), transparent 60%)',
              padding: '28px 22px 20px',
            }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 600, color: '#FFFFFF' }}>{group.category}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8A6A4B', marginTop: '3px' }}>{group.items.length} servicios</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Transformations ──────────────────────────────────────────────────────────

const TRANSFORMATIONS = [
  {
    title: 'Cortes y tendencias',
    desc: 'Desde fades hasta mullets. Cada corte es una declaración.',
    image: 'assets/generated/haircuts-grid.png',
    tags: ['Fade', 'Clásico', 'Moderno', 'Diseño'],
  },
  {
    title: 'Color y platinados',
    desc: 'Platinados, mechas, rizos. Transformaciones que duran.',
    image: 'assets/generated/platinum-blonde.png',
    tags: ['Platinado', 'Mechas', 'Ondas', 'Tinturado'],
  },
  {
    title: 'Hair SPA',
    desc: 'Diagnóstico, terapia y tratamiento. El cuero cabelludo importa.',
    image: 'assets/generated/hair-spa-wash.png',
    tags: ['Diagnóstico', 'Terapia', 'Tratamiento'],
  },
];

const TransformationsSection = () => {
  return (
    <section data-screen-label="07 Transformaciones" style={{
      background: '#1B1D21',
      padding: '88px 40px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
            <div style={{ width: '20px', height: '1px', background: '#8A6A4B' }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8A6A4B' }}>Especialidades</span>
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 4vw, 54px)',
            fontWeight: 600, color: '#FFFFFF', lineHeight: 1.05,
          }}>
            Tres categorías,<br />
            <span style={{ color: '#C8B08A', fontStyle: 'italic' }}>un solo nivel.</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '72px' }}>
          {TRANSFORMATIONS.map((item, i) => {
            const itemRef = React.useRef(null);
            const [vis, setVis] = React.useState(false);
            React.useEffect(() => {
              const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
              if (itemRef.current) obs.observe(itemRef.current);
              return () => obs.disconnect();
            }, []);

            return (
              <div key={i} ref={itemRef} className={vis ? 'fade-up visible' : 'fade-up'} style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1.5fr' : '1.5fr 1fr',
                gap: '48px', alignItems: 'center',
              }}>
                <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8A6A4B', marginBottom: '12px' }}>0{i + 1}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.1, marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, marginBottom: '24px', maxWidth: '360px' }}>{item.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {item.tags.map((tag, j) => (
                      <span key={j} style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: '10px',
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.35)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '100px', padding: '5px 13px',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div style={{ order: i % 2 === 0 ? 1 : 0, borderRadius: '18px', overflow: 'hidden', aspectRatio: '16/10', border: '1px solid rgba(138,106,75,0.12)' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── Products (new) ───────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    name: 'Pomada de fijación fuerte',
    brand: 'Mr Brook',
    desc: 'Fijación todo el día, brillo medio.',
    price: 'consultar',
    img: 'assets/generated/tools-kit.png',
    waMsg: 'Hola! Me interesa la pomada de fijación fuerte. ¿Tienen disponible?',
  },
  {
    name: 'Shampoo para cabello tratado',
    brand: 'Mr Brook',
    desc: 'Limpieza suave, conserva el color.',
    price: 'consultar',
    img: 'assets/generated/hair-spa-wash.png',
    waMsg: 'Hola! Me interesa el shampoo para cabello tratado. ¿Tienen disponible?',
  },
  {
    name: 'Acondicionador hidratante',
    brand: 'Mr Brook',
    desc: 'Hidratación profunda post-tratamiento.',
    price: 'consultar',
    img: 'assets/generated/hair-spa-wash.png',
    waMsg: 'Hola! Me interesa el acondicionador hidratante. ¿Tienen disponible?',
  },
  {
    name: 'Cera mate texturizante',
    brand: 'Mr Brook',
    desc: 'Sin brillo, máximo control.',
    price: 'consultar',
    img: 'assets/generated/tools-kit.png',
    waMsg: 'Hola! Me interesa la cera mate texturizante. ¿Tienen disponible?',
  },
  {
    name: 'Sérum capilar hidratante',
    brand: 'Mr Brook',
    desc: 'Nutrición y brillo sin grasa.',
    price: 'consultar',
    img: 'assets/generated/scissors.png',
    waMsg: 'Hola! Me interesa el sérum capilar hidratante. ¿Tienen disponible?',
  },
  {
    name: 'Aceite de barba',
    brand: 'Mr Brook',
    desc: 'Suaviza, nutre y da brillo a la barba.',
    price: 'consultar',
    img: 'assets/generated/beard-razor.png',
    waMsg: 'Hola! Me interesa el aceite de barba. ¿Tienen disponible?',
  },
];

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = React.useState(false);
  const waUrl = `https://api.whatsapp.com/send/?phone=593969012964&text=${encodeURIComponent(product.waMsg)}&type=phone_number&app_absent=0`;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#111214',
        borderRadius: '20px',
        overflow: 'hidden',
        border: `1px solid ${hovered ? 'rgba(200,176,138,0.35)' : 'rgba(138,106,75,0.12)'}`,
        transition: 'transform 0.3s ease, border-color 0.25s',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Product image */}
      <div style={{ height: '180px', background: '#1B1D21', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={product.img} alt={product.name} style={{
          width: '140px', height: '140px', objectFit: 'contain',
          opacity: 0.7,
          transition: 'transform 0.5s ease, opacity 0.3s',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.5))',
        }} />
        {/* Placeholder note */}
        <div style={{
          position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)',
          fontFamily: "'DM Sans', sans-serif", fontSize: '9px',
          color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em',
          whiteSpace: 'nowrap',
        }}>imagen referencial</div>
      </div>

      {/* Info */}
      <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8A6A4B', marginBottom: '6px' }}>{product.brand}</div>
        <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px', lineHeight: 1.3 }}>{product.name}</h4>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5, flex: 1, marginBottom: '16px' }}>{product.desc}</p>

        <a
          href={waUrl}
          target="_blank" rel="noopener noreferrer"
          className="btn-primary"
          style={{ fontSize: '12px', padding: '10px 16px', justifyContent: 'center' }}
        >
          <WAIcon size={13} color="currentColor" />
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.04 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="productos" ref={ref} data-screen-label="06 Productos" style={{
      background: '#0B0B0D',
      padding: '88px 40px',
      borderTop: '1px solid rgba(138,106,75,0.08)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Side float items */}
      <div style={{ position: 'absolute', right: '-60px', top: '10%', opacity: 0.08, pointerEvents: 'none' }}>
        <img src="assets/generated/tools-kit.png" alt="" style={{ width: '280px', transform: 'rotate(15deg)' }} />
      </div>

      <div style={{ maxWidth: '1120px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
              <div style={{ width: '20px', height: '1px', background: '#8A6A4B' }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8A6A4B' }}>Productos</span>
            </div>
            <h2 className={visible ? 'fade-up visible' : 'fade-up'} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 600, color: '#FFFFFF', lineHeight: 1.02,
            }}>
              Llevate el look<br />
              <span style={{ color: '#C8B08A', fontStyle: 'italic' }}>a la casa.</span>
            </h2>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.35)', maxWidth: '280px', lineHeight: 1.6 }}>
            Dale al botón, armamos el mensaje y te respondemos al toque.
          </p>
        </div>

        {/* Products grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
          {PRODUCTS.map((p, i) => (
            <div key={i} className={visible ? 'fade-up visible' : 'fade-up'} style={{ animationDelay: `${i * 0.07}s` }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        <p style={{ marginTop: '24px', fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>
          {/* Catálogo de productos pendiente de confirmación final con el cliente */}
          Productos referenciales — catálogo real se confirma con el equipo Mr Brook.
        </p>
      </div>
    </section>
  );
};

Object.assign(window, { ServicesSection, TransformationsSection, ProductsSection });
