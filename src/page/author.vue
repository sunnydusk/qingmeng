<template>
  <v-img :src="background" width="100%" height="100vh"></v-img>
</template>

<script>
import VImg from "@/components/v-img";
export default {
  name: "author",
  components: {VImg},
  props:{
    background:{
      type:String,
      default:"/image/bg_link.jpg"
    }
  }
}
</script>

<style scoped>

</style>