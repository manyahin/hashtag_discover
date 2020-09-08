<template>
  <div id="app" class="container is-fluid">
    
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <!-- <Twitter></Twitter> -->
    <SearchHashtag v-if="!hashtag" @getHashtag="getHashtag"></SearchHashtag>
    <div v-else>
      list of tweets
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Twitter from './components/Twitter.vue'
import SearchHashtag from './components/SearchHashtag.vue'

export default {
  name: 'App',
  data () {
    return {
      hashtag: ''
    }
  },
  components: {
    // HelloWorld,
    // Twitter,
    SearchHashtag
  },
  methods: {
    getHashtag (hashtag) {
      this.hashtag = hashtag
      console.log(this.hashtag)
    } 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
