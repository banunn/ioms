<template>
  <div class="home-mission">
      <div class="block">
      </div>
      <div class="block">
          <div class="detail">
              <img src="../../public/img/icons/icon_ourMission.svg" alt="">
              <h1>Our Mission</h1>
              <p>{{desc}}</p>
              <a v-scroll-to="'.site-foot'" class="btn">Contact Us</a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "home-mission",
  props: {},
  data() {
    return {
      desc:
        "Our mission is to protect and improve the quality of life for every patient we serve. We leverage industry-leading training and technology to provide real-time guidance to the entire surgical team – reducing overall risk and ensuring that our patients’ long-term well being is protected every step of the way."
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-mission {
  display: flex;
  height: 720px;
  @media (max-width: 700px) {
    flex-direction: column;
    height: inherit;
  }
  .block {
    flex: 1;
    position: relative;
    &:nth-child(1) {
      background: #000 url("../../public/img/ourServices_hero_wGradient.png")
        no-repeat center center;
      background-size: cover;
      @media (max-width: 700px) {
        flex-direction: column;
        height: 225px;
      }
    }
    &:nth-child(2) {
      background-color: #111215;
      padding: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 700px) {
          padding: 74px 24px;
      }
      .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 442px;
        img {
            @media(max-width: 700px) {
                transform: scale(.75);
          }
        }
        h1 {
          margin: 0;
          color: #ffffff;
          font-size: 35.93px;
          font-weight: 600;
          letter-spacing: 0.25px;
          line-height: 43px;
          text-align: center;
          margin-top: 28px;
          @media(max-width: 700px) {
            font-size: 24.93px;
          }
        }
        p {
          margin: 0;
          color: #ffffff;
          font-size: 16.26px;
          letter-spacing: 0.5px;
          line-height: 28px;
          text-align: center;
          opacity: 0.6;
          margin-top: 12px;
          margin-bottom: 28px;
          @media(max-width: 700px) {
            font-size: 14px;
            line-height: 22px;
          }
        }
      }
    }
  }
}

.btn {
  appearance: none;
  border: none;
  background: none;
  height: 36px;
  width: 156px;
  border: 1px solid #00c6ff;
  border-radius: 4px;
  background-color: rgba(98, 2, 238, 0);
  color: #00c6ff;
  font-family: Archia;
  font-size: 14.22px;
  letter-spacing: 1.25px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
