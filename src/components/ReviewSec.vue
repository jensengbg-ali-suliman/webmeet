<template>
  <div class="review">
    <section class="imgSec">
      <div class="img"></div>
    </section>

    <section class="userInfo">
      <h4 class="user">{{ user }}</h4>
      <p class="text">{{ review }}</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    user: String,
    review: String,
  },
}
</script>

<style lang="scss" scoped>
.review {
  width: 40vw;
  height: 16vh;
  margin: 1rem 0rem;
  padding: 1rem;
  background: #f0f0f0;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;

  .img {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #aaa;
    margin: 0rem 2rem;
  }

  .userInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h4 {
      margin: 0.5rem 0rem;
    }
  }
}
</style>
