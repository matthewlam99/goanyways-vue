<template>
  <div class="show-blogs">
      <h1>All Blogs</h1>
        <div class="single-blog container" v-for="blog in blogs" :key="blog.id">
            <h2>{{blog.title}}</h2>
            <h4>By: {{blog.author}}</h4>
            <p>{{blog.content}}</p>
            <router-link v-bind:to=" '/blog/' + blog.id"><button class="btn btn-secondary">Read More</button></router-link>
        </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'showBlogs',
  data () {
    return {
        blogs: []
    }
  },
  created(){
        var db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true});
        db.collection('blogs').orderBy("date", "desc").limit(10).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                var blog = doc.data();
                blog.id = doc.id;
                this.blogs.push(blog);
            });
        })
        .catch((err) => {
        console.log('Error getting documents', err);
        });
  }
}
</script>

<style scoped>
.show-blogs {
   margin-top: 80px;
}
.single-blog{
  padding: 20px;
  margin: 20px auto;
  box-sizing: border-box;
  background: #eee;
}
</style>