<template>
  <main class="news-panel">
    <h3>
      <v-icon name="bullhorn" scale="1.25"/>&nbsp;
      {{ (text ? text.title : null) || "What's Up" }}
    </h3>
    <div class="panel-content">
      <ul>
        <li v-for="post in newsPosts">
          <v-icon name="quote-left" scale="0.75" class="quote-icon"/>&nbsp;
          <router-link class="news-title" :to="post.path">{{ post.title }}</router-link>
          <div class="meta" v-if="post.date">
            {{ post.date }}
          </div>
        </li>
      </ul>
      <div class="read-more">
        <router-link :to="basePath || '/news/'">More <v-icon name="arrow-circle-right" style="margin-bottom: -2px"/></router-link>
      </div>
    </div>
  </main>
</template>


<script>
import moment from "moment"
import "vue-awesome/icons/bullhorn"
import "vue-awesome/icons/arrow-circle-right"
import "vue-awesome/icons/quote-left"

export default {
  props: {
    text: Object,
    basePath: String,
    pages: Array
  },

  computed: {
    newsPosts() {
      const newsPages = this.pages.filter(p => p.path.match(`^${this.basePath}(?!page/).+$`) !== null)
      return newsPages
        .sort((a, b) => (new Date(b.frontmatter.date)) - (new Date(a.frontmatter.date)))
        .map(page => ({
          title: page.title,
          path: page.path,
          author: page.frontmatter.author,
          date: page.frontmatter.date ? moment(page.frontmatter.date).fromNow() : null
        }))
        .slice(0, 5)
    }
  }
}
</script>


<style lang="stylus" scoped>

.news-panel
  padding 0

  h3
    padding 1rem 0.5rem
    margin 0
    border-bottom 2px solid $accentColor
  
  .panel-content
    padding 0.5rem 0 1rem 2rem

    .meta
      font-style italic
      color lighten($textColor, 20%)

    ul
      margin 0
      line-height 1.5
      padding-left 0
      list-style-type none

      li
        padding 0.5rem 0
        border-bottom 1px solid alpha($textColor, 10%)

        .quote-icon
          margin-left -1.5rem
        
        .news-title
          color $textColor

          &:hover
            color $accentColor

.read-more
  padding 1rem 0 0 0
  text-align right

</style>

