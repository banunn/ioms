<template>
  <div class="page-header" :style="{ backgroundImage: 'url(' + iconUrl + ')' }">
      <div class="wrap">
        <h1 class="title">{{title}}</h1>
      </div>
  </div>
</template>

<script>
export default {
  name: "page-header",
  props: {
    image: String,
    title: String
  },
  computed: {
    iconUrl() {
      return require("../assets/" + this.image);
      // The path could be '../assets/img.png', etc., which depends on where your vue file is
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-header {
  padding-top: 72px;
  background-color: #0072ff;
  height: calc(360px + 72px);
  padding: 72px 0;
  vertical-align: bottom;
  background-size: cover;
  @media (max-width: 700px) {
    font-size: 38px;
    height: calc(225px + 72px);
    padding: 24px 0;
  }
}

.wrap {
  display: flex;
  align-items: flex-end;
  height: 100%;
}

.title {
  color: #ffffff;
  font-size: 48.77px;
  font-weight: bold;
  line-height: 58px;
  margin: 0;
  @media (max-width: 700px) {
    font-size: 32px;
  }
}
</style>
