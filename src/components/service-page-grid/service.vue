<template>
  <div class="service">
     <header>
         <i class="material-icons">offline_bolt</i>
         <h4 class="title">{{service.title}}</h4>
     </header>
     <div class="service-content">
         <p>{{service.desc}}</p>
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
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    h4 {
      margin: 0;
      color: rgba(0, 0, 0, 0.87);
      font-family: Archia;
      font-size: 16.26px;
      font-weight: bold;
      letter-spacing: 0.5px;
      line-height: 28px;
    }
    i {
      font-size: 22px;
      margin-right: 10px;
    }
  }

  p {
    margin: 0;
    opacity: 0.6;
    color: #111215;
    font-family: Rubik;
    font-size: 16.26px;
    letter-spacing: 0.5px;
    line-height: 28px;
          @media (max-width: 700px) {
        font-size: 14px;
        line-height: 22px;
      }
  }
}
</style>
