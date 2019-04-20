<template>
  <div class="signup">
    <!-- Make real email checker -->
    <h1>Create an Account</h1>
      <form v-on:submit.prevent>
      <input type="text" v-model="email"  placeholder="email" required /><br>
      <input type="password"  placeholder="password" v-model="password" /><br>
      <button v-on:click="signup" class="btn btn-secondary" >Sign Up</button>    
      </form>
      <p>Or go to the <router-link to="login">login</router-link>.</p>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signup: function(){
      Firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
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
.signup {
  margin-top: 80px;
}
#sucess h3{
  color: green;
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