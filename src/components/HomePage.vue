<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>About me:</h2>
    <h3>Corin Faife is a journalist interested in
      <vue-typer  
        :text='["technology","automation","surveillance","blockchain","accountability"]'
        :repeat='Infinity'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='70'
        :type-delay='70'
        :pre-erase-delay='2000'
        :erase-delay='200'
        erase-style='select-back'
        :erase-on-complete='false'
        caret-animation='blink'>
      </vue-typer>
    </h3>
    <ul>      
       <li>
        <a
          href="#/portfolio"
        >
          portfolio
        </a>
      </li>
       <li>
        <a
          href="#/contact"
        >
          contact
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Corin Faife'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
