const instrumentData = [
  {
    id: 1,
    name: "EPIPHONE TOBY STDARD-IV",
    price: "100$",
    category: "cuerdas",
    Description:
      "Bajo de 4 cuerdas, tipo pasivo, ideal para niños, adultos de pequeña estatura o con predilección por bajos de escala corta. Posee 22 trastes de tamaño Jumbo.",
    Tag: "4.5 Ideal para principiantes",
    cardimg: "./assets/Img/Bass/EPIPHONE_TOBY_STDARD-IV.webp",
  },
  {
    id: 2,
    name: "IBANEZ GSRM20PW",
    price: "120$",
    category: "cuerdas",
    Description:
      "Bajo de 4 cuerdas con escala corta (726 mm) y electrónica de tipo pasivo. color blaco perla. Cuerpo de okoume, mástil de arce, diapasón de jatoba, 22 trastes. Posee dos pastillas single coil 'J' en el puente y tipo 'P' en la zona del mástil. 3 perillas de control, dos para el volumen y otra para configuración del tono.",
    Tag: "5.0 Equalizador auto pasivo",
    cardimg: "./assets/Img/Bass/IBANEZ_GSRM20PW.webp",
  },
  {
    id: 3,
    name: "IBANEZGIO GSR200-JB",
    price: "150$",
    category: "cuerdas",
    Description:
      "Bajo eléctrico color azul, 4 cuerdas de escala larga (864 mm). Tipo activo. Cuerpo de álamo y mástil de arce. 22 trastes Pastillas single coil PSNDJ + PSNDP. Tiene 4 perillas de control: volumen, tono y equalizador. (Pilas no incluidas)",
    Tag: "4.7 Excelente para estudio",
    cardimg: "./assets/Img/Bass/IBANEZGIO_GSR200-JB.webp",
  },
  {
    id: 4,
    name: "JACKSON JS1X",
    price: "180$",
    category: "cuerdas",
    Description:
      "Bajo eléctrico 4 cuerdas y escala larga (864 mm).  De tipo activo. Cuerpo  de tilo, arce y palosanto. Diapasón de 24 trastes. 2 pastillas single coil. Posee 4 perillas: volumen, ecualización de alta y baja frecuencia. Los clavijeros y puente de montaje empotrado. Tiene un alma metálica ajustable. Presenta un diseño de Michael Tobias. Sonidos expresivos y versátiles",
    Tag: "5.0 Ideal para Profesionales",
    cardimg: "./assets/Img/Bass/JACKSON_JS1X.jpg",
  },
  {
    id: 5,
    name: "MARCUS MILLER V3",
    price: "200$",
    category: "cuerdas",
    Description:
      "Bajo eléctrico Marcus Miller V3 TS 2nd Gen. 4 cuerdas con escala larga (864 mm). Configurar como activo o pasivo. Cuerpo de caoba, arce y palisandro.  Diapason de 20 trastes. 2 pastillas single coil Marcus Standard Jazz Bass. 5 perillas: volumen y tono, selector de pastillas, agudos, medios/frecuencia media y minipalanca (Activo/Pasivo)",
    Tag: "5.0 Ideal para Profesionales",
    cardimg: "./assets/Img/Bass/MARCUS_MILLER_V3.webp",
  },
  {
    id: 6,
    name: "SBM23PT PINK TWILIGHT SX",
    price: "100$",
    category: "cuerdas",
    Description:
      "Bajo eléctrico estilo Precission Bass. Color Pink Twilight. Cuerpo de tilo y Arce. 22 trastes",
    Tag: "4.5 Ideal para principiantes",
    cardimg: "./assets/Img/Bass/SBM2PT_SX2.jpg",
  },
  {
    id: 7,
    name: "Lp Aspire",
    price: "250$",
    category: "percusion",
    Tag: "5.0 Doble cuero curado",
    Description: "Conga Serie Lp Aspire Con Soporte Lpa646-dw Latin Percussion",
    cardimg: "./assets/Img/Congas/Lp_Aspire.png",
  },
  {
    id: 8,
    name: "Parquer Light",
    price: "190$",
    category: "percusion",
    Description: "Conga Parquer Light De Fibra De Vidrio 11 2101100bk Cuota",
    Tag: "4.5 cuero simple ajustable",
    cardimg: "./assets/Img/Congas/Parquer_Light.png",
  },
  {
    id: 9,
    name: "Meinl_Headliner",
    price: "100$",
    category: "percusion",
    Description: "Conga Meinl Headliner Hc512 11 + 12 + Soportes Color Natural",
    Tag: "4.5 cuero simple ajustable",
    cardimg: "./assets/Img/Congas/Meinl_Headliner.png",
  },
  {
    id: 10,
    name: "Denver Ls-105f",
    price: "100$",
    category: "percusion",
    Tag: "5.0 Ideal para Estudio",
    Description: "Bongoes Denver Ls-105f - Percusion",
    cardimg: "./assets/Img/Congas/Denver_Ls-105f.png",
  },
  {
    id: 11,
    name: "Meinl Hb50bk",
    price: "100$",
    category: "percusion",
    Description: "Bongo Meinl Hb50bk Parche Bufalo 6 1/2 Y 7 1/2",
    Tag: "5.0 Ideal para Estudio",
    cardimg: "./assets/Img/Congas/Meinl_Hb50bk.png",
  },
  {
    id: 12,
    name: "Toca 3170nf Nf Elite Pro",
    price: "100$",
    category: "percusion",
    Description: "Bongos Toca 3170nf Nf Elite Pro 7 Y 8 1/2 Natural Maple Cuo",
    Tag: "5.0 Ideal para Estudio",
    cardimg: "./assets/Img/Congas/Toca_3170nf_Nf_Elite_Pro.png",
  },
  {
    id: 13,
    name: "AKAI Profesional MPK Mini MK3",
    price: "100$",
    category: "keyboarding",
    Tag: "5.0 Ideal para Estudio",
    Description:
      "AKAI Profesional MPK Mini MK3 | Controlador de teclado MIDI USB de 25 teclas con 8 almohadillas de percusión con retroiluminación, 8 botones y software de producción musical incluido",
    cardimg: "./assets/Img/Keyboarding/Toca_3170nf_Nf_Elite_Pro.png",
  },
  {
    id: 14,
    name: "Nord Electro 6D 61",
    price: "100$",
    category: "keyboarding",
    Description:
      "Nord Electro 6D 61 Etapa Piano 61 Nota Semi-Ponderada Waterfall Keybed",
    Tag: "5.0 Ideal para Profesionales",
    cardimg: "./assets/Img/Keyboarding/Nord_Electro.png",
  },
  {
    id: 15,
    name: "Roland Juno-60 Keyboard Synthesizer",
    price: "100$",
    category: "keyboarding",
    Description: "Roland Juno-Ds61 61, Teclado Sintetizador",
    Tag: "5.0 Pedal de autosustein incluido",
    cardimg: "./assets/Img/Keyboarding/Roland_Juno-60.png",
  },
  {
    id: 16,
    name: "Casio Xw-p1 Sensitivo",
    price: "100$",
    category: "keyboarding",
    Description: "Sintetizador Casio Xw-p1 Midi Usb Sensitivo De 61 Teclas",
    Tag: "4.6 5 octavas, con sensibilidad",
    cardimg: "./assets/Img/Keyboarding/Casio_Xw-p1.png",
  },
  {
    id: 17,
    name: "Teclado Órgano Yamaha Psr-ew300 76 Teclas",
    price: "100$",
    category: "keyboarding",
    Description:
      "Yamaha Psr-Ew310 Adaptador De Potencia Teclado Portable De 76 Teclas Vendido Por Separado",
    cardimg: "./assets/Img/Keyboarding/Yamaha.png",
  },
  {
    id: 18,
    name: "Yamaha Psr E473",
    price: "100$",
    category: "keyboarding",
    Description: "Yamaha Teclado Portátil De 61 Teclas (Psre473)",
    cardimg: "./assets/Img/Keyboarding/Yamaha2.png",
  },
  {
    id: 19,
    name: "Mini Timbales con cencerro",
    price: "100$",
    category: "percusion",
    Description:
      "Latin Percussion John Dolmayan Mini Timbales con cencerro y paquete de montaje",
    cardimg: "./assets/Img/Timbals/Timbals.png",
  },
  {
    id: 20,
    name: "Lpa256 Aspire Series",
    price: "100$",
    category: "percusion",
    Description:
      "Latin percusión Lpa256 Aspire Series, Juego De Timbale De 13 Y 14 Pulgadas Con Campana",
    cardimg: "./assets/Img/Timbals/Timbals2.png",
  },
  {
    id: 21,
    name: "Timbales Meinl Signature",
    price: "100$",
    category: "percusion",
    Description: "Timbales Marca Meinl Signature Diego Gale",
    cardimg: "./assets/Img/Timbals/Timbals3.png",
  },
  {
    id: 22,
    name: "Lp258Slp Tito Puente Thunder",
    price: "100$",
    category: "percusion",
    Description:
      "Latin Percusio Lp258Slp Tito Puente Thunder Timbales Stand De Acero",
    cardimg: "./assets/Img/Timbals/Timbals4.png",
  },
  {
    id: 23,
    name: "Jean Paul USA TR-330",
    price: "100$",
    category: "metales",
    Description: "Trompeta Jean Paul USA TR-330, estándar, en Bb",
    cardimg: "./assets/Img/Trumpet/Trumpet.png",
  },
  {
    id: 24,
    name: "Yamaha Ytr 2330",
    price: "100$",
    category: "metales",
    Description: "Yamaha Ytr 2330, Trumpeta Para Estudiantes",
    cardimg: "./assets/Img/Trumpet/Trumpet2.png",
  },
  {
    id: 25,
    name: "Apollo Trombón Tenor",
    price: "100$",
    category: "metales",
    Description:
      "Apollo Trombón Tenor en lacado dorado, completo con estuche y accesorios (Student)",
    cardimg: "./assets/Img/Trumpet/Tromb.png",
  },
  {
    id: 26,
    name: "Trombon A Vara Tenor Bronce",
    price: "100$",
    category: "metales",
    Description: "Trombon A Vara Tenor Bronce Estuche Rigido Aceite Kit Combo",
    cardimg: "./assets/Img/Trumpet/Tromb2.png",
  },
  {
    id: 27,
    name: "Summina Eb Saxofón Alto/ Gold E Flat Saxo 82Z",
    price: "100$",
    category: "metales",
    Description:
      "summina Eb Saxofón Alto Latón Lacquered Gold E Flat Saxo 82Z Instrumento de viento de madera con cepillo de limpieza, guantes de tela, funda acolchada",
    cardimg: "./assets/Img/Trumpet/Saxo.png",
  },
  {
    id: 28,
    name: "Apollo Saxofón alto",
    price: "100$",
    category: "metales",
    Description:
      "Apollo Saxofón alto en laca dorada con almohadillas de cuero, completo con funda y accesorios",
    cardimg: "./assets/Img/Trumpet/Saxo2.png",
  },
];

// funcion que divide el array en X cantidad de Arrays
const DivideProductsInParts = (size) => {
  let productList = [];

  for (let i = 0; i < instrumentData.length; i += size) {
    productList.push(instrumentData.slice(i, i + size));
  }
  return productList;
};

// Appstate
const AppState = {
  products: DivideProductsInParts(6),
  currentProductsIndex: 0,
  productsLimit: DivideProductsInParts(6).length,
  activeFilter: null,
};
