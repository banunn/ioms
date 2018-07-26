<template>
  <section class="hero">
      <div class="detail">
          <img src="@/assets/ioms_logo_hero.svg" alt="">
          <h1>{{title}}</h1>
          <p>Our neurological monitors are an integral part of the operating room team. Through advanced training, continuing education, and a patient-centric approach to care, we help guide surgeons through any procedure where neural structures could potentially be at risk.</p>
            <footer>
                Learn more about <span>Intraoperative Neurophysiologic Monitoring <i class="material-icons">arrow_forward</i></span>
            </footer> 
      
      
      </div>
  </section>
</template>

<script>
export default {
  name: "this",
  props: {},
  data() {
    return {
      title: "Assisting surgeons. Protecting patients."
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  width: 100%;
  padding-top: 100vh;
  background: #000 url("../../public/img/home_hero_noGradient.png") no-repeat
    center;
  max-height: 812px;
  background-size: cover;
  position: relative;
  font-size: 16px;
  @media(max-width: 700px) {
      font-size: 14px;
      max-height: inherit;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: linear-gradient(135deg, #0072ff 0%, #00c6ff 100%);
    opacity: 0.75;
  }
  @media(max-width: 700px) {
      height: 100vh;
      padding-top: 100vh;
  }
}

.detail {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 1230px;
  z-index: 5;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
    @media(max-width: 700px) {
transform: translate(-50%, -45%);
    }
  img {
      @media(max-width: 700px) {
          transform: scale(.75);
      }
  }
  h1 {
    margin: 0;
    font-size: 2.15em;
    font-weight: 600;
    letter-spacing: 0.25px;
    line-height: 43px;
    text-align: center;
    margin-top: 2em;
    @media(max-width: 700px) {
        margin-top: 1em;
    }
  }
  p {
    font-size: 1em;
    letter-spacing: 0.5px;
    line-height: 1.75em;
    text-align: center;
    margin:0;
    margin-top: 1em;
  }
  footer {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      margin-top: 1em;
      @media(max-width: 700px) {
          flex-direction: column;
          align-items: center;
          text-align: center;
          i {
              display: none;
          }
      }
      span {
          font-weight: bold;
          display: flex;
          align-items: center;
          margin: 0 4px;
          @media(max-width: 700px) {
              margin-top: 8px;
          }
          i {
              margin-left: 4px;
          }
      }
  }
}
</style>

