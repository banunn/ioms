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
            "Electroencephalography is used to record and analyze the brain's spontaneous electrical activity. EEG’s also reveal, potential fluctuations in brain activity that may occur due to stimulus from surgical procedures."
        },
      ]
    }
  }
}
</script>
