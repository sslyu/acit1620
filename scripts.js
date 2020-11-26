

const courseList = [
    {code: "ACIT 1620", name: "Web Fundamental Technologies"},
    {code: "ACIT 1515", name: "Scripting for IT"},
    {code: "ACIT 1420", name: "Intro to Systems Admin"}
]

let code;
do {
    code = prompt('Enter a 4-digit code: ');
} while (code.length !== 4);

if (code.length === 4) {
console.log ('Yes I am taking the course:  ${code} – ${name}')}

var classCode = {'ACIT 1620' : 'Web Fundamental Technologies'}
var className = Object.keys(classCode)[0]; //key
var value = classCode[className] //value
    console.log('Yes I am taking the course: ${classCode} – ${className}');

findCourse(courseList) {
    return code;

};

