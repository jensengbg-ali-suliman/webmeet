<template>
  <div class="wrapper">
    <div class="content">
      <section class="textContainer">
        <p class="welcome">welocome to</p>
        <h1>webmeet.</h1>
        <p>
          Your new favorite meeting platform.
          <br />start creating your account by filling in your information.
        </p>
        <p class="link">
          already have an account
          <a href="/login">log in</a>
        </p>
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
        <input type="email" v-model="email" />

        <label for="password">password</label>
        <input type="password" v-model="password" />

        <label for="emailConf">confirm password</label>
        <input type="password" v-model="passwordConfirmation" />
        <button @click="sendUserInfo">continue</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      user: {}
    };
  },

  methods: {
    sendUserInfo: function() {
      if (this.password === this.passwordConfirmation) {
        let ID = (
          this.firstName +
          this.lastName.charAt(0).toUpperCase() +
          this.lastName.slice(1)
        ).replace(/ /g, "");
        let userToSend = {
          firstName:
            this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1),
          lastName:
            this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1),
          userID: ID,
          emailAdress: this.email,
          password: this.password,
          meetingsToAttend: [],
          attendedMeetings: []
        };
        this.sendUserToDB(userToSend);
        this.user = userToSend;
      } else {
        alert("Make sure the two passwords you entered match");
      }
    },
    sendUserToDB: async function(userToSend) {
      let url = "https://jsonbin.org/me/users";
      let API_KEY = "token a9affd15-2f5d-4b80-8f19-531f96900ecf";

      const res = await fetch(url, {
        method: "PATCH",
        headers: {
          authorization: API_KEY
        },
        body: JSON.stringify(userToSend)
      });
      let result = await res.json();
      console.log(result);
      this.$router.push("/home/" + userToSend.userID);
    }
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
  width: 100%;
  height: 100vh;
  .content {
    padding: 6rem 8rem 0rem 8rem;
    width: 100%;
    height: 100%;
    @include flex();
    align-items: flex-start;

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
        font-size: 3rem;
        margin-top: 0.2rem;
      }
      p {
        color: #666;
        margin-top: 0.6rem;
        width: 36ch;
        line-height: 1.4rem;
      }

      .welcome {
        font-size: 0.8rem;
        color: #222;
        font-weight: bold;
      }

      .link {
        margin-top: auto;
        color: #222;
        font-weight: bold;

        a {
          margin: 0rem 1rem;
          color: rgb(24, 103, 199);
        }
      }
    }

    .userInfo {
      @include flex();
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0rem 8rem 0rem 1rem;

      .fullName {
        article {
          width: 45%;
        }

        input {
          width: 100%;
        }
      }

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
        color: #afafaf;
        font-weight: bold;

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
        color: #222;
        font-size: 1rem;
        font-weight: bold;
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