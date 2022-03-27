<template>
  <div class="user-box">
      123
  </div>
</template>

<script lang="ts">
import {
  reactive,
  onMounted,
  toRefs,
  defineComponent,
} from "vue";

export default defineComponent({
  components: {
  },
  setup() {
    const state = reactive({
      
    })
    onMounted(async () => {
      
    });
    return {
      ...toRefs(state),
    };
  },
})
</script>

<style lang="scss" scoped>

</style>
