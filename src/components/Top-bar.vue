<template>
  <nav>
    <slot name="avatar"></slot>
    <p>清梦</p>
    <slot name="nav"></slot>
<!--预留位-->
  </nav>
</template>

<script>
export default {
  name: "Top-bar"
}
</script>

<style scoped>
  nav{
    width: 100%;
    height: 66px;
    /*overflow: hidden;*/
    background-color: rgba(130,130,130,0.4);
    display: flex;
    position: absolute;
  }
  p{
    margin-left:80px;
    line-height: 66px;
    font-size: 28px;
    color: #fff;
    font-family: "华文行楷";
  }
</style>