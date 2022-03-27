<template>
  <van-field
    v-model="modelValue"
    readonly
    name="picker"
    :label="formItem.label"
    :rules="formItem.rules"
   v-bind="formItem.props" 
    @click="onShowPicker"
  >
    <template #button>
      <span >选择</span>
    </template>
  </van-field>
  <picker v-model:show="showPicker" @onConfirm="onConfirm"  :columns="formItem.list" v-on="formItem.eventObject" :title="'请选择地市'">

  </picker>
   
  

</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue"; 
import picker from "@/components/ty-picker.vue"
export default defineComponent({
  name: "SchemaFormInput",
  components:{
    picker
  },
  props: {
    formItem: {
      // 表单项
      type: Object,
      default: () => ({}),
    },
    value: null // 表单项值
  }, 
  emits: ["update:value"],
  setup(props, { attrs, emit }) {
    const showPicker = ref(false);
    const modelValue = computed({
      get: () => props.value,
      set: (val) => {
        emit("update:value", val); 
      },
    }); 
    const onShowPicker = (value) => {
      showPicker.value = true;
    };

    const onConfirm = (value) => { 
      modelValue.value = value;
      showPicker.value = false;
    };
    return {
      modelValue,
      onConfirm,
      showPicker,
      onShowPicker
    };
  },
});
</script> 