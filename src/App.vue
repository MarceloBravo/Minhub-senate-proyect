<template>
  <HeaderComponent/>
  <MenuComponent/>
  <router-view></router-view>
</template>

<script>
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'


import HeaderComponent from './components/header/header.vue'
import MenuComponent from './components/menu/menu.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    MenuComponent,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.dropdown-menu{
    z-index: 1000;
}

.container{
    text-align: justify;    
}
</style>
