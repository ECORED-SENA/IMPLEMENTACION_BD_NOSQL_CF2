<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure
      img(src="@/assets/curso/introduccion/1.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") Las bases de datos son una herramienta importante para las organizaciones, que permiten guardar, consultar y manipular la información, la cual  tiene una tendencia a crecer, por lo cual, las empresas se ven en la necesidad de adquirir buenas herramientas para su almacenamiento y seguridad de la información.

    p.mt-3(data-aos="fade-up") Se invita al aprendiz a ver el video introductorio de este componente formativo:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


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
