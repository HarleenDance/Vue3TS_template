<template>
  <div class="ty-popup">
    <van-popup v-model:show="modelValue"  position="bottom">
      <div class="showColumnCss">
        
        <van-datetime-picker
          v-model="currentDate"
          :type="type" 
          :max-date="maxDate"
          visible-item-count="5"
          toolbar-position="bottom"
            @confirm="onConfirm" 
            :formatter="formatter"
          >
          <template #columns-top>
           <div  class="flex item-title">{{ title }}</div> 
          </template>
            <template #confirm>
              <div class="flex btnPickColumn" >确定</div>
            </template>
        </van-datetime-picker>
      </div>
    </van-popup>
  </div>
</template>
<script lang="ts">
import { areaList } from '@vant/area-data';
import { defineComponent, computed,ref} from "vue"; 
import  formTool from  "@/utils/formTool.js"

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "datetime"
    },
    title: {
      type: String,
      default: "请选择日期"
    },
    columnsNum: {
      type: Number,
      default: 2
    },
    areaList: {
      type: Array,
      default: []
    }
  },
    emits: ["update:show","onConfirm"],
  setup(props,ctx) {
      const currentDate = ref(new Date()); 
      const maxDate = ref(new Date()); 
      const modelValue = computed({
          get: () => props.show,
          set: (val) => {
            ctx.emit("update:show", val);
          },
        });
      const onConfirm = (date) => { 
          ctx.emit("onConfirm",formTool.dateFormat(date)) 
      };
    return { areaList,onConfirm,modelValue,currentDate,maxDate};
  }
})
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