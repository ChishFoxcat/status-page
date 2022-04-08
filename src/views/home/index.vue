<template>
  <t-button theme="primary">
    <template #icon>
      <add-icon />
    </template>
    新建
  </t-button>
</template>

<script>
import { AddIcon } from "tdesign-icons-vue-next";
export default {
  components: {
    AddIcon,
  },
};
</script>
