<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-sexto.color-primario
      h2 Atención comercial y operación en seguros
      p Síntesis: Manuales de suscripción, inspección y elaboración de informes
    p.mt-5 El componente presentado, ha expuesto a través de un recorrido por la temática de manuales de suscripción de pólizas, la inspección del riesgo y la elaboración de los informes finales de la gestión comercial. En este sentido, se ilustra un mapa conceptual que se encuentra estructurado en dos bloques; el primero, describe los contenidos del componente: suscripción de las pólizas, informe de los riesgos y la elaboración de los informes; en el segundo bloque, se presentan los resultados esperados en toda la temática expuesta.

    .row.justify-content-center.mt-5
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
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
