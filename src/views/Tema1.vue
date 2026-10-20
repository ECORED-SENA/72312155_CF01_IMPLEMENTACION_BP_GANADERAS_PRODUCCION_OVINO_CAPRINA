<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Fundamentos de las buenas prácticas ganaderas en la producción ovino-caprina
      p.mb-5 En la producción ovino-caprina, las #[b buenas prácticas ganaderas] articulan controles sanitarios, de alimentación, manejo e higiene para reducir los peligros que pueden afectar a los animales y a los productos destinados al consumo humano. Su aplicación exige relacionar cada requisito con las condiciones reales del predio, con las personas responsables y con evidencias que permitan comprobar su cumplimiento.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Buenas Prácticas Ganaderas (BPG)
      p Las #[b BPG] son un conjunto organizado de principios, procedimientos, medidas preventivas, prácticas de manejo y registros que se aplican en la producción primaria para controlar los peligros que pueden comprometer la inocuidad de los alimentos, la sanidad animal, el bienestar de los animales, la seguridad de los trabajadores y la protección del ambiente.
      p.mb-5 En ovinos y caprinos, el concepto debe adaptarse al sistema productivo. No es igual implementar BPG en una explotación familiar de pastoreo que en un sistema semiintensivo de producción de leche, un sistema de ceba o un predio de ciclo completo. Sin embargo, en todos los casos deben existir controles verificables, responsables definidos y registros que demuestren lo que se hace. Las BPG tampoco deben confundirse con una simple actividad de limpieza, que es solo uno de sus componentes. Una explotación puede tener corrales limpios y, al mismo tiempo, presentar fallas graves si utiliza medicamentos sin control, no registra los tratamientos o suministra agua contaminada. Los elementos que integran el sistema se presentan a continuación:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Prevención
                  p.mb-0 Consiste en anticiparse a los peligros antes de que produzcan daño. En ovinos y caprinos se aplica mediante la cuarentena, la vacunación según el plan sanitario, el control del agua y la bioseguridad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Control
                  p.mb-0 Establece medidas para reducir un riesgo o mantenerlo dentro de niveles aceptables, como el control de parásitos, la limpieza y el almacenamiento adecuado de alimentos y medicamentos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Verificación
                  p.mb-0 Comprueba que cada medida realmente se cumple, mediante inspecciones, registros, indicadores y auditorías internas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Trazabilidad
                  p.mb-0 Conserva la información necesaria para reconstruir qué ocurrió con animales, lotes e insumos, a partir de la identificación y de los registros de tratamientos, movilizaciones, mortalidad y reproducción.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Responsabilidad
                  p.mb-0 Define quién ejecuta y quién supervisa cada actividad, ya sea el productor, los operarios o el profesional responsable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mejora continua
                  p.mb-0 Corrige las desviaciones y actualiza los procedimientos, por ejemplo, mediante un plan de acción después de una inspección o de un evento sanitario.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img6.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Las BPG se aplican a la producción de carne, leche, reproductores y reemplazos, así como a los sistemas de doble propósito, y sus controles se adaptan a explotaciones familiares, extensivas, semiintensivas e intensivas. Cuando ovinos y caprinos comparten recursos, la gestión debe considerar las necesidades de cada especie.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img7.png')})` }")
        .bloque-texto-g__texto.p-4
          p La #[b importancia] de las BPG radica en que muchos peligros de la cadena alimentaria se originan en el predio, y la prevención en la producción primaria es más eficaz cuando los puntos de riesgo se identifican antes de que se conviertan en enfermedad, contaminación, residuos, lesiones o pérdidas productivas.
      p.mb-5 En los predios que producen carne o leche para consumo humano, la inocuidad exige controlar tres tipos de peligros. Los #[b biológicos] se asocian con agentes infecciosos o contaminación fecal; los #[b químicos], con residuos de medicamentos veterinarios, plaguicidas o desinfectantes, y los #[b físicos], con cuerpos extraños presentes en los alimentos o en los productos. Por ello, el productor debe conocer qué insumos utiliza, de dónde provienen, cómo se almacenan, quién los administra y qué registros genera. La siguiente tabla relaciona las áreas de riesgo con los resultados que se esperan al aplicar las BPG:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Áreas de riesgo y resultados esperados
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Área
                      th.ajuste-border-tabla.texto-left Riesgo cuando no existen BPG
                      th.texto-left Resultado esperado con BPG
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sanidad
                      td.ajuste-border-tabla.texto-left Enfermedad, mortalidad, retraso productivo y diseminación de agentes
                      td.texto-left Prevención, vigilancia, diagnóstico y respuesta oportuna
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Inocuidad
                      td.ajuste-border-tabla.texto-left Residuos de medicamentos, contaminación de alimentos o agua
                      td.texto-left Control de insumos, tratamientos, retiro e higiene
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Bienestar
                      td.ajuste-border-tabla.texto-left Dolor, miedo, lesiones, estrés, hambre, sed o incomodidad
                      td.texto-left Manejo competente y condiciones adecuadas
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Productividad
                      td.ajuste-border-tabla.texto-left Bajo crecimiento, menor fertilidad, menor producción de leche o carne
                      td.texto-left Registros e indicadores para tomar decisiones
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Economía
                      td.ajuste-border-tabla.texto-left Costos por enfermedad, mortalidad, descarte y tratamientos innecesarios
                      td.texto-left Prevención y uso eficiente de los recursos
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ambiente
                      td.ajuste-border-tabla.texto-left Contaminación de agua y suelo, acumulación de residuos
                      td.texto-left Manejo responsable de estiércol, residuos y aguas
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Personal
                      td.ajuste-border-tabla.texto-left Accidentes, exposición a medicamentos o agentes infecciosos
                      td.texto-left Capacitación, procedimientos y elementos de protección
      p.mb-5 Los #[b fundamentos] de las BPG deben integrarse al funcionamiento cotidiano del predio, y cada uno se relaciona con actividades concretas, responsables, registros e indicadores. Su contenido y la evidencia que permite verificarlos se presentan a continuación:
      .row.justify-content-center.mb-5
        .col-xl-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Sanidad animal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende la vigilancia diaria, la prevención, el diagnóstico, el aislamiento de animales enfermos, la atención veterinaria, la vacunación y el control de parásitos conforme al plan sanitario. Se evidencia mediante el plan sanitario y los registros de tratamientos, vacunaciones, diagnósticos y mortalidad.
            .row(titulo="Bioseguridad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Controla el ingreso de animales, personas y vehículos, separa los animales nuevos o enfermos e incluye la limpieza, la desinfección y el control de plagas. Se evidencia mediante protocolos y registros de ingreso, limpieza, desinfección y cuarentena.
            .row(titulo="Alimentación y agua").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Garantiza alimentos seguros, almacenados de forma protegida y formulados según la categoría productiva, así como agua disponible de forma permanente, bebederos limpios y fuentes protegidas. Se evidencia mediante registros de alimentación y proveedores, inspecciones y análisis de agua cuando correspondan.
            .row(titulo="Bienestar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Previene el hambre, la sed, la incomodidad, el dolor, las lesiones, la enfermedad, el miedo y las restricciones innecesarias, y permite el comportamiento natural de los animales. Se evidencia mediante la evaluación de los animales, las instalaciones y el manejo.
            .row(titulo="Medicamentos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Exige productos con registro ICA, vigentes, correctamente almacenados y aplicados conforme al rotulado y a la prescripción cuando corresponda. Se evidencia mediante el inventario, las prescripciones, los registros de tratamientos y el control de los tiempos de retiro.
            .row(titulo="Higiene").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Previene la contaminación en instalaciones, equipos, ordeño, almacenamiento y manejo de animales y productos. Se evidencia mediante procedimientos y registros de limpieza y desinfección.
            .row(titulo="Trazabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite identificar y seguir animales, lotes, tratamientos, movimientos y eventos. Se evidencia mediante inventarios, identificaciones, registros y documentos de movilización.
            .row(titulo="Ambiente").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Promueve el uso racional del agua y del suelo, y el manejo de estiércol, residuos, cadáveres y aguas residuales. Se evidencia mediante el plan de manejo y los registros de disposición.
            .row(titulo="Personal y documentación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluye la capacitación, la higiene, la seguridad, las funciones claras y los elementos de protección, así como información completa, legible, fechada y disponible. Se evidencia mediante registros de capacitación, formatos, procedimientos y acciones correctivas.
      p.mb-5 Para aplicar estos fundamentos con un #[b enfoque preventivo basado en riesgos] se utiliza la matriz de riesgos. En ella, el productor identifica el peligro, determina a qué animal, trabajador, producto o recurso puede afectar, estima su importancia y establece una medida preventiva. Posteriormente, define cómo comprobará que la medida funciona, como se observa en los siguientes ejemplos:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Ejemplos de peligros y medidas preventivas
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Peligro
                      th.ajuste-border-tabla.texto-left Fuente posible
                      th.ajuste-border-tabla.texto-left Consecuencia
                      th.ajuste-border-tabla.texto-left Medida preventiva
                      th.texto-left Verificación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Agente infeccioso
                      td.ajuste-border-tabla.texto-left Animal nuevo sin control sanitario
                      td.ajuste-border-tabla.texto-left Enfermedad del rebaño
                      td.ajuste-border-tabla.texto-left Cuarentena y evaluación sanitaria
                      td.texto-left Registro de ingreso y observación
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Residuo de medicamento
                      td.ajuste-border-tabla.texto-left Tratamiento sin control del retiro
                      td.ajuste-border-tabla.texto-left Producto no inocuo
                      td.ajuste-border-tabla.texto-left Prescripción, registro y retiro
                      td.texto-left Registro de tratamiento
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Contaminación del agua
                      td.ajuste-border-tabla.texto-left Fuente o bebedero sucio
                      td.ajuste-border-tabla.texto-left Enfermedad y bajo consumo
                      td.ajuste-border-tabla.texto-left Limpieza, protección y control
                      td.texto-left Inspección y análisis según riesgo
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alimento contaminado
                      td.ajuste-border-tabla.texto-left Almacenamiento inadecuado
                      td.ajuste-border-tabla.texto-left Enfermedad o toxicidad
                      td.ajuste-border-tabla.texto-left Almacenamiento seco y protegido
                      td.texto-left Inspección de bodega
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Lesión
                      td.ajuste-border-tabla.texto-left Instalación defectuosa
                      td.ajuste-border-tabla.texto-left Dolor y pérdida productiva
                      td.ajuste-border-tabla.texto-left Mantenimiento y diseño seguro
                      td.texto-left Lista de chequeo
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Estrés
                      td.ajuste-border-tabla.texto-left Manejo brusco
                      td.ajuste-border-tabla.texto-left Lesiones y deterioro del bienestar
                      td.ajuste-border-tabla.texto-left Capacitación y manejo tranquilo
                      td.texto-left Observación de conducta
      p.mb-0 Entre los #[b beneficios] de la aplicación sostenida de las BPG se encuentran la reducción de pérdidas por enfermedad, contaminación, errores de tratamiento y manejo inadecuado. Los registros favorecen las decisiones sobre alimentación, reproducción y mantenimiento, y la trazabilidad facilita reconstruir eventos y responder ante problemas sanitarios. Estos resultados deben comprobarse frente a la línea de base del predio; una disminución de la mortalidad, de las lesiones o de los tratamientos sin registro aporta evidencia de mejora, siempre que la población y el periodo de comparación sean equivalentes.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Marco normativo aplicable a las BPG en la producción ovino-caprina
      p.mb-5 El marco normativo debe estudiarse por capas. La norma específica de certificación BPG para la producción primaria de ovinos y caprinos es la #[b Resolución ICA 20277 de 2018], que establece los requisitos sanitarios y de inocuidad para obtener dicha certificación. A ella se suman normas complementarias que regulan el registro sanitario del predio, la autorización sanitaria y de inocuidad, el bienestar animal y otros aspectos sanitarios. En la práctica, el productor debe revisar siempre la versión vigente publicada por el ICA y no basarse únicamente en documentos de apoyo o en versiones anteriores. Las normas e instrumentos aplicables se presentan en la siguiente tabla:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Normas e instrumentos aplicables
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Norma o documento
                      th.ajuste-border-tabla.texto-left Tema
                      th.texto-left Aplicación práctica
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resolución ICA 20277 de 2018
                      td.ajuste-border-tabla.texto-left BPG ovinos y caprinos
                      td.texto-left Requisitos sanitarios y de inocuidad para la certificación BPG en producción primaria
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Forma 3-860 ICA
                      td.ajuste-border-tabla.texto-left Lista de chequeo BPG ovino-caprina
                      td.texto-left Verificación de criterios fundamentales, mayores y menores, y resultado de la evaluación
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resolución ICA 115708 de 2021
                      td.ajuste-border-tabla.texto-left Autorización Sanitaria y de Inocuidad (ASI)
                      td.texto-left Requisitos para predios productores de animales destinados a carne o leche para consumo humano
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resolución ICA 00016023 de 2023
                      td.ajuste-border-tabla.texto-left Modificación de la Resolución 115708 de 2021
                      td.texto-left Modifica disposiciones de la ASI; se consulta junto con la resolución principal
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resolución ICA 90464 de 2021
                      td.ajuste-border-tabla.texto-left Registro Sanitario de Predio Pecuario (RSPP)
                      td.texto-left Establece el registro sanitario del predio y sus requisitos
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resolución MADR 136 de 2020
                      td.ajuste-border-tabla.texto-left Bienestar animal
                      td.texto-left Adopta el manual de condiciones de bienestar para équidos, porcinos, ovinos y caprinos
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resolución ICA 00016409 de 2024
                      td.ajuste-border-tabla.texto-left Certificación en bienestar animal
                      td.texto-left Establece requisitos para la certificación voluntaria en bienestar animal en producción primaria
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resolución ICA 8452 de 2025
                      td.ajuste-border-tabla.texto-left Actualización de la certificación de bienestar
                      td.texto-left Modifica disposiciones de la Resolución 00016409 de 2024
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Metodología ICA para evaluar el bienestar de ovinos y caprinos, versión 3.0 de 2026
                      td.ajuste-border-tabla.texto-left Evaluación objetiva del bienestar
                      td.texto-left Integra medidas basadas en recursos, animales y gestión, y clasifica el predio por nivel de bienestar
          p.mb-5 Estas normas se sustentan en principios comunes. La #[b legalidad] exige identificar y aplicar los requisitos vigentes; la #[b prevención] se concreta en controles de sanidad, bioseguridad, alimentación e insumos; el #[b bienestar] requiere evaluar tanto los recursos disponibles como los resultados en los animales; la trazabilidad relaciona la identificación con los registros; la #[b responsabilidad ambiental] orienta el manejo del agua, el suelo y los residuos, y la #[b mejora continua] utiliza los hallazgos y los indicadores para ajustar los controles. Los principales aspectos regulados se presentan a continuación:
          .bg___slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Registro Sanitario de Predio Pecuario (RSPP)
                      p.mb-0 Formaliza la identificación sanitaria del predio ante el ICA. La norma vigente es la Resolución 90464 de 2021; los predios registrados previamente conservan su vigencia, mientras que las modificaciones deben ajustarse a las condiciones establecidas por la norma actual.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img8.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Autorización Sanitaria y de Inocuidad (ASI)
                      p.mb-0 Es el documento mediante el cual el ICA habilita al propietario, poseedor o tenedor de un predio para ejercer actividades de producción primaria bajo las condiciones establecidas. Comprende aspectos de saneamiento, bioseguridad y, cuando aplica, ordeño y almacenamiento de leche.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img9.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Bienestar animal
                      p.mb-0 La Resolución 136 de 2020 es el referente del manual de condiciones de bienestar animal para ovinos y caprinos. A ella se suma la Resolución 00016409 de 2024, modificada por la Resolución 8452 de 2025, que regula la certificación en bienestar animal como un proceso voluntario.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img10.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Movilización y trazabilidad
                      p.mb-0 Los movimientos de animales deben cumplir las condiciones sanitarias y documentales establecidas por el ICA. El productor conserva la información necesaria para demostrar el origen, el destino, la identificación y la condición sanitaria de los animales, y gestiona la documentación de movilización exigida.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img11.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Medicamentos veterinarios
                      p.mb-0 Las BPG exigen controlar la adquisición, el almacenamiento, la administración y el registro de los medicamentos. La metodología de bienestar del ICA de 2026 verifica, entre otros aspectos, que los medicamentos tengan registro ICA, que no se utilicen sustancias prohibidas ni productos vencidos y que los tratamientos se registren.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img12.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Es importante tener en cuenta que el registro sanitario, la ASI y la certificación BPG cumplen funciones diferentes, por lo que disponer de uno de estos documentos no demuestra automáticamente el cumplimiento de los demás requisitos.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Criterios de cumplimiento
      p.mb-5 Los #[b criterios de cumplimiento] son condiciones objetivas y verificables que permiten determinar si un requisito de BPG está implementado. La evidencia puede ser física, documental, visual, testimonial o una combinación de estas, según la lista de chequeo y el requisito evaluado. La Forma 3-860 del ICA organiza los requisitos por categorías de importancia, cuya clasificación e instrucciones deben conservarse al preparar el diagnóstico y la visita de auditoría. Estas categorías se presentan a continuación:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img13.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Fundamental (F)
            p.mb-0.text-center Requisito crítico de la certificación. Exige un cumplimiento del 100 % y no admite incumplimientos.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t1/img14.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Mayor (My)
            p.mb-0.text-center Requisito de alta importancia sanitaria, de inocuidad o de gestión. Exige un cumplimiento mínimo del 80 %.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img15.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Menor (Mn)
            p.mb-0.text-center Requisito complementario que fortalece el sistema. Exige un cumplimiento mínimo del 60 %.
      p Para obtener un concepto certificable se deben alcanzar simultáneamente los tres porcentajes. Cada categoría se evalúa por separado, de modo que un promedio general alto no compensa el incumplimiento de un criterio fundamental.
      p.mb-0 Interpretar un criterio exige identificar qué pide, dónde aplica y qué evidencia permite comprobarlo, contrastando el requisito con las instalaciones, los animales, los registros y la ejecución del personal. Por ejemplo, contar con un armario no demuestra por sí solo el almacenamiento correcto de los medicamentos; también deben verificarse su uso exclusivo, el control de vencimientos y el inventario. Además, la categoría de cada criterio no debe asignarse por intuición, sino conservar la indicada en la lista oficial y registrar la evidencia del hallazgo.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
