let generator = require('generate-password');

let password = generator.generateMultiple(10, {
	length: 10,
	numbers: true, 
    exclude: "qwertyuiopasdfghjkl",
    lowercase: false
})


console.log(password);