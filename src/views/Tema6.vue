<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Herramientas para reformar
    .row.justify-content-center.mb-5
      .col-md-10.col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-lg-auto.bg-c26
            .px-4.pt-4
              figure
                img(src="@/assets/curso/tema6/img1.svg", alt="", style="width: 200px").m-auto
          .col-lg.bg-c27
            .p-4
              p.mb-0 Las herramientas para reformar son aquellas que permiten cambiar la forma de un objeto de manera general, es decir, sin acudir directamente a editar contornos o puntos de ancla, sino una trasformación de los objetos como un todo. Esto permite realizar diseños de manera más intuitiva y sin necesidad de limitarse a la forma como están diseñados los objetos vectoriales, permitiendo una experiencia más cercana a la manipulación de elementos reales, sin perder los beneficios de trabajar con objetos virtuales.
      .col-md-10.col-lg-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema6/img2.svg", alt="", style="width: 200px").m-auto
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema6/img3.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta rotar (R)
    p.mb-4(data-aos="fade-right") Permite rotar objetos alrededor de un punto de referencia definido.
    .row.mb-5
      .col-12(data-aos="fade-down")
        .p-4.bg-c23
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/img1.png", alt="", style="width: 350px").m-auto
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/img4.svg", alt="", style="width: 400px").m-auto
            .col-lg-4
              .p-4.bg-white.rounded
                p #[b Rotación precisa]
                p.mb-0 Puede establecer un punto de referencia en cualquier lugar dentro o fuera del objeto y rotar el objeto alrededor de ese punto, especificando un ángulo exacto en el panel de opciones.
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema6/img5.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta reflejar (O)
    p.mb-4(data-aos="fade-right") Permite dar la vuelta a un objeto sobre un eje.
    .row.mb-5
      .col-12(data-aos="fade-up")
        .p-4.bg-c24
          .row.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/img6.svg", alt="", style="width: 450px").m-auto
            .col-lg-7
              .p-4.bg-white.rounded
                figure.mb-3
                  img(src="@/assets/curso/tema6/img7.svg", alt="", style="width: 70px")
                p #[b Reflejo personalizado]
                p.mb-0 Al igual que con la herramienta rotar, puede establecer un punto de referencia y reflejar el objeto en cualquier dirección (horizontal, vertical o en un ángulo personalizado).
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema6/img8.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta escala (S)
    p.mb-4(data-aos="fade-right") Permite cambiar el tamaño de un objeto de manera proporcional o no proporcional.
    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema6/img2.png", alt="", style="width: 400px").m-auto
      .col-lg-8(data-aos="fade-left")
        .p-4.bg-c1
          p #[b Escalado preciso]
          p.mb-0 Puede definir un punto de referencia y ajustar la escala del objeto en porcentaje o en dimensiones específicas.
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema6/img9.svg", alt="", style="width: 390px").m-auto
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row.align-items-center(titulo="Herramienta distorsión")
            .col-12
              p Permite distorsionar e inclinar un objeto en relación con un punto de referencia.
              figure
                img(src="@/assets/curso/tema6/img10.svg", alt="", style="width: 400px").m-auto
          .row.align-items-center(titulo="Herramienta reformar")
            .col-12
              p Permite reformar un trazado en relación con un punto de ancla en el trazado.
              figure
                img(src="@/assets/curso/tema6/img11.svg", alt="", style="width: 400px").m-auto
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema6/img12.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta de transformación libre (E)
    p.mb-4(data-aos="fade-right") Permite transformar objetos mediante la distorsión libre.
    .row.mb-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema6/img3.png", alt="", style="width: 300px").m-auto
      .col-lg-9(data-aos="fade-left")
        .p-4.bg-c1
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema6/img4.png", alt="", style="width: 360px").m-auto
            .col
              p #[b Transformación compleja]
              p.mb-0 Permite mover individualmente las esquinas y bordes de un objeto, distorsionándolo en perspectiva o creando efectos personalizados.
    p.mb-4(data-aos="fade-right") Las subherramientas de esta herramienta son:
    .row.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row.align-items-center(titulo="Distorsión de perspectiva")
            .col-12
              p Arrastre el controlador de la esquina de un objeto para cambiar su tamaño, mientras conserva el ángulo, creando una sensación de perspectiva.
              figure
                img(src="@/assets/curso/tema6/img14.svg", alt="", style="width: 400px").m-auto
          .row.align-items-center(titulo="Distorsión libre")
            .col-12
              p Arrastre el controlador de la esquina de un objeto para cambiar tanto el tamaño, como el ángulo.
              figure
                img(src="@/assets/curso/tema6/img15.svg", alt="", style="width: 400px").m-auto
          .row.align-items-center(titulo="Restringir")
            .col-12
              p Seleccione esta opción cuando utilice las opciones Transformación libre y Distorsión libre para cambiar las dimensiones de los objetos de forma proporcional.
              figure
                img(src="@/assets/curso/tema6/img16.svg", alt="", style="width: 400px").m-auto
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema6/img13.svg", alt="", style="width: 370px").m-auto
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema6/img17.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta deformación de posición libre
    .row.mb-5
      .col-12(data-aos="fade-down")
        .p-4.bg-c24
          .row.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/img5.png", alt="", style="width: 450px").m-auto
            .col-lg-7
              .p-4.bg-white.rounded
                figure.mb-3
                  img(src="@/assets/curso/tema6/img18.svg", alt="", style="width: 70px")
                p.mb-0 Permite deformar y manipular objetos vectoriales con gran flexibilidad y precisión. Similar a una marioneta, esta herramienta permite añadir puntos de anclaje (pins) a lo largo del objeto, los cuales pueden moverse, rotarse o escalarse para alterar la forma del objeto de manera natural y fluida.
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema6/img17.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta fusión (W)
    p.mb-4(data-aos="fade-right") Permite crear transiciones suaves entre dos o más objetos, creando una serie de pasos intermedios entre ellos. Esta herramienta es ideal para generar degradados de forma, color, o una combinación de ambos, y se utiliza comúnmente para crear efectos visuales complejos y fluidos.
    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema6/img6.png", alt="", style="width: 490px").m-auto
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row.align-items-center(titulo="Número de pasos especificados")
            .col-12
              p.mb-0 Esta opción le permite definir un número exacto de pasos intermedios entre los objetos. Cuantos más pasos se elijan, más suave será la transición.
          .row.align-items-center(titulo="Distancia de pasos especificada")
            .col-12
              p.mb-0 Esta opción permite definir la distancia entre los pasos. Illustrator calculará el número de pasos en función de la distancia especificada.
          .row.align-items-center(titulo="Suavizado de color")
            .col-12
              p.mb-0 Esta opción genera una fusión basada en las diferencias de color entre los objetos seleccionados, creando una transición de color suave y continua.
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema6/img20.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Herramienta anchura (Shift + W)
    .row.justify-content-center.align-items-center.mb-4
      .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img7.png', alt='', style='width: 400px').m-auto
      .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .p-4.p-lg-5.bg-c18
          p.text-white.mb-0 Permite modificar el grosor de un trazo en puntos específicos a lo largo de un trazado, creando variaciones de ancho personalizadas. Esta herramienta es especialmente útil para crear ilustraciones con trazos que se expanden y contraen, imitando el efecto de un pincel caligráfico o añadiendo dinamismo a líneas y formas.
      .col-10.col-md-8.col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6/img8.png', alt='', style='width: 400px').m-auto
    .row.bg-c19
      .col-12
        .p-5
          .tarjeta.tarjeta--azul2(data-aos="fade-left")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b Herramienta deformar (Shift + R)]
                    p.mb-0 Permite dar forma a un objeto hacia adentro o hacia afuera.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema6/img9.png', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b Herramienta Molinete]
                    p.mb-0 Permite girar un objeto alrededor de un punto de referencia.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema6/img10.png', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b Herramienta Fruncir]
                    p.mb-0 Permite estirar o encoger un objeto para darle una apariencia puntiaguda.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema6/img11.png', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b Herramienta Engordar]
                    p.mb-0 Permite estirar o encoger un objeto para darle una apariencia redondeada.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema6/img12.png', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b Herramienta Festonear]
                    p.mb-0 Permite añadir proyecciones redondeadas en el contorno de un objeto.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema6/img13.png', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b Herramienta Cristalizar]
                    p.mb-0 Permite añadir estructuras puntiagudas en el contorno de un objeto.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema6/img14.png', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p.mb-0 #[b Herramienta Arrugar]
                    p.mb-0 Permite añadir estructuras arrugadas en el contorno de un objeto.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema6/img15.png', alt='', style='width: 500px').m-auto

</template>

<script>
export default {
  name: 'Tema6',
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
