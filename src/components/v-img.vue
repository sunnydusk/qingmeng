<template>
  <div :style="{'background-image': `url(${src})`,width: width,height: height}"></div>
</template>

<script>
export default {
  name: "v-img",
  props:{
    src:{
      type:String
    },
    width:{
      type:String
    },
    height:{
      type:String
    }
  }
}
</script>

<style scoped>
  div{
  background-size: cover;
    background-position: center;
  }
</style>