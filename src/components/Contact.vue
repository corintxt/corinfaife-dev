<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Use the details below to contact me:</h2>
    <h3>@corintxt</h3>
    
    <br>
    <a
      href="#/"
    >
      home
    </a><span> | </span>
    <a
      href="#/portfolio"
    >
      portfolio
    </a>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'This is the contact page'
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
