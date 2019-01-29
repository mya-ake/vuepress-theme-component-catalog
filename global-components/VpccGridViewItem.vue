<template>
  <div class="vpcc-grid-view__item">
    <span class="vpcc-grid-view__item-name"><slot name="name"/></span>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VpccGridViewItem',
};
</script>
