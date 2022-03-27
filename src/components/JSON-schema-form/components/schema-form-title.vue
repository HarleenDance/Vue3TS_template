<template>
  <div class="v-title">
    {{ formItem.title }}
  </div>
</template>
<script lang="ts">
export default {
   props: {
    formItem: {
      // 表单项
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
<style lang="scss" scoped>
.v-title {
  line-height: $lh-66;
  margin-top: 50px;
  margin-left: $ft-30; 
  @include sc($ft-48, $gray-0);
}
</style>