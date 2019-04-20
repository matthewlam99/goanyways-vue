<template>
  <div class="login">
    <h1>Log in to Your Account</h1>
      <form v-on:submit.prevent>
      <input type="text" v-model="email"  placeholder="email" required /><br>
      <input type="password" v-model="password" placeholder="password" required /><br>
      <button type= "submit" class="btn btn-secondary" v-on:click="login">Log In</button>
      </form>
      <p>You don't have an account? You can <router-link to="signup">create one</router-link></p>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login: function(){
      Firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(
        user => {
          this.$router.replace('dashboard');
        },
        error => {
          console.log(error.message);
        }
      );
    }
  }
}
</script>

<style scoped>
.login {
  margin-top: 80px;
}
input {
  margin: 10px 0;
  width: 30%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 30%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>