<template>
  <audio ref="music" id="music" autoplay="autoplay" loop="loop" src="/多谢泪的告白.mp3"></audio>
  <img @click="click" ref="avatar" class="avatar_size" :class="{start:!flag}" src="/image/avatar.jpg" alt="">
</template>

<script>
export default {
  name: "avatar",
  data() {
    return {
      flag: true
    }
  },

  methods:{
    click() {
      const music = this.$refs.music
      const avatar = this.$refs.avatar
      if(this.flag){
        music.play();
        this.flag=false;
      }else{
        music.pause();
        this.flag=true;
      }
    },
  }
}

</script>

<style scoped>
.avatar_size {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  position: absolute;
  margin-top: 10px;
  margin-left: 15px;
  animation-timing-function: linear; /*匀速旋转*/
  animation-duration: 3s;
  animation-iteration-count: infinite; /*旋转次数无数*/

}
.start{
  animation-name: music ;
}
@keyframes music {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>