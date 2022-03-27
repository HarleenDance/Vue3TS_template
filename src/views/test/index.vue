<template>
  <!-- <userCard></userCard>
  <tab style="margin-top: 20px" @click="tabclick" :tabs="[1, 2]"></tab> -->
  <!-- <Search @search="search"></Search> -->
  <!-- <Radio
    v-model="name"
    @change="change"
    :list="list"
    direction="horizontal"
  ></Radio> -->
  <!-- <Checkbox
    v-model="name"
    @change="change"
    :list="list"
    direction="horizontal"
  ></Checkbox> -->
  <!-- <Card :title="'柏福328'" :list="list" :btn="btn"></Card> -->
  <div class="imgContent">
    <div class="pcontent">
      <Title :title="'上传图片'"></Title>
      <Uploader v-model="fileList" ref="Uploader"></Uploader>
      <!-- <DatetimePicker v-model:show="showPopup" @onConfirm="onConfirm" ></DatetimePicker> -->
      <Area v-model:show="showPopup" @onConfirm="onConfirm"   :title="'请选择地市'"></Area>
      <!-- <popupType v-model:show="showPopup"  :List="typeList" @onConfirm="onConfirm" ></popupType> -->
      <!-- <buttonList :List="typeList" @onConfirm="onConfirm"></buttonList> -->
      <searchForm></searchForm>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import userCard from "@/components/userCard.vue";
import tab from "@/components/ty-tab.vue";
import Search from "@/components/ty-search.vue";
import Radio from "@/components/ty-radio.vue";
import Checkbox from "@/components/ty-checkbox.vue";
import Card from "@/components/card.vue";
import Uploader from "@/components/ty-uploader.vue";
import Title from "@/components/ty-title.vue";
import Area from "@/components/ty-area.vue";
import popupType from "@/components/popupType.vue";
import buttonList from "@/components/buttonList.vue";
import searchForm from "@/components/ty-searchForm.vue";

export default defineComponent({
  components: {
    userCard: userCard,
    tab: tab,
    Search: Search,
    Radio,
    Checkbox,
    Card,
    Uploader,
    Title,
    Area,
    popupType,
    buttonList,
    searchForm
  },
  setup() {
    const name = ref(['1']);
    const fileList = ref([]);
    const change = (name) => {
    };
    const btnClick = () => {

    }
    const state = reactive({
      typeList: [
        {
          name: "港作船",
          value: 1,
          checked: true
        },
        {
          name: "送样货船",
          value: 2,
          checked: false
        },
        {
          name: "大货船",
          value: 3,
          checked: false
        }
      ],
    })
    const showPopup = ref(true);
    const onConfirm = (val) => {
      console.log("选中的值", val)
      showPopup.value = false
    }
    return {
      ...toRefs(state),
      fileList,
      showPopup,
      selectValue: ref([]),
      name,
      change,
      onConfirm,
      btnClick,

      list: [
        {
          name: "申报类型",
          value: "生活污水",
        },
        {
          name: "生活污水储存 设备容量",
          value: "1.5/m",
        },
        {
          name: "接收作业位置",
          value: "二窝头锚地",
        },
        {
          name: "时间",
          value: "2021-10-20 18:00:00",
        },
      ],
      btn: [
        {
          name: "待接收",
          fn: () => {
          }
        }
      ]
    };
  },
});
</script>

<style lang="scss" scoped>
.imgContent {
  height: 100vh;
  background: $bg-color;
  .pcontent {
    margin-left: $ft-30;
    margin-right: $ft-30;
  }
}
.btn-rows {
  button {
    margin-right: 12px;
  }
}
</style>
