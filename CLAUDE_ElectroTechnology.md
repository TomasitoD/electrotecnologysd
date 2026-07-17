# CLAUDE.md — Electro Technology (Landing Starter · Alta Conversión)

> Contexto persistente para Claude Code / Antigravity IDE.
> Léelo completo al inicio de cada sesión antes de tocar código.
> Este archivo manda: si algo aquí contradice un impulso de "reescribir
> desde cero" o "agregar features extra", gana este archivo.

---

## 0. Resumen en una línea

Landing de una sola página (paquete Starter) para una tienda de electrodomésticos
y tecnología en Santo Domingo Este, RD. **Objetivo único: convertir visitantes en
compradores vía WhatsApp.** Sin e-commerce propio, sin carrito, sin base de datos.
Toda la "compra" ocurre en un chat de WhatsApp con el dueño.

---

## 1. La agencia que construye esto

**ResireAgency** — agencia web local, Santo Domingo Este, República Dominicana.

### Contexto de mercado (nunca lo olvides)
- **80%+ del tráfico en RD es celular.** Mobile-first no es opcional, es la realidad.
- **WhatsApp es el canal de ventas #1 en RD.** El cliente dominicano no llena
  formularios ni llama; escribe por WhatsApp. Cada CTA apunta ahí.
- **El cliente tipo no sabe nada de web.** El pitch es visual (before/after), nunca
  técnico. El demo tiene que impresionar a alguien que nunca ha visto su negocio
  en una pantalla profesional.
- **Santo Domingo Este** tiene alta densidad de negocios sin presencia digital
  de calidad. La competencia en diseño web premium local es mínima.

### Modelo de negocio de ResireAgency
| Paquete | Precio USD | Precio RD$ | Qué incluye |
|---------|-----------|------------|-------------|
| **Starter** | $150–280 | RD$8,500–16,000 | Landing 1 página |
| Profesional | $350–600 | RD$20,000–34,000 | 4–6 páginas, SEO, animaciones |
| Premium | $700–1,400 | RD$40,000–80,000 | E-commerce, reservas, auth |
| **Mantenimiento** | $35–150/mo | según paquete | Actualizaciones + hosting |

**Regla de oro de cobro: 50% al firmar, 50% al entregar. Sin anticipo = sin trabajo. Siempre.**

### Costos operativos fijos de la agencia
- Claude Pro: $20/mo
- Google Workspace (@resireagency.com): $6/mo
- **Total: $26/mo**

### Proceso estándar de cliente
1. Prospección en Google Maps → auditar web actual del negocio.
2. Build del demo (2–4h) en Antigravity IDE → push a GitHub → Cloudflare Pages.
3. Outreach por WhatsApp / DM Instagram con link del demo.
4. Reunión / demo presencial o por video.
5. Contrato de 1 página + 50% de anticipo.
6. Entrega en producción (Hostinger + dominio real) en 3–7 días.
7. Mantenimiento mensual recurrente.

### Stack estándar de la agencia
- **Framework:** React + Vite
- **Estilos:** Tailwind CSS v4 con `@tailwindcss/vite`
- **Animaciones:** GSAP + ScrollTrigger
- **3D (cuando aplica):** Three.js + @react-three/fiber + @react-three/drei
- **IDE:** Antigravity IDE (Claude Code como motor primario de frontend)
- **Skill activo:** UI/UX Pro Max (nextlevelbuilder/ui-ux-pro-max-skill)
- **Deploy demo:** Cloudflare Pages (conectado a GitHub, auto-deploy en cada push)
- **Deploy producción:** Hostinger Business (~$5/mo por cliente)
- **Dominios:** Namecheap o NIC.do (~$10–15/año)
- **Control de versiones:** GitHub

---

## 2. El cliente y el negocio

