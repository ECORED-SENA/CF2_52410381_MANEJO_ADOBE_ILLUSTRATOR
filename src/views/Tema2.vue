<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas de selección
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Antes de comenzar a trabajar en su ilustración, es importante seleccionar los elementos que desea modificar. Las herramientas de selección en Illustrator no solo le permiten elegir uno o varios objetos, sino que también le ofrecen la capacidad de mover, rotar, escalar y transformar su ilustración con gran precisión. Estas herramientas son fundamentales para ajustar y refinar su diseño, asegurando que cada componente esté perfectamente alineado y posicionado según su visión creativa. Además, las herramientas de selección le brindan un control detallado sobre cada elemento, lo que facilita la realización de cambios complejos de manera eficiente.
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta de selección (V)
    p.mb-5 La herramienta de selección, representada por un cursor de flecha negra, es probablemente la herramienta más utilizada en Illustrator. Esta herramienta permite seleccionar, mover, y transformar objetos enteros en la mesa de trabajo.
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="Seleccionar objetos")
            p #[b Seleccionar objetos]
            p.mb-0 Haciendo clic en cualquier objeto lo selecciona para su manipulación. Si mantiene presionada la tecla Shift, puede seleccionar varios objetos al mismo tiempo.
          .tarjeta.color-acento-botones.p-4(titulo="Mover objetos")
            p #[b Mover objetos]
            p.mb-0 Arrastra el objeto seleccionado para moverlo a una nueva ubicación.
          .tarjeta.color-acento-botones.p-4(titulo="Escalar y rotar")
            p #[b Escalar y rotar]
            p.mb-0 Al hacer clic y arrastrar en los controladores (puntos) alrededor del borde del objeto seleccionado, puede escalar y rotar el objeto.
          .tarjeta.color-acento-botones.p-4(titulo="Transformar en proporción")
            p #[b Transformar en proporción]
            p.mb-0 Mantenga presionada la tecla Shift mientras escala para mantener las proporciones del objeto.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img2.svg', alt='', style='width: 500px').m-auto
    .row.bg-c10
      .col-12
        .p-5
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema2/img5.svg', alt='', style='width: 50px')
                .col
                  h3.mb-0 Herramienta de selección directa (A)
          .row.align-items-center.mb-5
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 La herramienta de selección directa se identifica con un cursor de flecha blanca. A diferencia de la herramienta de selección general, esta herramienta permite seleccionar y manipular puntos de ancla individuales o segmentos de un trazado, proporcionando un control mucho más detallado sobre la forma y estructura de los objetos vectoriales.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/img4.png', alt='', style='width: 400px').m-auto
          .row.align-items-center
            .col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema2/img3.svg', alt='', style='width: 400px').m-auto
            .col-lg-6.mb-4.mb-lg-0
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
                .row(titulo="Seleccionar puntos de ancla")
                  .col-12
                    p.mb-0 Haciendo clic en un punto de ancla lo selecciona, permitiendo moverlo de manera independiente.
                .row(titulo="Modificar segmentos")
                  .col-12
                    p.mb-0 Puede ajustar la curva de un segmento entre dos puntos de ancla, modificando la forma del objeto con precisión.
                .row(titulo="Seleccionar múltiples puntos de ancla")
                  .col-12
                    p.mb-0 Mantenga presionada la tecla Shift mientras hace clic en múltiples puntos de ancla para seleccionarlos simultáneamente.
            .col-lg-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema2/img4.svg', alt='', style='width: 400px').m-auto
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema2/img6.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta selección de grupos
    .row.align-items-center.mb-3
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img7.svg', alt='', style='width: 200px').m-auto
      .col
        p.mb-0 La herramienta de selección de grupos en Adobe Illustrator es una herramienta muy útil para trabajar con objetos que forman parte de grupos o subgrupos dentro de una ilustración. Permite seleccionar y manipular fácilmente elementos individuales dentro de un grupo sin necesidad de desagruparlos, lo que ayuda a mantener la estructura y organización del trabajo.
    p.mb-5 Esta herramienta permite seleccionar un objeto dentro de un grupo, y con clics sucesivos, puede expandir la selección para incluir otros objetos dentro del mismo grupo o incluso de subgrupos.
    .row.bg-c11.mb-5
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c12
                .row.align-items-center.h-100
                  .col-12
                    figure
                      img(src='@/assets/curso/tema2/img8.svg', alt='', style='width: 300px').m-auto
            .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c12
                figure.mb-3
                  img(src='@/assets/curso/tema2/img9.svg', alt='', style='width: 80px').m-auto
                .row.justify-content-center.mb-3
                  .col-auto
                    .p-2.bg-c13
                      p.text-center.mb-0 #[b Selección inicial]
                p.text-center.mb-0 Al hacer clic en un objeto dentro de un grupo, la herramienta selecciona solo ese objeto específico.
            .col-10.col-md-6.col-lg-3.mb-4.mb-md-0
              .p-4.bg-c12
                figure.mb-3
                  img(src='@/assets/curso/tema2/img9.svg', alt='', style='width: 80px').m-auto
                .row.justify-content-center.mb-3
                  .col-auto
                    .p-2.bg-c13
                      p.text-center.mb-0 #[b Expansión de la selección]
                p.text-center.mb-0 Con un segundo clic en el mismo objeto, la selección se expande para incluir todo el grupo al que pertenece ese objeto.
            .col-10.col-md-6.col-lg-3
              .p-4.bg-c12
                figure.mb-3
                  img(src='@/assets/curso/tema2/img9.svg', alt='', style='width: 80px').m-auto
                .row.justify-content-center.mb-3
                  .col-auto
                    .p-2.bg-c13
                      p.text-center.mb-0 #[b Selección de subgrupos]
                p.text-center.mb-0 Si el grupo contiene subgrupos, al seguir haciendo clic, la herramienta seleccionará objetos adicionales hasta abarcar el subgrupo completo, y luego el grupo completo.
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema2/img10.svg', alt='', style='width: 50px')
                .col
                  h3.mb-0 Herramienta varita mágica (Y)
          p.mb-4 La herramienta varita mágica permite seleccionar automáticamente todos los objetos de un documento que comparten atributos específicos, como color de relleno, color de trazo, grosor del trazo, opacidad, entre otros. Es especialmente útil para aplicar cambios globales a múltiples elementos similares en un diseño complejo.
          .row
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img11.svg', alt='', style='width: 200px').m-auto
            .col-lg-6
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
                .row(titulo="Selección rápida por atributos")
                  .col-12
                    p.mb-0 Al hacer clic en un objeto con la varita mágica, todos los objetos con atributos coincidentes se seleccionarán automáticamente.
                .row(titulo="Personalización de selección")
                  .col-12
                    p.mb-0 Puede personalizar qué atributos deben coincidir, utilizando el panel de opciones de la herramienta.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/img12.svg', alt='', style='width: 360px').m-auto
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema2/img13.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta de selección de lazo (Q)
    p.mb-5 La herramienta de lazo permite dibujar una selección libre a mano alzada alrededor de puntos de ancla o segmentos de trazado. Es particularmente útil para seleccionar elementos de formas irregulares o seleccionar puntos de ancla específicos en formas complejas.
    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-4.p-lg-5.bg-c14
          figure
            img(src='@/assets/curso/tema2/img14.svg', alt='', style='width: 380px').m-auto
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-4.p-lg-5.bg-c14
          figure.mb-3
            img(src='@/assets/curso/tema2/img15.svg', alt='', style='width: 80px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-c15
                p.text-center.mb-0 #[b Selección libre]
          p.mb-0 Dibujar una línea alrededor de los puntos de ancla o segmentos que desee seleccionar.
      .col-10.col-md-6.col-lg-4
        .p-4.p-lg-5.bg-c14
          figure.mb-3
            img(src='@/assets/curso/tema2/img16.svg', alt='', style='width: 80px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-c15
                p.text-center.mb-0 #[b Agregar o eliminar de la selección]
          p.mb-0 Mantenga presionada la tecla Shift para agregar más puntos a la selección, o Alt/Option para eliminar puntos de la selección.
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema2/img17.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta mesa de trabajo
    p.mb-5 La herramienta mesa de trabajo en Adobe Illustrator es una de las herramientas más fundamentales para organizar y gestionar el espacio de trabajo en sus proyectos de diseño. Una mesa de trabajo (o #[i artboard] en inglés), es básicamente el área delimitada donde crea y edita su contenido, similar a una página en un documento impreso.
    .row
      .col-lg-6.mb-4.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Crear mesas de trabajo")
            .col-12
              p.mb-0 haciendo clic y arrastrando con la herramienta activada, puede dibujar una nueva mesa de trabajo en cualquier parte del lienzo. Se pueden crear múltiples mesas de trabajo dentro de un mismo documento, lo que es ideal para diseñar diferentes elementos de un proyecto, como tarjetas de presentación, folletos, carteles, o pantallas de una interfaz de usuario.
          .row(titulo="Redimensionar mesas de trabajo")
            .col-12
              p.mb-0 para cambiar el tamaño de una mesa de trabajo existente, seleccione la herramienta y haga clic en la mesa de trabajo que desee modificar. Luego, ajuste las dimensiones arrastrando los bordes o ingresando valores exactos en el panel de control que aparece en la parte superior de la pantalla.
          .row(titulo="Mover mesas de trabajo")
            .col-12
              p.mb-0 puede mover una mesa de trabajo a una nueva ubicación dentro del lienzo simplemente seleccionándola y arrastrándola al lugar deseado. Esto es útil cuando se necesita reorganizar el contenido de su proyecto o ajustar la disposición general de las mesas de trabajo.
          .row(titulo="Duplicar mesas de trabajo")
            .col-12
              p.mb-0 con la herramienta seleccionada, mantenga presionada la tecla Alt/Option y arrastre la mesa de trabajo deseada para crear una copia de la misma, conservando todos los elementos contenidos en la original.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema2/img6.png', alt='', style='width: 570px').m-auto

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
