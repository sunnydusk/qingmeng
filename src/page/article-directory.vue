<template>
  <div class="memo">
    <div class="router-link-active">
      <router-link to="/" class="table">HTML</router-link>
    </div>
    <div class="router-link-active">
      <router-link to="/" class="table">CSS</router-link>
    </div>
    <div class="router-link-active">
      <router-link to="/" class="table">JavaScript</router-link>
    </div>
    <div class="router-link-active">
      <router-link to="/" class="table">PHP</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "article-directory"
}
</script>

<style scoped>
.memo {
  width: 75%;
  margin: 0 auto;
  box-shadow: darkgray 0 0 30px 5px;
  border-radius: 25px;
}
a{
  text-decoration: none;
}
.router-link-active{
  width: 100%;
  height: 120px;
  border-radius: 25px;
  text-align: center;
  line-height: 120px;
  margin-top: 40px;
  font-size: 30px;
}
.router-link-active:hover{
  color: #9afafa;
  background-color: rgba(194, 194, 194, 0.4);
}
</style>