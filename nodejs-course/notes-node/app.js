console.log("Starting app...");

const fs = require("fs");
const os = require("os");

const user = os.userInfo();

fs.appendFile("greeting.txt", `Hello ${user.username || "world"}!`, err => {
  err && console.log("Unable to write to file.");
});
