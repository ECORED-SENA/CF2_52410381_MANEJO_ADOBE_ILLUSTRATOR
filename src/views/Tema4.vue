<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Herramientas de texto
    .row.mb-5
      .col-12(data-aos="fade-down")
        .p-4.bg-c6
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema4/img1.svg', alt='', style='width: 80px').m-auto
                .col
                  p.mb-0 Adobe Illustrator ofrece una variedad de herramientas que permiten crear y manipular texto de manera flexible y precisa. A continuación, se explica en detalle, cada una de las herramientas de texto disponibles.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema4/img1.png', alt='', style='width: 400px').m-auto
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema4/img2.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta de texto (T)
    p.mb-5(data-aos="fade-right") La herramienta de texto es la herramienta básica para escribir texto en Illustrator. Con ella, puede crear y editar texto en su documento.
    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c22
          figure.mb-3
            img(src='@/assets/curso/tema4/img3.svg', alt='', style='width: 250px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-c21
                p.text-center.mb-0 #[b Texto de punto]
          p.text-center.mb-0 Haga clic en cualquier lugar del lienzo para crear un punto de inserción, donde puede escribir una línea de texto que se expande horizontalmente a medida que escribe.
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .p-4.bg-c22
          figure.mb-3
            img(src='@/assets/curso/tema4/img4.svg', alt='', style='width: 250px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-c21
                p.text-center.mb-0 #[b Texto de párrafo]
          p.text-center.mb-0 Haga clic y arrastre para crear un cuadro delimitador. El texto se ajustará automáticamente dentro de esta área y se reacomodará, según el tamaño del cuadro.
      .col-10.col-md-6.col-lg-4(data-aos="fade-left")
        .p-4.bg-c22
          figure.mb-3
            img(src='@/assets/curso/tema4/img5.svg', alt='', style='width: 250px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-c21
                p.text-center.mb-0 #[b Texto área]
          p.text-center.mb-0 Para usar la forma de un objeto cerrado como área de texto, haga clic en el trazado con la herramienta seleccionada.
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema4/img6.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta de texto en área
    p.mb-5(data-aos="fade-right") Esta herramienta permite ajustar texto dentro de una forma predefinida, como un círculo, un triángulo o una estrella.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .p-4.bg-c23
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img7.svg', alt='', style='width: 400px').m-auto
            .col-lg-8
              .row.mb-3
                .col-12
                  .p-4.bg-white.rounded
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/tema4/img8.svg', alt='', style='width: 90px').m-auto
                      .col
                        p.mb-0 #[b Ajuste automático:] el texto se adapta automáticamente a la forma seleccionada, ajustando la distribución del texto dentro de la forma.
              .row
                .col-12
                  .p-4.bg-white.rounded
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/tema4/img9.svg', alt='', style='width: 90px').m-auto
                      .col
                        p.mb-0 #[b Edición de forma y texto:] puede editar tanto la forma como el texto en cualquier momento, y el texto se redistribuirá automáticamente según los cambios.
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema4/img6.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta de texto (T)
    p.mb-5(data-aos="fade-right") Esta herramienta permite escribir texto a lo largo de un trazado, ya sea una línea curva o una forma cerrada.
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img11.svg', alt='', style='width: 400px').m-auto
      .col-10.col-md-8.col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row.align-items-center(titulo="Texto en líneas curvas")
            .col-12
              p.mb-0 Seleccione un trazado existente y use esta herramienta para que el texto siga la curvatura del trazado. El texto se alinea automáticamente con la dirección del trazado.
          .row.align-items-center(titulo="Ajustes de posición")
            .col-12
              p.mb-0 Puede ajustar la posición del texto en el trazado (arriba, abajo, centrado) y también manipular el texto para que siga el contorno del trazado o lo invierta.
      .col-10.col-md-8.col-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img12.svg', alt='', style='width: 300px').m-auto
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema4/img13.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta de texto vertical (Shift + T)
    p.mb-5(data-aos="fade-right") Esta herramienta permite escribir texto en orientación vertical, donde las letras están apiladas una sobre otra.
    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img14.svg', alt='', style='width: 400px').m-auto
      .col-lg-9(data-aos="fade-left")
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="Texto de punto vertical")
            p.mb-0 Funciona igual que la herramienta de texto horizontal, pero con el texto alineado verticalmente.
          .tarjeta.color-acento-botones.p-4(titulo="Texto en área vertical")
            p.mb-0 Similar a la herramienta de texto en área, pero con orientación vertical. El texto se ajusta dentro del área delimitada, apilando los caracteres de arriba hacia abajo.
    .row.mb-5
      .col-12(data-aos="fade-down")
        .p-4.bg-c24
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema4/img15.svg', alt='', style='width: 80px').m-auto
                .col
                  p.mb-0 #[b Herramienta de texto en área vertical]
                  p.mb-0 Permite añadir texto de forma vertical. Seleccione la herramienta Texto vertical en trazado y haga clic en cualquier parte del trazado para escribir o pegar el texto.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema4/img16.svg', alt='', style='width: 400px').m-auto
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema4/img17.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta de texto vertical en trazado
    p.mb-5(data-aos="fade-right") Esta herramienta se utiliza para escribir texto verticalmente a lo largo de un trazado.
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-10(data-aos="fade-down")
        .p-4.bg-c25
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img18.svg', alt='', style='width: 400px').m-auto
            .col-lg-8
              .row.mb-3
                .col-12
                  .p-4.bg-white.rounded
                    p.mb-0 #[b Texto vertical en líneas curvas:] permite que el texto siga un trazado, pero en orientación vertical. Al igual que la versión horizontal, el texto se alinea con la dirección del trazado.
              .row
                .col-12
                  .p-4.bg-white.rounded
                    p.mb-0 #[b Ajustes y edición:] puede modificar la posición del texto vertical en el trazado, ajustar su alineación y orientación.
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema4/img20.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta retoque de texto (Shift + T)
    p.mb-5(data-aos="fade-right") Esta herramienta permite ajustar manualmente el espaciado, la altura, y otros atributos de caracteres individuales dentro de un bloque de texto.
    .row
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img19.svg', alt='', style='width: 490px').m-auto
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Ajuste de espaciado")
            .col-12
              p.mb-0 Puede modificar el #[i kerning] (espacio entre caracteres) y el #[i tracking] (espaciado general), arrastrando los caracteres seleccionados.
          .row(titulo="Ajuste de altura y <i>baseline</i>")
            .col-12
              p.mb-0 Permite mover caracteres individuales hacia arriba o hacia abajo, o ajustar su tamaño de forma independiente dentro del texto.

</template>

<script>
export default {
  name: 'Tema4',
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
