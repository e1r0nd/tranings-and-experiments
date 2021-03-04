const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0982093",
          email: "asd@asd.asd",
        },
        {
          id: "julie",
          name: "Julie Man",
          phone: "4354356",
          email: "qwe@qwe.asd",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
