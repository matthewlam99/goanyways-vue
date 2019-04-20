<template>
  <div class="contact">
    <b-jumbotron text-variant="white" header="Contact Us" fluid>
    </b-jumbotron>
      <h1>GET IN TOUCH WITH US!</h1>
      <b-form v-if="show" class="container">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" v-model="name">
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" v-model="email">
        </div>
        <div class="form-group">
          <label for="msg">Message:</label>
          <textarea class="form-control" id="msg" v-model="msg"></textarea>
        </div>
        <button type="submit" class="btn btn-secondary">Submit</button>
      </b-form>
  </div>
</template>

<script>


export default {
  name: 'contactus',
  data () {
    return {
      show: true,
      name: '',
      email: '',
      msg: ''
    }
  },
  methods: {

  }
}
</script>
<style scoped>
#contact{
  margin-top: 80px;
}
input[type="text"], textarea{
    padding: 8px;
}

textarea{
    height: 200px;
}
button{
    margin-bottom: 20px;
}
</style>