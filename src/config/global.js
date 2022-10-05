export default {
  global: {
    componenteFormativo:
      'Manuales de suscripción, inspección y elaboración de informes',
    descripcionCurso:
      'La expedición de contrato de una póliza de riesgo surge de la necesidad de protección frente a un peligro. Es menester, entonces, contratar un seguro para evitar o mitigar consecuencias desfavorables, y es por esto que las pólizas son fundamentales para ahorrar y proteger. Esto implica tener en cuenta: amparos, exclusiones, valores asegurados, deducibles, tasas, amparos adicionales, indemnizaciones, coberturas y modificaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Manuales de suscripción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Componentes y tipos de indemnizaciones',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Cobertura de aseguramiento',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Informe de inspección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de informes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '2.2 Solicitud de asegurabilidad',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Documentación asociada a los contratos de seguros',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión de la información',
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
      tema: 'Componentes',
      referencia:
        ' Decreto 410 de 1971. Por el cual se expide el Código de Comercio. 27 de marzo de 1971. D.O. No. 33.339.',
      tipo: 'Norma',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=41102',
    },
  ],
  glosario: [
    {
      termino: 'Asegurado',
      significado:
        'persona o bien que recibe la protección de la aseguradora, y se obliga a indemnizar las pérdidas o los perjuicios que puedan sobrevenir a la otra parte, en casos determinados, fortuitos o de fuerza mayor.',
    },
    {
      termino: 'Asegurador',
      significado:
        'entidad o persona jurídica, que expide la póliza y se compromete a cubrir el riesgo con el fin de indemnizar o reparar el daño o la pérdida, cuando cuando se presente la ocurrencia.',
    },
    {
      termino: 'Asegurar',
      significado:
        'prevenir las consecuencias económicas nocivas o que generen daño de una situación futura e incierta.',
    },
    {
      termino: 'Beneficiario',
      significado:
        'el designado como titular de los derechos en caso de siniestro. Lo nombra el contratante de la póliza.',
    },
    {
      termino: 'Bienes asegurados',
      significado: 'son aquellos que se definen con el objeto asegurable.',
    },
    {
      termino: 'Cobertura',
      significado:
        'garantía que acepta la aseguradora para encargarse de las indemnizaciones.',
    },
    {
      termino: 'Contratante',
      significado:
        'aquella persona natural o jurídica, quien solicita el seguro a favor, ya sea para un beneficiario o a título propio.',
    },
    {
      termino: 'Cotización',
      significado:
        'valor comercial de un seguro previamente analizado por una compañía aseguradora; cumple con todas las condiciones y coberturas definidas.',
    },
    {
      termino: 'Deducible',
      significado:
        'cantidad definida por la aseguradora, como valores no indemnizables; se considera que este valor lo debe pagar el beneficiario.',
    },
    {
      termino: 'Exclusiones',
      significado:
        'se refiere a aquellos riesgos que no son asegurables por las aseguradoras y quedan excluidos expresamente en las cláusulas del contrato.',
    },
    {
      termino: 'Interés asegurable',
      significado:
        'el interés del tomador o asegurado, para que el siniestro asegurado no ocurra. Se expresa como ese vínculo entre el tomador y lo que asegura (la vida, un bien, algún patrimonio).',
    },
    {
      termino: 'Rama',
      significado:
        'conjunto de modalidades relativas de los seguros con base en los riesgos similares o con características similares.',
    },
    {
      termino: 'Seguro o cobertura',
      significado:
        'se refiere al riesgo que recae sobre el asegurado, por contraprestación del pago de una prima.',
    },
    {
      termino: 'Siniestro',
      significado:
        'serie de daños o perjuicios que son derivados de una causa.',
    },
    {
      termino: 'Valor asegurado',
      significado:
        'valor máximo que el asegurado le atribuye al objeto o bien asegurado, y se convierte en responsabilidad de la aseguradora.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fasecolda. (s.f.). Guía de seguros – ABC del Seguro. Fasecolda.',
      link:
        'https://fasecolda.com/cms/wp-content/uploads/2019/08/gua-de-seguros-abc-del-seguro.pdf',
    },
    {
      referencia:
        'Jaramillo Jaramillo, C., & Sánchez Calero, F. (2012). Derecho de seguros. Pontificia Universidad Javeriana.',

      link: '',
    },
    {
      referencia:
        'Ley 80 de 1993. Por la cual se expide el Estatuto General de Contratación de la Administración Pública. 8 de Octubre de 1993.D.O 41.094.',

      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=304',
    },
    {
      referencia:
        'Mejía Delgado, H. (2012). Seguros y finanzas para la familia. Ecoe Ediciones.',

      link: '',
    },
    {
      referencia:
        'Mejía Quijano, R. (2013). Identificación de riesgos. Editorial - Universidad EAFIT.',

      link: '',
    },
    {
      referencia:
        'Narváez Bonnet, J. (2011). El seguro de cumplimiento de contratos y obligaciones. Pontificia Universidad Javeriana.',

      link: '',
    },
    {
      referencia:
        'Palacios Sánchez, F. (2012). El seguro. Universidad de La Sabana.',

      link: '',
    },
    {
      referencia: 'Si Seguros. (s.f). Contrato de seguros.',

      link: 'https://www.siseguros.com.mx/WikiSeguros/Contrato-De-Seguros.php',
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
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
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
