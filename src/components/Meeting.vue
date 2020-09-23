<template>
  <div class="wrapper">
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, non
      libero in veritatis officia at repudiandae ipsam placeat laboriosam nobis.
    </p>
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
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  },
}
</script>

<style lang="scss">
.wrapper {
  h3 {
    color: red;
  }
}
</style>
