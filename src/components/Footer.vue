<template>
  <footer>
    <b-container>
      <b-row>
        <b-col>
          <h4>Contact Us</h4>
          <ul v-for="info in contactInfo" :key="info.id">
            <li>{{info}}</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>

export default {
  data () {
    return {
      contactInfo: ["Email: ", "Phone: "]
    }
  }
}
</script>
<style scoped>
footer{
  background-color: black;
  padding: 20px;
}
h4, li {
  color: white;
}
ul{
  list-style-type: none;
}
</style>