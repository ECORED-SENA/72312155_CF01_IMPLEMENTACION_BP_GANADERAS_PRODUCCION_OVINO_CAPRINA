<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 
      .row.justify-content-center
        .col-lg-12.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre la implementación de Buenas Prácticas Ganaderas en la producción ovino-caprina, que integra fundamentos y normativa, criterios de cumplimiento, caracterización y diagnóstico de la unidad productiva, procesos y recursos, seguridad y salud en el trabajo, planificación de la implementación, certificación, cronograma, protocolos, registros, documentos y capacitación del personal. ")
        .col-auto
          a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
