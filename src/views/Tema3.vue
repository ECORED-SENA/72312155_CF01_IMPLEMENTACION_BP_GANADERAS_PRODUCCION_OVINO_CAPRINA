<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Seguridad y salud en el trabajo en la producción ovino caprina
      p.mb-5 La prevención de accidentes y enfermedades laborales debe integrarse al manejo de los animales, la limpieza, el ordeño, el almacenamiento de insumos y el mantenimiento. La seguridad del personal favorece la continuidad del trabajo y reduce los errores que pueden afectar a los animales y a los productos. Su planificación parte de las tareas reales del predio y no de una lista genérica de equipos de protección.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Seguridad y salud en el trabajo
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La #[b seguridad y salud en el trabajo (SST)] identifica peligros, evalúa riesgos y establece controles. Un #[b peligro] es una fuente capaz de causar daño, como una aguja usada o un piso resbaloso; el #[b riesgo], en cambio, relaciona la posibilidad de exposición u ocurrencia con la gravedad del daño. Distinguir ambos conceptos permite seleccionar medidas específicas y revisar si estas reducen la exposición.
          .box___color-text-imgleft(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t3/img1.png', alt='' style="width: 400px").m-auto
              .col-xl.fit___box_container
                p.mb-0 Los controles se organizan en una jerarquía que va desde la eliminación del peligro y la sustitución hasta las medidas de ingeniería, las administrativas y la protección personal. Por ejemplo, para mover sacos se evalúa reducir el peso por unidad y utilizar ayudas de transporte antes de depender solo de instrucciones de levantamiento, y para contener animales se mejoran la instalación y el procedimiento de manejo antes de recurrir únicamente a prendas de protección.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img2.png', alt='').m-auto
      p.mb-5 En cuanto a las responsabilidades, el responsable del predio proporciona los medios, organiza la capacitación y define cómo reportar los incidentes, mientras que los trabajadores siguen los procedimientos, revisan las herramientas y comunican las condiciones inseguras. La respuesta a emergencias incluye contactos, medios de comunicación, rutas de acceso y atención de primeros auxilios por personal preparado. Toda exposición biológica o química debe comunicarse oportunamente y remitirse a atención según el procedimiento establecido. Los riesgos laborales presentes en la producción ovino-caprina se presentan a continuación:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Biológicos
                  p.mb-0 Surgen del contacto con animales, fluidos, placentas, excretas, cadáveres y materiales contaminados. Las tareas de parto, tratamiento y limpieza requieren higiene, separación de la ropa de trabajo y barreras seleccionadas según la exposición. Las agujas usadas se depositan inmediatamente en un recipiente resistente para cortopunzantes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Químicos
                  p.mb-0 Incluyen desinfectantes, detergentes, plaguicidas y medicamentos. Se controlan mediante el rotulado, el almacenamiento compatible, la ventilación y la consulta de las fichas de datos de seguridad. Los productos se preparan según sus instrucciones, no se mezclan por iniciativa del operario ni se almacenan en envases de alimentos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Físicos y biomecánicos
                  p.mb-0 Los físicos comprenden la radiación solar, el calor, el frío, el ruido y la iluminación inadecuada; los biomecánicos se relacionan con las cargas, las posturas forzadas y los movimientos repetitivos, como en el ordeño o la limpieza. Su control exige adaptar la jornada, facilitar la hidratación y el descanso, mejorar la altura de trabajo y utilizar ayudas mecánicas cuando sea necesario.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Condiciones de seguridad
                  p.mb-0 Incluyen caídas, cortes, atrapamientos, fallas eléctricas y golpes causados por animales o equipos. Se revisan los pisos, las puertas, las cercas, las vías de escape y los sistemas de contención, y antes del mantenimiento se controla el funcionamiento y la energía de los equipos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Psicosociales y naturales
                  p.mb-0 Comprenden las jornadas excesivas, las instrucciones contradictorias, el trabajo aislado y los eventos naturales que afectan la labor. La distribución de responsabilidades, las pausas y los medios de comunicación contribuyen a reducirlos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img7.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La valoración de los riesgos se documenta por tarea y se actualiza cuando cambian los procesos, los equipos o las condiciones de trabajo. La siguiente tabla presenta ejemplos de peligros y medidas preventivas por actividad:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 7.
                span Peligros laborales y medidas preventivas
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Actividad
                      th.ajuste-border-tabla.texto-left Riesgo posible
                      th.texto-left Medida preventiva
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Manejo de animales
                      td.ajuste-border-tabla.texto-left Golpes o empujones
                      td.texto-left Manejo tranquilo y corrales adecuados
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Limpieza de corrales
                      td.ajuste-border-tabla.texto-left Riesgo biológico y biomecánico
                      td.texto-left Higiene, guantes y técnicas adecuadas de trabajo
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aplicación de medicamentos
                      td.ajuste-border-tabla.texto-left Riesgo biológico o químico
                      td.texto-left Procedimientos seguros y EPP según el producto
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Desinfección
                      td.ajuste-border-tabla.texto-left Riesgo químico
                      td.texto-left Manejo adecuado de los productos y protección requerida
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alimentación
                      td.ajuste-border-tabla.texto-left Esfuerzo físico
                      td.texto-left Organización de cargas y ayudas disponibles
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ordeño
                      td.ajuste-border-tabla.texto-left Riesgo biológico y físico
                      td.texto-left Higiene, orden y protección apropiada
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mantenimiento
                      td.ajuste-border-tabla.texto-left Cortes, golpes o caídas
                      td.texto-left Herramientas adecuadas y mantenimiento preventivo
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Manejo de residuos
                      td.ajuste-border-tabla.texto-left Riesgo biológico y físico
                      td.texto-left Clasificación, recolección y disposición adecuada
          p.mb-0 Para cada control de la matriz se definen un responsable, un plazo y una forma de comprobación. Además, todo incidente, incluso sin lesión, debe analizarse, porque puede revelar una falla antes de que ocurra un accidente.
          Separador
          #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.2 Elementos de protección personal
          p.mb-5 Los #[b elementos de protección personal (EPP)] reducen la exposición a peligros específicos y complementan los demás controles. Su selección depende de la tarea, la sustancia, la vía de exposición y las condiciones de uso, ya que un elemento adecuado para una actividad puede resultar insuficiente para otra. Por ello, se consultan la información del fabricante y la evaluación del riesgo. Los tipos de EPP se presentan a continuación:
          .bg___carrusel_1
            .px-5
              .row.justify-content-center.mb-5
                .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                  .box___card_sinbordes.h-100
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t3/img8.png', alt="" ).m-auto
                      h4.text-center Protección frente a agentes biológicos
                      .box___card_sinbordes_p
                        p.mb-0.text-center Guantes, botas lavables, ropa de trabajo y protección de ojos o cara frente a salpicaduras. Los guantes no sustituyen la higiene de manos y deben retirarse sin transferir contaminación a la piel o a superficies limpias.
                .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
                  .box___card_sinbordes.h-100
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t3/img9.png', alt="" ).m-auto
                      h4.text-center Protección frente a sustancias
                      .box___card_sinbordes_p
                        p.mb-0.text-center Guantes y prendas compatibles con el producto que se manipula.
                .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
                  .box___card_sinbordes.h-100
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t3/img10.png', alt="" ).m-auto
                      h4.text-center Protección respiratoria
                      .box___card_sinbordes_p
                        p.mb-0.text-center Se elige según el contaminante. Una mascarilla para partículas no protege frente a todos los gases o vapores; cuando se requiere un respirador, deben verificarse el filtro, el ajuste y las condiciones de uso.
                .col-xl-3.col-md-9(data-aos="fade-left")
                  .box___card_sinbordes.h-100
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t3/img11.png', alt="" ).m-auto
                      h4.text-center Otros elementos
                      .box___card_sinbordes_p
                        p.mb-0.text-center La protección auditiva depende de la exposición al ruido, y el casco y el calzado de seguridad se incorporan cuando la tarea presenta golpes, caída de objetos u otros peligros asociados.
              .row.justify-content-center.align-items-center.mb-0
                .col-xl.mb-4.mb-lg-0
                  .box___style_1(data-aos="fade-right")
                    p.mb-0 Los EPP deben tener la talla adecuada, ser compatibles entre sí, ofrecer resistencia suficiente y conservarse conforme a las instrucciones del fabricante. Antes de usarlos se revisan roturas, deterioro, limpieza y ajuste. Los elementos reutilizables se limpian y almacenan separados de alimentos e insumos, y los desechables se disponen según su contaminación y el procedimiento de residuos.
                .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t3/img12.png', alt='').m-auto
                .col-xl.fit___bottom
                  figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
                    img(src='@/assets/curso/temas/t2/img2.svg', alt='' style="width: 70px")
                  p.mb-0 La entrega de los EPP debe acompañarse de una demostración y una práctica de colocación, uso y retiro. El seguimiento verifica si el trabajador puede utilizar el equipo durante toda la tarea y si existen dificultades de ajuste o disponibilidad, las cuales requieren corrección y no solo una indicación de usar la protección.

</template>

<script>
export default {
  name: 'Tema3',
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
