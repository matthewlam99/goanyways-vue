<template>
  <header>
    <nav class="navbar navbar-expand-sm justify-content-center fixed-top bg-dark navbar-dark">
      <a class="navbar-brand" href="/">
        <img src="@/assets/Logo.png" alt="Logo" style="width: 40px;">
      </a>
      <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/product" exact>Product</router-link></li>
      <li><router-link to="/about" exact>About</router-link></li>    
      <li><router-link to="/blog" exact>Blogs</router-link></li>
      <li><router-link to="/contact" exact>Contact Us</router-link></li>
      <li><router-link to="/dashboard" v-if="user">Dashboard</router-link></li>
      <li><router-link to="/login" v-if="!user" exact>Login</router-link></li>
      <li><router-link to="/signup" v-if="!user" exact>Sign Up</router-link></li>
      <li><button class="btn" v-on:click="signOut" v-if="user" exact>Sign-out</button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Firebase from "firebase";

export default {
  computed:{
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    signOut: function() {
      Firebase.auth().signOut()
        .then(() => {
          this.$router.replace('login');
        });
    }
  }
};
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 5px;
}
nav{
    padding: 0px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>