<template>
  <footer>
    <h2>webmeet</h2>
    <div class="line"></div>
    <section class="links">
      <article class="profileLinks">
        <h3>profile</h3>
        <a href class="link">sign up</a>
        <a href class="link">log in</a>
        <a href class="link">help</a>
      </article>
      <article class="meetingsLinks">
        <h3>webmeet</h3>
        <a href class="link">meetings</a>
        <a href class="link">create a meeting</a>
      </article>
    </section>
    <section class="followUs">
      <h3>follow us</h3>
      <article>
        <a href class="socialLinks">
          <img src="../assets/instagram.svg" alt />
        </a>
        <a href class="socialLinks">
          <img src="../assets/facebook.svg" alt />
        </a>
        <a href class="socialLinks">
          <img src="../assets/twitter.svg" alt />
        </a>
      </article>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@mixin flex() {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
footer {
  width: 100%;
  min-height: 45vh;
  padding: 2rem;
  background: #253534;
  color: #f6f6f6;
  @include flex();

  h2 {
    font-size: 1.5rem;
    margin: 2rem 0rem 1.5rem 0rem;
  }

  .line {
    width: 60%;
    height: 1.2rem;
    border-top: 1.5px solid #fff3;
  }

  .links {
    @include flex();
    flex-direction: row;
    justify-content: space-between;
    width: 14rem;

    article {
      padding: 0rem 1rem;
      @include flex();
      align-items: flex-start;
      min-height: 9rem;

      h3 {
        margin: 0.4rem 0rem;
      }
      .link {
        color: #fff6;
        margin: 0.1rem 0rem;
        transition: all 0.4s ease;
        text-decoration: none;

        &:hover {
          color: #fffc;
          transform: translateY(-0.2rem);
        }
      }
    }
  }

  .followUs {
    padding: 1rem 0rem;
    min-width: 20rem;
    @include flex();
    article {
      padding: 1rem 0rem;
      a {
        margin: 0rem 1rem;

        img {
          opacity: 0.5;
          transition: all 0.4s ease;
          &:hover {
            opacity: 0.9;
            transform: translateY(-0.2rem);
          }
        }
      }
    }
  }
}
</style>