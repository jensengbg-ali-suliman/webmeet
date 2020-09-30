<template>
  <div class="wrapper">
    <Navbar :user="userID" />

    <div class="content">
      <section class="container">
        <h2>Up coming</h2>
        <BookedMeeting
          v-for="meeting in myMeetings"
          :key="meeting.meetingID"
          :user="userID"
          :meeting="meeting"
        />
      </section>
      <section class="attended">
        <h2>Attended</h2>
        <OldMeeting
          v-for="meeting in attendedMeetings"
          :key="meeting.meetingID"
          :userID="userID"
          :meeting="meeting"
        />
      </section>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import BookedMeeting from '@/components/BookedMeeting.vue'
import OldMeeting from '@/components/OldMeeting.vue'
export default {
  components: {
    Navbar,
    Footer,
    BookedMeeting,
    OldMeeting,
  },
  data: () => {
    return {
      userID: '',
      myMeetings: '',
      attendedMeetings: '',
    }
  },
  created() {
    this.userID = this.$route.params.user
    this.getMyMeetings()
    this.postData()
  },
  methods: {
    getMyMeetings: async function() {
      let url = 'https://jsonbin.org/me/users'
      let API_KEY = 'token a9affd15-2f5d-4b80-8f19-531f96900ecf'
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          authorization: API_KEY,
        },
      })
      let data = await response.json()
      data.map((user) => {
        if (user.userID === this.userID) {
          this.myMeetings = user.meetingsToAttend
          this.attendedMeetings = user.attendedMeetings
          console.log(this.myMeetings)
        }
      })
    },

    postData: async function() {
      let url = 'https://jsonbin.org/me/meetings'
      let API_KEY = 'token a9affd15-2f5d-4b80-8f19-531f96900ecf'
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          authorization: API_KEY,
        },
      })
      let data = await response.json()
      await console.log(data, 'meetingsDB')
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin flex() {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.wrapper {
  width: 100vw;
  min-height: 100vh;
  @include flex();

  .content {
    width: 100%;
    min-height: 80vh;
    padding: 4rem 8rem;
    @include flex();
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    section {
      width: 50%;
      @include flex();
      justify-content: flex-start;
      align-items: flex-start;
    }

    h2 {
      color: #444;
      width: 12rem;
      padding: 0.8rem 0rem;
      margin: 2rem 0rem 2rem 0rem;
      border-bottom: 2.3px solid #888;
    }
  }
}
</style>
