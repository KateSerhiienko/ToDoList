const App = {
  data() {
    return {
      placeholderString: "Enter note",
      inputValue: "",
      notes: [],
    }
  },
  methods: {
    inputChange(event) {
      this.inputValue = event.target.value;
    },
    addNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue)
      };
      this.inputValue = "";
    },
    removeNote(index, $event) {
      this.notes.splice(index, 1)
    }
  }
}

Vue.createApp(App).mount("#app");