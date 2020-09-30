<template>
  <div class="wrapper">
    <meetings-section meetingTag="IT - tech" :meetings="ithMeetings" :user="user" />
    <meetings-section meetingTag="Health awareness" :meetings="healthMeetings" :user="user" />
    <meetings-section meetingTag="Planning" :meetings="planningMeetings" :user="user" />
    <meetings-section meetingTag="Learning" :meetings="learningMeetings" :user="user" />
  </div>
</template>

<script>
import MeetingsSection from "@/components/MeetingsSection.vue";
export default {
  name: "Meetings",
  components: {
    MeetingsSection
  },
  props: {
    user: String
  },
  data: () => {
    return {
      meetings: [],
      ithMeetings: [],
      healthMeetings: [],
      planningMeetings: [],
      learningMeetings: []
    };
  },
  created() {
    this.getMeetings();
  },
  methods: {
    getMeetings: function() {
      fetch("https://api.jsonbin.io/b/5f6b3568302a837e956c0b81/3", {
        method: "GET",
        headers: {
          "secret-key":
            "$2b$10$JU3Aru2zmVBe81YgmOpOdeGXs2o1wG8/zScHJo64GAltQ44l5k/qG"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.meetings = data;
          this.filterMeetings(data);
        })
        .catch(err => console.log(err));
    },
    filterMeetings: function(data) {
      data.map(meeting => {
        if (meeting.meetingTag === "IT-tech") {
          this.ithMeetings.push(meeting);
        } else if (meeting.meetingTag === "Health awareness") {
          this.healthMeetings.push(meeting);
        } else if (meeting.meetingTag === "Goals and planning") {
          this.planningMeetings.push(meeting);
        } else if (meeting.meetingTag === "Learning") {
          this.learningMeetings.push(meeting);
        }
      });
      console.log([
        this.ithMeetings,
        this.healthMeetings,
        this.planningMeetings,
        this.learningMeetings
      ]);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 4rem 8rem;
  width: 100%;
  min-height: 70vh;
}
</style>