<template>
  <div class="hello">
    <h1>Portfolio</h1>
    <h2>Here is some recent work:</h2>
      <div class="portfolio-container">
        <ul id="portfolio">
          <li v-for="article in articles">
            <a v-bind:href="article.url"> {{ article.title }} </a> - {{ article.publication }}
            <br>
            {{ article.date }}
          </li>
        </ul>
      </div>
    <br>
    <span>
      <a href="#/" > home</a>
    </span>
       |
    <a href="#/contact" > contact </a>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data () {
    return {
      articles: [
      { date: "2018-10-24", title: "The Battle Over Europe’s Air", publication: "HowWeGetToNext", url: "https://howwegettonext.com/the-battle-over-europes-air-c646e041c7f"},
      { date: "2018-09-27", title: "The Authors of 'Blockchain and the Law' Want You to Rethink the Internet", publication: "BREAKER Magazine", url: "https://breakermag.com/the-authors-of-blockchain-and-the-law-want-you-to-rethink-the-internet/" },
      { date: "2018-07-19", title: "'Inspector Gadget': How drones are saving lives", publication: "UnHerd.com", url: "https://unherd.com/2018/07/inspector-gadget-drones-saving-lives/"}
]
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
  margin: 0 10px 5px;
}
a {
  color: #42a1b9;
}
.portfolio-container {
  max-width: 50%;
  margin: auto;
}

</style>
