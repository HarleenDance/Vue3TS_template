<template>
  <Search @search="search"></Search>
  <card
    :list="config"
    :btn="btn"
    @onClick="onClick"
  ></card>
</template>
<script lang="ts"> 
import card from "@/components/card.vue";
import Search from "@/components/ty-search.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    card,
    Search
  },
  emits: ["onClick"],
  setup(props, ctx) {
    const search = () => {
      console.log("搜索")
    }
    const onClick = (val) => {
      ctx.emit("onClick", val)
    }
    return {
      onClick,
      search,
      config: [{
          title:"广州1",
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
            name: "一键呼叫",
            fn: (val) => {
            }
          }
        ]
      },
      {
          title:"广州2",
        list: [
          {
            name: "申报类型1",
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
            name: "一键呼叫",
            fn: (val) => {
                console.log("呼叫点击")
            }
          }
        ]
      }]
    };
  }
});
</script>