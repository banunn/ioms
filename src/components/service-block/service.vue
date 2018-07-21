<template>
  <div class="service">
      <div class="icon">
          <img src="../../../public/img/icons/icon_ourServices.svg" alt="">
      </div>
      <div class="detail">
          <header>{{service.title}}</header>
          <div class="body">
              <p>{{service.desc}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "service",
  props: {
    service: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.service {
  display: flex;
  .icon {
    max-width: 48px;
    margin-right: 12px;
  }
  .detail {
    flex: 1;
    header {
      color: rgba(0, 0, 0, 0.87);
      font-size: 16.26px;
      font-weight: bold;
      letter-spacing: 0.15px;
      line-height: 24px;
    }
    .body {
      p {
        color: rgba(0, 0, 0, 0.6);
        font-size: 14.22px;
        letter-spacing: 0.25px;
        line-height: 20px;
        margin: 0;
      }
    }
  }
}
</style>
