<template>
  <v-img :src="background" width="100%" height="100vh"></v-img>
  <article-directory></article-directory>
</template>

<script>
import VImg from "@/components/v-img";
import ArticleDirectory from "@/page/article-directory";

export default {
  name: "article",
  components: {ArticleDirectory, VImg},
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