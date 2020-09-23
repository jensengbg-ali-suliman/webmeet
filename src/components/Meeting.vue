<template>
  <div class="meeting">
    <img src="https://picsum.photos/200?random=1" alt="" />
    <section class="info">
      <h3>Lorem, ipsum dolor.</h3>
      <p class="date">WED, SEP 09:00 AM</p>
      <p class="description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button>more</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Meeting',
  created() {
    fetch('https://api.jsonbin.io/b/5f6b3568302a837e956c0b81', {
      method: 'GET',
      headers: {
        'secret-key':
          '$2b$10$JU3Aru2zmVBe81YgmOpOdeGXs2o1wG8/zScHJo64GAltQ44l5k/qG',
      },
    }).then((response) => response.json())
    //.then((data) => console.log(data))
  },
}
</script>

<style lang="scss" scoped>
.meeting {
  width: 20rem;
  height: 25rem;
  background: #fcfcfc;
  border-radius: 10px;
  transition: all 0.4s ease;
  margin: 0rem 1rem;

  img {
    width: 100%;
    height: 50%;
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
    }
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 2px 6px 10px #0002;
  }
}
</style>
