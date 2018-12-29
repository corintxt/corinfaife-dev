<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>About me:</h2>
    <h3>[tk]</h3>
    <p>I also write Corincast, a (roughly) bi-weekly newsletter on TK and TK, published with Tinyletter.</p> 
    <form style="padding:3px;text-align:center;" action="https://tinyletter.com/corincast" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/corincast', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
      <p>
        <label for="tlemail">To subscribe, enter your email here:</label>
      </p>
      <p>
        <input type="text" style="width:140px" name="email" id="tlemail" />
      </p>
      <input type="hidden" value="1" name="embed"/>
      <input type="submit" value="Subscribe" />
    </form>

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
