<template>
  <div class="main-page">
      <img src="/image/avatar.jpg" class="avatar">
    <text>清梦</text>
    <template v-for="item in list">
    <div class="hobby">
      <ul>
      <div class="table" @click="item.show=!item.show">
        <div class="title">{{ item.name}}</div>
      </div>
      <div v-show="item.show"  class="page">
        <li v-for="item1 in item.child" @click="item1.show1=!item1.show1">{{ item1.name}}
          <div v-show="item1.show1" class="text">
            <p>{{ item1.text}}</p>
          </div>
        </li>
      </div>
      </ul>
    </div>
    </template>
  </div>
</template>
<script>

export default {
  name: "author-from",
  data: function () {
    return {
      list: [{
        name: "个人爱好",
        show: false,
        child:  [{name: "学习", show1: false, text: "vue：学习中"},
                {name: "运动", show1: false, text: "乒乓球，羽毛球"},
                {name: "游戏", show1: false, text: "摆烂型旅行者"}],
      }
      ]
    }
  },
  methods:{

  }
}
</script>

<style scoped>
  .main-page{
    width: 75%;
    height: 500px;
    margin: 0 auto;
    box-shadow: darkgray 0 0 30px 5px;
    border-radius: 24px;
  }
  .avatar{
    width: 70px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    position: absolute;
    margin-top: 30px;
    margin-left: 35px;
  }
  text{
    position: absolute;
    margin-top: 110px;
    margin-left: 42px;
    font-size: 28px;
    font-family: 华文行楷;
    user-select: none;
  }
  .table{
    position: absolute;
    margin-top: 170px;
    font-size: 35px;
    margin-left: 50px;
    user-select: none;
    font-family: 黑体;
  }
  .table:hover{
    border: 2px #6b6b6b solid;
    color: #00c4c4;
  }
  li{
    font-size: 25px;
    list-style: none;
    margin-top: 15px;
  }
  .page{
    position: absolute;
    margin-top: 220px;
    margin-left: 12%;
    user-select: none;
    font-family: 黑体;
    font-size: 30px;
  }
  .text{
    font-family: 仿宋;
    font-size: 22px;
  }

</style>