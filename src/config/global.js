export default {
  global: {
    componenteFormativo: 'Creación de Bases de Datos NoSQL',
    descripcionCurso:
      'Las bases de datos no relacionales utilizan una variedad de modelos de datos que pueden accederse y administrarse en la nube. Existen gran variedad de gestores de bases de datos, unos gratuitos limitados y otros con licencias pagadas, depende del uso que se necesite, se deberá seleccionar aquel que se adapte a los requerimientos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Bases de datos en la nube',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'MongoDB Atlas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición, servicios, costos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Creación de una base de datos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Firebase',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición, servicios, costos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Creación de una base de datos',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia: 'Clúster - Ruta N. (2021). ',
      link:
        'https://www.rutanmedellin.org/es/recursos/abc-de-la-innovacion/item/cluster',
    },
    {
      referencia:
        'Digital55 (2020). Qué es Firebase: funcionalidades, ventajas y conclusiones. ',
      link:
        'https://www.digital55.com/desarrollo-tecnologia/que-es-firebase-funcionalidades-ventajas-conclusiones',
    },
    {
      referencia: 'Emmita. (2018). Base de datos NoSQL (MongoDB).',
      link:
        'https://medium.com/@Emmitta/base-de-datos-nosql-mongodb-3eaa8a1b1866',
    },
    {
      referencia: 'JSON. (2021).',
      link: 'https://www.json.org/json-es.html',
    },
    {
      referencia: 'Marketing. (2017). Almacenamiento en la nube.',
      link: 'https://www.tuyu.es/almacenamiento-en-la-nube',
    },
    {
      referencia: 'MongoDB. ¿Qué es MongoDB? (2021).',
      link: 'https://www.mongodb.com/es/what-is-mongodb',
    },
    {
      referencia: 'Ntxpro (2021).  Principales características de la Nube.',
      link: 'https://www.ntxpro.net/sistemas/caracteristicas-de-la-nube',
    },
    {
      referencia:
        'Sheldon, R., & Shore, J. (2021). Base de datos en la nube.  ',
      link:
        'https://www.computerweekly.com/es/definicion/Base-de-datos-en-la-nube',
    },
  ],
  glosario: [
    {
      termino: 'Cloud storage',
      significado:
        'forma de almacenar datos a través de servidores donde los datos quedan alojados en espacios de almacenamiento virtuales en vez de físicos. Marketing. (2017)',
    },
    {
      termino: 'Clúster',
      significado:
        'concentración de empresas en una zona geográfica o concentración de organizaciones. Ruta N. (2021)',
    },
    {
      termino: 'Colecciones',
      significado: 'agrupación de documentos Emmita. (2018).',
    },
    {
      termino: 'JSON',
      significado:
        'es el acrónimo de JavaScript Object Notation, es un formato para la representación de documentos. JSON (2021).',
    },
    {
      termino: 'Nube',
      significado:
        'nueva forma de almacenamiento de información. Ntxpro (2021).  ',
    },
    {
      termino: 'Proveedor de servicios',
      significado:
        'infraestructura desde donde se ejecutan las bases de datos en la nube. Sheldon, R., & Shore, J. (2021)',
    },
  ],
  complementario: [
    {
      texto:
        'Colectiva, N. (2019, June 16). Tutorial: Como Crear una Base de Datos en Firebase Realtime Database. Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=s-uS-gfP_Uc&t=2s&ab_channel=NubeColectiva',
    },
    {
      texto:
        'Fazt. (2020, octubre 28). Mongodb Atlas, Introducción Práctica. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=97FfXEy1zas&ab_channel=Fazt',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Marcela González Gómez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
