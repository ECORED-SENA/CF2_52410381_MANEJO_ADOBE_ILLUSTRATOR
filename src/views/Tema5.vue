<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Herramientas de pintura
    .row.justify-content-around.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema5/img1.svg", alt="", style="width: 300px").m-auto
      .col-10.col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
        .p-4.p-lg-5.bg-c1
          figure.mb-4
            img(src="@/assets/curso/tema5/img3.svg", alt="", style="width: 300px")
          p.mb-0 Adobe Illustrator ofrece una gama de herramientas de pintura que le permiten aplicar color, crear efectos artísticos, y agregar detalles a sus ilustraciones. A continuación, se explica en detalle, cada una de las herramientas disponibles.
      .col-lg-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5/img2.svg", alt="", style="width: 300px").m-auto
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema5/img4.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta pincel (B)
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        p La herramienta pincel permite dibujar trazos que siguen un patrón predefinido de pincel. Estos trazos pueden tener distintas formas, texturas y tamaños.
        figure.d-none.d-lg-block
          img(src="@/assets/curso/tema5/img5.svg", alt="", style="width: 560px").m-auto
      .col-lg-6(data-aos="fade-left")
        figure.mb-4
          img(src="@/assets/curso/tema5/img1.png", alt="", style="width: 590px").m-auto
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Pinceles artísticos")
            .col-12
              p.mb-0 Se pueden aplicar pinceles artísticos que simulan trazos de pintura o dibujos a mano.
          .row(titulo="Pinceles de dispersión")
            .col-12
              p.mb-0 Distribuyen copias de un objeto a lo largo del trazado.
          .row(titulo="Pinceles de cerdas")
            .col-12
              p.mb-0 Simulan pinceladas realistas, útiles para ilustraciones detalladas.
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema5/img4.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta pincel de manchas (Shift + B)
    p.mb-5(data-aos="fade-right") Esta herramienta permite pintar formas rellenas de color de manera libre. A diferencia del pincel tradicional, el pincel de manchas crea formas cerradas que se combinan automáticamente con formas adyacentes de color similar.
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-10(data-aos="fade-down")
        .p-4.bg-c23
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/img7.svg', alt='', style='width: 400px').m-auto
            .col-lg-8
              .row.mb-3
                .col-12
                  .p-4.bg-white.rounded
                    p.mb-0 #[b Fusión automática]
                    p.mb-0 Al pintar sobre áreas existentes, las formas se combinan automáticamente, lo que facilita la creación de áreas de color complejas sin necesidad de manipular múltiples trazados.
              .row
                .col-12
                  .p-4.bg-white.rounded
                    p.mb-0 #[b Personalización del pincel]
                    p.mb-0 Puede ajustar el tamaño y la forma del pincel para obtener diferentes efectos de pintura.
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema5/img4.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta malla (U)
    p.mb-5(data-aos="fade-right") Permite crear degradados complejos dentro de un objeto, dividiendo el objeto en una malla de puntos. Cada punto de la malla puede ser manipulado individualmente, para crear transiciones de color suaves y realistas.
    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img2.png', alt='', style='width: 500px').m-auto
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Creación de mallas")
            .col-12
              p.mb-0 Haciendo clic en un objeto vectorial, la herramienta divide el objeto en una cuadrícula que se puede personalizar.
          .row(titulo="Control preciso")
            .col-12
              p.mb-0 Cada punto de la malla puede tener su propio color, lo que permite un control extremadamente detallado sobre el degradado dentro de la forma.
          .row(titulo="Edición flexible")
            .col-12
              p.mb-0 Los puntos de la malla se pueden mover, añadir o eliminar para ajustar la transición de color a lo largo de la forma.
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema5/img4.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta degradado (G)
    p.mb-5(data-aos="fade-right") Se utiliza para aplicar y manipular degradados en objetos vectoriales, creando transiciones suaves entre dos o más colores.
    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c12
          .row.align-items-center.h-100
            .col-12
              figure
                img(src='@/assets/curso/tema5/img10.svg', alt='', style='width: 160px').m-auto
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .p-4.bg-c12
          figure.mb-3
            img(src='@/assets/curso/tema5/img11.svg', alt='', style='width: 80px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-c13
                p.text-center.mb-0 #[b Tipos de degradado]
          p.text-center.mb-0 Puede aplicar degradados lineales, radiales, o de forma libre (degradados de puntos) a un objeto.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-up")
        .p-4.bg-c12
          figure.mb-3
            img(src='@/assets/curso/tema5/img11.svg', alt='', style='width: 80px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-c13
                p.text-center.mb-0 #[b Edición en vivo]
          p.text-center.mb-0 Arrastre la herramienta sobre el objeto para ajustar la dirección, longitud, y puntos de color del degradado.
      .col-10.col-md-6.col-lg-3(data-aos="fade-left")
        .p-4.bg-c12
          figure.mb-3
            img(src='@/assets/curso/tema5/img11.svg', alt='', style='width: 80px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-c13
                p.text-center.mb-0 #[b Control de puntos y barras]
          p.text-center.mb-0 Añada o elimine puntos de color en la barra de degradado, para ajustar la complejidad del degradado.
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema5/img12.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta cuentagotas (I)
    p.mb-5(data-aos="fade-right") La herramienta cuentagotas permite copiar atributos de color y estilo de un objeto y aplicarlos a otro.
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img13.svg', alt='', style='width: 400px').m-auto
      .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0(data-aos="fade-down")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row.align-items-center(titulo="Selección de colores y atributos")
            .col-12
              p.mb-0 Puede seleccionar colores, degradados, patrones, y otros atributos de un objeto y aplicarlos a otro con un solo clic.
          .row.align-items-center(titulo="Aplicación rápida")
            .col-12
              p.mb-0 Ideal para mantener la coherencia de color y estilo a lo largo de una ilustración.
      .col-10.col-md-8.col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img3.png', alt='', style='width: 400px').m-auto
    .row.mb-5
      .col-12(data-aos="fade-down")
        .p-4.bg-c24
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema5/img14.svg', alt='', style='width: 80px').m-auto
                .col
                  p.txt-c1.mb-0 #[b Herramienta medición]
                  p.txt-c1.mb-0 Para medir la distancia y el ángulo entre dos puntos y crear diseños proporcionados.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img4.png', alt='', style='width: 400px').m-auto
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema5/img15.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta creador de formas (Shift + M)
    p.mb-4(data-aos="fade-right") Permite combinar, unir, restar o separar formas superpuestas de manera intuitiva.
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .row.mb-3
          .col-12
            .p-4.bg-c17
              p.mb-0 #[b Fusión de formas]
              p.mb-0 Haciendo clic y arrastrando sobre formas superpuestas, se pueden combinar en una única forma.
        .row
          .col-12
            .p-4.bg-c17
              p.mb-0 #[b Sustracción de formas]
              p.mb-0 Manteniendo presionada la tecla Alt (Opción en Mac), se pueden eliminar áreas de intersección entre formas, creando nuevas formas a partir de las originales.
      .col-lg-6(data-aos="fade-left")
        figure.mb-3
          img(src='@/assets/curso/tema5/img5.png', alt='', style='width: 600px').m-auto
        figure
          img(src='@/assets/curso/tema5/img6.png', alt='', style='width: 600px').m-auto
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema5/img16.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta bote de pintura interactiva (K)
    p.mb-4(data-aos="fade-right") Permite rellenar áreas delimitadas por trazados con color, similar a la herramienta de relleno en programas de pintura de mapas de bits.
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img17.svg', alt='', style='width: 400px').m-auto
      .col-10.col-md-8.col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row.align-items-center(titulo="Creación de grupos de pintura interactiva")
            .col-12
              p.mb-0 Convierte los trazados seleccionados en un grupo de pintura interactiva, permitiendo rellenar áreas delimitadas incluso si los trazados no están completamente cerrados.
          .row.align-items-center(titulo="Opciones de relleno")
            .col-12
              p.mb-0 Puede aplicar colores sólidos, degradados, o patrones a las áreas delimitadas dentro del grupo de pintura interactiva.
          .row.align-items-center(titulo="Aplicación rápida de colores")
            .col-12
              p.mb-0 Haga clic en las áreas delimitadas para aplicar rápidamente el color deseado.
      .col-10.col-md-8.col-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img18.svg', alt='', style='width: 200px').m-auto
    .row
      .col-12(data-aos="fade-right")
        .p-4.bg-c24
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema5/img19.svg', alt='', style='width: 80px').m-auto
                .col
                  p.txt-c1.mb-0 #[b Herramienta selección de pintura interactiva (Mayúsculas + L)]
                  p.txt-c1.mb-0 Esta herramienta nos permite seleccionar cada trazo o relleno que se puede tratar de forma independiente dentro de un grupo de pintura interactiva, y aplicarle color, relleno, grosor del trazo, etc.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img7.png', alt='', style='width: 400px').m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
