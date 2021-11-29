<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Bases de datos en la nube

    figure
      img(src="@/assets/curso/tema1/1.svg" data-aos="fade-up")

    .row.mt-5
      .col-md-7
        .bloque-texto-d.color-primario.p-4(style="border:none;")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(data-aos="fade-right")
            h5 Una base de datos en la nube es una colección de contenido informativo, ya sea estructurado o no estructurado, que reside en una plataforma de infraestructura de computación en la nube privada, pública o híbrida.
            i.fas.fa-quote-right(data-aos="fade-left")
          .bloque-texto-d__autor 
            .h6.mb-0.text-regular Sheldon, R., & Shore, J. (2021)
        p.mt-4(data-aos="fade-up") De igual forma, hacen referencia a una nueva modalidad de almacenamiento, en Cloud, no es en un equipo o sistema local, se ejecuta desde un servidor en la nube.
        p.mt-3(data-aos="fade-up") A continuación se describen sus principales ventajas y desventajas:
      .col-md-5
        figure
          img(src="@/assets/curso/tema1/2.svg" data-aos="fade-left")

    p.mt-5(data-aos="fade-up" style="padding:4px; border-left:4px #F4CD58 solid;margin-left") &nbsp;&nbsp;Tabla 1 Ventajas y desventajas bases de datos NoSQL

    div.contCaja.p-3
      .tabla-a.color-acento-botones(style="overflow:initial;")
        table
          thead(style="border:none")
            tr
              th.text-white.p-3.text-center.h4(style="background-color:#F4CD58;text-align:left;border:none;width:50%;color:#12263F !important;") Ventajas
              th.text-white.p-3.text-center.h4(style="background-color:#F4CD58;text-align:left;border:none;width:50%;color:#12263F !important;") Desventajas
          tbody
            tr(style="background-color:#F6F6F6")
              td.p-4(style="border:none;border-right:1px #AFAFAF solid;") #[strong Portabilidad:] puede ser usado desde cualquier dispositivo tecnológico.
              td.p-4(style="border:none;") #[strong Atomicidad:] no incorporan atomicidad en la información, presenta información inconsistente entre nodos.
            tr(style="background-color:#FEFEFE")
              td.p-4(style="border:none;border-right:1px #AFAFAF solid;") #[strong Versatilidad:] ofrece crecimientos sobre su forma de almacenar la información, se manejan campos o tablas, “colección”, dado que intercambia documentos basado en JSON, solo se agregan notas sobre el documento y se sigue operando.
              td.p-4(style="border:none;") #[strong No documentación:] suele ocurrir que el software, posee operaciones no documentadas, por lo cual podrían ser muy limitadas, por falta de información sobre sus herramientas y características.
            tr(style="background-color:#F6F6F6")
              td.p-4(style="border:none;border-right:1px #AFAFAF solid;") #[strong Optimización:] poseen un algoritmo interno que reescribe las consultas de los usuarios, para no sobrecargar los servidores y optimizar las operaciones.
              td.p-4(style="border:none;") #[strong Menos madurez:] las bases de datos NoSQL, tienen muchas características importantes que aún no se han implementado.
            tr(style="background-color:#FEFEFE")
              td.p-4(style="border:none;border-right:1px #AFAFAF solid;") #[strong Crecimiento horizontal:] soportan estructuras distribuidas, si el desempeño de los servidores baja, se instalan nuevos nodos para nivelar la carga de trabajo.
              td.p-4(style="border:none;") #[strong Poca estandarización:] no se definen exactamente los motores que la utilizan, los lenguajes hacen variar el tipo de base de datos a utilizar.
            tr(style="background-color:#F6F6F6")
              td.p-4(style="border:none;border-right:1px #AFAFAF solid;") #[strong Aplicaciones de Big Data:] se pueden manejar grandes volúmenes de datos.
              td.p-4(style="border:none;") #[strong No interfaz:] la mayoría de las bases de datos NoSQL, no tienen interfaz gráfica, por lo cual se requiere un buen conocimiento para poder manipular algunas.
            tr(style="background-color:#FEFEFE")
              td.p-4(style="border:none;border-right:1px #AFAFAF solid;") #[strong Administración:] se utiliza menos administración práctica, se distribuyen datos y se reparan automáticamente, menos requisitos de ajuste y administración.
              td.p-4(style="border:none;") 




</template>

<script>
export default {
  name: 'Tema1',
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
</style>
