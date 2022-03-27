<template>
  <van-field readonly  v-model="modelValue"   :rules="formItem.rules"
    v-bind="formItem.props" :label="formItem.label" @click="onShowPicker"> 
     
    <template #button>
      <span>选择</span>
    </template>
  </van-field>

      <DatetimePicker  v-model:show="showPicker" @onConfirm="onConfirm"  
        v-on="formItem.eventObject">
      </DatetimePicker>

</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import DatetimePicker from "@/components/ty-datetimePicker.vue" 
export default defineComponent({
  components: {
    DatetimePicker
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
      onShowPicker,
      showPicker,
      onConfirm
    };
  }
});
</script>  