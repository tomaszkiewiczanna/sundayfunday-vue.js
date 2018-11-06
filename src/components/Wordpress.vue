<template>
  <div class="wordpress">
    <h1 class="wordpress-head">{{msg}}</h1>
    <h2 class="wordpress-subhead">Kava posts</h2>
    <router-link to="/">Back</router-link>
    <ul class="wordpress-posts">
      <li v-for="post in posts" class="wordpress-post">
        <h1 class="wordpress-posts-head">{{post.title.rendered}}</h1>
        <span class="wordpress-posts-content" v-html="post.content.rendered"></span>
      </li>
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
<style>
  .wordpress-post{
    display: block;
    width: 70vw;
    height: auto;
    overflow: hidden;
    background: #f2f2f2;
    padding: 20px;
    margin: 30px 0;
  }
  .wordpress-post span{
    font-size: 12px;
    color: #404040;
  }
  .wordpress-posts-head{
    color: #3a827f;
  }
</style>
