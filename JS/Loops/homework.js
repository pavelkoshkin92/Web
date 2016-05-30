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
var subject = prompt("Введите название предмета");

document.write('<table>');
//document.write('<tr>'+'<td>'+"name"+'</td>'+'<td>'+"1"+'</td>'+'<td>'+"2"+'</td>'+'<td>'+"3"+'</td>'+'<td>'+"4"+'</td>'+'<td>'+"5"+'</td>'+'<td>'+"6"+'</td>'+'</tr>');
document.write('<tr>'+'<td>'+"name"+'</td>');

for (var name in lessons){
    if(subject==lessons[name]){
        document.write('<td>'+lessons[name]+'</td>')
    }
    else{
        document.write('<td>'+name+'</td>')
    }
}

document.write('<tr>');
for(var st_counter = 0; st_counter < students.length; st_counter++){
    var student = students[st_counter];
    console.log(student);
    document.write('<td>'+student+'</td>');


    for(var les_counter = 1; les_counter <= Object.keys(lessons).length; les_counter++) {
        var lesson = lessons[les_counter];

        var mark = marks[les_counter][st_counter];

        console.log(lesson, mark);
        document.write('<td>'+mark+'</td>');


    }
    document.write('</tr>')
}

document.write('</table>');

