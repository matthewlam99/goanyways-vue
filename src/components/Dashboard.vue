<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    
    <add-blog></add-blog>
  </div>
</template>

<script>
import AddBlog from './AddBlog.vue'
export default {
  name: 'Dashboard',
  data () {
    return {  
    }
  },
  components: {
    'add-blog': AddBlog
  }
}
</script>

<style scoped>
.dashboard{
  margin-top: 80px;
}
</style>