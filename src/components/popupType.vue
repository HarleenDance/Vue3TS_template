<template>
  <div class="ty-popup">
    <van-popup v-model:show="show" position="bottom">
      <div class="showColumnCss">
           <div class="flex item-title">{{title}}</div>
            <div class="row-item" >
                <div class="flex column-item" v-for="item in List" :key="item" @click="onConfirm(item)">
                    {{item.name}}
                </div>
            </div>  
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts"> 
import { ref } from "vue";
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }, 
    title: {
      type: String,
      default: "请选择类型"
    },
    List: {
      type: Array,
      default: []
    }
  },
  setup(props,ctx) {
    const onConfirm = (val) => { 
        ctx.emit("onConfirm",val) 
    };
    return { onConfirm};
  }
}
</script>
<style lang="scss" scoped>
    @import "../assets/css/popup.scss";
    :deep.ty-popup {
        .van-popup{
            overflow: hidden;
            height: 695px;
        }
        .row-item{
            height:calc(695px - 190px);
            overflow-y: auto;
        }
    }
</style>