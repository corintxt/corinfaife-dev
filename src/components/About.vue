<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <h2>Hi.</h2>
    <div class="about-body">
      <p>I'm a journalist interested in technology, politics, and the politics of technology. </p>
      <p>I think a lot about the incentives baked into social and technological systems,
        and how these bring the interests of owners, coordinators and end users into conflict.</p>
      <p>I'm also fascinated by self-governing communities and alternatives to hierarchical and/or capitalist modes of organisation.</p>
      <p>After starting my career in London, then moving to Montréal, I'm now based in New York, where I attended the 
        <a href="https://www.recurse.com/" target="_blank">Recurse Center</a> programming retreat in spring 2019.</p>
      <p>I also write Corincast, a bi-weekly(ish) newsletter with short essays and interesting links, published through Tinyletter.</p> 
   </div>
    
    <form style="padding:3px;text-align:center;" action="https://tinyletter.com/corincast" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/corincast', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
      <p id="subscribe">
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
      msg: 'About'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  width: 50%;
  margin: auto;
}

.about-body{
  text-align: left;
}

#subscribe {
    margin-block-start: .2em;
}

</style>
