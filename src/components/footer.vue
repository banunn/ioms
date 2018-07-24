<template>

<footer class="site-foot">
<div class="wrap">
  <div class="meta">
    <div class="links">
      <router-link class="link" to="/">Home</router-link>
      <router-link  class="link" to="/about">About Us</router-link>
      <router-link  class="link" to="/services">Our Services</router-link>
    </div>
    <div class="copy">
      <span>© 2018 Intraoperative Monitoring Services, LLC.</span>
      <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>
    </div>
  </div>
  <div class="contact">
    <span class="title">Intraoperative Monitoring Services, LLC</span>
    <address>
      <span>P.O. Box 1430</span>
      <span>Jenks, OK 74037</span>
      </address>
    <div class="phone">
      <dl>
        <div>
          <dt>P</dt>
          <dd>(918) 494-9210</dd>
        </div>
        <div>
          <dt>F</dt>
          <dd>(918) 481-7611</dd>
        </div>
      </dl>
      <a href="mailto:info@iomsllc.com" target="_blank" class="email">info@iomsllc.com</a>
    </div>
  </div>
</div>
</footer>
</template>

<script>
export default {
  name: "this",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.site-foot {
  height: 360px;
  background-color: #191b1f;
  padding: 90px 0;
    @media(max-width: 700px) {
      height :inherit;
    }

}

.wrap {
  display: flex;
    @media(max-width: 700px) {
      flex-direction: column-reverse;
    }
}

.meta {
  flex: 4;
}
.contact {
  flex: 2;
  padding-left: 48px;
  margin-left: 96px;
  border-left: 1px solid #00C6FF;
        @media(max-width: 700px) {
text-align: center;
    }
  position: relative;
    @media(max-width: 700px) {
     border-left: none;
     border-bottom: 1px solid #00c6ff;
     margin: 0;
     padding:0;
     margin-bottom: 48px;
     padding-bottom: 48px;
     display: flex;
     flex-direction: column;
     align-items: center;
    }
  &:before {
    content: '';
    position: absolute;
    top:0;
    left:-96px;
    background: url('../assets/logo_stamp.png') center center ;
    height :48px;
    width: 48px;
    @media(max-width: 700px) {
     display :none;
    }
  }
}

.links {
  display: flex;
  margin-bottom: 50px;
      @media(max-width: 700px) {
      justify-content: center;
    }
  .link {
    font-family: Archia;
    font-size: 14.22px;
    font-weight: 600;
    letter-spacing: 1.25px;
    line-height: 16px;
    cursor: pointer;
    margin-right: 48px;
    color: rgba(#fff, 0.85);
    text-decoration: none;
    text-transform: uppercase;
          @media(max-width: 700px) {
text-align: center;
    }
    &:hover {
      color: #fff;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
}

.copy {
  color: rgba(#fff, 0.3);
      @media(max-width: 700px) {
text-align: center;
    }
  span {
    font-family: Rubik;
    font-size: 14.22px;
    letter-spacing: 0.25px;
    line-height: 20px;
  }
  p {
    margin: 0;
    font-family: Archia;
    font-size: 12.19px;
    letter-spacing: 0.4px;
    line-height: 16px;
  }
}

.title {
  color: #ffffff;
  font-family: Archia;
  font-size: 14.22px;
  font-weight: bold;
  letter-spacing: 1.25px;
  line-height: 16px;
  margin-bottom: 12px;
  display: block;
}

address {
  opacity: 0.4;
  color: #ffffff;
  font-family: Rubik;
  font-size: 14.22px;
  font-weight: 500;
  letter-spacing: 0.55px;
  line-height: 18px;
  display: flex;
  flex-direction: column;
  font-style: normal;
}

dl {
  opacity: 0.4;
  color: #ffffff;
  font-family: Rubik;
  font-size: 14.22px;
  letter-spacing: 0.75px;
  line-height: 16px;
  > div {
    display: flex;
    margin-bottom: 8px;
    dt {
      margin: 0;
      padding: 0;
      margin-right: 12px;
    }
    dd {
      margin: 0;
      padding: 0;
    }
  }
}

.email {
  color: #00c6ff;
  font-family: Rubik;
  font-size: 14.22px;
  font-weight: 500;
  letter-spacing: 1.25px;
  line-height: 16px;
  text-decoration: none;
}
</style>
