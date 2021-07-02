<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <h2>Hi.</h2>
    <div class="about-body">
      <p>I'm a journalist interested in technology, politics, and the politics of technology. </p>
      <p>I think a lot about the incentives baked into social and technological systems,
        and how these bring the interests of owners, coordinators and end users into conflict.</p>
      <p>After starting my career in London, then moving to Montréal, I'm now based in New York, where I attended the
        <a href="https://www.recurse.com/" target="_blank">Recurse Center</a> programming retreat in spring 2019.</p>
      <p>From 2019-2020 I worked at global nonprofit <a href='https://www.witness.org/'>WITNESS</a> researching deepfakes and AI-driven media manipulation.</p>
      <p>Currently I'm a data journalist at <a href='https://themarkup.org/'>The Markup</a> working on the 
      <a href="https://themarkup.org/series/citizen-browser">Citizen Browser</a> Facebook accountability project.</p>
   </div>

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
