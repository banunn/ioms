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
            "The Somatosensory Evoked Potentials test provides information about how well the nerves that connect to the spinal cord are able to send and receive sensory information to and from the brain."
        },
        {
          title: "EMG",
          desc:
            "Electromyography is used to assess the health of muscles and the nerve cells that control them. EMG results can reveal nerve dysfunction, muscle dysfunction or problems with nerve-to-muscle signal transmission."
        },
        {
          title: "EGG",
          desc:
            "Electroencephalography is used to record and analyze the brain's spontaneous electrical activity. EEG’s also reveal, potential fluctuations in brain activity that may occure due to stimulus from surgical procedures."
        },
        {
          title: "VEP",
          desc:
            "Visual Evoked Potential measures the time that it takes for a visual stimulus to travel from the eye to the occipital cortex, and can detect subtle abnormalities along nerve pathways that may not be visible through other exams."
        },
        {
          title: "BAER",
          desc:
            "A Brainstem Auditory Evoked Response test measures how your brain processes the sounds you hear. The test can detect nervous system disorders by recording your brain’s response to auditory stimulus."
        },
        {
          title: "Cortical Mapping",
          desc:
            "Through direct stimulation of the cerebral cortext, Cortical Mapping exposes the relationship between cortical structure and systemic function, and reduces the risk of unnecessary functional damage during surgical manipulation."
        },
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
