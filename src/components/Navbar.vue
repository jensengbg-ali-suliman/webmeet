<template>
  <nav>
    <img src="../assets/LOGO webmeet.svg" alt="" class="logo" />
    <a href="/" class="link">Main page</a>
    <a href="/my-meetings" class="link">My meetings</a>
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

  .login {
    margin-left: auto;
    font-weight: bold;
  }

  .signup {
    background: #faa916;
    color: #f6f6f6;
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    font-weight: bold;

    &:hover {
      color: #faa916;
      background: #f6f6f6;
      box-shadow: 2px 6px 8px #0001;
    }
  }
}
</style>
