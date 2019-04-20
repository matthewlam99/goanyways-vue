<template>
  <div class="add-blog">
    <h2>Add Blog</h2>
    <form v-if="!submitted">
      <label>Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Author:</label>
      <select v-model="blog.author">
        <option>Matthew Lam</option>
        <option>Shaiv Kumat</option>
      </select><br>
      <label>Content:</label>
      <textarea v-model.lazy="blog.content"></textarea><br>
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>You have successfully added your post.</h3>
    </div>
      <div id="preview">
      <h3>Preview Blog</h3>
      <p>Title: {{blog.title}} </p>
      <p>Author: {{blog.author}} </p>
      <p>Content:</p>
      <p>{{blog.content}}</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'addBlog',
  data () {
    return {
      blog: {
        title: '',
        content: '',
        author: '',
      },
      submitted: false
    }
  },
  methods: {
    post: function(){
      var db = firebase.firestore();
      db.settings({ timestampsInSnapshots: true});
      db.collection("blogs").add({
          title: this.blog.title,
          author: this.blog.author,
          content: this.blog.content,
          date: new Date()
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
      this.submitted = true;
    }
  }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
    margin: 40px;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    position: center;
    width: 50%;
    padding: 8px;
}
#preview{
    border: 1px dotted #ccc;
    width: 100%;
    margin-top: 30px;
    padding: 30px;
}
h3{
    margin-top: 10px;
}
textarea{
  height: 200px;
}

button{
    background: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
}
</style>