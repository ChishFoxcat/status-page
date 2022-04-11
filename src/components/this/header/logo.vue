<template>
  <div class="menu-bar-logo" @click="goToHome">
    <img v-if="logo != undefined" :src="logo" />
    <div class="logo-svg-box" v-else>
      <Logo></Logo>
    </div>
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
  align-items: center;
  cursor: pointer;
  user-select: none;
  transform: scale(0.8);
  margin-left: -12px;
}

.logo-svg-box {
  width: 24px;
}

.menu-bar-logo img {
  height: 100%;
}

.menu-bar-logo .site-title {
  font-size: 32px;
  padding-left: 8px;
  margin-top: 8px;
  font-family: "tencent", sans-serif;
}
</style>
