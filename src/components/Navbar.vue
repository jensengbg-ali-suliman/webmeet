<template>
  <nav>
    <img src="../assets/LOGO webmeet.svg" alt="" class="logo" />
    <a href="/" class="link">MAIN PAGE</a>
    <a href="/my-meetings" class="link">MY MEETINGS</a>
    <a href="" class="link login">Log in</a>
    <a href="" class="link signup">Sign up</a>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 5rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .logo {
    transform: scale(0.8);
  }

  .link {
    padding: 1rem;
    margin: 0rem 1rem;
    font-size: 14px;
    text-decoration: none;
    color: #666;
  }

  .login {
    margin-left: auto;
  }
}
</style>
