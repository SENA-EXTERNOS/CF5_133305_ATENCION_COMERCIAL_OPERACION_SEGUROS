<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de la información
    .row.justify-content-around.align-items-center
      .col-6
        figure
          img(src='@/assets/curso/temas/tema-3/tema3-img1.svg', alt='Texto que describa la imagen')
      .col-6.lg-5
        p.mt-2 Los encargados de las áreas comerciales suelen enfrentarse, día a día, con dos situaciones a la hora de realizar el informe de ventas. En primer lugar, no cuentan con datos, y en segundo, por el contrario, cuentan con una sobrecarga de información comercial.
        p.mt-2 Actualmente, con las capacidades y beneficios de un CRM (Customer Relationship Management, o Gestión de las relaciones con clientes) y los avances tecnológicos en ventas, se puede segmentar, parametrizar y analizar una gran cantidad de datos comerciales de muchas formas, para poder acceder a datos como:
        <i class="fas fa-angle-right" STYLE="Color: green"></i> Los ingresos de ventas semanales
        <br>
        <i class="fas fa-angle-right" STYLE="Color: green"></i> La cantidad de llamadas realizadas por los vendedores
        <br>
        <i class="fas fa-angle-right" STYLE="Color: green"></i> Las visitas comerciales a las empresas clientes
        <br>
        <i class="fas fa-angle-right" STYLE="Color: green"></i> Los incrementos de la cuota de mercado
        <br>
        <i class="fas fa-angle-right" STYLE="Color: green"></i> La tasa media de conversión de oportunidades llevadas a ventas
        <br>
        <i class="fas fa-angle-right" STYLE="Color: green"></i> Los indicadores de fidelidad y la retención del cliente
    .row.mt-5
      h2 Participaciones en ventas y siniestros
      p Los análisis de informes de ventas ayudan al equipo comercial, de las empresas, a tener una visión clara de sus ventas periódicas y de igual manera, permiten evaluar las estrategias y acciones implementadas.
      p A continuación, se presentan unas recomendaciones y acciones para ser llevadas a cabo por los departamentos de ventas.
    SlyderB.mb-5.mt-5(:datos="datosSlyder")
    .row
      h2 Tipos de requerimientos
      p Una de las consideraciones que se debe tener para gestionar adecuadamente la información, es la de realizar un reporte de ventas exitoso. Este puede presentar un panorama general o específico del negocio, el cual depende directamente de los objetivos y el tipo de registro que desea llevar y analizar.
      p Un informe de ventas debe incluir 3 elementos relevantes:
    .row.justify-content-center.mt-5
      .col-10.justify-content-center
        .tarjeta.border.color-adicional-1
          .row.justify-content-center
            .col-4
              figure
                img(src='@/assets/curso/temas/tema-3/tema3-img6.svg', alt='Texto que describa la imagen')
            .col-8.justify-content-center.mt-5
              h3 Resumen de ventas
              p Se presentan, de manera concreta, las ventas de la empresa por periodos, ya sea semanal, mensual, trimestral, semestral o anual.
        .tarjeta.border.color-adicional-1.mt-5
          .row.justify-content-center
            .col-4
              figure
                img(src='@/assets/curso/temas/tema-3/tema3-img7.svg', alt='Texto que describa la imagen')
            .col-8.justify-content-center.mt-5
              h3 Ganancias y pérdidas
              p Un estado de ganancias y pérdidas permite conocer, de primera mano, la situación general de las finanzas y los rendimientos de las operaciones comerciales; asimismo, es posible conocer las proyecciones de las inversiones y gastos de la gestión comercial.
        .tarjeta.border.color-adicional-1.mt-5
          .row.justify-content-center
            .col-4
              figure
                img(src='@/assets/curso/temas/tema-3/tema3-img8.svg', alt='Texto que describa la imagen')
            .col-8.justify-content-center.mt-5
              h3 Información de los clientes
              p En una de las gestiones vitales del área de ventas, permite establecer relaciones de confianza con los clientes y, al mismo tiempo, generar estrategias de fidelización con los clientes.
    .row
      p.mt-5 Los informes de ventas son cada vez más fáciles de elaborar con la ayuda de herramientas informáticas basadas en hojas de cálculo (Excel, Drive); se inicia con la organización de la información y luego se procede con el análisis y presentación de los mismos.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO

    


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Importancia de un análisis de ventas',
        texto:
          'El análisis de ventas debe centrarse en mejorar y desarrollar una estrategia para hacer crecer el rendimiento de las ventas, tanto a corto como a largo plazo. Un ejemplo común de una actividad de análisis de ventas es la establecer objetivos específicos para que el equipo de ventas lo pueda concretar en forma de indicadores de ventas. La importancia se verá reflejada en la mejora de las ventas y una mejor gestión en las actividades de las mismas.',
        imagen: require('@/assets/curso/temas/tema-3/tema3-img2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'El informe de ventas y su contenido',
        texto:
          'El reporte de ventas es un informe que contribuye con las empresas para disponer de una clara gestión de resultantes de sus operaciones comerciales. El objetivo de los informes de ventas con base en información del volumen de ventas y la gestión de los asesores comerciales, se fundamenta en la toma de decisiones oportunas y acertadas para una mejor gestión en las ventas.',
        imagen: require('@/assets/curso/temas/tema-3/tema3-img3.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Atracción de cliente',
        texto:
          'La atracción de nuevos clientes es una de las razones misionales de las empresas; en este sentido, un informe completo de ventas es el insumo estrella para analizar las estrategias implementadas, el volumen de ventas por periodo, evaluar el rendimiento de los agentes comerciales y recursos utilizados, es decir, permitirá identificar las nuevas acciones y planes de la empresa para la atracción de nuevos clientes.',
        imagen: require('@/assets/curso/temas/tema-3/tema3-img4.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Cuestionamiento sobre los informes de ventas',
        texto:
          'Las preguntas que se deben responder sobre un informe de ventas:<br><i class="fas fa-chevron-right" STYLE="Color: green"></i>¿Cómo se hace?<br><i class="fas fa-chevron-right" STYLE="Color: green"></i>¿Para qué sirve?<br><i class="fas fa-chevron-right" STYLE="Color: green"></i>¿Cómo se hace diariamente?<br><i class="fas fa-chevron-right" STYLE="Color: green"></i>¿Cuáles son las técnicas para elaborarlo?',
        imagen: require('@/assets/curso/temas/tema-3/tema3-img5.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
