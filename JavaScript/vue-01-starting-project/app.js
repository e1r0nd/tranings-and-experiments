const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course!",
      vueLink: "https://vuejs.org/",
    };
  },
});

app.mount("#user-goal");
