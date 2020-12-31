const userGoalApp = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course!",
      courseGoalB: "Master some skills",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

userGoalApp.mount("#user-goal");

const eventsApp = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(num = 1) {
      this.counter += num;
    },
    reduce(num = 1) {
      this.counter -= num;
    },
    setName(event, prefix) {
      this.name = prefix + " " + event.target.value;
    },
    confirmInput(event) {
      this.confirmedName = event.target.value;
    },
    submitForm() {
      alert("Form has been submitted!");
    },
  },
});

eventsApp.mount("#events");
