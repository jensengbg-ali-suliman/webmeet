<template>
  <nav>
    <img src="../assets/LOGO webmeet.svg" alt class="logo" />

    <a href class="link back">
      <span>&#x276E;</span> back
    </a>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 5rem;
  padding: 1rem 8rem;
  display: flex;
  justify-content: space-between;
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

    &:hover {
      color: #000;
      transform: translateY(-0.2rem);
    }
  }
  .back {
    color: #aaa;
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    font-weight: bold;

    span {
      margin-right: 1rem;
    }

    &:hover {
      color: #222;
    }
  }
}
</style>
