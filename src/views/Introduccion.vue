<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mb-5.mt-5
      .row.justify-content-around.align-items-center
        .col-lg-9.col-sm-10
          .bloque-texto-a.bgr-tarjeta-1.p-4
            .bloque-texto-b__texto
              p.mt-5 Apreciado aprendiz, bienvenido a este recurso educativo, a continuación, conocerá sobre los conceptos y herramientas útiles para validar las coberturas y tipos de pólizas que se presentan en el mercado, que le van a permitir aprender y conocer la ruta que utilizan las aseguradoras cuando se suscriben pólizas. Adicionalmente, aprenderá a verificar los datos del informe de inspección y generar los documentos que se acomoden a las organizaciones solicitantes.
        .col-lg-3.col-sm-10(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/introduccion/intro-img-1.svg', alt='Texto que describa la imagen').img-tarjeta-linea-1

    .row.mt-5
      p En el siguiente video conocerá de forma general, la temática que estudiará a lo largo del componente formativo.
      b ¡Muchos éxitos en este proceso de aprendizaje!

    figure.mb-5.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/izsDmyaic2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video

    .row.justify-content-around.align-items-center
      .col-lg-11.mb-5.mb-lg-0
        .bloque-texto-b.bgr-tarjeta-1.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            b.mb-5 Existen dos tipos de elementos inmiscuidos en la elaboración de un contrato de seguros, y estos pueden ser formales y reales; dentro de los formales encontramos: la proposición, la póliza, los datos del contratante y de la compañía de seguros, las firmas de ambos, entre otros. En los elementos reales podemos encontrar: el interés asegurable, el riesgo asegurable, la prima, la obligación del asegurador, etcétera
            i.fas.fa-quote-right
          p (SiSeguros, 2016)

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
