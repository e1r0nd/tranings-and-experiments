const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue)
    },
    removeGoal(i) {
      // this.goals = [...this.goals.slice(0, i), ...this.goals.slice(i+1)];
      this.goals.splice(i, 1);
    }
  }
});

app.mount("#user-goals");
