<template>
  <div class="bookedmeeting">
    <img src="https://picsum.photos/140/140?random=1" alt />
    <section class="meetingInfo">
      <h3>{{ meeting.meetingName}}</h3>
      <p>{{ meeting.meetingDate }} {{ meeting.meetingTime }}</p>
      <button class="review" @click="leaveReview(meeting.meetingID, userID)">review</button>
      <button class="delete">delete</button>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    meeting: Object,
    userID: String
  }
};
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
    background: #fafafa;
    transform: translateY(-6px);
    box-shadow: 2px 6px 10px #0002;
  }
}
</style>