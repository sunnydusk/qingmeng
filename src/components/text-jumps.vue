<template>
  <div id="text" v-html="massage"></div>
  <div id="text-1"></div>
</template>

<script>
import {onMounted} from "vue";


export default {
  data() {
    return {
      massage:"",
      text:"生命可以随心所欲，但不能随波逐流.",
      i:0,
      num:"",
      timeId:0
    }
  },
  mounted() {
   this.timeId= setInterval(()=>{this.show()},200)
  },
  unmounted() {
    clearInterval(this.timeId)
  },
  methods: {
    show(){
      this.num= this.text.length
      if(this.i<=this.text.length){
        this.massage+=this.text.charAt(this.i)
        this.i++
      }
    }
  }
}


</script>

<style scoped>
  #text{
    position: absolute;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;
    top: 350px;
    margin: auto;
    bottom: 0;
    color: rgb(255, 255, 255);
    font-size: 48px;
    font-weight: 500;
    font-family: "楷体";
    user-select: none;
  }
  @media screen and (min-width: 906px) {
    article {
      display: grid;
      grid-template-columns: 3fr 1fr;
      column-gap: 20px;
    }
    #text-1 {
      display: none;
    }

  }
  @media screen and (max-width:940px) {
    #text {
      display: none;
    }
  }
</style>