<template>
  <div class="about">
    <page-header :title="'Our Services'" :image="'ourServices_hero_wGradient.png'"></page-header>
    <page-content>
        <header class="service-header">
          <h3 class="sub-head">Intraoperative Neurophysiological Monitoring (IONM) Services</h3>
          <p>Constellations also have been important in culture and navigation long before we had sophisticated systems of navigation. Early explorers, particularly by sea, relied exclusively on the night sky to help them find their way to their destination. In fact, when “Columbus sailed the ocean blue in 1492″ and “discovered” America, he could not have done it without astronomy and the help of navigation of the cosmos, much of which is made possible because of the important constellations.</p>
        </header>
        <div class="grid-container">
          <service-block :services="services"></service-block>
        </div>
    </page-content>
  </div>
</template>

<script>
import pageContent from "@/components/page-content";
import pageHeader from "@/components/page-header";
import serviceBlock from "@/components/service-page-grid/grid"
export default {
  name: "about",
  components: {
    pageContent,
    pageHeader,
    serviceBlock
  },
  props: {},
  data() {
    return {
      services: [
        {
          title: "SSEP",
          desc:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station."
        },
        {
          title: "EMG",
          desc:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station."
        },
        {
          title: "EGG",
          desc:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station."
        },
        {
          title: "VEP",
          desc:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station."
        },
        {
          title: "BAER",
          desc:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station."
        },
        {
          title: "Cortical Mapping",
          desc:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station."
        },
                {
          title: "TcMEP",
          desc:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station."
        },
                {
          title: "Endarterectomy",
          desc:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station."
        },
                {
          title: "Vestibulocochlear Procedures",
          desc:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station."
        }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.service-header {
  margin-bottom: 56px;
  .sub-head {
    color: rgba(0, 0, 0, 0.87);
    font-family: Archia;
    font-size: 16.26px;
    font-weight: bold;
    letter-spacing: 0.15px;
    line-height: 24px;
    margin:0;
  }
  p {
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
