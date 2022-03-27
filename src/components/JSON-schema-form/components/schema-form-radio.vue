<template>
  <van-field name="radio" >
    <template #input>
      <Radio
        v-model="modelValue"
        v-bind="formItem"
        v-on="formItem.eventObject"
      />
    </template>
  </van-field>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import Radio from "@/components/ty-radio.vue";

export default defineComponent({
  name: "SchemaFormInput",
  components: {
    Radio,
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
      modelValue,
    };
  },
});
</script>
