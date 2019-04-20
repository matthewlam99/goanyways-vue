<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <p>By: {{blog.author}}</p>
    <p>Date: {{blog.date.toDate().toDateString()}}</p>
    <article>{{blog.content}}</article>
    <br/>
    <router-link to="/blog">Back to Blogs</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'SingleBlog',
  data () {
    return {
        blog: {},
        id: this.$route.params.id
    }
  },
  created(){
    var db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true});
    db.collection('blogs').doc(this.id).get().then((doc) => {
        this.blog = doc.data();
    }).catch((err) => {
        console.log('Error getting documents', err);
    });
  }
}
</script>

<style scoped>

</style>