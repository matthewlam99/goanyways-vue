<template>
  <div>
    <b-jumbotron class="background" text-variant="white" header="Go Anyways" lead="Creating affordable compact electric vehicles" fluid>
      <p>For more information read below</p>
      <b-btn variant="secondary" href="#">More Info</b-btn>
    </b-jumbotron>
    <informatics></informatics>
    <div class="alt">
      <h1>Awards</h1>
      <b-row  v-for="m in msg" :key="m.id">
        <b-col></b-col>
        <b-col><li>{{ m }}</li></b-col>
        <b-col></b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Informatics from './Informatics.vue'

export default {
  name: 'home',
  components: {
    'informatics': Informatics
  },
  data () {
    return {
      msg: ["3rd at the Vancouver Startup Week Hackathon"]
    }
  }
}
</script>
<style scoped>
.background {
  background-image: url('../assets/road.jpg');
  background-size: 1400px 400px;
  background-repeat: no-repeat;
}
.circle{
  padding: 15px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #eee;
  margin-bottom: 20px;
}
.alt{
  background-color: #eee;
  padding: 20px;
}
</style>