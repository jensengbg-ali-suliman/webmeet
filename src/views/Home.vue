<template>
  <div class="home">
    <Navbar />
    <div class="wrapper">
      <h1 class="logoName">webmeet.</h1>
      <p>
        Expolore meeting about your favorit subjects from the comfort of your
        home
      </p>
      <!-- <div class="container">
        <Meeting />
        <Meeting />
        <Meeting />
      </div> -->
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
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h1 {
      margin-top: 10rem;
      text-align: center;
      font-family: 'Sacramento', cursive;
      font-size: 6rem;
    }

    p {
      text-align: center;
      max-width: 400px;
      color: #666;
      font-size: 1.2rem;
      line-height: 2rem;
    }

    .container {
      padding: 5rem 10rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
    }
  }
}
</style>
