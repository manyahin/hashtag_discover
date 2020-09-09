<template>
  <section class="section">
    <h4 class="subtitle is-4">Stream is running</h4>
    <div v-if="loading">
      <TweetSkeleton v-for="(item, index) in [1,2]" :key="index" :tweet="tweet"></TweetSkeleton>
    </div>
    <ul v-else>
      <li v-for="tweet in tweets" :key="tweet.id">
        <Tweet :tweet="tweet"></Tweet>
      </li>
    </ul>
  </section>
</template>

<script>
import TweetSkeleton from "./TweetSkeleton";
import Tweet from "./Tweet";

export default {
  props: {
    tweets: Array,
  },
  data() {
    return {
      loading: true,
    };
  },
  components: {
    Tweet,
    TweetSkeleton,
  },
};
</script>