<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Informe de inspección

    .bloque-texto-g.p-3.p-sm-4.p-md-5      
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema-2/tema2-img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.bgr-tarjeta-12
        h3.mt-5 ¿Cómo se define la inspección de un seguro?
        br
        br
        p La inspección de riesgos es el conjunto de tareas y técnicas dirigidas a conocer y describir, las distintas características de un riesgo, que se entiende como el patrimonio expuesto.
        br
        br     
        p Es una tarea netamente de observación, y el propósito de descripción que se realiza con la idea de que otras personas puedan ser las que tomen ciertas decisiones, a la vista del informe de inspección. En general, conviene tener presente la relevancia de una adecuada inspección, pues de la calidad de la primera impresión que se haya manifestado, depende el acierto que se vaya a lograr en la toma de decisiones.

    .row.mt-5
      p #[strong Las inspecciones de riesgo las podrán llevar a cabo:] gerentes de riesgos, inspectores de compañías aseguradoras, intermediarios de seguros, técnicos en seguridad, peritos de seguros, entre otros.

    separador

    #t_2_1

    .titulo-segundo.color-acento-contenido
      h2 2.1 Tipos de informes

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .row.justify-content-around.align-items-center
        .col-lg-6.sm-10
          figure
            img(src='@/assets/curso/temas/tema-2/tema2-img2.svg', alt='Texto que describa la imagen')

        .col-lg-6.sm-10.mt-5
          h2 ¿Cuál es la importancia de los informes de riesgo?
          p.mt-5 En el presente contexto de crisis y de constantes cambios, se debe ser precavidos con las empresas con las que se tiene una relación comercial, para la finalidad de asegurar riesgos. Son cada vez más las empresas que están presentando impagos, que quieren contratar seguros; es por esta razón que se deben identificar y en lo posible evitar este tipo de lazos comerciales.
          p.mt-3 La cantidad de empresas que no pagan, ha aumentado de una manera notable en los últimos años, y se debe evitar que las relaciones se den con una empresa afectada por esta situación.      

    .row
      .col-lg-6.col-sm-10
        p En estos casos, más que hacer contactos con los encargados de las empresas y reuniones formales de presentación, es necesario disponer de soportes y evidencias de la realidad económica y financiera de todas las posibles empresas y clientes de las aseguradoras; es decir, con balances, estados de resultados e indicadores financieros.
        .cajon.bgr-tarjeta-2.p-3
          p.mt-3 La elaboración de los informes de riesgo se realiza con información periódica, y se presenta de manera organizada y, en muchos casos, con gráficos y tablas para un fácil entendimiento y una buena presentación. 
      .col-10.col-lg-6.my-3
        figure
          img(src='@/assets/curso/temas/tema-2/tema2-img2.1.svg', alt='Texto que describa la imagen')
      p.my-3 Estos informes traen consigo ventajas y permiten extraer información importante como se observa a continuación:
    
    .row.mt-5.justify-content-center
      .col-5.col-lg-4.my-3
        figure
          img(src='@/assets/curso/temas/tema-2/tema2-img3.1.svg', alt='Texto que describa la imagen')
      .col-lg-8
        LineaTiempoD.color-acento-contenido.justify-content-around.align-items-center
          .row.justify-content-center(numero="1" titulo="Facilita el acceso a la financiación")
            .col-5.col-lg-2
              figure.justify-content-around.align-items-center
                img(src='@/assets/curso/temas/tema-2/tema2-img3.svg', alt='Texto que describa la imagen')

            .col-lg-10
              p.mt-4 Al contar con información precisa sobre los pagarés recibidos, estos se convierten, con facilidad, en liquidez para la empresa.

          .row.justify-content-center(numero="2" titulo="Riesgo calificado y controlado")
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema-2/tema2-img4.svg', alt='Texto que describa la imagen')

            .col-lg-10
              p.mt-4 Con información más exacta sobre el riesgo y con un vínculo más cercano con la empresa cliente, se puede llegar a minimizar el riesgo y así tenerlo controlado.

          .row.justify-content-center(numero="3" titulo="Evaluación de la capacidad de pago")
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema-2/tema2-img5.svg', alt='Texto que describa la imagen')

            .col-lg-10
              p.mt-4 Se puede identificar la solvencia y estabilidad económica de la empresa, para efectos de evitar impagos y poder sostener relaciones comerciales.

          .row.justify-content-center(numero="4" titulo="Política de precios adaptada al riesgo del cliente")
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema-2/tema2-img6.svg', alt='Texto que describa la imagen')

            .col-lg-10
              p.mt-4 Cada detalle que se pueda conocer del cliente, ayuda a poder fortalecer los vínculos comerciales a la hora de evaluar la estabilidad económica del mismo. Un aspecto relevante, a tener en cuenta, es la capacidad de contar con variedad de fuentes de ingreso, es decir, que no tenga exclusivamente una sola fuente que, en caso de crisis, pudiera afectar su estabilidad.

          .row.justify-content-center(numero="5" titulo="Valoración de la empresa ajustada a la realidad")
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema-2/tema2-img7.svg', alt='Texto que describa la imagen')

            .col-lg-10
              p.mt-4 Como base fundamental para establecer informes sobre los riesgos ajustados a la realidad, es fundamental disponer y acceder a datos de fuentes oficiales; es decir, la fiabilidad de los informes depende fuertemente de las fuentes y datos utilizados por quienes realizan los reportes.

          .row.justify-content-center(numero="6" titulo="Empresa con solvencias y liquidez")
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema-2/tema2-img8.svg', alt='Texto que describa la imagen')

            .col-lg-10
              p.mt-4 Es necesario identificar la capacidad financiera de la empresa, que pueda evaluar la capacidad y voluntad de pagos y, de igual forma, la capacidad de liquidez en el corto plazo, para responder por sus obligaciones.

    separador

    #t_2_2
    
    .titulo-segundo.color-acento-contenido
      h2 2.2 Solicitud de asegurabilidad 

    .row
      p No todos los riesgos son asegurables; se debe tener en cuenta que cualquier situación adversa podría afectar a las personas pudiendo ser cubiertas por un seguro. Para que un riesgo sea asegurable es necesario que su materialización sea determinada por causas independientes y aleatorias del deseo de las partes. Es así, como existen hechos o siniestros que están por encima de las partes que lo ocasionan, y que cumplen unas condiciones para que el riesgo pueda ser asumido por una entidad de seguros. 
      p.mt-5 En este esquema se presentan las consideraciones para identificar que un riesgo sea asegurable.


    TabsB.color-acento-contenido.bgr-tarjeta-10.my-5
      .py-4.py-md-5(titulo="Inspección inicial del riesgo" :icono="require('@/assets/curso/temas/tema-2/tema2-img9.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0.mt-5.p-5
            p.mt-5 Se lleva a cabo la verificación de la información referenciada en la declaración de asegurabilidad. De manera simultánea, se revisa físicamente la persona o el bien a asegurar, lo que conlleva a la concreción de la inspección inicial del riesgo. 
          .col-7.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema-2/tema2-img10.svg', alt='Texto que describa la imagen')

      .p-4.py-md-5(titulo="Condiciones particulares" :icono="require('@/assets/curso/temas/tema-2/tema2-img11.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0.mt-5.p-5
            p.mt-5 Se identifican requisitos que permiten identificar los atributos de los riesgos asegurables en el sector asegurador, los cuales deben ser tenidos en cuenta ante la evaluación del riesgo, aunque no sean obligatorios. 
            p Los riegos podrán ser asegurables de acuerdo con:
            .row
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Se establece la probabilidad de ocurrencia del siniestro y, como consecuencia, se puede definir una prima justa.
                li
                  i.fas.fa-angle-right
                  | Existe una cantidad de asegurados que necesitan que el seguro les pueda amparar de una específica clase de riesgo.

          .col-7.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema-2/tema2-img12.svg', alt='Texto que describa la imagen')

      .p-4.py-md-5(titulo="Condiciones especiales" :icono="require('@/assets/curso/temas/tema-2/tema2-img13.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0.mt-5.p-5
            p.mt-5 Las condiciones especiales permiten regular y focalizar el alcance de las garantías que proporciona el asegurador en el seguro principal y para cada una de las coberturas complementarias. Es entonces que se pueden incluir o excluir garantías u otras situaciones que modifiquen lo indicado, inicialmente, en las condiciones generales. 
            .row
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  |  Debe tratarse de un hecho lícito, ya que los hechos ilícitos no pueden ser objeto de seguro.
                li
                  i.fas.fa-angle-right
                  |  Debe referirse a la posibilidad de un acontecimiento o hecho futuro.
                li
                  i.fas.fa-angle-right
                  |  Debe afectar, por igual, a todas las personas o cosas sujetas al mismo riesgo.
                li
                  i.fas.fa-angle-right
                  |  Debe ser conocido en toda su extensión y alcance, por el asegurador.
                li
                  i.fas.fa-angle-right
                  |  Debe ser incierta su realización o el tiempo en que se produzca.
                li
                  i.fas.fa-angle-right
                  |  Debe tener la probabilidad de ocurrencia real de la situación de riesgo.
                li
                  i.fas.fa-angle-right
                  |  Debe ocurrir independiente de la voluntad, es decir, su ocurrencia no puede ser estimada o programada.
                li
                  i.fas.fa-angle-right
                  |  Debe ser susceptible de causar un perjuicio valorable en dinero.
                li
                  i.fas.fa-angle-right
                  |  Las posibilidades de que ocurra el acontecimiento previsto, deben de existir en semejante proporción.
                li
                  i.fas.fa-angle-right
                  |  Teniendo en cuenta estos factores, el riesgo podrá ser considerado o no, por parte de la entidad aseguradora.
                  
          .col-7.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema-2/tema2-img14.svg', alt='Texto que describa la imagen')


    .row.mt-5
      h3 Solicitud de asegurabilidad
      p.mt-5 Para realizar una solicitud de asegurabilidad, se debe realizar una serie de procedimientos para aprobar y aceptar la asegurabilidad de un riesgo.
      p.mt-5 Entre estas tenemos:

    .row.justify-content-center.mt-5
      .col-7.col-lg-4.my-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false").tarjeta-tm-2-2
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema-2/tema2-img15.png')})`}")
            .tarjeta-slide__contenido.p-3
              h4.text-center ¿Cuándo aplica la asegurabilidad?
              p En primera instancia, la asegurabilidad de un riesgo debe cumplir con las situaciones de que sea incierto, tenga posibilidad de ocurrir, sea concreto, sea lícito y ocurra de manera fortuita. Es de esta manera que puede ser aceptada su cobertura por parte de la aseguradora.
              p Según todas las condiciones descritas, acepta o no, la asegurabilidad del riesgo en cuestión.
            
      .col-7.col-lg-4.my-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false").tarjeta-tm-2-2
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema-2/tema2-img16.png')})`}")
            .tarjeta-slide__contenido.p-4
              h4.text-center Declaración de asegurabilidad
              p Hace referencia a la información previa que el potencial asegurado informa a la aseguradora, a través de un formato (documento impreso o descargable en PDF), sobre el riesgo que afecta o podría afectar sus intereses asegurables. En el formato deben ser diligenciadas cada una de las amenazas identificadas, que puedan afectar a la persona.

      .col-7.col-lg-4.my-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false").tarjeta-tm-2-2
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema-2/tema2-img17.png')})`}")
            .tarjeta-slide__contenido.p-4
              h4.text-center Análisis del riesgo
              p El análisis de riesgo es el resultado de un procedimiento que tendrá como resultado la decisión final de aceptar o no, la admisión y establecer el precio al tomador del seguro, en decir, es aquí donde la aseguradora se hace responsable del riesgo evaluado y este se formaliza en un contrato. 



    .row.mt-5
      p La declaración de asegurabilidad, es un documento que hará parte integral del contrato en el cual se debe consignar, con total claridad y honestidad, todos los antecedentes médicos; en caso de encontrar diferencia o que no se ajuste a la realidad, será causa de anulación y, por consiguiente, no se podrá pagar, en ningún caso, alguna indemnización.
      p.mt-5 En la siguiente infografía, se dan a conocer los pasos para diligenciar correctamente el formato de declaración de asegurabilidad:

    ImagenInfografica.mt-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema-2/tema2-img18.svg', alt='Texto que describa la imagen')

      .tarjeta.color-primario.p-3(x="68%" y="17%" numero="")
        .h5.mb-2 Datos generales
        p Se ingresan los datos generales: el código de la póliza, el NIT del tomador, el valor de la cobertura.

      .tarjeta.color-primario.p-3(x="75.5%" y="48%" numero="")
        .h5.mb-2 Datos personales
        p Se ingresan los datos personales: apellidos, nombres, tipo de identificación y demás datos personales.

      .tarjeta.color-primario.p-3(x="68%" y="79%" numero="")
        .h5.mb-2 Datos del beneficiario
        p Se ingresan los datos del beneficiario: quién o quiénes son los beneficiarios.
      
      .tarjeta.color-primario.p-3(x="31.8%" y="79%" numero="")
        .h5.mb-2 Declaración de asegurabilidad:
        p Se debe informar si ha padecido o le han diagnosticado alguna de las enfermedades que aparecen en el listado, se debe describir cuál, y el tiempo de aparición.
        p Asimismo, si ha tenido incapacidad u hospitalización por más de 60 días.

      .tarjeta.color-primario.p-3(x="24.3%" y="48%" numero="")
        .h5.mb-2 Seguimiento médico
        p Se debe precisar la información de las enfermedades que padece, informando el nombre del médico, la institución médica, la fecha y la causa.
      
      .tarjeta.color-primario.p-3(x="32%" y="17%" numero="")
        .h5.mb-2 Firma y huella
        p Finalmente, debe firmar con identificación, la fecha y la huella dactilar.


    .row.justify-content-around.align-items-centerrd.mt-5
      .col-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-lg-2
              img(src="@/assets/curso/temas/tema-2/tema2-img19.svg").img19-tm1
            .col-9.col-lg-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Formato Declaración de asegurabilidad
                  p Para conocer el formato de declaración de asegurabilidad, lo invitamos a leer el siguiente documento:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Formato_Declaración_asegurabilidad.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

         
              
    
    separador    

    
    #t_2_3

    .titulo-segundo.color-acento-contenido
      h2 2.3 Documentación asociada a los contratos de seguros

    .row.ampliar.fondo-tema2-1.px-5.margen-fondo-tema2-1
      .col-12

        .row.justify-content-around.align-items-center.margen-contenido-fondo-tema2-1
          .col-10
            figure
              img(src='@/assets/curso/temas/tema-2/tema2-img20.svg', alt='Texto que describa la imagen')

  .container.tarjeta.tarjeta.tarjeta--blanca3.bgr-fondo-banner-tm2.p-4.p-md-5.mb-5



    .row.justify-content-around.align-items-center.mt-3
      .row.justify-content-around.align-items-center
        .col-lg-7.sm-10
          h3 Componentes de las pólizas
          p En general, las pólizas, en sus estructuras, se dividen en dos componentes o condiciones: las condiciones generales y las condiciones particulares.
          h3 Condiciones generales
          p Hacen referencia a los textos que se incluyen en las pólizas, que contienen las regulaciones y las consideraciones propias del contrato; para establecer las condiciones generales, se debe contar mínimo con los siguientes puntos: la cobertura y el objeto asegurado, elementos de alteración o agravación del riesgo, exclusiones, declaraciones del asegurado, terminación, prima, comunicación entre las partes, y que incluyan los aspectos que permiten regular el contrato y que no sean condiciones particulares.
        .col-lg-5.sm-10.my-5
          figure
            img(src='@/assets/curso/temas/tema-2/tema2-img21.png', alt='Texto que describa la imagen').imagen-decorativa-1

    .row.justify-content-around.align-items-center.mt-3
      .row.justify-content-around.align-items-center
        .col-lg-5.sm-10.my-5
          figure
            img(src='@/assets/curso/temas/tema-2/tema2-img22.1.svg', alt='Texto que describa la imagen')      
        .col-lg-7.sm-10
          h3 Condiciones particulares
          p Hacen referencia a condiciones propias que por naturaleza no se expresan en las condiciones generales; en este caso, hacen referencia a elementos particulares como: requisitos de aseguramiento, especificidad de la materia asegurada, individualización de las partes del asegurado, el contratante, el asegurado y el beneficiario, ubicación de la materia asegurada, prima pactada, monto asegurado, deducibles, duración y la forma de pago.  
          .cajon.bgr-tarjeta-2.p-3
            p En general, tanto las condiciones generales como las particulares, deben ser redactadas de forma clara y de fácil entendimiento; no podrán conducir al error y deben estar contempladas dentro del marco de la ley.

    .row.mt-5
      p Para la formalización del contrato de seguro, es necesario reunir una serie de documentos y elementos adicionales, para continuar con el proceso de emisión del contrato. Entre estos se pueden observar los que siguen a continuación:


    .col-12
      .tarjeta.p-4.bgr-fondo.my-5
        SlyderA(tipo="b")
          .row
            .col-md-5.mb-4.mb-md-0
              h4.mt-5 Solicitud
              p Es el primer contacto con la aseguradora; se refiere al documento en donde el interesado tomador, expresa la descripción del riesgo que desea contratar y es detallado, de manera precisa, de acuerdo con la información solicitada por parte de la aseguradora.

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema-2/tema2-img23.svg', alt='Texto que describa la imagen')
          .row
            .col-md-5.mb-4.mb-md-0
              h4.mt-5 Propuesta de seguro de cotización
              p Posterior a la solicitud por parte del interesado, la aseguradora, con base en la información, analiza y valora el riesgo y además establece una cotización o propuesta de seguro, al posible tomador.

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema-2/tema2-img24.svg', alt='Texto que describa la imagen')
          .row
            .col-md-5.mb-4.mb-md-0
              h4.mt-5 Póliza
              p Es el documento final que incluye las condiciones propias del seguro y de los bienes que serán objeto de asegurar, por la compañía aseguradora.

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema-2/tema2-img25.svg', alt='Texto que describa la imagen')

          .row
            .col-md-5.mb-4.mb-md-0
              h4.mt-5 Certificado individual de seguro
              p Es la certificación que expide la compañía aseguradora al asegurado dentro de una póliza colectiva, explicando las condiciones.

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema-2/tema2-img26.svg', alt='Texto que describa la imagen')

          .row
            .col-md-5.mb-4.mb-md-0
              h4.mt-5 Recibo
              p Es el soporte del pago del seguro, quedando justificado el detalle del pago de la prima.

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema-2/tema2-img27.svg', alt='Texto que describa la imagen')

          .row
            .col-md-5.mb-4.mb-md-0
              h5.mt-5 Carta de garantía
              p Se expide cuando aún no se tiene la póliza definitiva. Es solicitada por parte del tomador, quien requiere demostrar que cuenta con un seguro y que no ha sido expedido por la aseguradora. Esta carta es una extensión provisional, como garantía de la existencia de una cobertura a solicitud del tomador.

            .col-md-7.mb-5
              figure
                img(src='@/assets/curso/temas/tema-2/tema2-img28.svg', alt='Texto que describa la imagen')

      .row.mt-5
        .col-lg-3.col-sm-10
          h4.mt-5 Características de un contrato
          p.mt-3 A continuación, se presentan las características o atributos que describen a los contratos:
        .col-lg-9
          SlyderF(columnas="col-lg-8 col-xl-6 col-sm-10")
            .tarjeta.border.bgr-tarjeta-5.p-3
              .row.justify-content-center.mb-3

              h2.text-center.mt-5 Simple
              p.text-center Se presenta al cumplir con su obligación sin condiciones porque no depende de otros, y está en su marco de limitaciones de la ocurrencia del riesgo.

            .tarjeta.border.bgr-tarjeta-5.p-3
              .row.justify-content-center.mb-3

              h2.text-center.mt-5 Principal
              p.text-center Se presenta al identificar su propia autonomía, tiene su existencia sin condicionamientos porque tiene su función clara y esto le da su característica de principal.

            .tarjeta.border.bgr-tarjeta-5.p-3
              .row.justify-content-center.mb-3

              h2.text-center.mt-5 Oneroso
              p.text-center Se presenta al identificar que tiene un costo y, en contraprestación, tiene un servicio definido.
            
            .tarjeta.border.bgr-tarjeta-5.p-3
              .row.justify-content-center.mb-3

              h2.text-center.mt-5 Mercantil
              p.text-center Es un contrato mercantil ya que se encuentra referenciado en el código civil; al mismo tiempo, es un acto de comercio que se encuentra en el código de comercio colombiano.
          
            .tarjeta.border.bgr-tarjeta-5-1.p-3
              .row.justify-content-center.mb-3

              h2.text-center De buena fe
              p.text-center Se basa en las actuaciones del asegurado, partiendo del principio de honestidad, en donde se obliga a describir con claridad, la naturaleza del riesgo; asimismo, procura que no ocurra el mismo y, en caso de ocurrencia del siniestro, tratar de minimizar las consecuencias. Por el lado del asegurador, se parte de la buena fe en la formalización del contrato y la redacción e interpretación de las cláusulas.
            
            .tarjeta.border.bgr-tarjeta-5.p-3
              .row.justify-content-center.mb-3

              h2.text-center De adhesión
              p.text-center Se presenta como adhesión teniendo en cuenta la reciprocidad en la aceptación de las cláusulas por las partes, es decir, en primera instancia, una de las partes las propone por escrito y, consecuentemente, la otra parte las acepta.
            
            .tarjeta.border.bgr-tarjeta-5.p-3
              .row.justify-content-center.mb-3

              h2.text-center.mt-5 Aleatorio
              p.text-center Como consecuencia del azar o situación fortuita, cabe la posibilidad de una afectación o pérdida y, por este motivo, en el contrato se establece la ocurrencia.
            
            .tarjeta.border.bgr-tarjeta-5-1.p-3
              .row.justify-content-center.mb-3

              h2.text-center Indivisible
              p.text-center El contrato de seguros es único, así sea que en ocasiones esté dividido en términos periódicos para facilitar el pago de la prima; el contrato es indivisible y, por lo tanto, el consentimiento dado al comienzo, lo rige en su duración completa.
              p.text-center Un contrato es indivisible teniendo en cuenta su fundamento y característica de único, ya que la modalidad de pagos, en muchos casos, se hace periódicamente y no lo hace particionado; además, desde su emisión se ha definido por una duración específica en el tiempo.
            
            .tarjeta.border.bgr-tarjeta-5.p-3
              .row.justify-content-center.mb-3

              h2.text-center.mt-5 Conmutativo
              p.text-center Se presenta este atributo al evidenciar que cada una de las partes conlleva obligaciones.


</template>

<script>
export default {
  name: 'Tema2',
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
