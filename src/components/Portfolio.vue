<template>
  <div class="hello">
    <h1>Portfolio</h1>
    <h2>A non-exhaustive list of articles:</h2>
      <div class="portfolio-container">
        <table id="portfolio">
           <tr>
            <th>Date</th>
            <th>Title</th> 
            <th>Publication</th>
          </tr>
          <tr v-for="article in articles">
            <td>
             {{ article.date }}
            </td>
            <td>
              <a v-bind:href="article.url"> {{ article.title }} </a>
            </td>
            <td>
              <em>{{ article.publication }}</em>
            </td>
          </tr>
        </table>
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
import articlesJSON from "../assets/articles.json"

export default {
  name: 'Portfolio',
  data () {
    return {
      articles: articlesJSON.articles
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

/* Style the portfolio table */
.portfolio-container {
  max-width: 60%;
  margin: auto;
}

#portfolio {
  text-align: left;
}

td {
  vertical-align: top;
}

</style>
