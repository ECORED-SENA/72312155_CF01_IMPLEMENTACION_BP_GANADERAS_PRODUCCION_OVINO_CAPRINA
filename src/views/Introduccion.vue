<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          p Las #[b Buenas Prácticas Ganaderas (BPG)] constituyen un conjunto organizado de principios, procedimientos, medidas preventivas, prácticas de manejo y registros orientados a controlar los peligros asociados con la producción primaria. En los sistemas ovino-caprinos, su aplicación contribuye a fortalecer la inocuidad de los alimentos, la sanidad y el bienestar animal, la seguridad de los trabajadores y la protección del ambiente. 
          .box___color-text-imgleft(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.png', alt='' style="width: 400px").m-auto
              .col-xl.fit___box_container
                p.mb-0 La implementación de las BPG requiere conocer las características particulares de cada unidad productiva y realizar un diagnóstico que permita identificar fortalezas, brechas y peligros. Este proceso integra la inspección del predio, las entrevistas y la revisión documental, generando una línea de base para establecer prioridades, organizar los recursos disponibles y definir las acciones necesarias de acuerdo con los requisitos aplicables. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
      p.mb-0 A partir del diagnóstico, el #[b plan de implementación de las BPG] permite organizar las actividades, responsables, recursos, cronogramas, protocolos, registros y documentos requeridos para avanzar hacia el cumplimiento de los estándares establecidos. De esta manera, la unidad productiva puede desarrollar un proceso sistemático de mejora que favorezca la prevención de riesgos, la trazabilidad y la gestión adecuada de la producción ovino-caprina. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
