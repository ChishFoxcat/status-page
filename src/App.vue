<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Header from "@/views/Header";
import Main from "@/views/Main";
import Footer from "@/views/Footer";

import { mapGetters } from "vuex";

export default {
  watch: {
    siteTitle: {
      handler() {
        if (this.siteTitle == "") {
          document.title = this.thisSite.site.name;
        } else {
          document.title = this.siteTitle + " - " + this.thisSite.site.name;
        }
      },
      deep: true,
      immediate: true,
    },
  },

  computed: {
    ...mapGetters("Global", ["siteTitle"]),
    ...mapGetters("Config", ["thisSite"]),
  },

  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
* {
  -webkit-tap-highlight-color: transparent;
}
</style>
