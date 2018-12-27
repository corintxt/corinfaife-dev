<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>About me:</h2>
    <h3>[tk]</h3>
    
    <br>
    <span>
      <a href="#/" > home</a>
    </span>
       |
    <span>
      <a href="#/portfolio" > portfolio </a>
    </span>
       |
    <span>
      <a href="#/contact" > contact </a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'This is the about page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
