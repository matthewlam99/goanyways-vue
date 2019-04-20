<template>
  <div id="app">
    <nav-main></nav-main>
    <div class="space">
      <router-view/>
    </div>
    <footer-main></footer-main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    navMain: Header,
    footerMain: Footer
  },
  methods: {
    setUser: function(){
      this.$store.dispatch('setUser');
    }
  },
  created(){
    this.setUser();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}
.space {
  margin-top: 50px;
}
</style>
