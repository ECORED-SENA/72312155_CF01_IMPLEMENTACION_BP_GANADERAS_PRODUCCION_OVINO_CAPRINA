export default {
  global: {
    Name: 'Implementación de las buenas prácticas ganaderas en la producción ovino-caprina',
    Description:
      'El componente formativo desarrolla los fundamentos, requisitos y procedimientos para planear y elaborar el plan de implementación de las Buenas Prácticas Ganaderas (BPG) en unidades productivas ovino-caprinas. Aborda el marco normativo, criterios de cumplimiento, diagnóstico de la unidad productiva, procesos, recursos, seguridad y salud en el trabajo, estándares de certificación, programación, cronogramas, protocolos, registros, documentos y capacitación del personal. Su desarrollo orienta al aprendiz en la organización de actividades y recursos para fortalecer la sanidad, inocuidad, bienestar animal, protección ambiental y gestión documental del sistema productivo.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
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
        titulo:
          'Fundamentos de las buenas prácticas ganaderas en la producción ovino caprina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Buenas Prácticas Ganaderas (BPG)',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Marco normativo aplicable a las BPG en la producción ovino-caprina',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Criterios de cumplimiento',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Caracterización y diagnóstico de la unidad productiva ovino caprina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Unidad productiva ovino caprina',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Diagnóstico de la unidad productiva',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Procesos productivos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Recursos de la unidad productiva',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Seguridad y salud en el trabajo en la producción ovino caprina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Seguridad y salud en el trabajo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Elementos de protección personal',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Plan de implementación de las buenas prácticas ganaderas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Plan de implementación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Estándares de certificación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Programación de la implementación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Cronograma',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Protocolos, registros y documentos para la implementación de las BPG',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Protocolos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Registros',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Documentos',
            hash: 't_5_3',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas y procedimientos destinados a prevenir la entrada, permanencia y propagación de agentes que puedan afectar la salud de los animales, las personas y la unidad productiva.',
    },
    {
      termino: 'Buenas Prácticas Ganaderas (BPG)',
      significado:
        'conjunto de principios, normas y procedimientos aplicados en la producción ganadera para garantizar la sanidad animal, el bienestar, la inocuidad de los productos, la protección ambiental y la seguridad de los trabajadores.',
    },
    {
      termino: 'Capacitación',
      significado:
        'proceso mediante el cual el personal adquiere conocimientos y desarrolla habilidades necesarias para realizar correctamente las actividades de la unidad productiva.',
    },
    {
      termino: 'Caracterización',
      significado:
        'proceso de identificación y descripción de las condiciones, recursos, instalaciones, animales y procesos que hacen parte de una unidad productiva.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'evaluación de las condiciones actuales de una unidad productiva para identificar fortalezas, necesidades, riesgos y oportunidades de mejora.',
    },
    {
      termino: 'EPP (Elementos de Protección Personal)',
      significado:
        'equipos o prendas utilizados por los trabajadores para disminuir la exposición a riesgos que puedan afectar su seguridad y salud durante las actividades laborales.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'condición de un alimento que no causa daño al consumidor cuando se prepara o consume de acuerdo con su uso previsto.',
    },
    {
      termino: 'Plan de implementación',
      significado:
        'documento que organiza las acciones, responsables, recursos, tiempos e indicadores necesarios para aplicar las BPG en una unidad productiva.n',
    },
    {
      termino: 'Plan sanitario',
      significado:
        'conjunto organizado de actividades preventivas y de control destinadas a conservar la salud de los animales y prevenir la aparición y propagación de enfermedades.',
    },
    {
      termino: 'Protocolo',
      significado:
        'documento que establece de manera ordenada cómo debe realizarse una actividad o procedimiento dentro de la unidad productiva.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cortés López, H., & Hidalgo Benítez, P. (2010). Manual de buenas prácticas pecuarias en la producción primaria en ovinos de carne y caprinos de leche en estabulación. Servicio Nacional de Aprendizaje (SENA).',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2018). Resolución 20277 de 2018. ',
      link: 'https://www.ica.gov.co/getattachment/f6b34382-0332-44b0-84d3-d8faba7f4559/2018R20277.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2021a). Resolución 90464 de 2021. ',
      link: 'https://www.ica.gov.co/areas/pecuaria/registro-de-predios-ante-el-ica/resolucion-90464-de-20-enero-2021.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2021b). Resolución 115708 de 2021. ',
      link: 'https://www.ica.gov.co/getattachment/Areas/Pecuaria/Servicios/Inocuidad-en-las-Cadenas-Agroalimentarias/Autorizacion-Sanitaria-y-de-Inocuidad-2/Res-115708-de-2021.pdf.aspx?lang=es-CO',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023). Resolución 16023 de 2023. ',
      link: 'https://www.ica.gov.co/getattachment/Areas/Pecuaria/Servicios/Inocuidad-en-las-Cadenas-Agroalimentarias/Autorizacion-Sanitaria-y-de-Inocuidad-2/Res-16023-de-2023.pdf.aspx?lang=es-CO',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2024). Resolución 16409 de 2024. ',
      link: 'https://www.ica.gov.co/getattachment/Areas/Pecuaria/Servicios/Inocuidad-en-las-Cadenas-Agroalimentarias/Bienestar-Animal/Res-00016409-de-2024-BA.pdf.aspx?lang=es-CO',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2025). Resolución 8452 de 2025. ',
      link: 'https://www.ica.gov.co/normatividad/normas-ica/resoluciones-oficinas-nacionales/2025/2025r0008452',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2026). Metodología para evaluar el bienestar animal en ovinos y caprinos (Versión 3.0). ',
      link: 'https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias/documentos/2025/meba-ovinos-y-caprinos.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (s. f.-a). Forma 3-860 V.4 lista de chequeo BPG ovinos y caprinos. Grupo de Inocuidad en la Producción Pecuaria Primaria y Bienestar Animal. ',
      link: 'https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2020). Resolución 136 de 2020. Manual de condiciones de bienestar animal para équidos, porcinos, ovinos y caprinos.',
      link: '',
    },
    {
      referencia:
        'Orduz Tovar, S. A., Mora-Lamilla, S. I., González Mora, L. V., Villarraga Córdoba, Ó. E., Prieto Puentes, D. F., Fuerte Barón, A. M., Pinto Castrillón, L. C., Geney Mora, G. F., Carrillo Amaya, S. E., Garrido Weber, E. R., Cadavid, L. A., Betancourt Botero, S. P., Mesa Forero, L. Y., Joya Cárdenas, D. E., Sandoval Caicedo, F. Á., & Mesa Rincón, F. E. (2020). Buenas prácticas de la cadena ovino caprina: Una experiencia SENA. Servicio Nacional de Aprendizaje (SENA).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Jose Calderon Gutierrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}
