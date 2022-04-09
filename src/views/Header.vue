<template>
  <header id="CHISH-STATUS-Header">
    <t-head-menu v-model="menu1Value" theme="light" class="header-menu-bar">
      <template #logo>
        <HeaderLogo title="Server Status"></HeaderLogo>
      </template>

      <ThemeButton></ThemeButton>
    </t-head-menu>
  </header>
</template>

<script>
import HeaderLogo from "@/components/this/header/logo";
import ThemeButton from "@/components/this/header/themeButton";

export default {
  data: () => ({
    menu1Value: null
  }),

  components: {
    HeaderLogo,
    ThemeButton
  }
};
</script>

<style>
#CHISH-STATUS-Header .header-menu-bar {
  padding: 0 15px;
}
</style>
