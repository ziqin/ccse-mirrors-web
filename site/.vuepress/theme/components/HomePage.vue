<template>
  <main id="home-page">
    <div class="content-container">
      <div class="main-content">
        <MirrorsIndex class="mirrors-index" title="Index of Mirrors"/>
      </div>
      <div class="right-sidebar">
        <NewsPanel :pages="pages" basePath="/news/"/>
      </div>
    </div>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-left">
          <Content/>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
import MirrorsIndex from '@theme/components/MirrorsIndex.vue'
import NewsPanel from '@theme/components/NewsPanel.vue'

export default {
  components: { MirrorsIndex, NewsPanel },
  props: ['sidebarItems', 'pages']
}
</script>


<style lang="stylus" scoped>
$MQMedium = 1279px

$wideWrapper
  max-width 72rem
  margin 0 auto
  padding 2rem 2.5rem
  @media (max-width: $MQMedium)
    max-width 56rem
  @media (max-width: $MQNarrow)
    max-width 45rem
    padding 1.5rem

$leftWrapper
  width 44rem
  @media (max-width: $MQMedium)
    width 38rem
  @media (max-width: $MQNarrow)
    width 100%

$rightWrapper
  width 22rem
  margin-left 4rem
  @media (max-width: $MQMedium)
    width 16rem
    margin-left 2rem
  @media (max-width: $MQNarrow)
    margin-left 0
    width 100%

#home-page
  display block
  position relative
  min-height 100vh

.content-container
  @extend $wideWrapper
  display flex
  flex-flow row wrap
  margin-top $navbarHeight
  padding-bottom ($footerHeight + 2.5rem)

.main-content
  @extend $leftWrapper

.right-sidebar
  @extend $rightWrapper
  padding 3.25rem 0 2rem 0
  @media (max-width: $MQNarrow)
    padding 0

.mirrors-index
  width 100%

.footer
  position absolute
  bottom 0
  width 100%
  height $footerHeight
  background-color $sustechDark

.footer-container
  @extend $wideWrapper
  color lighten($sustechGreen, 80%)

.footer-left
  @extend $leftWrapper
  padding 0.5rem 0
</style>