- **Nombre comercial:** Electro Technology / Electro Tecnology (usan ambas grafías)
- **Tipo de negocio:** Tienda de electrodomésticos y tecnología — física + virtual.
- **Ubicación:** Residencial Jeisy III, Av. Egbert Morrison 25, Santo Domingo Este.
- **Reputación Google:** 4.3★ con solo 3 reseñas — muy poca visibilidad online.
- **Presencia digital actual:** Solo Instagram. **No tienen sitio web.** Google Maps
  tiene el campo "Añadir sitio web" vacío. Esta es la oportunidad.

### Propuesta de valor del negocio (la que comunica la landing)
- Envíos a todas partes del país 🏍️
- Pago contra entrega 💵💳
- Tienda física en SDE + canal virtual
- Garantía en todos los productos 🛡️

### Diferenciadores a destacar en la landing
1. **Pago contra entrega** — eliminador de fricción #1 en RD. El dominicano
   desconfía de pagar antes de ver. Esto derrumba la barrera principal.
2. **Envíos nacionales** — no están limitados a SDE; llegan a todo el país.
3. **Tienda física** — genera confianza. Tienen dónde ir si hay un problema.
4. **Garantía real** — diferencia frente a revendedores informales.

### Datos de contacto reales (usar en CTAs, schema, footer — nunca los cambies)
- WhatsApp / teléfono principal: **809-456-5043** → `https://wa.me/18094565043`
- Teléfono tienda: (829) 342-0773
- Dirección: Residencial Jeisy III, Av. Egbert Morrison 25, Santo Domingo Este
- Horario: Todos los días · Cierra a las 7:00 pm
- Instagram: [@electrotecnologysd](https://www.instagram.com/electrotecnologysd/)
  · 3,344 seguidores · 253 publicaciones
- Facebook: [facebook.com/954883201039512](https://www.facebook.com/954883201039512)

### Identidad visual del cliente (respetar — ya existe y tiene coherencia)
- **Paleta:** navy oscuro profundo como base, azul eléctrico/cian como acento,
  blanco para texto. Exactamente lo que muestra su logo actual.
  - Fondo base: `#050d24` → `#0a1a3f` (navy)
  - Acento primario: `#00b4d8` → `#0077b6` (cian/azul eléctrico)
  - Texto principal: `#ffffff`
  - Texto secundario: `#94a3b8`
- **Motivo decorativo:** redes de circuitos + hexágonos (directo de su logo).
  Usar como fondo animado sutil — bajo opacity, nunca protagonista.
- **Tipografía:** Inter o Outfit. Moderna, tecnológica, limpia.
- **Tono:** confiable, accesible, dominicano. No frío ni corporativo.

---

## 3. Objetivo de este proyecto (paquete Starter)

Este es un **demo de ventas**, no un sitio en producción todavía.

**Objetivo del demo:** que el dueño de Electro Technology vea su negocio
representado de forma profesional en una URL pública y diga "quiero eso".

**Objetivo de la landing en producción:** que el visitante que llegue desde
Instagram / Google / WhatsApp entienda en 5 segundos qué venden y haga clic
en WhatsApp para comprar.

**Métrica de éxito:** clics en botones de WhatsApp. Todo lo demás es secundario.

### Lo que este paquete Starter incluye (scope cerrado)
- ✅ Landing de 1 página con todas las secciones descritas abajo
- ✅ Botón flotante de WhatsApp en toda la página
- ✅ Schema.org LocalBusiness JSON-LD
- ✅ Meta tags OG completos
- ✅ Google Analytics 4 (placeholder comentado — se activa post-cierre)
- ✅ Diseño mobile-first responsivo
- ✅ Animaciones GSAP scroll-reveal
- ✅ Deploy en Cloudflare Pages (demo) / Hostinger (producción)

### Lo que NO entra en Starter (scope fuera — se cotiza aparte si piden)
- ❌ Catálogo de productos con fichas individuales → Profesional o Premium
- ❌ Carrito de compras o pasarela de pago → Premium
- ❌ Sistema de pedidos online → Premium
- ❌ Blog o sección de noticias → Profesional
- ❌ Login / cuentas de usuario → Premium
- ❌ Integración con inventario o POS → Premium + cotización especial

---

## 4. Arquitectura técnica (simple — es una SPA estática)

```
React + Vite (SPA de una sola ruta)
      ↓
Build → dist/
      ↓
Cloudflare Pages (demo) / Hostinger (producción)
```

**No hay backend.** No hay base de datos. No hay variables de entorno secretas.
El formulario de contacto (si se incluye) usa EmailJS o Formspree → reenvía al
WhatsApp del cliente. Toda la "lógica de negocio" ocurre en el chat de WhatsApp.

### Comandos
```bash
npm run dev       # desarrollo local
npm run build     # build → dist/
npm run preview   # previsualizar build antes de deploy
```

### Deploy del demo
1. `npm run build` → genera `dist/`
2. Push a GitHub → Cloudflare Pages auto-despliega
3. URL pública lista para compartir por WhatsApp con el cliente

---

## 5. Sistema de diseño del proyecto

Definir tokens en `src/index.css` vía `@theme` de Tailwind v4. **No usar
valores hardcodeados — siempre tokens.**

### Paleta de colores
```css
@theme {
  /* Fondos navy */
  --color-navy-950: #020812;
  --color-navy-900: #050d24;
  --color-navy-800: #0a1a3f;
  --color-navy-700: #0d2258;

  /* Acento eléctrico */
  --color-electric-400: #38bdf8;
  --color-electric-500: #00b4d8;
  --color-electric-600: #0077b6;
  --color-electric-700: #005e8e;

  /* Texto */
  --color-white: #ffffff;
  --color-gray-300: #d1d5db;
  --color-gray-400: #94a3b8;

  /* Fuentes */
  --font-body: 'Inter', 'Outfit', sans-serif;
}
```

### Clases utilitarias a definir y reutilizar
- `.btn-primary` — CTA principal: fondo azul eléctrico, texto blanco, sombra glow
- `.btn-whatsapp` — CTA verde WhatsApp (#25D366)
- `.glass-card` — glassmorphism navy con borde eléctrico sutil
- `.text-electric-gradient` — texto con degradado cian → azul
- `.eyebrow` — etiqueta de sección en mayúsculas con líneas laterales
- `.circuit-bg` — fondo con red de circuitos animada (SVG o canvas)

### Componentes clave a construir
- `WhatsAppFloat` — botón flotante esquina inferior derecha, z-50, en toda la página
- `TrustBar` — barra horizontal de 4 ítems de confianza
- `CategoryCard` — card glassmorphism con ícono + nombre categoría + link WhatsApp
- `FeatureCard` — card con hover tilt 3D para "¿Por qué elegirnos?"
- `ReviewCard` — reseña de Google con estrellas y nombre
- `HowToBuy` — timeline de 3 pasos horizontal/vertical

---

## 6. Estructura de la landing (secciones en orden exacto)

### 1. Navbar
- Logo texto "ELECTRO TECHNOLOGY" + ícono de circuito inline
- Links de navegación: smooth scroll a secciones (Inicio · Productos · Entrega · Contacto)
- CTA sticky: "Comprar por WhatsApp" → `https://wa.me/18094565043`
- Mobile: hamburger menu

### 2. Hero
- Headline: **"Tecnología en tu hogar"** (tagline real del negocio)
- Subheadline: "Electrodomésticos con garantía, envíos a todo el país y pago contra entrega."
- CTA primario: **[Comprar ahora →]** → WhatsApp
- CTA secundario: **[Ver productos ↓]** → scroll suave a sección categorías
- Fondo: partículas / red de circuitos animada (canvas o Three.js ligero)
- Degradado overlay navy de abajo hacia arriba

### 3. Trust Bar
Barra horizontal de 4 ítems, siempre visible, justo bajo el hero:

| Ícono | Texto |
|-------|-------|
| 🚚 | Envíos a todo el país |
| 💵 | Pago contra entrega |
| 🛡️ | Garantía en todos los productos |
| 🏪 | Tienda física en SDE |

### 4. Categorías de productos
- Título sección: "¿Qué estás buscando?"
- Grid: 2 columnas mobile → 3 columnas desktop
- 6 cards glassmorphism:
  1. Televisores
  2. Aires acondicionados
  3. Celulares
  4. Electrodomésticos del hogar
  5. Audio y sonido
  6. Accesorios tech
- Cada card: ícono grande + nombre + flecha "Ver más →"
- Click en card → WhatsApp con mensaje pre-llenado:
  `"Hola, me interesa ver sus [Televisores]"`

### 5. ¿Por qué elegirnos?
- Título: "Tu compra, garantizada"
- 4 cards con hover tilt:
  1. ✅ **Garantía real** — "Todos nuestros productos tienen garantía."
  2. 🏍️ **Entrega rápida** — "Llevamos tu pedido a cualquier punto del país."
  3. 💳 **Facilidades de pago** — "Efectivo, transferencia o pago contra entrega."
  4. 👨‍💼 **Atención personalizada** — "Equipo disponible para asesorarte."

### 6. Cómo comprar (3 pasos)
- Título: "Comprar es fácil"
- Timeline: horizontal en desktop, vertical en mobile
  1. Escríbenos por WhatsApp
  2. Elige tu producto
  3. Recíbelo en casa
- CTA al final: **[Empezar ahora →]** → WhatsApp

### 7. Reseñas
- Título: "Lo que dicen nuestros clientes"
- 3 cards con las reseñas reales de Google:
  - ⭐⭐⭐⭐⭐ "Excelente" — Ysidro L. (Local Guide)
  - ⭐⭐⭐⭐⭐ — Yarlis D. (Local Guide)
  - ⭐⭐⭐⭐⭐ — Miriam T.
- Badge: "4.3★ · Google Maps"

### 8. CTA Final
- Fondo: degradado azul eléctrico
- Headline: "¿Listo para tu próxima compra?"
- Subtext: "Escríbenos ahora y te asesoramos sin compromiso."
- Botón grande verde: **[💬 Chatear por WhatsApp]**
- Datos de contacto:
  - 📱 809-456-5043
  - 📱 829-342-0773
  - 🕐 Todos los días · Cierra 7:00 pm

### 9. Footer
- Logo + descripción corta del negocio
- Links rápidos (scroll)
- Dirección: Residencial Jeisy III, Av. Egbert Morrison 25, SDE
- Íconos sociales: Instagram · Facebook · WhatsApp
- © 2025 Electro Technology · Diseñado por ResireAgency

---

## 7. Estándares técnicos obligatorios (todos los proyectos de la agencia)

```
✅ Mobile-first absoluto — probar en viewport 375px antes de desktop
✅ WhatsApp flotante en toda la página (z-50, esquina inferior derecha)
✅ Schema.org LocalBusiness JSON-LD en index.html
✅ Meta tags OG completos: title, description, og:image, og:type, canonical
✅ Google Analytics 4: gtag placeholder en index.html (COMENTADO — activar post-cierre)
✅ Scroll reveal GSAP en todas las secciones (fade-up + stagger en cards)
✅ Animaciones suaves — 60fps objetivo, especialmente en móvil gama media
✅ Código comentado en español
✅ Cero dependencias innecesarias — bundle ligero
✅ Build limpio: npm run build sin warnings ni errores
```

### Schema.org a implementar
```json
{
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  "name": "Electro Technology",
  "telephone": ["+1-809-456-5043", "+1-829-342-0773"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Egbert Morrison 25, Residencial Jeisy III",
    "addressLocality": "Santo Domingo Este",
    "addressCountry": "DO"
  },
  "openingHours": "Mo-Su 00:00-19:00",
  "url": "https://electrotechnology.com.do",
  "sameAs": [
    "https://www.instagram.com/electrotecnologysd/",
    "https://www.facebook.com/954883201039512"
  ]
}
```

### Mensajes WhatsApp pre-llenados (centralizar en `src/lib/constants.js`)
```js
export const WHATSAPP_BASE = "https://wa.me/18094565043";

export const WA = {
  general:     `${WHATSAPP_BASE}?text=Hola%2C+me+interesa+saber+m%C3%A1s+sobre+sus+productos`,
  televisores: `${WHATSAPP_BASE}?text=Hola%2C+me+interesa+ver+sus+Televisores`,
  aires:       `${WHATSAPP_BASE}?text=Hola%2C+me+interesa+ver+sus+Aires+Acondicionados`,
  celulares:   `${WHATSAPP_BASE}?text=Hola%2C+me+interesa+ver+sus+Celulares`,
  hogar:       `${WHATSAPP_BASE}?text=Hola%2C+me+interesa+ver+sus+Electrodom%C3%A9sticos`,
  audio:       `${WHATSAPP_BASE}?text=Hola%2C+me+interesa+ver+su+Audio+y+Sonido`,
  accesorios:  `${WHATSAPP_BASE}?text=Hola%2C+me+interesa+ver+sus+Accesorios+Tech`,
};
```

---

## 8. Reglas de código que NO se rompen

- **NO usar localStorage ni sessionStorage** — no se necesita estado persistente
  en este proyecto y puede fallar en entornos de preview.
- **NO agregar features fuera del scope Starter** sin pedirlo explícitamente.
  Si algo no está en la sección 6 de este archivo, no va.
- **NO inventar datos de contacto.** Los números, dirección y redes sociales
  están en la sección 2. Son los únicos válidos.
- **NO usar colores fuera de la paleta** definida en sección 5.
- **NO hardcodear URLs de WhatsApp** — siempre importar de `constants.js`.
- **NO commitear ningún archivo `.env`** — aunque este proyecto no tenga secretos,
  mantener el hábito del equipo.

---

## 9. Plan de ejecución (una fase, un entregable)

Este proyecto es de **una sola fase** — es una landing Starter, no un proyecto
multi-fase como los proyectos Premium.

| Paso | Acción | Verificación |
|------|--------|--------------|
| 1 | Scaffold React + Vite + Tailwind v4 | `npm run dev` corre sin errores |
| 2 | Definir tokens y clases utilitarias en `index.css` | Paleta visible y correcta |
| 3 | Construir componentes base (Navbar, WhatsAppFloat, Footer) | Visibles en mobile 375px |
| 4 | Construir secciones en orden (Hero → Trust → Categorías → Features → Pasos → Reseñas → CTA) | Revisar entre cada sección |
| 5 | Agregar Schema.org JSON-LD + meta tags OG en `index.html` | Validar con Rich Results Test |
| 6 | Agregar animaciones GSAP scroll-reveal | Fluidas en mobile |
| 7 | `npm run build` → push GitHub → Cloudflare Pages | URL pública funcional |

**Mostrar la URL de Cloudflare Pages al terminar el paso 7.**
Esa URL es la que se envía al cliente en el outreach.

---

## 10. Estrategia de outreach post-demo

Una vez desplegado en Cloudflare Pages:

**Canal primario:** WhatsApp al 809-456-5043
**Canal secundario:** DM en Instagram @electrotecnologysd

**Hook del mensaje:** No empezar vendiendo. Empezar mostrando. El link del demo
con OG preview (su logo, su nombre, su color) hace el trabajo visual solo.
El mensaje complementa — es breve, directo, con beneficio claro.

**Argumento de cierre si preguntan el precio:**
> "El paquete es RD$[8,500–16,000], pago al 50% al firmar y 50% al entregar.
> Incluye la página completa, dominio y hosting el primer mes.
> Después es RD$[X]/mes para mantenerla activa y actualizada."

**Upsell natural post-cierre:**
- Más páginas (catálogo, fichas de producto) → Paquete Profesional
- Sistema de pedidos online / carrito → Paquete Premium
- Mantenimiento mensual ($35–75/mo) → recurrente automático
