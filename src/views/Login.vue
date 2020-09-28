<template>
  <div class="wrapper">
    <Navbar />
    <section class="container">
      <article class="emailSection">
        <label for="email">Email</label>
        <input type="email" v-model="userEmail" />
      </article>
      <article class="passwordSection">
        <label for="password">Password</label>
        <input type="password" v-model="userPass" />
      </article>
      <button class="login" @click="checkUser">login</button>
    </section>
    <section class="error" v-if="errorMessage">
      <h3>Error!</h3>
      <p>you have entered a wrong email or password, please try again!</p>
    </section>
  </div>
</template>

<script>
import NavbarMeeting from "@/components/NavbarMeeting.vue";
export default {
  components: {
    Navbar: NavbarMeeting
  },
  data: () => {
    return {
      userEmail: "",
      userPass: "",
      errorMessage: false
    };
  },
  methods: {
    checkUser: async function() {
      let url = "https://api.jsonbin.io/b/5f71afbc65b18913fc552bd6/2";
      let API_KEY =
        "$2b$10$JU3Aru2zmVBe81YgmOpOdeGXs2o1wG8/zScHJo64GAltQ44l5k/qG";
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "secret-key": API_KEY
        }
      });
      let data = await response.json();
      console.log(data);
      data.users.map(user => {
        if (
          user.emailAdress === this.userEmail &&
          user.password === this.userPass
        ) {
          console.log("USER IDENTIFIED", user);
          this.errorMessage = false;
          this.$router.push("/home/" + user.userID);
        } else {
          console.log("NO SUCH USER!");
          this.errorMessage = true;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin flex() {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.wrapper {
  width: 100vw;
  height: 100vh;
  @include flex();

  .container {
    padding: 4rem;
    @include flex();
    align-items: flex-start;

    article {
      margin: 0.2rem 0rem;
      @include flex();
      align-items: flex-start;

      label {
        margin: 1.4rem 0rem 0.6rem 0rem;
        color: #afafaf;
        font-weight: bold;

        &::first-letter {
          text-transform: uppercase;
        }
      }

      input {
        width: 26rem;
        padding: 1rem 0.9rem;
        border: none;
        background: #f5f5f5;
        border-radius: 6px;
        color: #222;
        font-size: 1rem;
      }

      input[type="password"] {
        letter-spacing: 0.2rem;
        font-weight: bold;
      }
    }

    .login {
      border: none;
      padding: 0.8rem 2rem;
      margin: 2rem 0rem;
      align-self: flex-end;
      color: #f6f6f6;
      background: #faa916;
      font-weight: bold;
      border-radius: 5px;
      transition: all 0.4s ease;
      cursor: pointer;

      font-size: 1rem;
      &:hover {
        color: #faa916;
        background: #f6f6f6;
        box-shadow: 2px 6px 8px #0002;
        //transform: translateY(-0.4rem);
      }
    }
  }

  .error {
    width: 30rem;
    height: 8rem;
    padding: 1.4rem 2rem;
    border-radius: 5px;
    color: #e95252;
    @include flex();
    align-items: flex-start;
    transition: all 0.4s ease;

    h3 {
      font-family: "Comfortaa", cursive;
      margin: 0.5rem 0rem;
    }

    p {
      opacity: 0.8;
      font-weight: bold;
    }
  }
}
</style>