<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Manuales de suscripción

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .row.justify-content-around.align-items-center
        .col-lg-6.ms-10
          p Los seguros son utilizados para compensar una probabilidad de contingencia de un posible daño o afectación, y la función de la cobertura del seguro es la de suplir esa necesidad económica protegida; es aquí donde se debe enfatizar que los seguros no pueden ser, en ningún momento, una fuente para generar riqueza o lucrarse. La clasificación de la actividad económica de los seguros es la de prestar servicios, o sea que no constituye una actividad industrial. 
          p.mt-2 Cuando se habla de tipos de indemnizaciones, modificación del contrato y coberturas de los seguros, la referencia se dirige hacia los componentes propios de un seguro.
          .cajon.bgr-tarjeta-2.p-3
            p Un contrato de seguros es un acuerdo entre dos partes: el primero, el asegurador y el segundo, el tomador, ambos con obligaciones y derechos que quedan estipulados en la celebración de ese acuerdo o contrato.
        .col-lg-6(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema-1/tema1-img1.svg', alt='Texto que describa la imagen')

    .row.my-5
      p A continuación, se presentan algunas funciones de las partes que conforman un contrato de seguro:


    .row.justify-content-around.align-items-center
      .col-lg-8(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema-1/tema1-img2.png', alt='Texto que describa la imagen')
    .row.mt-5.mb-5
      p La expedición de una póliza se puede expresar como: serie de acciones y procedimientos que se llevan a cabo para que la empresa aseguradora apruebe o acepte tomar el riesgo manifiesto. Como resultado de esta acción, se definen las condiciones y la prima del seguro.
      p.mt-4 Algunas de las funciones propias de los departamentos responsables de la emisión de pólizas dentro de las compañías aseguradoras, son las que veremos a continuación:          

    .row.mt-5.justify-content-center
      .col-8.col-lg-3.mt-3(data-aos="fade-left")
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false").tarjeta-verde
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema-1/tema1-img3.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-4
              figure
                img(src='@/assets/curso/temas/tema-1/tema1-img3.1.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1
              h4.mt-3.text-center Creación de normas y políticas
              p.text-center Creación de normas y políticas de expedición en cada rama de los seguros.

      .col-8.col-lg-3.mt-3(data-aos="fade-up")
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false").tarjeta-verde
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema-1/tema1-img4.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-4
              figure
                img(src='@/assets/curso/temas/tema-1/tema1-img4.1.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1
              h4.mt-3.text-center Definición de normas             
              p.text-center Definir las normas que permitan describir los suplementos de los seguros.

      .col-8.col-lg-3.mt-3(data-aos="fade-up")
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false").tarjeta-verde
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema-1/tema1-img5.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-4
              figure
                img(src='@/assets/curso/temas/tema-1/tema1-img5.1.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1
              h4.mt-3.text-center Vigilancia y monitoreo
              p.text-center Vigilar y monitorear que se cumplan las normas de expedición, antes que sea aceptado el riesgo.

      .col-8.col-lg-3.mt-3(data-aos="fade-right")
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false").tarjeta-verde
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema-1/tema1-img6.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-4
              figure
                img(src='@/assets/curso/temas/tema-1/tema1-img6.1.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1
              h4.mt-3.text-center Ofrecimiento de alternativas
              p.text-center Ofrecer alternativas de atención al cliente, derivadas de la interpretación de las condiciones generales y particulares, propias de la póliza.

    .row.mt-5
      p.mt-5 Son diversas las razones que una aseguradora utiliza para aceptar asegurar un riesgo, y entre estas se encuentran los elementos fundamentales para la expedición de la póliza: el riesgo, la cobertura y el valor asegurable.
      p.mt-3 Los elementos para identificar, con claridad, por parte de las empresas aseguradoras al expedir las pólizas son:

   
    .tarjeta--container.row.mb-5.mt-5(data-aos="fade-down")
      .col-md.tarjeta.bgr-tarjeta-8
        .row.justify-content-center.mb-4
          .col-11.mt-5
            figure
              img(src='@/assets/curso/temas/tema-1/tema1-img7.svg', alt='Texto que describa la imagen').imagen-decorativa-5
          .col-10
            p.mt-5.text-center Riesgos a ser consultados, riesgos y coberturas aceptadas en condiciones normales, sin ninguna excepcionalidad.

      .col-md.tarjeta.bgr-tarjeta-9
        .row.justify-content-center.mb-4
          .col-11.mt-5
            figure
              img(src='@/assets/curso/temas/tema-1/tema1-img8.svg', alt='Texto que describa la imagen').imagen-decorativa-4
          .col-10
            p.mt-5.text-center Coberturas a consultar y coberturas excluidas.
 
      .col-md.tarjeta.bgr-tarjeta-8
        .row.justify-content-center.mb-4
          .col-11.mt-5
            figure
              img(src='@/assets/curso/temas/tema-1/tema1-img9.svg', alt='Texto que describa la imagen')
          .col-10
            p.mt-5.text-center Valor máximo de aceptación, si el riesgo a asegurar excede el valor de la suma asegurada.


    .row.mt-5
      p En la contratación, de modalidades en seguros, se hace necesario llevar a cabo una serie de requerimientos denominados #[strong normas de contratación.] Estas normas son las que permiten regular las condiciones para la suscripción de la póliza, aportando como resultado, el cubrimiento correcto del riesgo del objeto que va a ser asegurado.         
    separador

    #t_1_1

    .titulo-segundo.color-acento-contenido.mt-5
      h2 1.1  Componentes y tipos de indemnizaciones

    .row.mt-5
      p En un contrato de seguro se destacan elementos esenciales contemplados en el Código de Comercio, artículo 1045. Sin la aplicación de alguno de estos elementos, el contrato no tiene efecto alguno.
      p.mt-5 Los componentes de un contrato de seguros son: 
    .row.justify-content-center.mt-5
      .col-6.col-lg-4.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema-1/tema1-img24.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1-1
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta bgr-tarjeta-3").mt-5
          .row(titulo="Interés asegurable")
              p Es el interés del tomador o asegurado, para que el siniestro asegurado no ocurra. Se expresa como ese vínculo entre el tomador y lo que asegura (la vida, un bien, algún patrimonio).      
          .row(titulo="El riesgo asegurable")
              p Se define como la situación incierta a asegurar. Un ejemplo concreto es el de un contrato de vida, en el cual, la muerte es el riesgo asegurable. Asimismo, cuando ocurre un hurto, un incendio, un terremoto; en este sentido, son relativos a la responsabilidad civil que, de manera directa, ocasiona una disminución de los activos asegurados, y es aquí donde es identificado el derecho adquirido sobre el activo asegurado.      
          .row(titulo="Prima (precio del seguro)")
              p Es la cantidad de dinero, a cuenta del tomador del seguro, que se debe pagar en un tiempo específico, al asegurador o empresa de seguros.      
          .row(titulo="Obligación condicional del asegurador")
              p En el caso de ocurrencia de un suceso incierto, se refiere a la condición de pagar una indemnización al asegurado.
          .row(titulo="Amparo")
              p Es la forma como son representados o descritos los riesgos que se asumen en los productos que ofrecen las aseguradoras; en la mayoría de los casos, se refieren a: las primas, la vigencia, las primas y el valor asegurado.      
          .row(titulo="Amparo adicional")
              p Se refiere a las coberturas adicionales que son otorgadas por comprar un seguro; es considerado como un valor agregado por parte de la aseguradora y está incluido en la póliza. Esta cobertura adicional, es brindada por cuenta de la aseguradora.      
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta bgr-tarjeta-3")
          .row(titulo="Comisión por intermediación")
              p Es un porcentaje de las ventas que se otorga a los intermediarios, por vender las pólizas de una compañía aseguradora. Previamente son definidas las escalas o tablas de comisiones, de acuerdo con los productos vendidos.      
          .row(titulo="Deducible")
              p Se define como el valor que asume el asegurado, previo a que la compañía aseguradora realice el pago asegurado; esta cifra se pacta con anterioridad y, sin variar, se descuenta del valor completo de la indemnización. Se calcula como un valor fijo, un porcentaje de la pérdida, o un porcentaje del valor asegurado.      
          .row(titulo="Exclusión")
              p Se realiza a través de una cláusula en la cual se determina la limitación de la póliza. Se define en razón del tiempo, la edad, el lugar, el monto o el evento.      
          .row(titulo="Exclusión de contrato")
              p Situación por la que una cobertura o un amparo no tienen vigencia. Se especifica con claridad, peligros, localizaciones, propiedades o pérdidas, que no son pagadas dentro del contrato.      
          .row(titulo="Valor asegurado")
              p Es el máximo valor que el asegurador se compromete a pagar al cliente, por un riesgo, en caso de que ocurra.
      .col-6.col-lg-4.my-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema-1/tema1-img25.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1-1
    .row.mt-5
      h5 Tipos de indemnizaciones


    .row.mt-5
      p Un seguro es un servicio que se contrata con una compañía o empresa de seguros; en caso de sufrir un riesgo como un daño o pérdida de bienes, muerte, enfermedad, la aseguradora ayuda a restablecer la situación para hacerla llevadera, debido al pago en dinero o indemnización. El monto será pagado, o el beneficio será otorgado por la compañía de seguros, a la persona que presente una reclamación después de haber ocurrido el riesgo, el daño o la pérdida.
    .row.mt-5
      p Los tipos de indemnizaciones que se presentan en contratos de seguros, se describen a continuación:



    .row.justify-content-center.mb-5.mt-5
      .col-11.col-lg-4.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema-1/tema1-img21.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Indemnización pactada 
            p.mb-0 Daño reparado en donde las partes acuerdan, conjuntamente, el valor de una cuantía.

      .col-11.col-lg-4.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema-1/tema1-img22.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Indemnización a tanto alzado
            p.mb-0 A tanto alzado es un pago fijado en una determinada cantidad, y se caracteriza por ser realizado antes de la obtención de un bien o la prestación de un servicio concreto.

      .col-11.col-lg-4.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema-1/tema1-img23.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Indemnización diaria
            p.mb-0 Es el pago efectuado por el asegurador al asegurado y se refiere a los seguros de accidentes personales, por los días en que se permanece con incapacidad laboral temporal, y de acuerdo con la suma concertada en las condiciones particulares contratadas.    


    separador

    #t_1_2

    .titulo-segundo.color-acento-contenido
      h2 1.2  Cobertura de aseguramiento

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .row.justify-content-around.align-items-center

        .col-7.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema-1/tema1-img11.png', alt='Texto que describa la imagen').imagen-decorativa-1
        .col-lg-8.mb-5
          p.mt-5 En términos de coberturas, el asegurador está obligado a responder hasta el valor límite del valor asegurado; es decir, sobre las afectaciones económicas como resultado de la ocurrencia de un siniestro.
          p.mt-5 Ese valor a pagar por concepto de indemnización, al asegurado, por parte de la compañía aseguradora, es el compromiso asumido que se denomina como #[strong cobertura de un seguro] y se realiza con la finalidad de reparar las afectaciones resultantes del siniestro. Es necesario resaltar, que las coberturas tienen un valor límite que se denomina capital asegurado y fue definido al instante de pactar el contrato.
          .cajon.bgr-tarjeta-2.p-4.mt-5
            p Una póliza de seguro es un documento que establece las relaciones entre el asegurador y el asegurado, donde quedan pactadas las condiciones del #[strong contrato de seguro], plasmando las normas generales, particulares o especiales. Su materialización se da cuando las dos partes han aceptado, y de ahí surgen los derechos y obligaciones.

      p Las pólizas se pueden diferenciar de acuerdo con el alcance de las partes de sus componentes. Estos pueden ser:

    TabsB.color-acento-contenido.bgr-tarjeta-10
      .p-4.py-md-5(titulo="Condiciones generales" :icono="require('@/assets/curso/temas/tema-1/tema1-img13.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0.mt-5.p-4
            p.mt-5 Se refieren al establecimiento de los principios básicos por parte del asegurador, de manera que se regulen los contratos que hacen parte del mismo ramo, es decir, los elementos referidos al objeto del seguro, su extensión, los riesgos excluidos, manera de liquidación de los siniestros, cobro de los recibos, las indemnizaciones, las comunicaciones, la subrogación, la jurisdicción, entre otros.    
          .col-7.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema-1/tema1-img14.svg', alt='Texto que describa la imagen')

      .p-4.py-md-5(titulo="Condiciones particulares" :icono="require('@/assets/curso/temas/tema-1/tema1-img15.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0.mt-5.p-4
            p.mt-5 A continuación se describen los elementos de las condiciones particulares con respecto al riesgo individual:
            .row
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Nombre, domicilio, y clara designación del asegurado y del beneficiario; concepto con el cual se asegura.
                li
                  i.fas.fa-angle-right
                  | Naturaleza del riesgo a cubrir. Indicación de los objetos asegurados.
                li
                  i.fas.fa-angle-right
                  | Valor total asegurado o alcance de la cobertura.
                li
                  i.fas.fa-angle-right
                  | Importe de la prima, recargos e impuestos.
                li
                  i.fas.fa-angle-right
                  | Vencimiento de las primas, lugar y forma de pago.
                li
                  i.fas.fa-angle-right
                  | Duración del contrato, indicando iniciación y finalización.
          .col-7.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema-1/tema1-img16.svg', alt='Texto que describa la imagen')

      .p-4.py-md-5(titulo="Condiciones especiales" :icono="require('@/assets/curso/temas/tema-1/tema1-img17.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0.mt-5.p-4
            p.mt-5 Las condiciones especiales permiten regular y focalizar el alcance de las garantías que proporciona el asegurador en el seguro principal y para cada una de las coberturas complementarias. Es entonces que se pueden incluir o excluir garantías u otras situaciones que modifiquen lo indicado, inicialmente, en las condiciones generales. 
          .col-7.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema-1/tema1-img18.svg', alt='Texto que describa la imagen')
    
    .row.justify-content-around.align-items-centerrd.mt-5
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-lg-2
              img(src="@/assets/curso/temas/tema-1/tema1-img19.svg").img19-tm1
            .col-9.col-lg-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tipos de Pólizas
                  p Para conocer los diferentes tipos de pólizas, lo invitamos a leer el siguiente documento:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Tipos_de_Pólizas.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.mt-5.justify-content-around.align-items-center
      h4 Cobertura de acuerdo con el tipo de seguro
      p.mt-3 Las coberturas se pueden clasificar en tres categorías: seguros personales, seguros de daño o patrimoniales y seguros de prestación de servicios. A continuación, encontrará la descripción de cada una de las categorías de acuerdo con la tipología de seguros. 
      h4.mt-3 Seguros personales
      p Los seguros personales se refieren a todos los riesgos que afectan a una persona en su salud y en su integridad física. Estos se pueden clasificar en:
      

    .row.justify-content-center
      .col-10         
        TabsA.color-primario.mt-5
          .tarjeta.color-primario--borde.p-4(titulo="Seguro de dependencia")
            .row.justify-content-center
              .col-6.col-lg-3.mb-3
                figure
                  img(src='@/assets/curso/temas/tema-1/tema1-img26.svg', alt='Texto que describa la imagen')
              .col-xl-9
                p.mt-3 Tienen cobertura para los beneficiados con limitaciones físicas o psíquicas ya diagnosticadas, en el sentido que requieren de asistencia. 

          .tarjeta.color-primario--borde.p-4(titulo="Seguros de salud")
            .row.justify-content-center
              .col-6.col-lg-3.mb-3
                figure
                  img(src='@/assets/curso/temas/tema-1/tema1-img27.svg', alt='Texto que describa la imagen')
              .col-xl-9
                p.mt-3 Se aplica la cobertura de salud cuando se solicite o amerite su utilización y, adicionalmente, cubre los gastos médicos ocasionados.

          .tarjeta.color-primario--borde.p-4(titulo="Seguros de accidentes de personas")
            .row.justify-content-center
              .col-6.col-lg-3.mb-3
                figure
                  img(src='@/assets/curso/temas/tema-1/tema1-img28.svg', alt='Texto que describa la imagen')
              .col-xl-9
                p.mt-3 Esta cobertura se aplica al asegurado en caso de sufrir una lesión o alguna incapacidad por causa de un accidente, y además cuenta con la cobertura en caso de fallecer el asegurado.
          .tarjeta.color-primario--borde.p-4(titulo="Seguros de vida")
            .row.justify-content-center
              .col-6.col-lg-3.mb-3
                figure
                  img(src='@/assets/curso/temas/tema-1/tema1-img29.svg', alt='Texto que describa la imagen')
              .col-xl-9
                p.mt-3 Esta cobertura se aplica en caso de fallecimiento del asegurado o por invalidez; en este caso, el o los beneficiarios pueden acceder al aseguramiento de unos ingresos, lo que les garantiza esa compensación económica, posterior al fallecimiento del asegurado.

  
    .row.mt-5.justify-content-around.align-items-center     
      h4 Seguros de daños o patrimoniales
      p Los seguros por daños patrimoniales, cubren los riesgos del patrimonio de la persona y de las empresas. Se dividen en:
    .row
      .col-lg-6.col-sm-12
        LineaTiempoD.color-acento-contenido.mt-5
          .row.justify-content-center(numero="1" titulo="Seguro de incendios")
            .col-3.col-lg-2.my-3
                figure
                  img(src='@/assets/curso/temas/tema-1/tema1-img30.svg', alt='Texto que describa la imagen')
            .col-lg-10
              p.mt-3 Se refieren a la cobertura en caso que el objeto asegurado se incendie.  
          
          .row.justify-content-center(numero="2" titulo="Seguros de vehículos")
            .col-4.col-lg-3.my-5
                figure
                  img(src='@/assets/curso/temas/tema-1/tema1-img31.svg', alt='Texto que describa la imagen')          
            .col-lg-9
              p.mt-2 Se refieren a la cobertura por los riesgos que se pueden ocasionar por conducir un vehículo (obligatorios por Ley). Es viable que incorporen coberturas por incendio, por daños al vehículo, o por robo.
          
          .row.justify-content-center(numero="3" titulo="Seguros multirriesgo")
            .col-4.col-lg-2.my-3
                figure
                  img(src='@/assets/curso/temas/tema-1/tema1-img32.svg', alt='Texto que describa la imagen')
            .col-lg-10
              p.mt-3 Se refieren a la cobertura por varios riesgos en una sola póliza. 
          
          .row.justify-content-center(numero="4" titulo="Seguros de crédito")
            .col-4.col-lg-2.my-3
                figure
                  img(src='@/assets/curso/temas/tema-1/tema1-img33.svg', alt='Texto que describa la imagen')            
            .col-lg-10
              p.mt-3 Se refieren a la cobertura de los deudores, debido a la insolvencia económica por pérdidas o quiebra.
     
      .col-lg-6.col-sm-12
        LineaTiempoD.color-acento-contenido.mt-5
          .row.justify-content-center(numero="5" titulo="Seguro de robo")
            .col-4.col-lg-2.my-3
                figure
                  img(src='@/assets/curso/temas/tema-1/tema1-img34.svg', alt='Texto que describa la imagen')            
            .col-lg-10
              p.mt-3 Se refieren a la cobertura de los bienes asegurados que sean afectados por robo y, en algunos casos, acompañados por violencia. 
          
          .row.justify-content-center(numero="6" titulo="Seguros de transportes")
            .col-4.col-lg-2.my-3
                figure
                  img(src='@/assets/curso/temas/tema-1/tema1-img35.svg', alt='Texto que describa la imagen')            
            .col-lg-10
              p.mt-3 Se refieren a la cobertura de lo que le pueda suceder a las mercancías o al transporte, por daños materiales.
          
          .row.justify-content-center(numero="7" titulo="Seguros de ingeniería")
            .col-4.col-lg-2.my-3
                figure
                  img(src='@/assets/curso/temas/tema-1/tema1-img36.svg', alt='Texto que describa la imagen')            
            .col-lg-10
              p.mt-3 Se refieren a cobertura especializada para el patrimonio, por daños debido a accidentes por fallas humanas, desgaste natural, fenómenos naturales, entre otros, que sean de carácter técnico. 
          
          .row.justify-content-center(numero="8" titulo="Seguros de responsabilidad civil")
            .col-4.col-lg-2.my-3
                figure
                  img(src='@/assets/curso/temas/tema-1/tema1-img37.svg', alt='Texto que describa la imagen')                
            .col-lg-10
              p.mt-3 Se refieren a la cobertura para un tercero, como consecuencia de que el asegurado sea responsable civilmente por la generación de daños o perjuicios sobre el afectado. 
    
      
      .row.justify-content-around.align-items-center

        h4.mt-5 Seguros de prestación de servicios
        
        p Los seguros de prestación de servicios tratan de la obligación de prestar el servicio que ha sido asegurado por parte del asegurador, para llevar a cabo el servicio al asegurado, según las condiciones pactadas. Estos seguros son:


  .container.tarjeta.tarjeta.tarjeta--blanca2.bgr-fondo-banner-tm1.p-4.p-md-5.mb-5

      .row
        .col-lg-7.colsm-12
          LineaTiempoD.color-secundario.mt-5.linea-tiempo-d1
            .row(numero="1" titulo="De defensa jurídica")
              .col-lg-12.col-sm-10
                p Se dan para asistir, jurídica y extrajurídicamente, a los beneficiarios de la póliza de seguros, en caso de ser responsables sobre daños materiales o personales sobre un tercero. 
            .row(numero="2" titulo="De decesos")
              .col-lg-12.col-sm-10
                p Se refiere a la cobertura de los gastos y gestiones, propios del funeral del asegurado, al momento de fallecimiento del mismo. 
            .row(numero="3" titulo="De asistencia en viaje")
              .col-lg-12.col-sm-10
                p Se refiere a la cobertura de los posibles imprevistos en un viaje, por parte del asegurado. 
        .col-lg-5.col-sm-10.mt-3
            figure
              img(src='@/assets/curso/temas/tema-1/tema1-img38.svg', alt='Texto que describa la imagen')
      
      
      .row.justify-content-around.align-items-centerrd.mt-5
        .col-10
          .tarjeta.color-secundario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-lg-2
                img(src="@/assets/curso/temas/tema-1/tema1-img20.svg").img19-tm1
              .col-9.col-lg-9
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Modificación al contrato de seguros
                    p Para conocer más a profundidad sobre las modificaciones que pueden tener los contratos de seguros, lo invitamos a leer el siguiente documento:
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Modificación_contrato_seguros.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download


    
    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
