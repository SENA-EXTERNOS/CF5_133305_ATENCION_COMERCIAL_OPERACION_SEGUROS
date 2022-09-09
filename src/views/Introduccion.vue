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
      .col-10
        .row.justify-content-around.align-items-center
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/introduccion/intro-img-1.svg', alt='Texto que describa la imagen')
          .col-10
            p El proceso para la suscripción de una póliza, se fundamenta en el resultado de contar con algún tipo de protección frente a un riesgo que pueda surgir en determinado momento o circunstancia de la vida. Se hace necesario entonces, contratar a una aseguradora para la adquisición de una póliza de seguro, considerado un recurso adecuado para ahorrar, proteger y compensar, debido a las posibles consecuencias no favorables de un evento negativo.

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.mb-5
          p Durante el desarrollo de este componente formativo se ubican conceptos y herramientas útiles para validar las coberturas y tipos de pólizas que se presentan en el mercado, que le van a permitir aprender y conocer la ruta que utilizan las aseguradoras cuando se suscriben pólizas. Adicionalmente, aprenderá a verificar los datos del informe de inspección y generar los documentos que se acomoden a las organizaciones solicitantes.
          p.mt-2 Los temas serán abordados de manera que usted pueda interactuar con los conceptos y herramientas brindadas, para lograr el cumplimiento de las temáticas indicadas en cada sección del componente.
          p.mt-2 Entre algunos de los elementos incluidos en los seguros se pueden enfatizar: coberturas y modificaciones, indemnizaciones, amparos y exclusiones, tasas, valores asegurados, deducibles y amparos adicionales.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/introduccion/intro-img-2.svg', alt='Texto que describa la imagen')
    img(src='@/assets/curso/temas/introduccion/intro-img-3.svg', alt='Texto que describa la imagen').imagen-decorativa-1

    figure.mb-5.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video

    .row.justify-content-around.align-items-center
      .col-lg-11.mb-5.mb-lg-0
        .bloque-texto-b.bgr-tarjeta-1.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 Existen dos tipos de elementos inmiscuidos en la elaboración de un contrato de seguros, y estos pueden ser formales y reales; dentro de los formales encontramos: la proposición, la póliza, los datos del contratante y de la compañía de seguros, las firmas de ambos, entre otros. En los elementos reales podemos encontrar: el interés asegurable, el riesgo asegurable, la prima, la obligación del asegurador, etcétera
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
