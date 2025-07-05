var today = new Date()
var bd = prompt("Enter yur bd")
var bdate = new Date(bd)

console.log("today is:" + today );
console.log("birthday:" + bdate);
console.log("today time:" + today.getTime());
console.log("bd time: "+ bdate.getTime());

var ttime = today.getTime()
var bdtime = bdate.getTime()

var agetime = ttime - bdtime
console.log("Time of age: " + agetime);

var age = agetime/ (1000*3600*24*365)
alert("Your age is: "+ Math.round(age))



