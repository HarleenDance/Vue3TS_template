<template>
  <van-field name="checkbox"  >
    <template #input>
      <Checkbox
        v-model="modelValue"
        v-bind="formItem"
        v-on="formItem.eventObject"
      />
    </template>
  </van-field>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import Checkbox from "@/components/ty-checkbox.vue";

export default defineComponent({
  name: "SchemaFormInput",
  components: {
    Checkbox
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
