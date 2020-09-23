<template>
  <div class="home">
    <div class="wrapper">
      <h1>This is the mainpage</h1>
      <div class="container">
        <Meeting />
        <Meeting />
        <Meeting />
      </div>
      {{ meetings }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Meeting from '@/components/Meeting.vue'
export default {
  name: 'Home',
  components: {
    Meeting,
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

  .container {
    padding: 5rem 10rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
