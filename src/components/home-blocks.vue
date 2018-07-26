<template>
  <div class="home-blocks">
      <div class="block">
          <header>
              <img src="../../public/img/icons/icon_providingGuidance.svg" alt="">
              <h2>Providing Guidance</h2>
          </header>
          <div class="body">
                <p>{{detail.a}}</p>
          </div>
      </div>
      <div class="block">
          <header>
              <img src="../../public/img/icons/icon_mitigatingRisk.svg" alt="">
              <h2>Mitigating Risk</h2>
          </header>
          <div class="body">
              <p>{{detail.b}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "home-blocks",
  props: {},
  data() {
    return {
      detail: {
        a:
          "Our neurological monitors are an integral part of the operating room team. Through advanced training, continuing education, and a patient-centric approach to care, we help guide surgeons through any procedure where neural structures could potentially be at risk.",
        b:
          "The goal of neurophysiological monitoring is to mitigate the risk of injury to the nervous system during procedures where neural structures face vulnerability. "
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-blocks {
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    height: inherit;
  }
  .block {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 82px 0;
    @media (max-width: 700px) {
      padding: 72px 0;
    }
    .body {
      max-width: 528px;
    }
    header {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      max-width: 528px;
      padding-bottom: 12px;
      h2 {
        color: #ffffff;
        font-size: 35.93px;
        font-weight: 600;
        letter-spacing: 0.25px;
        line-height: 43px;
        margin: 0;
        margin-left: 20px;
        @media (max-width: 700px) {
          font-size: 24.93px;
          margin-left: 12px;
        }
      }
      img {
        @media (max-width: 700px) {
          transform: scale(0.75);
        }
      }
    }
    .body {
      p {
        margin: 0;
        color: rgba(#fff, 0.6);
        font-size: 16.26px;
        letter-spacing: 0.5px;
        line-height: 28px;
        @media (max-width: 700px) {
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
    &:nth-child(1) {
      padding-right: 96px;
      background-color: #111215;
      padding-left: 24px;
      align-items: flex-end;
      @media (max-width: 700px) {
        align-items: center;
        padding: 72px 24px;
      }
    }
    &:nth-child(2) {
      padding-left: 96px;
      background-color: #191b1f;
      padding-right: 24px;
      @media (max-width: 700px) {
        align-items: center;
        padding: 72px 24px;
      }
    }
  }
}
</style>
