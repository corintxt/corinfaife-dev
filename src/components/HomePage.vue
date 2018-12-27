<template>
  <div class="hello">
    <h2>About me:</h2>
    <h1>Corin Faife is a journalist  <br>interested in
      <vue-typer  
        :text='["technology","automation","surveillance","blockchain","accountability", "web 3.0"]'
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
    </h1>
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
