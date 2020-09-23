<template>
  <div class="home">
    <div class="wrapper">
      <h1>This is the mainpage</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Meeting from "@/components/Meeting.vue";
export default {
  name: "Home",
  components: {
    Meeting
  }
};
</script>
