<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "CIcon",
  props: {
    i: [String],
    className: [String]
  },

  computed: {
    iconName() {
      return `#CI-${this.i}`;
    },

    svgClass() {
      return (this.className) ? "c-icon " + this.i : "c-icon";
    },

    styleExternalIcon() {
      return {
        mask: `url(${this.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.i}) no-repeat 50% 50%`
      };
    }
  }
}
</script>
