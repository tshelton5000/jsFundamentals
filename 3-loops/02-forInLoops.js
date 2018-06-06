//for in loops

/*var student = {
    name: 'Sasan',
    awesome: true,
    cohort: 'JavaScript',
    week: 1
}

for (item in student){
    console.log(item);
    console.log(student[item]);
}*/

let studentName = 'rAjNi';
let temp = ''

for (item in studentName){
    if (item == 0){
        temp = temp + studentName[item].toUpperCase();
    }
    else {
        temp = temp + studentName[item].toLowerCase();
    }
}

console.log(temp);

