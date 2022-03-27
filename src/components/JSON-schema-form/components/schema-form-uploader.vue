<template>
  <van-field class="fieldUploader"  name="uploader" > 
     
    <template #input>
      
      <Title :title="formItem.title"></Title>
      <uploader
        v-model="modelValue"
        v-on="formItem.eventObject"
      >
      </uploader>
    </template>
  </van-field>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import uploader from "@/components/ty-uploader.vue"
import Title from "@/components/ty-title.vue"
export default defineComponent({
  components: {
    uploader,
    Title
  },
  props: {
    formItem: {
      // 表单项
      type: Object,
      default: () => ({}),
    },
    value: null, // 表单项值
  },
  emits: ["update:value"],
  setup(props, { attrs, emit }) {
    const modelValue = computed({
      get: () => props.value,
      set: (val) => {
        emit("update:value", val);
      },
    });

    return {
      modelValue
    };
  }
});
</script> 

<style lang="scss" scoped>
:deep.fieldUploader{
  .van-field__control--custom{
    align-items: flex-start;
    flex-direction: column;
  }
  

    .v-title { 
    margin-top: 20px; 
  }
}
</style>