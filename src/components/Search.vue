<template>
  <section class="section search">
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
  </section>
</template>

<script>
// todo: enter handle
export default {
  name: "Search",
  data() {
    return {
      hashtag: "",
      hashtagInputMessage: "Search for something interesting like #sport, #jokes or #animals!",
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

      this.$emit("newHashtag", this.hashtag);
    },
    updateSearch() {
      this.hashtagInputMessage = "";
      this.hashtagInputType = "";
    },
  },
};
</script>

<style scoped>
.search {
  min-height: 13em;
}
</style>