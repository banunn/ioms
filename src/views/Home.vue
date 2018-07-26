<template>
  <div class="home">
    <home-hero></home-hero>
    <home-blocks></home-blocks>
    <home-services :services="services"></home-services>
    <home-mission></home-mission>
    <home-partners></home-partners>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHero from "@/components/home-hero"
import homeBlocks from "@/components/home-blocks"
import homeServices from "@/components/service-block/services"
import homeMission from "@/components/home-mission"
import homePartners from "@/components/home-partners"
export default {
  name: 'home',
  components: {
    homeHero,
    homeBlocks,
    homeServices,
    homeMission,
    homePartners
  },
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
        }
      ]
    }
  }
}
</script>
