<template>
  <div class="partners-block">
      <div class="wrap">
            <div v-for="(index, s) in 12" :key="index" class="sponsor">
                <aside>
                  <img src="../../public/img/hillcrest.png" :alt="s">
                </aside>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home-partners',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.partners-block {
  height: 210px;
  display: flex;
  align-items: center;
    overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.wrap {
    display: flex;
  flex-wrap: nowrap;
}

.sponsor {
  width: 150px;
  flex-basis: 150px;
  min-width: 150px;
  display: inline-flex;
  margin-right: 155px;
  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
