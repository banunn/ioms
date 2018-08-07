<template>
  <div class="partners-block">
      <div class="wrap">
            <div class="sponsor">
                <aside>
                  <img src="../../public/img/osh_logo.png" alt="Oklahoma Surgical Hospital">
                </aside>
            </div>
            <div class="sponsor">
                <aside>
                  <img src="../../public/img/sf_logo.png" alt="Saint Francis Health System">
                </aside>
            </div> 
            <div class="sponsor">
                <aside>
                  <img src="../../public/img/hillcrest_logo.png" alt="Hillcrest Medical Center">
                </aside>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "home-partners",
  props: {}
};
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
  width: 280px;
  flex-basis: 280px;
  min-width: 280px;
  display: inline-flex;
  margin-right: 150px;
  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
