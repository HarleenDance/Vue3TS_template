<template>
  <van-checkbox-group
    v-model="checked"
    class="ty-checkbox"
    :direction="'horizontal'"  
  >
    <van-checkbox :name="item.value" v-for="item in list" :key="item"  v-show="!item.hidden">
      <template #icon >
        {{ item.name }}
      </template>
    </van-checkbox>
  </van-checkbox-group>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "checkbox",
  components: {},
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
    value: {
      type: String
    }
  },
  emits: [],
  setup(props, ctx) {
    const checked = computed(() => {
      return props.value;
    });
    return {
      checked,
      activeIcon: require("@/assets/images/rdoselect.png"),
      inactiveIcon: require("@/assets/images/rdo.png"),
    };
  },
});
</script>

<style lang="scss" scoped>
:deep.ty-checkbox {
  .van-checkbox__icon {
    @include wh(335px, 80px);
    @include sc($ft-36, $gray-6);
    line-height: 80px;
    display: inline-block;
    text-align: center;
    border: 1px solid $border-color;
    border-radius: 8px;
    box-sizing: border-box;
  }
  .van-checkbox__icon--checked {
    background-image: url("../assets/images/select.png");
    background-repeat: no-repeat;
    background-position-y: 20px;
    background-position-x: right;
    border-color: $main-color;
    color: $main-color;
  }
  .van-checkbox--horizontal:nth-child(odd) {
    margin-right: 20px;
  }
  .van-checkbox--horizontal:nth-child(even) {
    margin-right: 0;
  }
  .van-checkbox {
    margin-bottom: 20px;
  }
}
</style>
