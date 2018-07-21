<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <site-footer />
  </div>
</template>

<script>
import navBar from '@/components/nav-bar'
import siteFooter from '@/components/footer'
export default {
  name: 'app',
  components: {
    navBar,
    siteFooter
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin:0;
  padding:0;
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;

}

h1,h2,h3,h4,h5 {
  font-family: Archia, sans-serif;
}

.wrap {
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
