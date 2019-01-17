<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Use these details to get in touch:</h2>
    <h3>
      twitter: <a href="https://twitter.com/corintxt" target="_blank">@corintxt</a>
    </h3>
     <h3>
      email: <a href="mailto:corin.faife@gmail.com" target="_blank">corin.faife[at]gmail.com</a>
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
