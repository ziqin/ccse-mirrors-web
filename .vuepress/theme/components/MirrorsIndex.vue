<template>
  <main>
    <h2>
      <v-icon name="th-list" scale="1.25"/>&nbsp;
      {{ title || "Index of Mirrors" }}
    </h2>
    <div v-if="isLoading" id="loading-container">
      <v-icon name="spinner" scale="2.5" spin/>
    </div>
    <table v-else>
      <thead>
        <tr>
          <th>
            Name
            <div id="filter" :class="{ focusing: isFocusingFilter }">
              <input
                v-model="searchKey"
                :placeholder="searchPlaceHolder"
                @focus="isFocusingFilter = true"
                @blur="isFocusingFilter = false"
              />
              <v-icon name="search" scale="0.9" id="search-icon"/>
            </div>
          </th>
          <th>Last Updated</th>
          <th>Status</th>
          <th>Files</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="mirror in mirrors"
          :class="{
            working: mirror.alert === 'info',
            problematic: mirror.alert === 'warn' || mirror.alert === 'error'
          }"
        >
          <td>
            <router-link :to="`/help/${mirror.name}.html`">{{ mirror.name }}</router-link>
          </td>
          <td>{{ mirror.lastUpdated }}</td>
          <td>
            <Badge v-if="mirror.alert !== null" :type="mirror.alert" vertical="middle">
              {{ mirror.status }}
            </Badge>
          </td>
          <td>
            <a :href="`/${mirror.name}/`"><v-icon name="folder-open"/></a>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>


<script>
import { setInterval } from "timers"
import * as data from "../util/tunasyncAdapter"
import "vue-awesome/icons/th-list"
import "vue-awesome/icons/folder-open"
import "vue-awesome/icons/search"
import "vue-awesome/icons/spinner"

export default {
  props: {
    title: String
  },

  data() {
    return {
      jobsRawData: [],
      isLoading: true,
      isFocusingFilter: false,
      searchKey: ""
    }
  },

  computed: {
    mirrors() {
      var jobsRawData
      if (this.searchKey === "") {
        jobsRawData = this.jobsRawData
      } else {
        jobsRawData = this.jobsRawData.filter(j => data.doesJobMatch(j, this.searchKey))
      }
      return jobsRawData.map(j => data.job2Mirror(j))
    },

    searchPlaceHolder() {
      return this.isFocusingFilter ? "" : "Search"
    }
  },

  methods: {
    updateMirrors() {
      fetch(data.apiEndpoint)
        .then(resp => {
          if (resp.status === 200) {
            this.isLoading = false
            resp.json().then(data => this.jobsRawData = data)
          } else {
            console.error("Failed to load mirror jobsRawData. Status code: " + resp.status)
          }
        })
        .catch(err => console.error(err))
    }
  },

  mounted() {
    this.updateMirrors()
    setInterval(() => this.updateMirrors(), 120000)  // 2 minutes
  }
}
</script>


<style lang="stylus" scoped>

$sustechOrange = #ed6c00
$sustechGreen = #2bb7b3

h2
  border none
  margin-bottom 0

#loading-container
  width 100%
  text-align center

  svg
    margin 4rem

table
  table-layout fixed
  border-spacing 0
  display table
  width 100%
  margin-top 0.5rem
  
  thead tr
    border-top none
    border-bottom 2px solid $accentColor

  tbody tr
    border none

    &.working
      background-color lighten($sustechGreen, 85%)

    &.problematic
      background-color lighten($sustechOrange, 90%)

    &:hover
      background-color lighten($sustechGreen, 65%)

  thead th, tbody td
    text-align left
    border none

    &:nth-child(1)
      width 42%

    &:nth-child(2)
      width 35%
    
    &:nth-child(3)
      width 13%

    &:nth-child(4)
      width 10%
      text-align center
    
  tbody td
    &:nth-child(1) a, &:nth-child(4) a
      color lighten($textColor, 15%)

#filter
  float right
  height 1.5rem
  padding 0 0.75rem
  border-radius 0.75rem
  transition background-color 0.25s

  @media (max-width: $MQMobile)
    display none

  &.focusing
    background-color alpha($textColor, 7%)

  input
    border none
    background none
    margin 0
    width 2.5rem
    transition width 0.25s

    &:focus
      width 6rem

  #search-icon
    margin 0 0 -3px 0.25rem

</style>
