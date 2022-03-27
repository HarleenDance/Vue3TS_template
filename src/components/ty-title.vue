<template>
  <div class="v-title">
    {{ title }}
  </div>
</template>
<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}
</script>
<style lang="scss" scoped>
.v-title {
  line-height: $lh-66;
  margin-top: 50px;
  margin-bottom: $ft-30;
  @include sc($ft-48, $gray-0);
}
</style>