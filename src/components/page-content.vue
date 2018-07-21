<template>
  <div class="page-content">
      <div class="wrap content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'page-content',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-content {
    background: #fff;
    .content {
        padding: 72px 10px;
    }
}
</style>
