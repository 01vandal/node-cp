const fs = require("fs")


const fileContent = fs.readFileSync("./welcome.txt", "utf-8")

console.log(fileContent);
