<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">🌎 Hashtag Discover</h1>
        <h2 class="subtitle">via Twitter API v2</h2>
        <b-field :message="hashtagInputMessage" :type="hashtagInputType">
          <b-input
            placeholder="hashtag name"
            type="search"
            icon="hashtag"
            icon-pack="fas"
            v-model="hashtag"
            @input="updateSearch"
            :expanded="true"
          ></b-input>
          <p class="control">
            <b-button type="is-primary" @click="discover">Discover!</b-button>
          </p>
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      hashtag: "",
      hashtagInputMessage: "Search for something interesting!",
      hashtagInputType: "",
    };
  },
  methods: {
    discover() {
      if (!this.hashtag.length) {
        this.hashtagInputMessage = "Hashtag name is empty :(";
        this.hashtagInputType = "is-danger";
        return;
      }
      if (this.hashtag[0] === "#") this.hashtag = this.hashtag.slice(1);

      this.$emit("getHashtag", this.hashtag);
    },
    updateSearch() {
      this.hashtagInputMessage = "";
      this.hashtagInputType = "";
    },
  },
};
</script>

<style scoped>
</style>