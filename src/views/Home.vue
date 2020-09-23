<template>
  <div class="home">
    <Navbar />
    <img src="../assets/right-shape.svg" alt="" class="side right" />
    <img src="../assets/left-shape.svg" alt="" class="side left" />
    <div class="wrapper">
      <h1 class="logoName">webmeet.</h1>
      <p>
        Expolore meeting about your favorit subjects from the comfort of your
        home
      </p>
      <button class="cta">explore</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Meeting from '@/components/Meeting.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    // Meeting,
    Navbar,
  },
  created() {
    this.getMeetings()
  },
  data: () => {
    return {
      meetings: 'asdasd',
    }
  },
  methods: {
    getMeetings: async function() {
      const response = await fetch(
        'https://api.jsonbin.io/b/5f6b3568302a837e956c0b81',
        {
          method: 'GET',
          headers: {
            'secret-key':
              '$2b$10$JU3Aru2zmVBe81YgmOpOdeGXs2o1wG8/zScHJo64GAltQ44l5k/qG',
          },
        }
      )
      const data = await response.json()
      console.log(data)
      this.meetings = data
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;

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
      font-family: 'Comfortaa', cursive;
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
      margin: 5rem 0rem 0rem 0rem;
      border: none;
      color: #f6f6f6;
      background: #faa916;
      font-weight: bold;
      border-radius: 5px;
      font-size: 1rem;
    }
  }
}
</style>
