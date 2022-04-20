<template>
  <div id="CHISH-STATUS-DRAWER">
    <t-button shape="square" variant="text" class="toggle-button">
      <CaretLeftSmallIcon size="60" />
    </t-button>
  </div>
</template>

<script>
import { CaretLeftSmallIcon } from 'tdesign-icons-vue-next';
export default {
  components: {
    CaretLeftSmallIcon
  }
}
</script>

<style>
#CHISH-STATUS-DRAWER {
  padding-top: 64px;
  width: 200px;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  position: fixed;
}

#CHISH-STATUS-DRAWER::before {
  content: "";
  margin-top: 64px;
  top: 0;
  right: 0;
  bottom: 0;
  width: 1px;
  height: 100%;
  position: absolute;
  border-right: 1px solid var(--td-border-level-1-color);
}

.toggle-button {
  right: 0;
  bottom: 0;
  width: 80px;
  height: 80px;
  position: absolute !important;
}
</style>
