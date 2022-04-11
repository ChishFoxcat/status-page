<template>
  <div class="menu-bar-theme-button">
    <t-button shape="square" variant="text" @click.stop="toggle">
      <i class="mdi" :class="'mdi-' + sun" ref="Icon"></i>
    </t-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    sun: "white-balance-sunny",
    moon: "weather-night",
  }),

  methods: {
    // 深色/亮色切换
    toggle() {
      this.$refs["Icon"].classList.toggle("rotate");
    },
  },
};
</script>

<style scoped>
.menu-bar-theme-button i.mdi {
  font-size: 18px;
  transition: all 0.3s;
}

i.mdi.rotate {
  transform: rotate(360deg);
}
</style>
