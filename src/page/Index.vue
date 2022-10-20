<template>
  <v-img :src="background" width="100%" height="100vh"></v-img>
  <div class="intreduce">
    <div class="introduce_item">
      <img class="introduce_item_img" src="/image/world.png" alt="">
      <span
          class="introduce_item_title">曾听过有人说:你的眼里藏有星星.后来啊,再没人说过眼里有星光,只是物是人非,眼里的星光同我们抓不住的时间,像它流逝于我的手中一样的落下了!</span>
    </div>
    <div class="introduce_item">
            <span
                class="introduce_item_titles">一下雨就心情平静，喜欢听下雨的声音，或者喜欢淋雨，或者喜欢在雨天窝在家中，煮杯咖啡看看书。喜欢它的千百种姿态，享受雨天的万千种幸福感。</span>
      <img class="introduce_item_img" src="/image/rain.jpg" alt="">
    </div>
    <div class="introduce_item">
      <img class="introduce_item_img" src="/image/sea.jpg" alt="">
      <span
          class="introduce_item_title">古往今来，人类生生世世在编织着梦想与希冀。遥望苍穹，星空闪烁着诉说着先人祈福的呢喃和虔诚的祷告；那梦想是如此真实，又如此遥远，因为那是心中不灭的追求，是浮于现实的繁华与幻想!</span>
    </div>
    <div class="introduce_item">
            <span
                class="introduce_item_titles">过往的终是过往,已经存在于回忆里的,也总是最值得品味的风景,或许会在多少年后,偶然看见窗外飘零的落叶,会记起遗落在岁月长河中最珍视的东西!</span>
      <img class="introduce_item_img" src="/image/cloud-1.jpg" alt="">
    </div>
  </div>
</template>

<script>
import VImg from "@/components/v-img";
export default {
  name: "Index",
  components: {VImg},
  props:{
    background:{
      type:String,
      default:"/image/bg.png"
    }
  }
}
</script>

<style scoped>
.introduce {
  display: flex;
  flex-direction: column;
}

.introduce_item {
  display: flex;
  justify-content: center;
  margin-top: 35px;
}

.introduce_item_img {
  width: 400px;
  height: 250px;
}

.introduce_item_title {
  width: 450px;
  font-size: 20px;
  line-height: 30px;
  align-self: center;
  padding-left: 110px;
  user-select: none;
  font-family: "仿宋";
  text-indent: 2em;
}

.introduce_item_titles {
  width: 450px;
  font-size: 20px;
  line-height: 30px;
  align-self: center;
  padding-right: 110px;
  user-select: none;
  font-family: "仿宋";
  text-indent: 2em;
}

@media screen and (max-width: 200px) {
  article {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 14px;
  }

  .introduce {
    display: flex;
  }

  .introduce_item,
  .introduce_item_img,
  .introduce_item_title,
  .introduce_item_titles {
    flex: 1;
  }
}

@media screen and (max-width:940px) {
  .introduce_item_img {
    display: none;
  }

  .introduce_item_title {
    text-align: center;
    margin-right: 10%;
    width: 500px;

  }

  .introduce_item_titles {
    text-align: center;
    margin-left: 10%;
    width: 500px;
  }
}
</style>