<template>
   <van-field v-model="modelValue"   v-bind="formItem.props" :label="formItem.label"  v-on="formItem.eventObject"/>
</template>
<script lang="ts">
import { defineComponent,computed} from 'vue'

export default defineComponent({
  name: 'SchemaFormInput',
  props: {
    formItem: {
      // 表单项
      type: Object,
      default: () => ({})
    },
    value: null  // 表单项值
  },
  emits: ['update:value'],
  setup(props, { attrs, emit }) {
    const modelValue = computed({
      get: () => props.value,
      set: (val) => {
        emit('update:value', val)
      }
    })
    return {
      modelValue
    }
  }
})
</script>
