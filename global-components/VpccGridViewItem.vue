<template>
  <router-link :to="to" class="vpcc-grid-view__item">
    <span class="vpcc-grid-view__item-name"><slot name="name"/></span>
    <slot />
    <div class="vpcc-grid-view__item-front-layer"></div>
  </router-link>
</template>

<script>
export default {
  name: 'VpccGridViewItem',

  props: {
    to: {
      type: String,
      default: '',
    },
  },
};
</script>
