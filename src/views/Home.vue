<template>
  <div class="home">
    <Navbar />
    <img src="../assets/right-shape.svg" alt class="side right" />
    <img src="../assets/left-shape.svg" alt class="side left" />
    <div class="wrapper">
      <h1 class="logoName">webmeet.</h1>
      <p>
        Expolore meeting about your favorit subjects from the comfort of your
        home
      </p>
      <button class="cta">explore</button>
    </div>
    <img src="../assets/laptop.svg" alt class="bottom-img" />
    <meetings />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Meetings from "@/components/Meetings.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Meetings,
    Navbar,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  .side {
    position: absolute;
    z-index: -10;
  }

  .right {
    top: 0;
    right: 0;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h1 {
      margin-top: 8rem;
      text-align: center;
      font-family: "Comfortaa", cursive;
      font-size: 3rem;
    }

    p {
      text-align: center;
      max-width: 400px;
      color: #666;
      font-size: 1.2rem;
      line-height: 2rem;
      margin: 1rem 0rem;
    }

    .cta {
      padding: 0.8rem 4rem;
      margin: 5rem 0rem 1rem 0rem;
      border: none;
      color: #f6f6f6;
      background: #faa916;
      font-weight: bold;
      border-radius: 5px;
      font-size: 1rem;
      transition: all 0.4s ease;
      cursor: pointer;

      &:hover {
        color: #faa916;
        background: #f6f6f6;
        box-shadow: 2px 6px 8px #0002;
        //transform: translateY(-0.4rem);
      }
    }
  }

  .bottom-img {
    margin: 2rem 0rem;
    align-self: flex-end;
    transform: scale(0.8);
    opacity: 1;
  }
}
</style>
