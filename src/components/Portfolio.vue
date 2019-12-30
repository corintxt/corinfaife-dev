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
            <td id="date">
             {{ article.date }}
            </td>
            <td>
              <a v-bind:href="article.url"> {{ article.title }} </a>
            </td>
            <td id="publication">
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
    <span>
      <a href="#/contact" > contact </a>
    </span>
       |
    <span>
      <a href="#/about" > about </a>
    </span>
  </div>
</template>

<script>
import articlesJSON from "../assets/articles-stripped.json"

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

#date {
 width: 6em 
}

</style>
