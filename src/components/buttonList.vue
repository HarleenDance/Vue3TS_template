<template>
    <div class="flex-row">
        <div v-for="item in List" :key="item" :class="['btnGraySize',{'btnActive':item.checked}]" @click="onConfirm(item)">
            {{item.name}}
        </div>
    </div>
</template>
<script lang="ts"> 
import { ref } from "vue";
export default {
  props: {
    List: {
      type: Array,
      default: []
    }
  },
  setup(props,ctx) {
    const onConfirm = (val) => {
        props.List.forEach((element:any) => {
            element.checked=false
        });
        
        val.checked=!val.checked;
        ctx.emit("onConfirm",val) 
    };
    return { onConfirm};
  }
}
</script>
<style lang="scss" scoped>
  .btnGraySize {
    height: 54px;
    @include sc($ft-26,$gray-6);
    border-radius: 27px;
    background: #FAFAFA;
    border: 1px solid #EBEBEB;  
    align-items: center;
    justify-content: center;
    display: flex;
    flex-basis: 148px;
    flex-shrink: 0;
    white-space: nowrap;
  }
   .flex-row {
    display: flex;
    overflow-x: auto;
    padding-bottom: $ft-30;
    padding-bottom: 20px;
    div:not(:first-child){
        margin-left: 16px;
    }
  }
   
  .btnActive {
    color: $main-color;
    background: rgba(66, 147, 244, 0.1);
    border-radius: 27px;
    border: 1px solid $main-color;
  }
</style>