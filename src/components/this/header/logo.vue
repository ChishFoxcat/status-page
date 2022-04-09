<template>
  <div class="menu-bar-logo" @click="goToHome">
    <img :src="logo != undefined ? logo : defaultLogo" />
    <div class="site-title">{{ title != undefined ? title : "" }}</div>
  </div>
</template>

<script>
export default {
  props: {
    logo: [String],
    title: [String],
  },

  data: () => ({
    defaultLogo: require("@/assets/images/logo.png"),
  }),

  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.menu-bar-logo {
  display: flex;
  align-items: center;
  height: 30px;
  cursor: pointer;
  user-select: none;
}

.menu-bar-logo img {
  height: 100%;
}

.menu-bar-logo .site-title {
  font-size: 23px;
  padding-left: 5px;
}
</style>
