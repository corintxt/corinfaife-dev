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
import articles from "../assets/articles.json"

export default {
  name: 'Portfolio',
  data () {
    return {
      articles: articles.articles
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
