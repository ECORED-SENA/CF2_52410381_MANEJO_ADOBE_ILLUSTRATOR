<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Herramientas de dibujo
    .row.mb-5
      .col-12(data-aos="fade-down")
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
    p.mb-5(data-aos="fade-right") La herramienta pluma es una de las herramientas más importantes y versátiles de Illustrator. Permite dibujar líneas rectas y curvas Bezier con gran precisión, creando trazados que pueden ser abiertos o cerrados.
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img1.png', alt='', style='width: 400px').m-auto
      .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0(data-aos="fade-down")
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
      .col-10.col-md-8.col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img4.svg', alt='', style='width: 400px').m-auto
    p.mb-5(data-aos="fade-right") A continuación, conozcamos cuáles son las subherramientas de la herramienta pluma:
    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img5.svg', alt='', style='width: 300px').m-auto
      .col-lg-9(data-aos="fade-left")
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
      .col-lg-10(data-aos="fade-down")
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
    p.mb-5(data-aos="fade-right") La herramienta lápiz es útil para dibujar líneas a mano alzada. Es ideal para bocetar ideas o crear trazados orgánicos.
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img11.svg', alt='', style='width: 400px').m-auto
      .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0(data-aos="fade-down")
        .p-4.p-lg-5.bg-c18
          p.text-white.mb-0 #[b Opciones de suavizado]
          p.text-white.mb-0 El lápiz permite ajustar la suavidad del trazo, lo que puede ayudar a reducir las irregularidades en las líneas dibujadas.
      .col-10.col-md-8.col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img2.png', alt='', style='width: 400px').m-auto
    p.mb-5(data-aos="fade-right") Las subherramientas de la herramienta lápiz son:
    .row.bg-c19.mb-5
      .col-12(data-aos="fade-down")
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
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img4.png', alt='', style='width: 400px').m-auto
      .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0(data-aos="fade-down")
        .row
          .col-12
            .p-4.bg-c1
              p Permite dibujar líneas rectas en cualquier dirección en la que arrastre el puntero. 
              p.mb-0 Las subherramientas de la Herramienta segmento de línea son:
      .col-10.col-md-8.col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img18.svg', alt='', style='width: 400px').m-auto
    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c20
          figure.mb-3
            img(src='@/assets/curso/tema3/img19.svg', alt='', style='width: 80px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-white
                p.text-center.mb-0 #[b Herramienta arco]
          p.text-center.mb-0 La herramienta arco permite crear arcos curvados. Es útil para crear trazos curvos precisos sin necesidad de utilizar la herramienta pluma.
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-left")
        .p-4.bg-c20
          figure.mb-3
            img(src='@/assets/curso/tema3/img20.svg', alt='', style='width: 80px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-white
                p.text-center.mb-0 #[b Herramienta espiral]
          p.text-center.mb-0 La herramienta espiral dibuja espirales que se pueden ajustar en términos de tamaño, número de giros y la distancia entre ellos.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .p-4.bg-c20
          figure.mb-3
            img(src='@/assets/curso/tema3/img21.svg', alt='', style='width: 80px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-white
                p.text-center.mb-0 #[b Herramienta cuadrícula rectangular]
          p.text-center.mb-0 La herramienta cuadrícula rectangular dibuja una cuadrícula compuesta por líneas rectas horizontales y verticales. Es útil para crear guías visuales o patrones geométricos.
      .col-10.col-md-6.col-lg-3(data-aos="fade-left")
        .p-4.bg-c20
          figure.mb-3
            img(src='@/assets/curso/tema3/img21.svg', alt='', style='width: 80px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-white
                p.text-center.mb-0 #[b Herramienta cuadrícula polar]
          p.text-center.mb-0 Para crear cuadrículas concéntricas de un tamaño especificado y un número determinado de divisores.
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img24.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta rectángulo (M)
    p.mb-5(data-aos="fade-right") La herramienta rectángulo permite dibujar rectángulos y cuadrados. Haciendo clic y arrastrando, se puede crear un rectángulo, y manteniendo presionada la tecla Shift se restringe la forma a un cuadrado perfecto.
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img25.svg', alt='', style='width: 400px').m-auto
      .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .row
          .col-12
            .p-4.bg-c17
              p #[b Ajuste de esquinas]
              p.mb-0 Illustrator permite redondear las esquinas de los rectángulos arrastrando los controles de las esquinas.
      .col-10.col-md-8.col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img5.png', alt='', style='width: 500px').m-auto
    p.mb-5(data-aos="fade-right") Las subherramientas de la herramienta rectángulo son:
    .row.align-items-center
      .col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img26.svg', alt='', style='width: 400px').m-auto
      .col-lg-6(data-aos="fade-down")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row.align-items-center(titulo="Herramienta Rectángulo redondeado")
            .col-md.mb-4.mb-md-0
              p.mb-0 Crea rectángulos con esquinas redondeadas.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema3/img28.svg', alt='', style='width: 60px').m-auto
          .row.align-items-center(titulo="Herramienta Elipse (L)")
            .col-md.mb-4.mb-md-0
              p.mb-0 Permite crear círculos y óvalos.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema3/img29.svg', alt='', style='width: 60px').m-auto
          .row.align-items-center(titulo="Herramienta Polígono")
            .col-md.mb-4.mb-md-0
              p.mb-0 Crea polígonos de múltiples lados, ajustables durante la creación.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema3/img30.svg', alt='', style='width: 60px').m-auto
          .row.align-items-center(titulo="Destello")
            .col-md.mb-4.mb-md-0
              p Crea objetos con destellos con un centro brillante, un halo y rayos y anillos, produciendo un efecto similar al destello de una lente en una fotografía.
              p.mb-0 Los destellos incluyen un manejador central y otro en el extremo. Puede usar los manejadores para situar el destello y sus anillos. El manejador central está en el centro brillante del destello, de donde parte el trazado del destello.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema3/img31.svg', alt='', style='width: 60px').m-auto
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img27.svg', alt='', style='width: 400px').m-auto

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
