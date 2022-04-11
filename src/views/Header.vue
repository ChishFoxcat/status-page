<template>
  <header id="CHISH-STATUS-Header">
    <t-head-menu v-model="menu1Value" theme="light" class="header-menu-bar">
      <template #logo>
        <HeaderLogo title="ServerStatus"></HeaderLogo>
      </template>

      <template #operations>
        <ThemeButton></ThemeButton>
      </template>
    </t-head-menu>
  </header>
</template>

<script>
import HeaderLogo from "@/components/this/header/logo";
import ThemeButton from "@/components/this/header/themeButton";

export default {
  data: () => ({
    menu1Value: null,
  }),

  components: {
    HeaderLogo,
    ThemeButton,
  },
};
</script>

<style>
#CHISH-STATUS-Header .header-menu-bar {
  padding: 0 18px;
}

.header-menu-bar::after {
  content: "";
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
  border-bottom: 1px solid var(--td-border-level-1-color);
}
</style>
