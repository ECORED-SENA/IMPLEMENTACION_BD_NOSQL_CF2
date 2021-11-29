<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
.titulo-principal__numero
  background-color: #FFD947
.titulo-principal__numero span
  color: #12263F !important
.curso-main-container > .container
    overflow-x: inherit !important
.titulo-segundo:after
  border-left-color: #F4CD58 !important
.row
  margin-left: 0px !important
  margin-right: 0px !important
</style>
