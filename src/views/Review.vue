<template>
  <div class="wrapper">
    <Navbar />
    <textarea
      type="text"
      class="textField"
      v-model="review"
      placeholder="Write your review here"
    />
    <button class="cta" @click="getMeeting">submit review</button>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar,
  },
  data: () => {
    return {
      review: '',
    }
  },
  created() {
    console.log(this.$route.params.user, this.$route.params.mID)
  },
  methods: {
    getMeeting: async function() {
      let id = this.$route.params.mID
      let url = `https://jsonbin.org/me/meetings`
      let API_KEY = 'token a9affd15-2f5d-4b80-8f19-531f96900ecf'
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          authorization: API_KEY,
        },
      })
      let data = await response.json()
      data.map((meeting) => {
        if (meeting.meetingID === id) {
          let i = data.indexOf(meeting)
          //this.sendReview(i)
          console.log(i)
        }
      })
      await console.log(data, 'meetingsDB', id)
    },

    sendReview: async function(i) {
      let reviewVal = this.review
      if (reviewVal === '') {
        alert('please enter some text')
      } else {
        let arr = [
          {
            user: this.$route.params.user,
            review: reviewVal,
          },
        ]
        let url = `https://jsonbin.org/me/meetings/${i}/reviews`
        let API_KEY = 'token a9affd15-2f5d-4b80-8f19-531f96900ecf'
        let response = await fetch(url, {
          method: 'POST',
          headers: {
            authorization: API_KEY,
          },
          body: JSON.stringify(arr),
        })
        let data = await response.json()
        console.log(data)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .textField {
    margin-top: 10%;
    background: #f6f6f6;
    border: none;
    border-radius: 10px;
    width: 40%;
    height: 30%;
    padding: 1.4rem;
    font-size: 1rem;
    font-weight: bold;
    color: #444;
    line-height: 1.6rem;
  }

  .cta {
    border: none;
    padding: 0.8rem 2rem;
    margin: 2rem 0rem;
    color: #f6f6f6;
    background: #faa916;
    font-weight: bold;
    border-radius: 5px;
    transition: all 0.4s ease;
    cursor: pointer;

    font-size: 1rem;
    &:hover {
      color: #faa916;
      background: #f6f6f6;
      box-shadow: 2px 6px 8px #0002;
      //transform: translateY(-0.4rem);
    }
  }
}
</style>
