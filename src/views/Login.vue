<template>
  <div class="wrapper">
    <navbar />
    <div class="content">
      <section class="textContainer">
        <h1>welcome.</h1>
        <p>start creating your account by filling in your information</p>
      </section>
      <section class="userInfo">
        <div class="fullName">
          <article>
            <label for="firstName">first name</label>
            <input type="text" v-model="firstName" />
          </article>
          <article>
            <label for="lastName">last name</label>
            <input type="text" v-model="lastName" />
          </article>
        </div>

        <label for="email">your email</label>
        <input type="text" v-model="email" />

        <label for="password">password</label>
        <input type="password" v-model="password" />

        <label for="emailConf">confirm password</label>
        <input type="password" v-model="passwordConfirmation" />
        <button>continue</button>
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
@mixin flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  .content {
    padding: 6rem 8rem 0rem 8rem;
    width: 100%;
    @include flex();
    justify-content: flex-start;

    section {
      width: 50%;
      min-height: 60vh;
      @include flex();
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
    .textContainer {
      h1 {
        font-family: "Comfortaa", cursive;
        font-size: 2rem;
      }
      p {
        color: #aaa;
        margin-top: 0.6rem;
        width: 36ch;
        line-height: 1.4rem;
      }
    }

    .userInfo {
      @include flex();
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0rem 8rem 0rem 1rem;

      div {
        width: 100%;
        @include flex();
        justify-content: space-between;

        article {
          @include flex();
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        }

        &::first-letter {
          text-transform: uppercase;
        }
      }

      label {
        margin: 1.4rem 0rem 0.6rem 0rem;
        &::first-letter {
          text-transform: uppercase;
        }
      }

      input {
        width: 100%;
        padding: 1rem 0.9rem;
        border: none;
        background: #f5f5f5;
        border-radius: 6px;
        color: #888;
      }

      button {
        border: none;
        padding: 0.8rem 2rem;
        margin: 2rem 0rem;
        align-self: flex-end;
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