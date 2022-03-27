<template>
  <div>
    <header-bar :title="$route.meta.title" v-if="!$route.meta.hideHeader"> 
      <template #right> 
      </template>
    </header-bar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderBar from "./HeaderBar.vue";
export default {
  props: {},
  components: {
    HeaderBar
  },
};
</script>

<style scoped lang="scss">
.content {
  padding-top: 110px;
}
</style>
