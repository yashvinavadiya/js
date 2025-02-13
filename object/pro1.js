let students = {
    name: "yashvi",
    Number: 123456789,
    course: "full stack",
    status: "running",

    add: [
        {
            name: "jensi",
            number: 987654321,
            course: "web development",
            status: "running",
        },

        {
            name: "nidhi",
            number: 678901234,
            course: "data science",
            status: "suspended",
        }
    ],

    skills: ["html", "css", "js", "node"],

};

console.log(students.add[0].name, students.add[0].number);
let n = students.skills.length;

for (let i = 0; i < n; i++) {
    console.log(students.skills[i]);


};