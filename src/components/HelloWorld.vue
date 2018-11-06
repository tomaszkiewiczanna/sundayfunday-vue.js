<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/wordpress" class="hello-link">Wordpress things</router-link>
    <router-link to="/learn" class="hello-link">Drafts</router-link>
    <router-link to="/coffee" class="hello-link">Coffee Break</router-link>
    <router-link to="/surprise" class="hello-link">Nice Surprise</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Sunday funday'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
