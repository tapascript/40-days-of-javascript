const user = {
  name: "Tapas",
  clicks: 0,
  handleClick: function () {
    document.getElementById("clickBtn").addEventListener("click", () => {
      this.clicks++;
      console.log(`${this.name} clicked ${this.clicks} times`);
    });
  }
};

user.handleClick();