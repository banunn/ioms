<template>
  <div class="about">
    <page-header :title="'About Us'" :image="'aboutUs_hero_wGradient.png'"></page-header>
    <page-content>
      <div class="two-col">
        <div>
          <div class="content-block">
            <header>Our Mission</header>
            <div class="c-content"><p>Our mission is to protect and improve the quality of life for every patient we serve. We leverage industry-leading training and technology to provide real-time guidance to the entire surgical team – reducing overall risk and ensuring that our patients’ long-term well being is protected every step of the way.</p></div>
          </div>
          <div class="content-block">
            <header>Our Purpose</header>
            <div class="c-content">
              <p>Our purpose is to bring clinical expertise and cutting-edge technology, along with a patient-centered approach and compassionate care, to provide coverage of any case involving at risk neural structures. Our extensively trained surgical neurophysiologists are equipped to administer a number of intraoperative procedures that help surgical teams dramatically improve patient safety during brain, spine, and peripheral nerve surgeries.</p>
            </div>
          </div>
        </div>
        <div>
          <div class="content-block">
            <div class="c-content">
              <p>Our on-site neurodiagnostic technologists collect, analyze and, in conjunction with our remote interpreting physicians, interpret real-time analytics on patient neural functions, and immediately detect any neurological deficits during surgeries. This real-time feedback allows surgeons to promptly take corrective action, and thus helps mitigate the risk of postoperative neurological deficits.</p>
            </div>
          </div>
          <router-link tag="span" class="cta" to="/services">Learn about our Services <i class="material-icons">arrow_forward</i></router-link>
        </div>
      </div>
    </page-content>
  </div>
</template>

<script>
import pageContent from "@/components/page-content";
import pageHeader from "@/components/page-header";
export default {
  name: "about",
  components: {
    pageContent,
    pageHeader
  },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.two-col {
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  > div {
    flex: 2;
    &:nth-child(1) {
      padding-right: 96px;
      flex:3;
      @media (max-width: 700px) {
        padding-right: 0;
      }
    }
  }
}

.content-block {
  header {
    color: rgba(0, 0, 0, 0.87);
    font-family: Archia, sans-serif;
    font-size: 16.26px;
    font-weight: bold;
    letter-spacing: 0.15px;
    line-height: 24px;
  }
  .c-content {
    p {
      opacity: 0.6;
      color: #111215;
      font-family: Rubik, sans-serif;
      font-size: 16.26px;
      letter-spacing: 0.5px;
      line-height: 28px;
      @media (max-width: 700px) {
        padding-right: 0;
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
}

.cta {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  color: #0072ff;
  font-family: Archia;
  font-size: 14.22px;
  font-weight: 500;
  letter-spacing: 1.25px;
  line-height: 16px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
