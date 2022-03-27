<template>
  <div>
    <schema-form ref="dynamicForm" v-show="!showPage" :form-schema="formSchema" :fields="fields">
      
      <template #operate-button>
        
       <card  v-if="selectList && selectList.length>0"  v-model:list="selectList" :btn="btn"></card>
        <van-button type="primary" block  @click="confirm" class="flex form-button" > 确定 </van-button> 
      </template>
    </schema-form>
    <div v-show="showPage">
      <thirdparty @onClick="onClick"></thirdparty>
    </div>
    
  </div>

</template>

<script lang="ts">
import { defineComponent, reactive, ref,toRefs } from "vue";
import   formTool   from "@/utils/formTool";
import { SchemaForm } from "@/components/JSON-schema-form";
import { getFormSchema } from "./form-schema";
import thirdparty from "@/components/thirdparty.vue"  
import card from "@/components/card.vue";
/**
 * @description 验证表单
 */
export default defineComponent({
  name: "RuleForm",
  components: { SchemaForm,thirdparty,card },
  setup(props, ctx) {
    const dynamicForm = ref();
    const fields = ref({
      name: 123
    });
    const state = reactive({
      formSchema: getFormSchema(dynamicForm),
      showPage: false,
      selectList:[]
    })
    const username = ref("");
    const password = ref("");
    const onSubmit = (values) => {
      console.log("submit", values);
    }; 
    const onClick=(val)=>{
       console.log("点击数据",val)
       val.btn= [
        {
          name: "一键呼叫",
          fn: (val) => { 
          }
        },
        {
          name: "删除",
          class:"delColor",
          fn: () => {
            state.selectList=[]
          }
        }
      ], 
       state.selectList=val; 
      state.showPage=false
    }
    // 点击提交
    const confirm = () => {
      state.showPage=true
      console.log("submit", dynamicForm.value.modelRef);
       formTool.ToastLoading();
       formTool.ClearLoading();
      dynamicForm.value.schemaFormRef
        ?.validate()
        .then((res) => {
          
        })
        .catch((res) => {
        });
    };

    return {
      ...toRefs(state),
      username,
      password,
      onSubmit,
      dynamicForm,
      confirm,
      fields,
      onClick
      
    };
  },
});
</script>

<style lang="scss" scoped>
.btn-rows {
  button {
    margin-right: 12px;
  }
}
</style>
