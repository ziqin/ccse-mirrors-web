<template>
  <main class="home-page">
    
    <div class="content-container">

      <div class="main-content">
        <MirrorsIndex class="mirrors-index" title="Index of Mirrors"/>
      </div>

      <div class="right-sidebar">
      </div>

    </div>

    <!-- <Content class="theme-default-content"/> -->

    <footer class="foot">
      Supported by SUSTech Center for Computational Science and Engineering
    </footer>
  </main>
</template>

<script>
import MirrorsIndex from '@theme/components/MirrorsIndex.vue'

export default {
  components: { MirrorsIndex },

  props: ['sidebarItems'],

  computed: {
  },

  methods: {
  }
}
</script>


<style lang="stylus" scoped>
@require '../styles/wrapper.styl'

$MQMedium = 1279px

.home-page
  padding-bottom 2rem
  display block

.content-container
  display flex
  flex-flow row wrap
  margin $navbarHeight auto 0 auto
  padding 2rem
  max-width 72rem

.main-content
  width 46rem

.right-sidebar
  width 22rem
  margin-left 2rem

@media (max-width: $MQMedium)
  .content-container
    max-width 56rem
  .main-content
    width 38rem
  .right-sidebar
    width 16rem

@media (max-width: $MQNarrow)
  .content-container
    max-width 45rem
    padding 1rem
  .main-content
    width 100%
  .right-sidebar
    margin-left 0
    width 100%

.mirrors-index
  width 100%

.foot
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem

</style>
