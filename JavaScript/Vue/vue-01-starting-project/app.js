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
  watch: {
    name(newValue, oldValue) {
      console.log(
        `Name property has been changed from "${oldValue}" to "${newValue}"`
      );
    },
  },
  computed: {
    fullname() {
      console.log("fullname() has been fired!");
      const thisName = this.name.trim().length ? this.name + "!" : "";
      return thisName;
    },
  },
  methods: {
    add(num = 1) {
      this.counter += num;
    },
    reduce(num = 1) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    outputFullName(prefix = "dr.") {
      console.log("outputFullName() has been fired!");
      if (this.name.trim().length) {
        return prefix + " " + this.name;
      } else {
        return "";
      }
    },
    confirmInput(event) {
      this.confirmedName = event.target.value;
    },
    submitForm() {
      alert("Form has been submitted!");
    },
    resetInput() {
      this.name = "";
    },
  },
});

eventsApp.mount("#events");

const stylingAppExample = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxBClasses() {
      return { active: this.boxBSelected };
    },
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

stylingAppExample.mount("#styling");
