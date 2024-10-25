export default {
  global: {
    componenteFormativo: 'Barra de herramientas',
    descripcionCurso:
      'El componente formativo describe el uso de la barra de herramientas en Adobe Illustrator, destacando su importancia en el diseño gráfico vectorial. Presenta dos configuraciones: una versión compacta para flujos de trabajo básicos y otra avanzada con herramientas especializadas. Además, explora las herramientas de selección, dibujo, texto, pintura y reformado, que facilitan la creación y modificación de gráficos vectoriales con precisión y flexibilidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Barra de herramientas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas de selección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Herramientas de dibujo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas de texto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas de pintura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Herramientas para reformar',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Herramienta bote de pintura interactiva.',
      referencia:
        'Stefan, A. (2016). 10 Herramientas de Illustrator que todo diseñador debería estar usando.',
      tipo: 'Artículo',
      link:
        'https://design.tutsplus.com/es/tutorials/10-herramientas-de-illustrator-que-todo-disenador-deberia-estar-usando--cms-25968',
    },
  ],
  glosario: [
    {
      termino: '<i>Artboard</i>',
      significado:
        'área delimitada en la que se crea y edita contenido, similar a una página en un documento impreso.',
    },
    {
      termino: 'Barra de herramientas',
      significado:
        'conjunto de herramientas en Adobe Illustrator que permite crear y modificar gráficos vectoriales.',
    },
    {
      termino: 'Cuentagotas',
      significado:
        'herramienta que permite copiar atributos de color y estilo de un objeto y aplicarlos a otro.',
    },
    {
      termino: 'Degradado',
      significado:
        'transición suave entre dos o más colores que se aplica a objetos vectoriales.',
    },
    {
      termino: 'Herramienta de selección',
      significado:
        'permite seleccionar, mover y transformar objetos enteros en la mesa de trabajo.',
    },
    {
      termino: 'Lazo',
      significado:
        'herramienta que permite realizar una selección libre a mano alzada alrededor de puntos de ancla o segmentos de trazado.',
    },
    {
      termino: 'Malla',
      significado:
        'herramienta que permite crear degradados complejos dentro de un objeto vectorial.',
    },
    {
      termino: 'Pincel',
      significado:
        'herramienta que dibuja trazos siguiendo un patrón predefinido, con distintas formas, texturas y tamaños.',
    },
    {
      termino: 'Selección de grupos',
      significado:
        'herramienta que permite seleccionar y manipular elementos individuales dentro de un grupo sin desagruparlos.',
    },
    {
      termino: 'Texto en trazado',
      significado:
        'permite escribir texto a lo largo de una línea curva o trazado.',
    },
  ],
  referencias: [
    {
      referencia: 'Adobe. (2015). Ayuda de Adobe Illustrator CC. ',
      link:
        'https://helpx.adobe.com/archive/es/illustrator/cc/2015/illustrator_reference.pdf',
    },
    {
      referencia:
        'Adobe (2024). Presentación de la Guía del usuario de Illustrator. ',
      link: 'https://helpx.adobe.com/co/illustrator/user-guide.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'José Luis Díaz Carrillo',
          cargo: 'Experto temático',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y productor audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
