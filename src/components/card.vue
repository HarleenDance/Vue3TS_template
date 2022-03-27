<template>
 <van-pull-refresh class="card" v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
  <div class="box" v-for="pitem in list" :key="pitem"> 
   <div @click="onClick(pitem)">
    <span class="title">{{ pitem.title }}</span>
    <div class="content">
      <div class="item flex" v-for="item in pitem.list" :key="item">
        <span class="name">{{ item.name }}</span>
        <span class="value">{{ item.value }}</span>
      </div>
    </div> 
   </div>
    <div class="bot" v-if="pitem.btn && pitem.btn.length > 0">
      <span v-for="item in pitem.btn" :key="item" :class="item.class" @click="handle(pitem)">{{
        item.name
      }}</span>
    </div>
  </div>
  </van-list>
  </van-pull-refresh>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({ 
  components: {},
  props: ["title", "list", "btn"],
  setup(props, ctx) {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);
    const onLoad = () => {};
    const onClick=(result)=>{
      ctx.emit("onClick",result);
    }
    const onRefresh = () => {
      finished.value = false;
      loading.value = true;
      onLoad();
    };

    return {
      onClick,
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing,
      handle: (item) => {debugger
        item.fn?item.fn(item.list):'';
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.box {
  width: 690px;
  background: #ffffff; 
  border-radius: 16px;
  padding: 30px 30px 0 30px;
  border: 1px solid $border-color;
  box-sizing: border-box;
  margin: auto auto 50px auto;
  .title {
    @include sc($ft-36, $gray-0);
    font-weight: 600;
    line-height: 48px;
    text-shadow: 0px 5px 15px rgba(47, 131, 254, 0.03);
  }
  .content {
    padding-bottom: 30px;
    @include border-1px($border-color);
    .item {
      justify-content: space-between;
      padding-top: 30px;
      @include sc($ft-32, $gray-6);
      .name {
        width: 192px;
      }
      .value {
        color: $gray-0
      }
    }
  }
  .bot {
    padding-top: 8px;
    padding-bottom: 8px;
    height: 96px;
    line-height: 96px;
    color: $main-color;
    display: flex;
    text-align: center;
    span {
      flex: 1;
    }
    .delColor{
      color: $warn-color;
      border-left: 1px solid $border-color;
    }
  }
}
</style>
