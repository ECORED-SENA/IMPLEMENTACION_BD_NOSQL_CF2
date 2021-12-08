<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 MongoDB Atlas

    figure
      img(src="@/assets/curso/tema2/1.svg" data-aos="fade-up")

    .bloque-texto-a.color-primario.color2.p-4.p-md-5.mt-5.col-md-9.m-auto 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p(data-aos="fade-up") Es una base de datos proporcionada por #[em MongoDb], ofrece una gran escalabilidad y flexibilidad, así como un modelo de consultas e indexación avanzado.  #[em MongoDB]. (2021). Es un escalamiento de otra base de datos, pero esta vez hacia la nube. Realiza de manera automatizada la creación de servidores, servicios, modificaciones y configuraciones.

    br
    br
    .titulo-segundo.mt-5
      h2#t_2_1 2.1  Definición, servicios, costos

    p(data-aos="fade-up") Los servicios de MongoDB consisten en alojar en la nube bases de datos con los servidores de AWS, Azure y Google Cloud. De igual forma compone su estructura con autorreparación formados por instancias de bases de datos distribuidas geográficamente minimizando los fallos. Mejora la confiabilidad de sus bases de datos con copias de seguridad continua y recuperaciones efectivas.
    p.mt-3(data-aos="fade-up") Las siguientes son algunas de sus características:

    br
    .row.mt-5
      .col-md-4.mb-5.text-center
        .p-4.text-center(style="background-color:#DEF1FF;border-radius:15px;height:100%;")
          img(src="@/assets/curso/tema2/3.svg" data-aos="fade-up" style="display:inline;max-width:100px;margin-top:-70px;")
          h5.mt-2(data-aos="fade-up") Seguridad:
          p.mt-3(data-aos="fade-up") MongoDB Atlas, posee un control de acceso a la nube, listados de direcciones IP, emparejamiento de las nubes virtuales, autenticaciones, cifrados y administraciones en roles de usuarios.
      .col-md-4.mb-5.text-center
        .p-4.text-center(style="background-color:#DEF1FF;border-radius:15px;height:100%;")
          img(src="@/assets/curso/tema2/4.svg" data-aos="fade-up" style="display:inline;max-width:100px;margin-top:-70px;")
          h5.mt-2(data-aos="fade-up") Infraestructura:
          p.mt-3(data-aos="fade-up") Automatiza el aprovisionamiento, configura e implementa la infraestructura para que los equipos obtengan recursos de las bases de datos cuando se requieran.
      .col-md-4.mb-5.text-center
        .p-4.text-center(style="background-color:#DEF1FF;border-radius:15px;height:100%;")
          img(src="@/assets/curso/tema2/5.svg" data-aos="fade-up" style="display:inline;max-width:100px;margin-top:-70px;")
          h5.mt-2(data-aos="fade-up") Escalamiento:
          p.mt-3(data-aos="fade-up") Permite modificar su clúster para escalar la base de datos o realizar actualizaciones.

    p(data-aos="fade-up") Del mismo modo, en los proveedores de nubes y región, se puede escoger lo que se necesita de acuerdo a los requerimientos de cada cliente o proyecto, existiendo versiones gratuitas pero limitadas y las de pago.

    br
    br
    .titulo-segundo.mt-5
      h2#t_2_2 2.2  Creación de una base de datos
    p(data-aos="fade-up") Se invita al aprendiz a ver los siguientes videos, en lo que podrá observar y escuchar en detalle el procedimiento para realizar cada una de las siguientes actividades:

    .row.mt-5
      .col-md-6
        PasosA.color-primario(tipo="n")
          div
            p(data-aos="fade-up") Ingreso a la plataforma
          div
            p(data-aos="fade-up") Registro en plataforma
          div
            p(data-aos="fade-up") Creación de base de datos
          div
            p(data-aos="fade-up") Operaciones CRUD

      .col-md-6
        figure
          img(src="@/assets/curso/tema2/6.png" data-aos="fade-left")

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.bloque-texto-d i
  color: #70D2DF
.bloque-texto-d.color-primario:before
  background-color: #DEF1FF
.color2:before
  background-color: #70D2DF !important
  left: 42%
.color2
  background: url("../assets/curso/tema2/2.svg")
  background-repeat: no-repeat
  background-size: contain
.pasos-a.color-primario .pasos-a__circle
    background-color: #70D2DF
.pasos-a.color-primario .pasos-a__circle div
    color: white
.pasos-a.color-primario .pasos-a__linea .hor-line
    border-top-color: #70D2DF
.pasos-a.color-primario .pasos-a__linea__esquina__linea
    border-color: #70D2DF
.pasos-a.color-primario .pasos-a__numero::after
    border-left-color: #70D2DF
</style>
