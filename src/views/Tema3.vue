<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Herramientas de dibujo
    .row.mb-5
      .col-12
        .p-4.p-lg-0.bg-c16
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0.ms-0.ms-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img1.svg', alt='', style='width: 80px').m-auto
                .col
                  p.mb-0 Adobe Illustrator ofrece una amplia gama de herramientas de dibujo para crear y editar gráficos con precisión. A continuación, explicaremos en detalle cada una de las herramientas de dibujo disponibles.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img2.svg', alt='', style='width: 400px').m-auto
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img3.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta pluma (P)
    p.mb-5 La herramienta pluma es una de las herramientas más importantes y versátiles de Illustrator. Permite dibujar líneas rectas y curvas Bezier con gran precisión, creando trazados que pueden ser abiertos o cerrados.
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img1.png', alt='', style='width: 400px').m-auto
      .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
        .row.mb-3
          .col-12
            .p-3.bg-c17
              p.mb-0 #[b Líneas rectas]
              p.mb-0 Haciendo clic en diferentes puntos del lienzo, se crean segmentos rectos.
        .row
          .col-12
            .p-3.bg-c17
              p.mb-0 #[b Curvas]
              p.mb-0 Haciendo clic y arrastrando se crean puntos de ancla con manijas, permitiendo ajustar la curvatura del trazado.
      .col-10.col-md-8.col-lg-3
        figure
          img(src='@/assets/curso/tema3/img4.svg', alt='', style='width: 400px').m-auto
    p.mb-5 A continuación, conozcamos cuáles son las subherramientas de la herramienta pluma:
    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img5.svg', alt='', style='width: 300px').m-auto
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Herramienta Añadir punto de ancla (+)")
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 Agrega un nuevo punto de ancla a un trazado existente.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img6.svg', alt='', style='width: 400px').m-auto
          .row(titulo="Herramienta Eliminar Punto de Ancla (-)")
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 Elimina un punto de ancla de un trazado.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img7.svg', alt='', style='width: 400px').m-auto
          .row(titulo="Herramienta Eliminar Punto de Ancla (-)")
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 Permite convertir un punto de ancla de esquina en un punto de curva y viceversa.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img8.svg', alt='', style='width: 400px').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c2
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema3/img9.svg', alt='', style='width: 70px').m-auto
                .col
                  p.mb-0 #[b Herramienta curvatura (Mayúscula+~)]
                  p.mb-0 Permite dibujar y editar líneas y curvas conectadas fácilmente mediante los nodos o puntos de anclas.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img1.gif', alt='', style='width: 400px').m-auto
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img3.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta lápiz (N)
    p.mb-5 La herramienta lápiz es útil para dibujar líneas a mano alzada. Es ideal para bocetar ideas o crear trazados orgánicos.
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img11.svg', alt='', style='width: 400px').m-auto
      .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
        .p-4.p-lg-5.bg-c18
          p.text-white.mb-0 #[b Opciones de suavizado]
          p.text-white.mb-0 El lápiz permite ajustar la suavidad del trazo, lo que puede ayudar a reducir las irregularidades en las líneas dibujadas.
      .col-10.col-md-8.col-lg-4
        figure
          img(src='@/assets/curso/tema3/img2.png', alt='', style='width: 400px').m-auto
    p.mb-5 Las subherramientas de la herramienta lápiz son:
    .row.bg-c19.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--azul2
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    figure.mb-3
                      img(src='@/assets/curso/tema3/img12.svg', alt='', style='width: 60px')
                    p #[b Herramienta Shaper (Mayúscula+N)]
                    p.mb-0 Permite dibujar a mano alzada para crear formas vectoriales automáticamente, así como fusionar o eliminar áreas superpuestas.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema3/img2.gif', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    figure.mb-3
                      img(src='@/assets/curso/tema3/img13.svg', alt='', style='width: 60px')
                    p #[b Herramienta Suavizar]
                    p.mb-0 Permite suavizar un trazado dibujado a mano alzada.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema3/img3.gif', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    figure.mb-3
                      img(src='@/assets/curso/tema3/img14.svg', alt='', style='width: 60px')
                    p #[b Herramienta Borrador de Trazado]
                    p.mb-0  Elimina partes del trazado de manera libre.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema3/img15.svg', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    figure.mb-3
                      img(src='@/assets/curso/tema3/img16.svg', alt='', style='width: 60px')
                    p #[b Herramienta Unir]
                    p.mb-0 Permite la unión de rutas vectoriales donde se cruzan y recortar el exceso de rutas superpuestas.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema3/img4.gif', alt='', style='width: 500px').m-auto
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img17.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta segmento de línea (<)

</template>

<script>
export default {
  name: 'Tema3',
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
