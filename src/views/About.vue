<template>
  <div class="about">
    <page-header :title="'About Us'" :image="'aboutUs_hero_wGradient.png'"></page-header>
    <page-content>
      <div class="two-col">
        <div>
          <div class="content-block">
            <header>Our Mission</header>
            <div class="c-content"><p>When learning to find the great constellations in the sky, we use the “find one, you found them all” system. That is because the easiest constellation to find will guide us to the rest of them. That constellation is The Big Dipper. Look to the northern sky on a clear night and widen your field of vision from just focusing on one star.</p></div>
          </div>
          <div class="content-block">
            <header>Our Philosophy</header>
            <div class="c-content">
              <p>Constellations also have been important in culture and navigation long before we had sophisticated systems of navigation. Early explorers, particularly by sea, relied exclusively on the night sky to help them find their way to their destination. In fact, when “Columbus sailed the ocean blue in 1492″ and “discovered” America, he could not have done it without astronomy and the help of navigation of the cosmos, much of which is made possible because of the important constellations.</p> 
<p>When learning to find the great constellations in the sky, we use the “find one, you found them all” system. That is because the easiest constellation to find will guide us to the rest of them. That constellation is The Big Dipper. Look to the northern sky on a clear night and widen your field of vision from just focusing on one star.</p></div>
          </div>
        </div>
        <div>
          <div class="content-block">
            <header>Our Staff</header>
            <div class="c-content">
              <p>Constellations also have been important in culture and navigation long before we had sophisticated systems of navigation. Early explorers, particularly by sea, relied exclusively on the night sky to help them find their way to their destination. In fact, when “Columbus sailed the ocean blue in 1492″ and “discovered” America, he could not have done it without astronomy and the help of navigation of the cosmos, much of which is made possible because of the important constellations.</p>
<p>When learning to find the great constellations in the sky, we use the “find one, you found them all” system. That is because the easiest constellation to find will guide us to the rest of them.</p>
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
    &:nth-child(1) {
      padding-right: 96px;
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
