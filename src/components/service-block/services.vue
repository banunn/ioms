<template>
  <div class="home-services">
      <div class="wrap">
        <header>
            <h1>{{title}}</h1>
            <p>{{desc}}</p>
        </header>
      </div>
      <div class="wrap">
          <div class="grid-container">
              <service v-for="(s, index) in services" :key="index" :service="s"></service>
          </div>
          <footer class="foot">
            <router-link to="/services">Additional Services <i class="material-icons">arrow_forward</i></router-link>
          </footer>
      </div>
  </div>
</template>

<script>
import service from "./service";
export default {
  name: "home-services",
  props: {
    services: Array
  },
  components: {
    service
  },
  data() {
    return {
      title: "Our Services",
      desc:
        "Through a variety of electrophysiological tests, we evaluate the patient's neurological, functional and cerebral vascular status before, during and after procedures."
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.grid-container {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 60px 90px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 60px 90px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 60px 90px;
  }
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .grid-container {
    display: -ms-grid;
    -ms-grid-columns: 1fr 1fr 1fr;
    -ms-grid-rows: 1fr 1fr;
    grid-gap: 60px 90px;
  }
}

.home-services {
  padding: 74px 0px;
  header {
    text-align: center;
    margin-bottom: 82px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      color: #111215;
      font-size: 35.93px;
      font-weight: 600;
      letter-spacing: 0.25px;
      line-height: 43px;
      margin: 0;
      @media (max-width: 700px) {
        font-size: 24.93px;
      }
    }
    p {
      padding-top: 0.75rem;
      opacity: 0.6;
      color: #111215;
      font-size: 16.26px;
      letter-spacing: 0.5px;
      line-height: 28px;
      text-align: center;
      margin: 0;
      max-width: 666px;
      @media (max-width: 700px) {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
}

.foot {
  margin-top: 60px;
  display: flex;
  justify-content: flex-end;

  a {
    color: #0072ff;
    font-family: Archia;
    font-size: 14.22px;
    font-weight: 500;
    letter-spacing: 1.25px;
    line-height: 16px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>
