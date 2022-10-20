<template>
  <div class="text">生命可以随心所欲，但不能随波逐流.</div>
  <div class="text-1"></div>
</template>

<script>
import {onMounted} from "vue";

let i = 0;
let text="生命可以随心所欲，但不能随波逐流.";
let num = text.length;

function show() {
  let shower = text.substring(0,i);
  document.getElementById("text").innerHTML = shower;
  i++;
  if (i+1 >= num){
    clearInterval("done");
  }
}

let done;
done = setInterval("show()",150);
export default {
  name: "text-jumps",
  massage:'生命可以随心所欲，但不能随波逐流.'
}
</script>

<style scoped>
  .text{
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
    .text-1 {
      display: none;
    }

  }
  @media screen and (max-width:940px) {
    .text {
      display: none;
    }
  }
</style>