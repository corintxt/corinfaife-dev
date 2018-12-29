<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Use the details below to contact me:</h2>
    <h3>
      t: <a href="https://twitter.com/corintxt" target="_blank">@corintxt</a>
    </h3>
     <h3>
      e: <a href="mailto:corin.faife@gmail.com" target="_blank">corin.faife[at]gmail.com</a>
    </h3>
     
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
      <a href="#/about" > about </a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Contact'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
