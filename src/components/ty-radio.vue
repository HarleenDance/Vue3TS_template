<template>
  <van-radio-group v-model="checked" class="ty-radio" :direction="'horizontal'"> 
    <van-radio :name="item.value" v-for="item in list" :key="item" v-show="!item.hidden">
      {{ item.name }}
      <template #icon="props">
        <img
          class="img-icon"
          :src="props.checked ? activeIcon : inactiveIcon"
        />
      </template>
    </van-radio>
  </van-radio-group>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "radio",
  components: {},
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
    value: null
  },
  emits: ["update:value"],
  setup(props, { attrs, emit }) {
     const checked = computed({
      get: () => props.value,
      set: (val) => {
        emit("update:value", val);
      },
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
:deep.ty-radio {
  .van-radio:first-child {
    margin-right: 50px;
  }
  .van-radio__label {
    font-size: 36px;
  }
}
.img-icon {
  height: 40px;
}
</style>
