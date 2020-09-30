<template>
  <div class="meeting">
    <img src="https://picsum.photos/200?random=1" alt />
    <section class="info">
      <h3>{{ meeting.meetingName }}</h3>
      <p class="date">{{ meeting.meetingDate }} - {{ meeting.meetingTime }}</p>
      <p class="description">{{ meeting.meetingDescription }}</p>
      <button @click="showMeeting(meeting.meetingID)">more</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Meeting',
  props: {
    meeting: Object,
    user: String,
  },
  methods: {
    showMeeting: function(id) {
      this.$router.push('/meeting/' + id + '/' + this.user)
    },
  },
}
</script>

<style lang="scss" scoped>
.meeting {
  width: 20rem;
  min-height: 25rem;
  background: #fcfcfc;
  border-radius: 10px;
  transition: all 0.4s ease;
  margin: 1rem;

  img {
    width: 100%;
    height: 12rem;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .info {
    padding: 1rem 1.4rem;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h3 {
      margin-top: 0.4rem;
    }

    .date {
      color: #999;
      margin: 1.2rem 0rem 0.8rem 0rem;
      font-weight: bold;
    }

    .description {
      color: #666;
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

      &:hover {
        background: #e6e6e6;
        color: #f49f0a;
      }
    }
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 2px 6px 10px #0001;
  }
}
</style>
