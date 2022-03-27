<template>
  <van-tabs v-model:active="active" @click-tab="onClickTab">
    <van-tab v-for="item in tabs" :title="item" :key="item"></van-tab>
  </van-tabs>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "tab",
  components: {},
  props: {
    tabs: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  emits: ["click"],
  setup(props, ctx) {
    const active = ref(0);
    const onClickTab = ({ name, title }) => {
      ctx.emit("click", { name, title });
    };
    return {
      active,
      onClickTab,
    };
  },
});
</script>

<style lang="scss">
:root {
  --van-tabs-line-height: 98px;
  --van-tab-active-text-color: $main-color;
  --van-tabs-bottom-bar-color: $main-color;
  --van-tab-font-size: 36px;
  --van-tabs-bottom-bar-width: 106px;
}
</style>
