<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-around
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/intro/img1.png", alt="", style="width: 300px").m-auto
      .col-10.col-lg-6.mb-4.mb-lg-0
        .p-4.p-lg-5.bg-c1
          figure.mb-5
            img(src="@/assets/curso/intro/img1.svg", alt="", style="width: 300px")
          p.mb-0 La barra de herramientas se usa principalmente para crear, seleccionar, manipular, diseminar y transformar objetos. A groso modo, se encuentran herramientas para: seleccionar, dibujar, introducir y editar texto, pintar, reformar, manejo de símbolos, creación y edición de gráficas estadísticas, creación y edición de sectores y corte, así como herramientas para moverse por la mesa de trabajo y hacer zoom sobre ella.
      .col-lg-3
        figure
          img(src="@/assets/curso/intro/img2.svg", alt="", style="width: 300px").m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
