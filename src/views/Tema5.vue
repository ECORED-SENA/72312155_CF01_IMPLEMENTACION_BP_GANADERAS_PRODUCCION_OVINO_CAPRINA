<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 5
        h1 Protocolos, registros y documentos para la implementación de las BPG
      p.mb-5 El #[b sistema documental] relaciona instrucciones, evidencias y control. El protocolo define cómo actuar, el formato organiza los campos por completar y el registro conserva los datos de una actividad ya realizada. Los documentos incluyen estos elementos, junto con los soportes técnicos, administrativos y oficiales que respaldan la operación del predio.
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Protocolos
      p.mb-5 Un #[b protocolo] describe una actividad para que pueda ejecutarse de forma consistente y segura. Debe redactarse con acciones claras, responsables y condiciones de control. Expresiones como “limpiar adecuadamente” son insuficientes si el personal no sabe qué superficie intervenir, con qué insumos, en qué secuencia y cómo comprobar el resultado. Los tipos de protocolos se presentan a continuación:
      .bg___carrusel_1
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t5/img1.png').m-auto
              h4.mb-3.estilo-text Sanitarios
              p.mb-0.text-center Regulan la prevención, la atención y la separación de los animales enfermos.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t5/img2.png').m-auto
              h4.mb-3.estilo-text De bioseguridad
              p.mb-0.text-center Organizan los ingresos, la circulación, la cuarentena y el saneamiento.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t5/img3.png').m-auto
              h4.mb-3.estilo-text De alimentación
              p.mb-0.text-center Controlan la recepción, el almacenamiento y el suministro de alimentos.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t5/img4.png').m-auto
              h4.mb-3.estilo-text De ordeño
              p.mb-0.text-center En los predios lecheros, regulan el ordeño, la limpieza de equipos y el almacenamiento de la leche.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t5/img5.png').m-auto
              h4.mb-3.estilo-text Otros
              p.mb-0.text-center Abarcan el manejo animal, los residuos, los cadáveres y las contingencias.
          p.mb-5 Para evitar documentos repetidos, un protocolo puede citar otro que ya describe una tarea transversal, como la limpieza, indicando su código y su versión vigente para que el operario pueda consultarlo. La estructura de un protocolo se presenta a continuación:
          .row.align-items-center.mb-3
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t5/img6.png", alt="" style="width: 500px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Identificación").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Nombre, código, versión, fecha y responsables.
                .row(titulo="Objetivo y alcance").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Propósito del protocolo y actividades, áreas o animales a los que se aplica.
                .row(titulo="Materiales").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Insumos, equipos y elementos de protección necesarios.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Procedimiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Secuencia de pasos, con las técnicas aprobadas y sus restricciones.
            .row(titulo="Precauciones y criterios de aceptación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Condiciones de seguridad y forma de comprobar que la actividad se realizó correctamente.
            .row(titulo="Registros asociados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Formatos en los que se documenta la ejecución.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img7.png", alt="" style="width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img8.png', alt='').m-auto
        .col-xl
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t4/img3.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 La aprobación del protocolo corresponde a la persona competente según su contenido, y las instrucciones sanitarias deben conservar la intervención profesional que exige la actividad. Por ejemplo, en la limpieza de bebederos, el objetivo es retirar la suciedad y prevenir la contaminación. El procedimiento prevé asegurar un acceso alternativo al agua, retirar la materia orgánica, lavar, aplicar los productos según sus instrucciones cuando corresponda y restablecer el suministro en condiciones seguras. La comprobación incluye el estado del equipo, la ausencia de residuos y el registro de la tarea.
          p.mb-0 Según el momento en que intervienen, los protocolos pueden aplicar un #[b método preventivo], cuando establecen barreras antes de que ocurra un problema, o un #[b método correctivo], cuando responden a una desviación. En ambos casos, la observación, la revisión de registros y la comprobación del resultado acompañan la ejecución. Para elaborar un protocolo se sigue el siguiente procedimiento:
      .row.align-items-center.mb-5
        .col-xl(data-aos="fade-right")
          LineaTiempoD.color-secundario
            p(numero="1" titulo="Paso 1. Revisar los requisitos") Analizar los requisitos aplicables y las características del proceso.
            p(numero="2" titulo="Paso 2. Consultar al personal") Recoger la experiencia de quienes realizan la tarea.
            p(numero="3" titulo="Paso 3. Redactar la secuencia") Describir los pasos, las técnicas, los responsables y los controles.
            p(numero="4" titulo="Paso 4. Probar bajo supervisión") Verificar la disponibilidad de insumos, los tiempos, la seguridad y la comprensión del personal, y corregir los pasos ambiguos.
            p(numero="5" titulo="Paso 5. Aprobar") Obtener la aprobación de la persona competente antes de su uso.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img9.png", alt="" style="width: 350px").m-auto
      p Las #[b técnicas] describen cómo realizar operaciones específicas, como identificar, pesar, sujetar, limpiar, ordeñar o diligenciar un registro. El protocolo debe señalar la técnica aprobada, los equipos y las restricciones. Por ejemplo, el pesaje requiere identificación, un equipo funcional y condiciones comparables, y los tratamientos siguen la indicación profesional y el rotulado del producto. Cuando una técnica requiere destreza, se enseña mediante demostración y práctica supervisada, y el trabajador debe reconocer sus límites y las señales para suspender la actividad y solicitar apoyo. Los procedimientos que causan dolor o requieren intervención profesional no deben presentarse como tareas autónomas de cualquier operario.
      p.mb-0 En este marco, el #[b uso responsable de antimicrobianos] contribuye a prevenir residuos y a reducir la selección de microorganismos resistentes. La decisión de tratar corresponde al profesional competente y debe apoyarse en la evaluación sanitaria, mientras que el personal cumple la pauta indicada y registra la administración. Los antimicrobianos no reemplazan la higiene, la bioseguridad ni la investigación de las causas de la enfermedad (ICA, s. f.-b).
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Registros
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_1(data-aos="fade-right")
            p.mb-0 Un #[b registro] conserva la información de un evento y permite reconstruir qué ocurrió, cuándo, con qué animal o lote y bajo la responsabilidad de quién. Debe completarse al ejecutar la actividad o inmediatamente después, y debe emplear identificadores compatibles entre procesos para vincular la información. Una anotación sin identificación puede resultar inútil para relacionar tratamientos, movimientos y productos.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t5/img10.png', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t2/img2.svg', alt='' style="width: 70px")
          p.mb-0 Las correcciones deben preservar el dato original y permitir identificar quién corrigió y cuándo. En los archivos digitales se controlan los permisos y los respaldos, y en papel se protege la información de la humedad, la suciedad y la pérdida. 
      p.mb-5 No deben llenarse registros de actividades que no se realizaron ni reconstruir datos faltantes como si fueran comprobados. Los tipos de registros se presentan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Sanitarios")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Sanitarios
              p.mb-0 Enfermedades, vacunación, tratamientos, mortalidad y atención profesional.
        .py-3.py-md-4(titulo="Reproductivos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Reproductivos
              p.mb-0 Servicios, gestaciones, partos, abortos, nacimientos y destetes.
        .py-3.py-md-4(titulo="Productivos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Productivos
              p.mb-0 Pesos, producción de leche e inventario.
        .py-3.py-md-4(titulo="De insumos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 De insumos
              p.mb-0 En alimentación, recepción, proveedor, lote y suministro; en medicamentos, entradas, salidas y tratamientos.
        .py-3.py-md-4(titulo="De saneamiento y formación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 De saneamiento y formación
              p.mb-0 Área, fecha, procedimiento y responsable de la limpieza y desinfección, así como la asistencia y la comprobación de competencias del personal.
      p.mb-5 Los registros deben responder a decisiones concretas, evitando capturar información que nadie revisa o repetir el mismo dato sin necesidad. La siguiente tabla presenta una periodicidad orientativa para la organización interna; los periodos de conservación y los soportes exigidos se definen según la normativa, el procedimiento y la finalidad de cada documento.
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 13.
                span Registros y actualización sugerida
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Registro
                      th.ajuste-border-tabla.texto-left Periodicidad sugerida
                      th.texto-left Responsable
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Inventario e identificación de animales
                      td.ajuste-border-tabla.texto-left Con cada cambio relevante
                      td.texto-left Responsable del predio
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Plan sanitario
                      td.ajuste-border-tabla.texto-left Revisión periódica y actualización según el riesgo
                      td.texto-left Médico veterinario o médico veterinario zootecnista
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tratamientos
                      td.ajuste-border-tabla.texto-left Cada tratamiento
                      td.texto-left Persona autorizada
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mortalidad
                      td.ajuste-border-tabla.texto-left Cada evento
                      td.texto-left Responsable del predio
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Vacunación y desparasitación
                      td.ajuste-border-tabla.texto-left Cada aplicación o intervención
                      td.texto-left Responsable según el plan sanitario
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Limpieza y desinfección
                      td.ajuste-border-tabla.texto-left Cada actividad
                      td.texto-left Operario responsable
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Control de medicamentos
                      td.ajuste-border-tabla.texto-left Cada ingreso o salida, y revisión de vencimientos
                      td.texto-left Responsable de bodega
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Control de alimentación
                      td.ajuste-border-tabla.texto-left Según el sistema productivo
                      td.texto-left Responsable de alimentación
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Control de agua
                      td.ajuste-border-tabla.texto-left Según el procedimiento y el riesgo
                      td.texto-left Responsable de instalaciones
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Capacitación
                      td.ajuste-border-tabla.texto-left Cada actividad formativa
                      td.texto-left Administrador
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mantenimiento
                      td.ajuste-border-tabla.texto-left Cada intervención
                      td.texto-left Responsable de infraestructura
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Acciones correctivas
                      td.ajuste-border-tabla.texto-left Cada hallazgo
                      td.texto-left Administrador o productor
          p.mb-5 Los #[b formatos] deben incluir campos suficientes y espacio legible, y antes de adoptarlos se prueban con eventos simulados para detectar omisiones. El formato de registro de tratamientos es uno de los más importantes para la inocuidad, por lo que debe contener los siguientes campos:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 5.
                span Formato de registro de tratamiento sanitario
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t5/img16.svg', alt='Tabla de formato para el registro de tratamientos sanitarios, con campos para identificación del animal, prescripción, medicamento, dosis, administración, tiempo de retiro, responsable y seguimiento. ').m-auto
      p El #[b tiempo de retiro] se calcula con base en el producto y sus instrucciones, a partir de la última administración, ya que cada medicamento tiene un retiro propio. Se registran la fecha y la hora de finalización cuando sea pertinente, se identifica al animal y se controla el destino de la carne o la leche durante ese periodo.
      p.mb-5 De forma similar, el registro de vacunación documenta la aplicación conforme al plan sanitario, y el lote, el vencimiento, la conservación y el responsable permiten relacionarla con el producto utilizado. En el registro de limpieza y desinfección se diferencia la remoción de la suciedad de la aplicación de un desinfectante, de modo que puedan comprobarse el producto, la concentración y el tiempo de contacto, conforme a las instrucciones del fabricante. Sus campos se presentan a continuación:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 6.
                span Formato de registro de vacunación
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t5/img17.svg', alt='Tabla de formato para el registro de vacunación, con campos de fecha, animal o lote, vacuna, lote y vencimiento, responsable y observaciones. ').m-auto
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 7.
                span Formato de registro de limpieza y desinfección
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t5/img18.svg', alt='Tabla de formato para el registro de limpieza y desinfección, con campos de fecha, área y actividad, producto, concentración y tiempo de contacto, responsable y observaciones. ').m-auto
      p La #[b finalidad] de los registros es demostrar la ejecución de las actividades, seguir los resultados, mantener la trazabilidad y detectar desviaciones. Su análisis debe realizarse con una periodicidad definida. Por ejemplo, la repetición de cojeras puede justificar la revisión de los pisos y del manejo podal, y un aumento de los tratamientos requiere evaluar, junto con el profesional responsable, las causas sanitarias y las condiciones de prevención.
      p.mb-0 La información debe interpretarse teniendo en cuenta la población y el periodo. Un mayor número de tratamientos puede deberse a un aumento del inventario, a un brote o a cambios en la forma de registrar, por lo que, antes de concluir que la sanidad empeoró, se contrastan estas posibilidades y se revisa la calidad de los datos.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Documentos
      p.mb-5 Los #[b documentos] orientan la operación y respaldan los requisitos y las decisiones del predio. Incluyen planes, protocolos, fichas, prescripciones, resultados de laboratorio, comprobantes e instrumentos oficiales. Un registro es una clase de documento que conserva la evidencia de una actividad, por lo que las categorías no deben interpretarse como conjuntos completamente separados. Los tipos de documentos se presentan a continuación:
      .bg___carrusel_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img19.png', alt="" ).m-auto
                  h4.text-center Técnicos
                  .box___card_sinbordes_p
                    p.mb-0.text-center Describen procedimientos y planes de manejo.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img20.png', alt="" ).m-auto
                  h4.text-center Administrativos
                  .box___card_sinbordes_p
                    p.mb-0.text-center Respaldan las compras, los inventarios, los proveedores y la organización del personal.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img21.png', alt="" ).m-auto
                  h4.text-center Sanitarios
                  .box___card_sinbordes_p
                    p.mb-0.text-center Reúnen las recomendaciones profesionales, los resultados y los soportes de atención.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img22.png', alt="" ).m-auto
                  h4.text-center Legales y oficiales
                  .box___card_sinbordes_p
                    p.mb-0.text-center Corresponden al registro del predio, las autorizaciones, la documentación de movilización y demás exigencias aplicables.
          p La organización de los documentos por proceso facilita encontrar la evidencia sin crear archivos duplicados. Por ejemplo, un plan sanitario puede archivarse como documento técnico y referenciarse en la carpeta de verificación sanitaria, y la misma versión debe estar disponible para quienes la utilizan.
          p.mb-5 A continuación, se presentan los principales aspectos que permiten verificar la organización, actualización, registro y seguimiento del sistema documental en la unidad productiva.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t5/img23.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Gestión y verificación del sistema documental&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t5/img24.png" style="max-width: 510px").m-auto
      .call___to_action.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t5/img25.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Capacitación del personal para la implementación de las BPG
            p.mb-0 Los invitamos a consultar el documento #[b Capacitación del personal para la implementación de las BPG], en el que podrán reconocer los métodos, responsabilidades y recursos necesarios para fortalecer las competencias del personal. 
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_01_Capacitacion_personal_BPG.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
import audio1 from '@/assets/curso/temas/t5/audios/Podcast_Gestion_verificacion_sistema_documental.mp3'
export default {
  name: 'Tema5',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
