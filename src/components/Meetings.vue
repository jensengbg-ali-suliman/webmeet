<template>
  <div class="wrapper">
    <meetings-section
      meetingTag="IT - tech"
      :meetings="ithMeetings"
      :user="user"
    />
    <meetings-section
      meetingTag="Health awareness"
      :meetings="healthMeetings"
      :user="user"
    />
    <meetings-section
      meetingTag="Planning"
      :meetings="planningMeetings"
      :user="user"
    />
    <meetings-section
      meetingTag="Learning"
      :meetings="learningMeetings"
      :user="user"
    />
  </div>
</template>

<script>
import MeetingsSection from '@/components/MeetingsSection.vue'
export default {
  name: 'Meetings',
  components: {
    MeetingsSection,
  },
  props: {
    user: String,
  },
  data: () => {
    return {
      meetings: [],
      ithMeetings: [],
      healthMeetings: [],
      planningMeetings: [],
      learningMeetings: [],
    }
  },
  created() {
    this.getMeetings()
  },
  methods: {
    getMeetings: async function() {
      let url = 'https://jsonbin.org/me/meetings'
      let API_KEY = 'token a9affd15-2f5d-4b80-8f19-531f96900ecf'
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          authorization: API_KEY,
        },
      })
      const data = await response.json()

      this.meetings = data
      this.filterMeetings(data)
    },
    filterMeetings: function(data) {
      data.map((meeting) => {
        if (meeting.meetingTag === 'IT-tech') {
          this.ithMeetings.push(meeting)
        } else if (meeting.meetingTag === 'Health awareness') {
          this.healthMeetings.push(meeting)
        } else if (meeting.meetingTag === 'Goals and planning') {
          this.planningMeetings.push(meeting)
        } else if (meeting.meetingTag === 'Learning') {
          this.learningMeetings.push(meeting)
        }
      })
      console.log([
        this.ithMeetings,
        this.healthMeetings,
        this.planningMeetings,
        this.learningMeetings,
      ])
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 4rem 8rem;
  width: 100%;
  min-height: 70vh;
}
</style>
