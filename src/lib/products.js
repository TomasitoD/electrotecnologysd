// Productos de MUESTRA para el demo del catálogo Profesional.
// Specs genéricas, sin marcas ni precios inventados — se reemplazan por
// el inventario real del cliente una vez acepte el paquete Profesional.

export const PRODUCTS = {
  televisores: {
    categoryName: 'Televisores',
    items: [
      {
        slug: 'smart-tv-43-full-hd',
        name: 'Smart TV 43" Full HD',
        specs: ['Pantalla 43" Full HD', 'Sistema operativo Smart TV', 'HDMI x3, USB x2', 'Control remoto por voz'],
        description: 'Televisor inteligente ideal para sala o habitación, con acceso directo a tus apps de streaming favoritas.',
      },
      {
        slug: 'smart-tv-55-4k-uhd',
        name: 'Smart TV 55" 4K UHD',
        specs: ['Pantalla 55" 4K UHD', 'HDR10', 'Sistema operativo Smart TV', 'HDMI x4, USB x2'],
        description: 'Mayor definición de imagen para espacios más grandes, con soporte HDR para mejor contraste y color.',
      },
    ],
  },
  neveras: {
    categoryName: 'Neveras',
    items: [
      {
        slug: 'nevera-top-mount-11p',
        name: 'Nevera Top Mount 11p³',
        specs: ['Capacidad 11 pies cúbicos', 'Congelador superior', 'Estantes de vidrio templado', 'Control de temperatura mecánico'],
        description: 'Tamaño compacto ideal para apartamentos o familias pequeñas, con buen aprovechamiento de espacio.',
      },
      {
        slug: 'nevera-side-by-side-20p',
        name: 'Nevera Side by Side 20p³',
        specs: ['Capacidad 20 pies cúbicos', 'Puertas side by side', 'Dispensador de agua', 'Control de temperatura digital'],
        description: 'Mayor capacidad para familias grandes, con organización independiente entre refrigerador y congelador.',
      },
    ],
  },
  aires: {
    categoryName: 'Aires acondicionados',
    items: [
      {
        slug: 'split-inverter-12000btu',
        name: 'Split Inverter 12,000 BTU',
        specs: ['12,000 BTU', 'Tecnología Inverter (ahorro de energía)', 'Control remoto', 'Modo frío/deshumidificador'],
        description: 'Ideal para habitaciones medianas, con tecnología Inverter para menor consumo eléctrico.',
      },
      {
        slug: 'split-convencional-18000btu',
        name: 'Split Convencional 18,000 BTU',
        specs: ['18,000 BTU', 'Compresor convencional', 'Control remoto', 'Filtro de aire lavable'],
        description: 'Mayor capacidad de enfriamiento para espacios amplios como salas o áreas comerciales pequeñas.',
      },
    ],
  },
  lavadoras: {
    categoryName: 'Lavadoras y Secadoras',
    items: [
      {
        slug: 'lavadora-automatica-16kg',
        name: 'Lavadora automática 16kg',
        specs: ['Capacidad 16kg', 'Carga superior', 'Varios ciclos de lavado', 'Tina de acero inoxidable'],
        description: 'Lavadora automática de alta capacidad para familias numerosas, fácil de usar y mantener.',
      },
      {
        slug: 'secadora-electrica-13kg',
        name: 'Secadora eléctrica 13kg',
        specs: ['Capacidad 13kg', 'Varios niveles de calor', 'Sensor de secado', 'Tambor de acero inoxidable'],
        description: 'Complemento ideal para tu lavadora, con secado uniforme y ciclos ajustables.',
      },
    ],
  },
  estufas: {
    categoryName: 'Estufas y Cocinas',
    items: [
      {
        slug: 'estufa-4-hornillas-gas',
        name: 'Estufa de 4 hornillas — a gas',
        specs: ['4 hornillas a gas', 'Encendido eléctrico', 'Horno con termostato', 'Superficie de fácil limpieza'],
        description: 'Estufa a gas de uso diario, con horno incorporado y encendido eléctrico para mayor comodidad.',
      },
      {
        slug: 'estufa-electrica-con-horno',
        name: 'Estufa eléctrica con horno',
        specs: ['4 hornillas eléctricas', 'Horno eléctrico integrado', 'Panel de control digital', 'Superficie de vitrocerámica'],
        description: 'Alternativa eléctrica para cocinas sin conexión de gas, con panel de control digital.',
      },
    ],
  },
  celulares: {
    categoryName: 'Celulares',
    items: [
      {
        slug: 'smartphone-gama-media-128gb',
        name: 'Smartphone gama media 128GB',
        specs: ['128GB de almacenamiento', 'Cámara doble', 'Batería de larga duración', 'Garantía real incluida'],
        description: 'Buen balance entre rendimiento y precio, ideal para uso diario y redes sociales.',
      },
      {
        slug: 'smartphone-gama-alta-256gb',
        name: 'Smartphone gama alta 256GB',
        specs: ['256GB de almacenamiento', 'Cámara triple', 'Carga rápida', 'Garantía real incluida'],
        description: 'Mayor capacidad y rendimiento para quienes buscan lo último en tecnología móvil.',
      },
    ],
  },
}

export function getCategory(categorySlug) {
  return PRODUCTS[categorySlug] ?? null
}

export function getProduct(categorySlug, productSlug) {
  const category = getCategory(categorySlug)
  if (!category) return null
  const product = category.items.find((item) => item.slug === productSlug)
  return product ? { ...product, categorySlug, categoryName: category.categoryName } : null
}
