<template>
  <div class="ty-popup">
    <van-popup v-model:show="modelValue" position="bottom">
      <div class="showColumnCss">
        
          <van-picker
            :columns="columns"
            toolbar-position="bottom"
            @confirm="onConfirm" 
          >
           <template #columns-top>
           <div  class="flex item-title">{{ title }}</div> 
          </template>
            <template #confirm>
              <div class="flex btnPickColumn" >确定</div>
            </template>
          </van-picker> 
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "请选择"
    },
    columns: {
      type: Array,
      default: []
    }
  },
   emits: ["update:show","onConfirm"],
  setup(props, ctx) {
     const modelValue = computed({
      get: () => props.show,
      set: (val) => {
        ctx.emit("update:show", val);
      },
    });
    const onConfirm = (result) => {  
         ctx.emit("onConfirm", result);
    }; 
    return { onConfirm ,modelValue};
  }
});
</script>
<style lang="scss" scoped>
@import "../assets/css/popup.scss";
:deep.ty-popup {
  .van-picker__confirm {
    width: 100%;
    z-index:9;
    display: block !important;
  }
}
</style>