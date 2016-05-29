var students = [
     "Misha",
     "Grisha",
     "Tanya",
     "Kolya",
     "Vanya",
     "Olya"
];

var lessons = {
    1: "English",
    2: "Math",
    3: "Chemistry",
    4: "Literature",
    5: "Geography",
    6: "Physics"
};

var marks = {
    1: [2,5,3,4,5,2],
    2: [3,3,4,5,5,2],
    3: [5,2,2,3,4,5],
    4: [3,5,4,5,5,2],
    5: [3,4,5,4,3,4],
    6: [2,3,2,5,4,5]
};

for(var st_counter = 0; st_counter < students.length; st_counter++){
    var student = students[st_counter];

    for(var key in lessons){
        for(var les_counter = 1; les_counter <= Object.keys(lessons).length; les_counter++) {
            key = lessons[les_counter];

            var mark = marks[les_counter][st_counter];
            console.log(student, key, mark)
        }
    }

}
/*
name = prompt("Enter name of subject");
switch (name) {
    case "English":
        lessons[1] = "English";
        console.log(student, lesson, mark);
        break;
    case "Math":
        lessons[2] = "Math";
        console.log(student, lesson, mark);
        break;
    case "Chemistry":
        lessons[3] = "Chemistry";
        console.log(student, lesson, mark);
        break;
    case "Literature":
        lessons[4] = "Literature";
        console.log(student, lesson, mark);
        break;
    case "Geography":
        lessons[5] = "Geography";
        console.log(student, lesson, mark);
        break;
    case "Physics":
        lessons[6] = "Physics";
        console.log(student, lesson, mark);
        break;
}
*/