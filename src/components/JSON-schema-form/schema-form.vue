<template>
  <van-form ref="schemaFormRef">
    <template
      v-for="(formItem, index) in formSchema.formItem.filter(
        (item) => !item.hidden
      )"
      :key="formItem.field"
    >
      <component
        :is="getComponent(formItem.type)"
        v-model:value="modelRef[formItem.field]"
       v-bind="{ ...formItem.props,label:formItem.label,rules: formItem.rules,formItem:formItem}" 
      />
    </template>
    <template v-if="$slots['operate-button']">
      <div class="padding-lr-30">
        <slot name="operate-button"> </slot>
      </div>
    </template>
  </van-form>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  getCurrentInstance,
  isReactive,
  ref,
  isRef,
  createVNode, 
  toRefs,
} from "vue";
import { isString, isFunction, isAsyncFunction } from "@/utils/is";
import components from "./components";

export default defineComponent({
  name: "DynamicForm",
  components: {
    ...components,
  },
  props: {
    formSchema: {
      // 动态验证表单
      required: true,
      type: Object,
    },
    fields: {
      // 预置字段默认值
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["update:value"],
  setup(props, { attrs, emit, slots }) {
    const state = reactive({
      value: "",
      groupChecked: [] 
    });
    // a-form
    const schemaFormRef = ref();
    // 表单实例
    const formInstance = getCurrentInstance();
 
    // 表单项
    const modelRef = reactive(
      props.formSchema.formItem.reduce((previousValue, currentValue) => {
        currentValue.eventObject ??= {};
        //标题不赋值
        if(currentValue.type!="title"){
          previousValue[currentValue.field] = currentValue.value;
        }
        return previousValue;
      }, {})
    );
    // 如果有默认值，则覆盖
    props.fields && Object.assign(modelRef, props.fields);

    // 异步设置默认数据
    props.formSchema.formItem.forEach(async (item) => {
      
      // 是否需要loading
      if (Object.prototype.hasOwnProperty.call(item, "loading")) {
        item.loading = true;
      }
      // 异步选项
      if (isFunction(item.asyncOptions) || isAsyncFunction(item.asyncOptions)) { 
        // item.options = await item
        //   .asyncOptions(item, formInstance)
        //   .finally(() => (item.loading = false));
        item.list = item.asyncOptions(item, formInstance)
      } else if (
        isFunction(item.asyncValue) ||
        isAsyncFunction(item.asyncValue)
      ) {
        // 异步默认值
        modelRef[item.field] = await item
          .asyncValue(item, formInstance)
          .finally(() => (item.loading = false));
      }
    });

    // 生成表单验证规则
    const rulesRef = reactive(
      props.formSchema.formItem
        .filter(item => !item.hidden)
        .reduce((previousValue, currentValue) => {
          currentValue.rules &&
            (previousValue[currentValue.field] = currentValue.rules);
          return previousValue;
        }, {}) 
    );

    console.log(modelRef, "表单");
    console.log(rulesRef, "表单验证规则");

    // const watchCallback = props.formSchema.watchCallback ?? (() => ({}))
    //
    // // 是否有需要监测的字段
    // props.formSchema.watchKeys && watch(props.formSchema.watchKeys.map(item => () => modelRef[item]), (curr, prev) => watchCallback(curr, {
    //   dynamicForm: props.formSchema,
    //   modelRef
    // }))
    // watch(props.formSchema.watchKeys.map(item => () => modelRef[item]), eval(props.formSchema.watchCallback))

    const preset = [
      "input",
      "textarea",
      "select",
      "radio",
      "checkbox",
      "input-number",
      "input-range",
      "switch",
      "wangEditor",
      "picker",
      "uploader",
      "area",
      "datetimePicker",
      "title"
    ];

    // 获取组件名称
    const getComponent = (type) => {
      // 预设组件
      if (preset.includes(type)) {
        return "schema-form-" + type;
      } else if (isReactive(type) || isRef(type)) {
        // 自定义组件
        return createVNode(type);
      } else {
        // 不识别组件
        return type;
      }
    };

    // 设置触发表单项验证的事件
    const setTriggerEvent =
      ({ field, trigger }) =>
        () => {
          schemaFormRef.value.validate(field, { trigger }).catch(() => ({}));
        };

    // 获取触发表单项验证的时机
    const getTriggerEvent = (formItem) => {
      const events = {};
      const field = formItem.field;
      if (Array.isArray(formItem.rules)) {
        // 如果是数组
        formItem.rules.forEach((ruleItem) => {
          if (Array.isArray(ruleItem.trigger)) {
            ruleItem.trigger.forEach(
              (triggerItem) =>
              (events[triggerItem] = setTriggerEvent({
                field,
                trigger: triggerItem,
              }))
            );
          } else if (isString(ruleItem.trigger)) {
            events[ruleItem.trigger] = setTriggerEvent({
              field,
              trigger: ruleItem.trigger,
            });
          }
        });
      } else if (formItem.rules?.trigger) {
        // 如果是对象
        const trigger = formItem.rules?.trigger;
        events[trigger] = setTriggerEvent({ field, trigger });
        if (Array.isArray(trigger)) {
          trigger.forEach(
            (triggerItem) =>
            (events[triggerItem] = setTriggerEvent({
              field,
              trigger: triggerItem,
            }))
          );
        } else if (isString(trigger)) {
          events[trigger] = setTriggerEvent({ field, trigger: trigger });
        }
      }
      return events;
    };

    return {
      ...toRefs(state),
      modelRef,
      schemaFormRef,
      getTriggerEvent,
      getComponent,
    };
  },
});
</script>

<style lang="scss" scoped>
:deep(.van-cell) {
  background: $bg-color;
  flex-direction: column;
  padding: $ft-30;
  .van-cell__title {
    @include sc($ft-30, #020202);
    height: 40px;
    line-height: 40px;
  }
  .van-cell__value {
    font-size: 36px;
    height: 48px;
    line-height: 48px;
    padding-top: 6px;
  }
  .van-field__button {
    @include sc($ft-36, $main-color);
  }
}
</style>
