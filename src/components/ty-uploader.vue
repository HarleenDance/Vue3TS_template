<template>
  <van-uploader
    class="uploader"
    accept="image/*"
    multiple
    :max-count="maxCount"
    :before-read="beforeRead"
    v-model="modelValue"
  >
    <div>
        <img src="../assets/images/add.png"/>
    </div>
  </van-uploader>
</template>
<script lang="ts">
import Compressor from 'compressorjs';
import {computed} from "vue";
export default {
  props: {
    maxCount: {
      type: Number,
      default: 1
    },
    value:{
      type: Array,
      default:[]
    }
  },
  setup(props, ctx) {
      const modelValue = computed(() => {
         return props.value;
    })
       const beforeRead = (file) =>
      new Promise((resolve) => {
        // compressorjs 默认开启 checkOrientation 选项
        // 会将图片修正为正确方向
        new Compressor(file, {
          quality: 0.6,
          success:resolve,
          error(err) {
            console.log(err.message);
          }
        });

        // base64转Blob
      const  dataURLtoBlob=(dataurl)=>{
            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        }
      });
    return {
      beforeRead,
      modelValue
    };
  }
}
</script>
<style lang="scss" scoped>
:deep.uploader {
  width: 144px;
  height: 144px;
  background: $bg-color;
  border-radius: 8px;
  border: 1px solid #ebebeb;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 50px;
  .van-uploader__upload {
    background: $bg-color;
  }
  .van-uploader__wrapper{
      background: $bg-color;
  }
  .van-icon-plus {
    color: $main-color;
  }
  .van-uploader__preview-delete{
          top:-8px;
          right: -8px;
          width: 34px;
          height: 34px;
          border-radius: inherit;
          background-size: cover !important;
          background:url("../assets/images/close.png");
      .van-icon-cross:before{
          content:"";
      }
  }
}
</style>