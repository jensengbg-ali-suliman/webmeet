<template>
  <div class="wrapper">
    <navbar />
    <div class="contents">
      <section class="textContainer">
        <h2>welcome.</h2>
        <p>start creating your account by filling in your information</p>
      </section>
      <section class="userInfo">
        <section class="fullName">
          <article>
            <label for="firstName">first name</label>
            <input type="text" v-model="firstName" />
          </article>
          <article>
            <label for="lastName">last name</label>
            <input type="text" v-model="lastName" />
          </article>
        </section>

        <label for="email">your email</label>
        <input type="text" v-model="email" />

        <label for="password">password</label>
        <input type="text" v-model="password" />

        <label for="emailConf">confirm password</label>
        <input type="text" v-model="passwordConfirmation" />
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    };
  }
};
</script>

<style lang="scss" scoped>
</style>