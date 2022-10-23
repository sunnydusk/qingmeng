<template>
  <v-img :src="background" width="100%" height="100vh"></v-img>
  <author-from></author-from>
</template>

<script>
import VImg from "@/components/v-img";
import AuthorFrom from "@/page/author-from";
export default {
  name: "author",
  components: {AuthorFrom, VImg},
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