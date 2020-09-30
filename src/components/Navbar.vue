<template>
  <nav>
    <img
      src="../assets/LOGO webmeet.svg"
      alt
      class="logo"
      @click="routeToHome"
    />
    <a href class="link mainPage" @click="routeToHome">Main page</a>
    <a href class="link myMeetings" @click="routeToMyMeetigs">My meetings</a>
    <a href class="link logout" @click="routeToLogin">Log out</a>
  </nav>
</template>

/* make the meetings link visible if data var "loggedIn" is true */

<script>
export default {
  name: 'Navbar',
  props: {
    user: String,
  },
  methods: {
    routeToHome: function() {
      this.$router.push('/home/' + this.user)
    },
    routeToLogin: function() {
      this.$router.push('/login')
    },
    routeToMyMeetigs: function() {
      this.$router.push('/mymeetings/' + this.user)
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 5rem;
  padding: 1rem 8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .logo {
    transform: scale(0.8);
  }

  .link {
    padding: 0.5rem;
    margin: 0rem 1rem;
    font-size: 14px;
    text-decoration: none;
    color: #aaa;
    transition: all 0.4s ease;
    font-weight: bold;

    &:nth-child(2) {
      margin-left: 4rem;
    }

    &:hover {
      color: #000;
      transform: translateY(-0.2rem);
    }
  }

  .logout {
    margin-left: auto;
    font-weight: bold;
  }
}
</style>
