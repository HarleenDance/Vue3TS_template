<template>
  <van-field
    v-model="modelValue"
    readonly
    name="picker"
    label="选择器"
    placeholder="点击选择城市"
    @click="showPicker = true"
  >
    <template #button>
      <span>选择</span>
    </template>
  </van-field> 
  <Area v-model:show="showPicker" @onConfirm="onConfirm"  :columns="formItem.list" v-on="formItem.eventObject" :title="'请选择地市'"></Area> 



</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import Area from "@/components/ty-area.vue"
export default defineComponent({
  name: "SchemaFormInput",
  props: {
    formItem: {
      // 表单项
      type: Object,
      default: () => ({}),
    },
    value: null, // 表单项值
  },
  components:{
    Area
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


    const onConfirm = (value) => {

      modelValue.value = value;
      showPicker.value = false;
    };
    return {
      modelValue,
      onConfirm,
      showPicker,
    };
  },
});
</script>
