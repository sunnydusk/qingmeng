<template>
  <v-img :src="background" width="100%" height="100vh"></v-img>
</template>

<script>
import VImg from "@/components/v-img";

export default {
  name: "article",
  components: {VImg},
  props:{
    background:{
      type:String,
      default:"/image/bg_shu.png"
    }
  }
}
</script>

<style scoped>

</style>