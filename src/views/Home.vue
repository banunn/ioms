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
        }
      ]
    }
  }
}
</script>
