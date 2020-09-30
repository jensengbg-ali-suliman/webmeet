<template>
  <div class="wrapper meetingView">
    <Navbar :user="userID" />

    <div class="container">
      <section class="aboutMeeting">
        <img src="https://picsum.photos/680/350" alt />
        <article>
          <h3>about the meeting</h3>
          <p>{{ meeting.meetingAbout }}</p>
        </article>
      </section>
      <section class="specsMeeting">
        <article class="dateSection">
          <img src="../assets/clock.svg" alt />
          <p class="date">{{ meeting.meetingDate}}</p>
          <p class="time">{{ meeting.meetingTime}}</p>
        </article>
        <article class="location">
          <img src="../assets/location.svg" alt class="locationSvg" />
          <p>Somelocation 1122, Göteborg 43 221</p>
        </article>
        <h3>{{ meeting.detaildName }}</h3>
        <button class="cta" @click="addMeetingToUser">attend</button>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  data: () => {
    return {
      userID: "",
      meetingID: "",
      meeting: ""
    };
  },
  created() {
    this.userID = this.$route.params.user;
    this.meetingID = this.$route.params.id;
    this.getMeetingInfo(this.meetingID);
  },
  methods: {
    getMeetingInfo: async function(id) {
      let url = "https://api.jsonbin.io/b/5f6b3568302a837e956c0b81/3";
      let API_KEY =
        "$2b$10$JU3Aru2zmVBe81YgmOpOdeGXs2o1wG8/zScHJo64GAltQ44l5k/qG";
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "secret-key": API_KEY
        }
      });
      let data = await response.json();
      data.map(meeting => {
        if (meeting.meetingID === id) {
          this.meeting = meeting;
        }
      });
      console.log(this.meeting);
    },
    addMeetingToUser: async function() {
      let url = "https://jsonbin.org/me/users";
      let API_KEY = "token a9affd15-2f5d-4b80-8f19-531f96900ecf";

      const res = await fetch(url, {
        method: "GET",
        headers: {
          authorization: API_KEY
        }
      });
      let result = await res.json();
      result.map(user => {
        if (user.userID === this.userID) {
          let index = result.indexOf(user);
          console.log(index);
          this.sendMeeting(index);
        }
      });
      console.log(result);
    },

    sendMeeting: async function(i) {
      let meetingToSend = {
        meetingID: this.meeting.meetingID,
        meetingName: this.meeting.meetingName,
        meetingDate: this.meeting.meetingDate,
        meetingTime: this.meeting.meetingTime
      };
      let url = "https://jsonbin.org/me/users/" + i + "/meetingsToAttend";
      let API_KEY = "token a9affd15-2f5d-4b80-8f19-531f96900ecf";

      const res = await fetch(url, {
        method: "PATCH",
        headers: {
          authorization: API_KEY
        },
        body: JSON.stringify(meetingToSend)
      });
      console.log(res);
      alert("Meeting have been added to your meetings!");
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin flex() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  .container {
    width: 100%;
    @include flex();
    align-items: flex-start;
    padding: 2rem 10rem;
    margin: 2rem 0rem;

    .aboutMeeting {
      width: 70%;
      min-height: 70vh;
      @include flex();
      flex-direction: column;
      align-items: flex-start;

      h3 {
        margin: 2rem 0rem 1rem 0rem;
        &::first-letter {
          text-transform: uppercase;
        }
      }

      p {
        line-height: 1.4rem;
        color: #666;
        width: 80%;
      }

      img {
        max-width: 100%;
      }
    }

    .specsMeeting {
      width: 30%;
      min-height: 30rem;
      @include flex();
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 3rem 0rem 0rem 3rem;

      .location {
        width: 14rem;
        margin-left: -0.3rem;
        line-height: 1.6rem;
      }

      article {
        width: 100%;
        @include flex();
        justify-content: flex-start;
        margin: 0.5rem 0rem;
        color: #bbb;
        font-weight: bold;

        img {
          margin-right: 1rem;
        }

        .time {
          margin-left: auto;
        }
      }

      h3 {
        margin: 2.5rem 0rem;
        line-height: 1.8rem;
        max-width: 14rem;
        text-transform: capitalize;
      }

      .cta {
        text-transform: uppercase;
        align-self: flex-end;
        padding: 0.6rem 3rem;
        margin-top: auto;
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
  }
}
</style>