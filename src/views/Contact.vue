<template>
  <div class="about">
    <page-header :title="'Contact Us'" :image="'contactUs_hero_wGradient.png'"></page-header>
    <page-content>
      Hello Contact
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

</style>
