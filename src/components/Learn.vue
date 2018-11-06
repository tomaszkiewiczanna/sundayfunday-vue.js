<template>
  <div class="learn">
    <router-link to="/">Back</router-link>
    <h1 class="learn-head">{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Learn',
    data () {
      return {
        msg: 'Learn vue.js things'
      }
    }
  }
</script>
