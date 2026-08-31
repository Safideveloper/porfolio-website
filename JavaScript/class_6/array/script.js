/*let student1 = "zahid";
let student2 = "ali";
let student3 = "hamza";
let student4 = "ahmed";*/

let students = ["zahid", "ali", "hamza", "ahmed", "umer"];
// console.log(students.length);
// console.log(students[1]);
// console.log(students[4]);
// console.log(students[students.length - 1]);
console.log(students);
// add last element in array

// students.push("hassan");
// console.log(students);

// remove last element in array

// students.pop();
// console.log(students);

// add first element in array

// students.unshift("hassan");
// console.log(students);

// remove first element in array

// students.shift();
// console.log(students);
/*
array_name .slice(start_index, ending_index)
startind index : included
ending index : excluded
let top 10 students = students.slice(0, 10);
*/
// console.log(students.slice(0, 3));
// console.log(students.slice(1, 4));

/*students[2] = "shabir";
students[5] = "muneeb";
console.log(students);
*/

// students.splice(start_index, delete_count, additional_items, replace_items)
students.splice(3, 1);
