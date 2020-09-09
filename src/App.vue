<template>
  <div id="app" class="container is-fluid">
    <Header></Header>
    <transition name="fade" mode="out-in">
      <Search v-if="!hashtag" @newHashtag="getData"></Search>
      <div v-else>
        <a href="#" @click="hashtag = ''">Back to search</a>
        <Results :loading="loading" :images="items"></Results>
      </div>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Header from "./components/Header.vue";
import Results from "./components/imgur/Results.vue";
import Footer from "./components/Footer.vue";

import Imgur from "./services/Imgur";

import config from "./config";

const imgurClientId = config.imgur.clientId;
const imgur = new Imgur(imgurClientId);

export default {
  name: "App",
  data() {
    return {
      hashtag: "",
      items: [],
      loading: false,
    };
  },
  components: {
    Search,
    Results,
    Footer,
    Header,
  },
  methods: {
    async getData(hashtag) {
      this.items = [];
      this.hashtag = hashtag;
      this.loading = true;

      const data = await imgur.findImagesByTag(this.hashtag);

      this.items = data.data.items;
      this.loading = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 700px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
