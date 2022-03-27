<template>
  <div>
    <div class="wrap-top flex">
      <img src="@/assets/images/bz15.png" class="img" alt="" />
      <div class="box">
        <span class="name"> 梅航梅航梅航梅梅航 </span>
        <span class="des"> 吴川市广航船务有限公司公 名称超过12个 </span>
      </div>
      <div class="adress-box">
        <span class="name"> 内河船舶 </span>
        <span class="des"> 超过7个字就换 行换行换行 </span>
      </div>
    </div>
    <div class="wrap-bot flex">
      <div>
        <img src="@/assets/images/bz29.png" class="img" alt="" />
        <span class="name">陈先生</span>
      </div>
      <span class="btn">解除绑定</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "userCard",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.wrap-top {
  width: 682px;
  background: linear-gradient(180deg, #f9fcff 0%, #f9fcff 0%, #eaf3fe 100%);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.03);
  border-radius: 9px 9px 0px 0px;
  padding: 30px 30px 28px 32px;
  box-sizing: border-box;
  margin: auto;
  .img {
    @include wh(40px, 40px);
  }
  .box {
    margin-left: 35px;
    .name {
      font-weight: 500;
      line-height: $lh-44;
      display: inline-block;
      padding-bottom: 6px;
      @include sc($ft-32, $gray-0);
    }
    .des {
      height: 36px;
      font-weight: 400;
      line-height: $lh-36;
      @include sc($ft-26, $gray-9);
    }
  }
  .adress-box {
    margin-left: 35px;
    span {
      color: $gray-9;
    }
    .name {
      display: inline-block;
      padding-bottom: 6px;
    }
  }
}
.wrap-bot {
  @include wh(690px, 119px);
  background: $bg-color;
  border-radius: 0 0 24px 24px;
  border: 2px solid #e8f3fe;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 34px;
  box-sizing: border-box;
  .img {
    @include wh(40px, 40px);
    vertical-align: bottom;
    margin-right: 20px;
  }
  .name {
    @include sc($ft-32, $gray-6);
  }
  .btn {
    @include wh(180px, 55px);
    background: $bg-color;
    border-radius: 28px;
    border: 1px solid $main-color;
    line-height: $lh-55;
    text-align: center;
    @include sc($ft-32, $main-color);
  }
}
</style>
