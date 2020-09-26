<template>
  <div class="meetings">
    <h1>{{ meetingTag }}</h1>
    <section class="meetingsSection">
      <meeting v-for="meeting in meetings" :key="meeting.meetingId" :meeting="meeting" />
    </section>
  </div>
</template>

<script>
import Meeting from "@/components/Meeting.vue";
export default {
  name: "MeetingsSection",
  props: {
    meetingTag: String,
    meetings: Array
  },
  components: {
    Meeting
  }
};
</script>

<style lang="scss" scoped>
.meetings {
  width: 100%;
  min-height: 60vh;

  .meetingsSection {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 6rem 4rem;
  }
}
</style>