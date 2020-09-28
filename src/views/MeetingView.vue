<template>
  <div class="wrapper meetingView">
    <NavbarMeeting />

    <div class="container">
      <section class="aboutMeeting">
        <img src="https://picsum.photos/700/400" alt />
        <article>
          <h3>about the meeting</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempora vel nulla fugiat illum dicta quia veniam quasi inventore. Asperiores consequuntur cupiditate odit ipsa quidem, laborum numquam et porro repudiandae vel soluta, corporis laboriosam praesentium. Quia possimus ullam dolorum dolore!</p>
        </article>
      </section>
      <section class="specsMeeting">
        <article class="dateSection">
          <img src="../assets/clock.svg" alt />
          <p class="date">WED - SEP 20</p>
          <p class="time">09:00 AM</p>
        </article>
        <article class="location">
          <img src="../assets/location.svg" alt class="locationSvg" />
          <p>Somelocation 1122, Göteborg 43 221</p>
        </article>
        <h3>meeting detaild Name</h3>
        <button class="cta">attend</button>
      </section>
    </div>
  </div>
</template>

<script>
import NavbarMeeting from "@/components/NavbarMeeting.vue";
export default {
  components: {
    NavbarMeeting
  }
};
</script>

<style lang="scss" scoped>
@mixin flex() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  .container {
    width: 100%;
    @include flex();
    align-items: flex-start;
    padding: 2rem 10rem;
    margin: 2rem 0rem;

    .aboutMeeting {
      width: 70%;
      min-height: 70vh;
      @include flex();
      flex-direction: column;
      align-items: flex-start;

      h3 {
        margin: 2rem 0rem 1rem 0rem;
        &::first-letter {
          text-transform: uppercase;
        }
      }

      p {
        line-height: 1.4rem;
        color: #666;
        width: 80%;
      }
    }

    .specsMeeting {
      width: 30%;
      min-height: 30rem;
      @include flex();
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 3rem 0rem 0rem 3rem;

      .location {
        width: 14rem;
        margin-left: -0.3rem;
        line-height: 1.6rem;
      }

      article {
        width: 100%;
        @include flex();
        justify-content: flex-start;
        margin: 0.5rem 0rem;
        color: #bbb;
        font-weight: bold;

        img {
          margin-right: 1rem;
        }

        .time {
          margin-left: auto;
        }
      }

      h3 {
        margin: 2.5rem 0rem;
        text-transform: capitalize;
      }

      .cta {
        text-transform: uppercase;
        align-self: flex-end;
        padding: 0.8rem 4rem;
        margin-top: auto;
        border: none;
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