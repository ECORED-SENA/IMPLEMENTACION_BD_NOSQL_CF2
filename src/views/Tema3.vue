<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 #[em Firebase]

    figure
      img(src="@/assets/curso/tema3/1.svg" data-aos="fade-up")

    .bloque-texto-a.color-primario.color2.p-4.p-md-5.mt-5.col-md-9.m-auto 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p(data-aos="fade-up") #[em Firebase] es una plataforma en la nube de Google para el desarrollo de aplicaciones #[em web] y móviles. Fue creada en 2011 pasando a ser parte de Google en 2014, su función esencial es hacer más sencilla la creación de aplicaciones #[em web] y móviles en su desarrollo, proporcionando herramientas que facilitan el trabajo para que sea más rápido, pero sin renunciar a la calidad y la seguridad. Digital55 (2020).

    br
    br
    .titulo-segundo.mt-5
      h2#t_3_1 3.1  Definición, servicios, costos

    .row
      .col-md-7
        p(data-aos="fade-up") La principal herramienta y esencial de Firebase son las bases de datos en tiempo real. Estas se alojan en la nube, son de tipo NoSQL en formato #[em JSON] como se vio en el componente de base de datos. Este servicio ofrece alojar y disponer de los datos e información de la aplicación en tiempo real, manteniéndolos actualizados, aunque el usuario no realice ninguna acción.
        p.mt-3(data-aos="fade-up") #[em Firebase] ayuda a compilar y ejecutar las aplicaciones de manera exitosa, desde los #[em IOS], #[em Android] y la #[em Web] móvil, y para esto se necesita un servidor #[em backend] para almacenar datos y administrarlos. 
        p.mt-3(data-aos="fade-up") Igualmente, en las aplicaciones, ayuda a crear nuevos usuarios, mantenerlos comprometidos y escalonamientos desde el registro de usuarios hasta los que consultan la base de datos.
        p.mt-3(data-aos="fade-up") #[em Firebase], maneja los detalles de infraestructura de backend de las aplicaciones, las participaciones de los usuarios y la monetización.
      .col-md-5
        figure
          img(src="@/assets/curso/tema3/3.svg" data-aos="fade-left")
    .row.mt-5
      .col-md-5
        figure
          img(src="@/assets/curso/tema3/4.svg" data-aos="fade-right")
      .col-md-7
        p(data-aos="fade-up") Para la administración y monitoreo de las aplicaciones conectadas a #[em Firebase] existe una consola #[em web], para verificar las fallas y configurar arreglos, rastreo de análisis y estadísticas.
        p.mt-3(data-aos="fade-up") También instala conjuntos de código abierto empaquetados para automatizar las tareas de desarrollo. Se integra fácilmente con las herramientas de los equipos, como #[em AdMob], plataforma de #[em marketing] de Google, #[em Play Store], #[em Data Studio], #[em BigQuery], #[em Slack], #[em Jira] y #[em PagerDuty], del mismo modo soporta videojuegos y aplicaciones muy grandes.
        p.mt-3(data-aos="fade-up") En cuanto a sus costos de servicio, posee planes gratuitos y de prepago, los cuales son muy fáciles de adquirir y dan muy buen soporte.

    br
    br
    .titulo-segundo.mt-5
      h2#t_3_2 3.2  Creación de una base de datos
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
          img(src="@/assets/curso/tema3/5.svg" data-aos="fade-left")

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h5.mt-5.text-center(data-aos="fade-up") Finalmente y con el fin de sintetizar el contenido de este componente formativo se presenta el siguiente mapa conceptual:
    p.mt-5(data-aos="fade-up") Implementación de bases de datos NoSQL - creación de bases de datos NoSQL en la nube
    h5.mt-5.text-center(data-aos="fade-up") Ventajas y desventajas de bases de datos NoSQL

    ImagenInfografica.color-secundario.mt-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3/6.svg', alt='')

      .tarjeta.color-acento-botones.p-3(x="5%" y="93%" numero="")
        .h5.mb-2 Portabilidad:
        p Por el cual se adopta y se expide el Reglamento General de Archivos.
      .tarjeta.color-acento-botones.p-3(x="14%" y="93%" numero="")
        .h5.mb-2 Versatibilidad:
        p Ofrece crecimientos sobre su forma de almacenar la información, se manejan campos o tablas, “colecciones”. 
      .tarjeta.color-acento-botones.p-3(x="24%" y="93%" numero="")
        .h5.mb-2 Optimización:
        p Poseen un algoritmo interno que reescriben las consultas de los usuarios, para no sobrecargar los servidores y optimizar las operaciones
      .tarjeta.color-acento-botones.p-3(x="34%" y="93%" numero="")
        .h5.mb-2 Crecimiento horizontal:
        p Soportan estructuras distribuidas, si el desempeño de los servidores baja, se instalan nuevos nodos para nivelar la carga de trabajo.
      .tarjeta.color-acento-botones.p-3(x="49%" y="93%" numero="")
        .h5.mb-2 Atomicidad:
        p No incorporan atomicidad en la información, presenta información inconsistente entre nodos.
      .tarjeta.color-acento-botones.p-3(x="59%" y="93%" numero="")
        .h5.mb-2 No documentación:
        p Suele ocurrir que el #[em software], posee operaciones no documentadas, por lo cual podrían ser muy limitadas, por falta de información sobre sus herramientas y características.
      .tarjeta.color-acento-botones.p-3(x="72%" y="93%" numero="")
        .h5.mb-2 Menos madurez:
        p Las bases de datos NoSQL, tienen muchas características importantes que aún no se han implementado.
      .tarjeta.color-acento-botones.p-3(x="84%" y="93%" numero="")
        .h5.mb-2 Poca estandarización:
        p No se definen exactamente los motores que la utilizan, los lenguajes hacen variar el tipo de base de datos a utilizar.
      .tarjeta.color-acento-botones.p-3(x="94%" y="93%" numero="")
        .h5.mb-2 No interfaz:
        p La mayoría de las bases de datos NoSQL  no tienen interfaz gráfica, por lo cual se requiere un buen conocimiento para poder manipular algunas.






</template>

<script>
export default {
  name: 'Tema3',
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
  background-color: #FDEAB1 !important
  left: 42%
.color2
  background: url("../assets/curso/tema3/2.svg")
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
.tarjeta.color-acento-botones
    background-color: #F0E6C9
</style>
