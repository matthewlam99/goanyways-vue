<template>
  <div class="Error404">
    <h1>404 Page Missing</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  data () {
    return {
      msg: "This page displays when a route is accessed that doesn't exist."
    }
  }
}
</script>

<style scoped>
.Error404{
margin-top: 100px;
}
</style>