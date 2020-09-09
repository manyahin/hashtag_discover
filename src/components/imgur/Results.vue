<template>
  <section class="section">
    <div v-if="loading">
      <Skeleton></Skeleton>
    </div>
    <div class="tile is-ancestor" v-else>
      <div class="tile is-12 is-vertical">
        <div class="tile box" v-if="images.length == 0">
          No images found by this hashtagh :( Try another one
        </div>
        <div class="tile" v-else v-for="image in images" :key="image.id">
          <Preview :image="image"></Preview>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Skeleton from "./Skeleton";
import Preview from "./Preview";

export default {
  props: {
    images: Array,
    loading: Boolean
  },
  components: {
    Preview,
    Skeleton,
  },
};
</script>