<template>
  <div class="box preview">
    <b-image :src="image.images[0].link || image.images[0].gifv" :alt="image.title">
      <b-skeleton class="skeleton-placeholder" slot="placeholder" height="100%"></b-skeleton>
    </b-image>
    <div class="desctiption">
      <strong>Title:</strong>
      {{ image.title }}
      <br />
      <strong>Tags:</strong>
      {{ image.tags.map(t => `#${t.name}`).join(' ') }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: Object,
  },
};
</script>

<style scoped>
.preview {
  text-align: left;
  margin-bottom: 2em;
}
.desctiption {
  margin-top: 1em;
}
</style>