<template>
  <div class="service-grid">
      <service v-for="(s, index) in services" :key="index" :service="s"></service>
  </div>
</template>

<script>
import service from './service'
export default {
  name: 'service-grid',
  components: {
      service
  },
  props: {
      services: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.service-grid {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 28px 90px;
  @media(max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 60px 90px;
  }
  @media(max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 60px 90px;
  }
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .service-grid  {
    display: -ms-grid;
    -ms-grid-columns: 1fr 1fr 1fr;
    -ms-grid-rows: 1fr 1fr 1fr;
    grid-gap: 60px 90px;
  }
}

</style>
