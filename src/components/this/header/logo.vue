<template>
  <div class="menu-bar-logo" @click="goToHome">
    <img v-if="logo != undefined" :src="logo" />
    <Logo scale="0.4" width="25" height="38" v-else></Logo>
    <div class="site-title">{{ title != undefined ? title : "" }}</div>
  </div>
</template>

<script>
import Logo from "@/components/this/global/logo";

export default {
  props: {
    logo: [String],
    title: [String],
  },

  data: () => ({}),

  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },

  components: {
    Logo,
  },
};
</script>

<style scoped>
.menu-bar-logo {
  display: flex;
  align-items: baseline;
  height: 36px;
  cursor: pointer;
  user-select: none;
  margin-top: -10px;
  margin-left: -10px;
  transform: scale(0.9);
}

.menu-bar-logo img {
  height: 100%;
}

.menu-bar-logo .site-title {
  font-size: 28px;
  padding-left: 0px;
  padding-bottom: 20px;
  font-family: "tencent", sans-serif;
}
</style>
