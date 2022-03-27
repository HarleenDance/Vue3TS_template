<template>
  <van-search
    class="ty-search"
    v-model="value"
    :placeholder="placeholder"
    @search="onSearch"
    @update:model-value="onSearch"
    @cancel="onCancel"
    @clear="onCancel"
    :show-action="showAction"
    @focus="showAction = true" 
  >
    <template #left-icon>
      <img src="@/assets/images/search.png" class="img" alt="" />
    </template>
  </van-search>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "tab",
  components: {},
  props: {
    placeholder:{
      type:String,
      default:"点击进行搜索"
    }
  },
  emits: ["search"],
  setup(props, ctx) {
    const showAction = ref(false);
    const value = ref("");
    const onSearch = (val) => {
      ctx.emit('search',val)
    };
    const onCancel = () => {
      value.value = ''
      showAction.value = false
      ctx.emit('search','')
    };
    return {
      value,
      showAction,
      onSearch,
      onCancel,
    };
  },
});
</script>

<style lang="scss" scoped>
:deep.ty-search {
  .img {
    @include wh(31px, 32px);
    vertical-align: middle;
  }
  .van-search__field {
    align-items: center;
  } 
  .van-search__content {
    height: 72px;
    background: #FAFAFA;
    border-radius: 8px;
    border: 1px solid $border-color;
  }
  .van-search__field .van-field__left-icon {
    margin-right: 20px;
  }
  .van-field__control {
    height: 72px;
    line-height: 72px;
    font-size: 32px;
  }
}
</style>
<style lang="scss">
:root {
  --van-search-background-color: #fff;
  --van-search-content-background-color: #fafafa;
  --van-search-padding: 20px 30px;
  --van-search-action-text-color: #4293f4;
  --van-search-action-padding: 0 30px;
}
</style>
