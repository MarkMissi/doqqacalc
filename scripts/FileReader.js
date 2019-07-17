var filePath = "../res/Damage Values/Damage_T.Gohan.csv";

var fs = require('fs');

var fileText = fs.readFileSync(filePath);

console.log(fileText);