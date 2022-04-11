<template>
  <div
    class="logo-icon"
    :style="
      'transform: scale(' +
      (scale != null ? scale : 1) +
      '); height:' +
      (height != null ? height : 72) +
      'px;width:' +
      (width != null ? width : 72.5) +
      'px;'
    "
  >
    <div class="logo-s-top">
      <div class="s-bottom"></div>
      <div class="s-left-bottom"></div>
    </div>
    <div class="logo-s-center">
      <div class="s-bottom">
        <div class="s-bottom-left"></div>
      </div>
    </div>

    <div class="logo-s-bottom"></div>
  </div>
</template>

<script>
export default {
  props: {
    scale: [Number, String],
    width: [Number, String],
    height: [Number, String],
  },
};
</script>

<style scoped>
.logo-icon {
  width: 72.5px;
  height: 72px;
  position: relative;
}

.logo-s-top {
  width: 35px;
  height: 10px;
  background-color: #424242;
  border-radius: 1px 1px 1px 0;
  top: 0px;
  left: -5px;
  right: 0;
  margin: auto;
  position: absolute;
  transform: skewX(-12deg);
  background-image: linear-gradient(90deg, #00c853 15%, #00e676);
}

.logo-s-top .s-bottom {
  bottom: calc(-100% - 0px);
  left: -10px;
  position: absolute;
  width: 20px;
  height: 10px;
  border-radius: 1px 0 1px 0;
  background-image: linear-gradient(90deg, #00c853 60%, #69f0ae);
}

.logo-s-top .s-left-bottom {
  bottom: calc(-100% - 10px);
  left: -10px;
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 0 0 0 1px;
  background-color: #00c853;
}

.logo-s-center {
  width: 40px;
  height: 10px;
  background-color: #424242;
  border-radius: 0 1px 0 1px;
  top: 30px;
  left: -13px;
  right: 0;
  margin: auto;
  position: absolute;
  transform: skewX(-12deg);
  background-image: linear-gradient(90deg, #ffc107 15%, #ff9800);
}

.logo-s-center .s-bottom {
  bottom: calc(-100% - 10px);
  right: -10px;
  position: absolute;
  width: 10px;
  height: 20px;
  border-radius: 0 1px 1px 0;
  background-image: linear-gradient(0deg, #00c853 60%, #69f0ae);
}

.s-bottom .s-bottom-left {
  bottom: 0;
  left: 0;
  transform: translateX(-99%);
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 1px 0 0 0;
  background-color: #00c853;
}

.logo-s-bottom {
  width: 35px;
  height: 10px;
  background-color: #424242;
  border-radius: 1px 0 1px 1px;
  top: 60px;
  left: -20.5px;
  right: 0;
  margin: auto;
  position: absolute;
  transform: skewX(-12deg);
  background-image: linear-gradient(90deg, #ffc107 15%, #ff9800);
}
</style>
