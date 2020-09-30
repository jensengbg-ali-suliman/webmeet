<template>
  <div class="bookedmeeting">
    <img src="https://picsum.photos/140/140?random=1" alt />
    <section class="meetingInfo">
      <h3>{{ meeting.meetingName }}</h3>
      <p>{{ meeting.meetingDate }} {{ meeting.meetingTime }}</p>
      <button class="review" @click="leaveReview(meeting.meetingID, userID)">
        review
      </button>
      <button class="delete" @click="getUser(meeting.meetingID)">delete</button>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    meeting: Object,
    userID: String,
  },

  methods: {
    getUser: async function(meetingID) {
      let userID = this.$route.params.user
      console.log(userID)
      let url = 'https://jsonbin.org/me/users'
      let API_KEY = 'token a9affd15-2f5d-4b80-8f19-531f96900ecf'

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          authorization: API_KEY,
        },
      })
      let result = await res.json()
      result.map((user) => {
        if (user.userID === userID) {
          let index = result.indexOf(user)
          this.getUserMeetings(index, meetingID)
        }
      })
    },
    getUserMeetings: async function(i, meetingID) {
      let url = 'https://jsonbin.org/me/users/' + i + '/meetingsToAttend'
      let API_KEY = 'token a9affd15-2f5d-4b80-8f19-531f96900ecf'

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          authorization: API_KEY,
        },
      })

      let result = await res.json()
      result.map((meeting) => {
        if (meeting.meetingID === meetingID) {
          let meetingIndex = result.indexOf(meeting)
          this.deleteMeeting(i, meetingIndex)
        }
      })
    },
    deleteMeeting: async function(i, mI) {
      let url = 'https://jsonbin.org/me/users/' + i + '/meetingsToAttend/' + mI
      let API_KEY = 'token a9affd15-2f5d-4b80-8f19-531f96900ecf'

      const res = await fetch(url, {
        method: 'DELETE',
        headers: {
          authorization: API_KEY,
        },
      })
      console.log(res)
      location.reload()
    },
  },
}
</script>

<style lang="scss" scoped>
.bookedmeeting {
  margin: 1rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.4s ease;
  border-radius: 8px;

  img {
    border-radius: 8px;
  }

  .meetingInfo {
    margin: 0rem 6rem 0rem 2rem;

    h3 {
      color: #444;
    }

    p {
      margin: 0.4rem 0rem;
      color: #888;
    }
  }

  button {
    align-self: flex-end;
    margin-top: 1rem;
    padding: 0.4rem 1.2rem;
    background: #f49f0a;
    border: none;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.4s ease;
    font-weight: bold;
  }

  .review {
    &:hover {
      background: #e6e6e6;
      color: #f49f0a;
    }
  }

  .delete {
    background: none;
    color: #e95252;
    margin: 0rem 1rem;
    opacity: 0.6;
    font-weight: bold;

    &:hover {
      opacity: 1;
    }
  }

  &:hover {
    background: #fdfdfd;
    transform: translateY(-2px);
    box-shadow: 2px 6px 10px #0001;
  }
}
</style>
