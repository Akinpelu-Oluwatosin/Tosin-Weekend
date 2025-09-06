const prompt = require('prompt-sync')()

let studentDetails = {
		name: "",

		age: 0,

		City: "",

		department: [],
}


student.name = prompt("Enter your name?");

student.age = (prompt("How old are you?"));
    
student.City = prompt("Where do you stay?");


for (let course = 0; course < 21; course++) {

  let theCourse = prompt("Enter course ");

  student.department[course] = theCourse;
}


console.log(studentDetails);