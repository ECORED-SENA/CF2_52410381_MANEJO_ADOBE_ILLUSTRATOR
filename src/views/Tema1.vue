<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Barra de herramientas
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .p-5.bg-c2
          figure.mb-4
            img(src="@/assets/curso/tema1/img1.svg", alt="", style="width: 70px")
          p.mb-0 En Adobe Illustrator, la barra de herramientas es un elemento clave de la interfaz, que proporciona acceso rápido a las herramientas necesarias para crear y editar gráficos vectoriales. Illustrator ofrece diferentes configuraciones de la barra de herramientas para adaptarse a diversas necesidades de diseño. A continuación, se describen los tipos de barra de herramientas disponibles. 
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img1.png", alt="", style="width: 500px").m-auto
    .row.bg-c3.mb-5
      .col-12
        .px-5
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 50px')
                .col
                  h3.mb-0 Barra de herramientas esencial (Compacta)
          .row.align-items-center.mb-5
            .col-lg-6.order-2.order-lg-1(data-aos="fade-right")
              p.mb-0 La barra de herramientas esencial, también conocida como la barra de herramientas compacta, es la versión simplificada de la barra de herramientas. Está diseñada para ocupar menos espacio en la pantalla y contiene las herramientas más básicas y comunes que se utilizan en la mayoría de los flujos de trabajo de diseño. Incluye herramientas como Selección, Dibujo de formas básicas, Texto, Pluma, Pincel, Borrador, y algunas herramientas de transformación. Es ideal para usuarios que prefieren una interfaz menos recargada o que trabajan en pantallas más pequeñas.
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img3.png', alt='', style='width: 580px')
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 50px')
                .col
                  h3.mb-0 Barra de herramientas avanzada (Completa)
          .row.align-items-center.mb-5
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 500px').m-auto
            .col-lg-8(data-aos="fade-left")
              p La barra de herramientas avanzada es la versión completa y más extensa, que incluye todas las herramientas disponibles en Illustrator. Esta barra de herramientas es adecuada para usuarios avanzados o para aquellos que necesitan acceso inmediato a una amplia gama de herramientas, incluyendo opciones especializadas como Malla, Curvatura, Degradado, Símbolos, Perspectiva, y muchas más. La barra de herramientas avanzada permite un flujo de trabajo más complejo y versátil, ya que no requiere abrir menús adicionales para acceder a herramientas menos comunes. 
              p Para cambiar de la barra de herramientas Básica a la Avanzada, realice una de las siguientes acciones:
              .row.mb-3
                .col-auto
                  .p-2.bg-c5
                    p.mb-0 Seleccione Ventana > Barras de herramientas > Avanzada.
              .row
                .col-auto
                  .p-2.bg-c5
                    p.mb-0 Seleccione Avanzada en el menú desplegable del cajón.
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
                p.mb-0 #[b Figura 1.] Barra de herramientas avanzada
              .row(data-aos="fade-right")
                .col-12
                  .p-4.p-lg-5.bg-c6
                    .row.align-items-center
                      .col-lg-auto.mb-4.mb-lg-0
                        figure
                          img(src='@/assets/curso/tema1/img5.png', alt='', style='width: 450px').m-auto
                      .col
                        .row.mb-2
                          .col-12
                            .p-2.bg-c7
                              p.mb-0 #[b A. Barra de herramientas básica.]
                        .row.mb-2
                          .col-12
                            .p-2.bg-c7
                              p.mb-0 #[b B. Barra de herramientas avanzada.]
                        .row.mb-2
                          .col-12
                            .p-2.bg-c7
                              p.mb-0 #[b C. Cajón de todas las herramientas.]
                        .row.mb-2
                          .col-12
                            .p-2.bg-c7
                              p.mb-0 #[b D. Menú emergente.]
                        .row.mb-2
                          .col-12
                            .p-2.bg-c7
                              p.mb-0 #[b E. Categoría de herramienta.]
                        .row.mb-2
                          .col-12
                            .p-2.bg-c7
                              p.mb-0 #[b F. Herramienta disponible en la barra de herramientas.]
                        .row
                          .col-12
                            .p-2.bg-c7
                              p.mb-0 #[b G. Herramienta disponible en el cajón.]
    .row.mb-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Explore la barra de herramientas de Illustrator
    .row.mb-4
      .col-12(data-aos="fade-right")
        .px-4.bg-c8
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0.pt-4.pt-lg-0
              p.mb-0 Al abrir un documento en Illustrator, encontrará la barra de herramientas predeterminada situada en el lado izquierdo de la pantalla. Esta barra de herramientas es esencial para su flujo de trabajo, porque contiene un conjunto completo de herramientas que necesitará para crear y editar gráficos vectoriales. Desde herramientas básicas de selección y dibujo hasta opciones avanzadas de transformación y manipulación, la barra de herramientas está diseñada para ofrecer acceso rápido y eficiente a las funciones más utilizadas, permitiéndole realizar sus tareas con mayor fluidez y precisión.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img4.svg', alt='', style='width: 400px').m-auto
    .row.justify-content-center
      .col-11.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c9
          figure.mb-3
            img(src='@/assets/curso/tema1/img6.png', alt='', style='width: 340px').m-auto
          p.text-center.mb-0 Pase el cursos sobre las herramientas para mostrar una descripción visual de la herramienta.
      .col-11.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .p-4.bg-c9
          figure.mb-3
            img(src='@/assets/curso/tema1/img7.png', alt='', style='width: 340px').m-auto
          p.text-center.mb-0 Mantenga presionados los íconos de herramientas para ver más herramientas ocultas.
      .col-11.col-md-6.col-lg-4(data-aos="fade-left")
        .p-4.bg-c9
          figure.mb-3
            img(src='@/assets/curso/tema1/img8.png', alt='', style='width: 340px').m-auto
          p.text-center.mb-0 Haga clic en el ícono Editar barra de herramientas para ver la lista completa de herramientas.
      
</template>

<script>
export default {
  name: 'Tema1',
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
