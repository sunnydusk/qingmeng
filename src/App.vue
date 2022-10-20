<template>
  <top-bar>
    <template v-slot:avatar><avatar></avatar></template>
    <template v-slot:nav><nav-1></nav-1></template>
  </top-bar>
  <router-view></router-view>
  <text-jumps></text-jumps>

</template>

<script>

import topBar from "@/components/Top-bar";
import Avatar from "@/components/avatar";
import Nav1 from "@/components/nav-1";
import TextJumps from "@/components/text-jumps";

const imgList = [];
export default {
  name: 'App',
  components: {
    TextJumps,
    Avatar,
    topBar,
    Nav1
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    border: 0;
  }
</style>
