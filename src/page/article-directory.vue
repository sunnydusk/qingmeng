<template>
  <div class="memo">
    <template v-for="item in list">
    <div class="router-link-active">
      <view class="table" @click="item.show=!item.show">
        <text>{{ item.name}}</text>
      </view>
    </div>
    <view v-show="item.show">
      <router-link v-for="item1 in item.child" :to="item1.link" class="table-1">{{ item1.name}}<br></router-link>
    </view>
    </template>
  </div>
</template>

<script>
import VImg from "@/components/v-img";
export default {
  name: "article-directory",
  components: {VImg},
  data() {
    return {
      list:[{
        name:"HTML",
        show:false,
        child:[{name:"123",link:"/"},{name:"123",link:"/"}],
      },
        {
          name:"CSS",
          show:false,
          child:[{name:"123",link:"/"}],
        },
        {
          name:"JavaScript",
          show:false,
          child:[{name:"V-show/v-for",link:"/"}],
        },
        {
          name:"PHP",
          show:false,
          child:[{name:"123",link:"/"}],
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.memo {
  width: 75%;
  margin: 0 auto;
  box-shadow: darkgray 0 0 30px 5px;
  border-radius: 24px;
}

a {
  text-decoration: none;
}

.router-link-active {
  width: 100%;
  height: 120px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  text-align: center;
  font-size: 30px;
  position: relative;
}

.table {
  line-height: 120px;
}

.router-link-active:hover {
  color: #00c4c4;
  background-color: rgba(204, 204, 204, 0.4);
}
text, view{
  user-select: none;
}
.table-1{
  font-size: 25px;
  margin-left:15%;
  line-height: 60px;
  color: #2a2a2a;
}
.table-1:hover{
  color: #69c9c9;
}
</style>