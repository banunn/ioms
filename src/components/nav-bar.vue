<template>
  <div :class="{'transparent': homeBar}" class="top-nav">
      <div class="wrap">
      <section @click="goHome" class="brand">
            <img src="../../public/img/ioms_logo.svg" alt="IOMS Logo">
      </section>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About IOMS</router-link>
            <router-link to="/services">Our Services</router-link>
            <router-link to="/contact">Contact Us</router-link>
            <button @click="navOpen = !navOpen" class="menu-btn offscreen-btn"><i class="material-icons">menu</i></button>
        </nav>
      </div>
      <transition name="slide">
      <div v-if="navOpen" class="off-screen">
          <header>
              <button @click="navOpen = !navOpen" class="menu-btn"><i class="material-icons">clear</i></button>
          </header>
          <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About IOMS</router-link>
            <router-link to="/services">Our Services</router-link>
            <router-link to="/contact">Contact Us</router-link>
          </nav>
      </div>
      </transition>
  </div>
</template>

<script>
export default {
  name: "top-nav",
  props: {},
  data() {
    return {
      navOpen: false,
      scrollPosition: null,
      homeBar: false
    };
  },
  computed: {
    home() {
      return this.$store.state.route.name === "home";
    },
    route() {
        return this.$store.state.route;
    }
  },
  methods: {
    handleScroll: function(event) {
      if(this.home && window.scrollY > 150) {
          this.homeBar = false;
      }
      if(this.home && window.scrollY < 150) {
          this.homeBar = true;
      }
    },
    goHome() {
      this.$router.push('./');
    }
  },

  created: function() {
    window.addEventListener("scroll", this.handleScroll);
    if(this.home) {
        this.homeBar = true;
    }
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
      route(newVal, oldVal) {
          if(newVal.name != 'home') {
              this.homeBar = false;
          }
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top-nav {
  height: 72px;
  width: 100%;
  background-color: #191b1f;
  position: fixed;
  top: 0;
  z-index: 500;
  transition: background-color .24s ease;
  &.transparent {
      background-color: transparent;
  }
}

.wrap {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.brand {
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    transform: translateY(6px);
  }
}

nav {
  display: flex;
  align-items: flex-end;
  @media (max-width: 700px) {
    align-items: center;
  }
  a {
    color: rgba(#fff, 0.6);
    font-family: "Archia", sans-serif;
    font-size: 14.22px;
    font-weight: 600;
    letter-spacing: 1.25px;
    line-height: 16px;
    padding: 16px;
    text-transform: uppercase;
    text-decoration: none;
    &.router-link-exact-active {
      color: #fff;
      box-shadow: inset 0 -3px 0 #00c6ff;
    }
    @media (max-width: 700px) {
      display: none;
    }
  }
}

.menu-btn {
  padding: 0;
  -webkit-appearance: none;
  background: none;
  border: none;
  border-radius: 3px;
  padding: 8px;
  i {
    color: #fff;
  }
}

.off-screen {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 75vw;
  background-color: #191b1f;
  box-shadow: -12px 0px 15px 2px #00000029;
  header {
    height: 72px;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 16px;
  }
  nav {
    display: flex;
    flex-direction: column;
    a {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 48px;
      color: rgba(#fff, 0.6);
      padding: 0 24px;
      &.router-link-exact-active {
        color: #fff;
        box-shadow: inset 3px 0px 0 #00c6ff;
        background: linear-gradient(to left, #000, #191b1f);
      }
    }
  }
}

.offscreen-btn {
  display: none;
  @media (max-width: 700px) {
    display: inherit;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform: translate3d(0, 0%, 0);
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(100%, 0, 0);
}
</style>
