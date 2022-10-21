<template>
  <nav>
  <div class="NET">
    <ul>
      <li><router-link to="/" class="router-link-active">首页</router-link></li>
      <li><router-link to="/article" class="router-link-active">文章</router-link></li>
      <li><router-link to="/message" class="router-link-active">留言</router-link></li>
      <li><router-link to="/author" class="router-link-active">关于作者</router-link></li>
    </ul>
  </div>
  <div class="PC">
    <button class="dropbtn">菜单</button>
    <div class="PC-content">
      <router-link to="/" class="router-link-active">首页</router-link>
      <router-link to="/article" class="router-link-active">文章</router-link>
      <router-link to="/message" class="router-link-active">留言</router-link>
      <router-link to="/author" class="router-link-active">关于作者</router-link>
    </div>
  </div>
  </nav>
</template>

<script>
export default {
  name: "nav-1"
}
</script>

<style scoped>
nav{

}
ul{
  right: 1px;
  margin-top: 23px;
  font-size: 18px;
  width: 300px;
}
ul li{
  display: inline-block;
}
a{
  display: inline;
  padding: 12px;
  text-decoration: none;
  color: #fff;
}
.NET {
  position: absolute;
  display: inline-block;
  right: 25px;
}
.PC {
  position: absolute;
  display: inline-block;
  right: 25px;
  margin-top: 8px;
}
.dropbtn {
  background:rgba(143, 143, 143, 0.4);
  padding: 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  color: #fff;
  width: 65px;
  height: 50px;
}
.PC-content {
  font-size: 14px;
  display: none;
  position: absolute;
  background:rgba(143, 143, 143, 0.4);
  min-width: 60px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}/*默认隐藏*/
.PC-content a {
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

}
/*下拉菜单链接*/
.PC:hover .PC-content {
  display: block;
}/*鼠标显示下拉菜单*/
.router-link-active:hover,.dropbtn:hover{
  color: #69c9c9;
  background-color: rgba(0,0,0,0.1);
}
@media screen and (min-width: 906px) {
  article {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }
  .dropbtn {
    display: none;
  }

}
@media screen and (max-width:940px) { .NET{
  display:none;
}
}
</style>