<template>
  <div class="wordpress">
    <h1 class="wordpress-head">{{msg}}</h1>
    <h2 class="wordpress-head">Kava posts</h2>
    <router-link to="/">Back</router-link>
    <ul class="wordpress-posts">
      
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Wordpress',
    data () {
      return {
        msg: 'Wordpress things',
        posts: []
      }
    },
    created: function(){
      this.$http.get('http://kavastudio.pl/wp-json/wp/v2/posts').then(function(res){
        this.posts = res.body;
        console.log(this.posts);

      })

    }
  }
</script>
