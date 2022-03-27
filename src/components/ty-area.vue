<template>
  <div class="ty-popup">
    <van-popup v-model:show="show" position="bottom">
      <div class="showColumnCss">
        <van-area
          :title="title"
          show-toolbar
          :area-list="areaList"
          :default-index="2"
          :columns-num="columnsNum"
          visible-item-count="5" 
          @change="onChange"
        >
          <template #columns-bottom>
            <div class="flex btnColumn" @click="onConfirm">确定</div>
          </template>
        </van-area>
      </div>
    </van-popup>
  </div>
</template>
<script lang="ts">
import { areaList } from '@vant/area-data';
import { ref } from "vue";
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "请选择"
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
  setup(props, ctx) {
    const selectValue = ref() 
    const onChange = (value, index) => {
      selectValue.value = value
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('—');
    };

    const onConfirm = () => {
      //默认文本值
      if(!selectValue.value){ 
         selectValue.value = "北京市—北京市"
      }
      ctx.emit("onConfirm", selectValue)
    };
    return { areaList, onChange, onConfirm, selectValue };
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/css/popup.scss";
</style>