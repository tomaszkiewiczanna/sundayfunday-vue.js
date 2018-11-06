<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="hello-blocks">
      <router-link to="/wordpress" class="hello-link">Wordpress things</router-link>
      <router-link to="/learn" class="hello-link">Drafts</router-link>
      <router-link to="/coffee" class="hello-link">Coffee Break</router-link>
      <router-link to="/surprise" class="hello-link">Nice Surprise</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Sunday funday'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: 700;
    font-size: 54px;
    font-family: 'Arvo', serif;
    margin-bottom: 80px;
  }

  a {
    color: #fff;
  }
  .hello-blocks{
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
  .hello-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 140px;
    background: #42b983;
    transition: 0.4s;
    text-decoration: none;
  }
  .hello-link:hover{
    cursor: pointer;
    background: #399a6c;
    transform: translateY(-2%);
  }
</style>
