<template>
  <div class="home">
    <Navbar :user="userID" />
    <img src="../assets/right-shape.svg" alt class="side right" />
    <img src="../assets/left-shape.svg" alt class="side left" />
    <div class="wrapper">
      <h1 class="logoName">webmeet.</h1>
      <p>
        Expolore meeting about your favorit subjects from the comfort of your
        home
      </p>
      <p class="exp">
        scroll down
        <br />
        <span>&#x1F893;</span>
      </p>
    </div>
    <img src="../assets/laptop.svg" alt class="bottom-img" />
    <meetings :user="userID" />
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
  },
  data: () => {
    return {
      userID: ""
    };
  },
  created() {
    console.log(this.$route.params);
    this.userID = this.$route.params.id;
    console.log(this.userID, "userID");
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

    .exp {
      font-weight: bold;
      font-size: 0.8rem;
      margin-top: 3rem;
      color: #222;
      animation: expAnim 2s infinite;
    }

    @keyframes expAnim {
      0% {
        transform: translateY(0rem);
      }
      50% {
        transform: translateY(1rem);
      }
      100% {
        transform: translateY(0rem);
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
