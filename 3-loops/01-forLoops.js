/*for (let i = 0; i < 10; i++){
    console.log(i);
}*/

/*let input = 'sample';

function reverse(string){
    if (string.length == 0){
        return '';
    }
    return string[string.length - 1] + reverse(string.substring(0, string.length - 1));
}*/

/*function reverse (str){
    if (str.length == 1){
        return str;
    }
    return reverse(str.substr(1)) + str[0];
}*/

//console.log(reverse(input));

/*for (i = 0; i < 11; i++){
    console.log(2*i);
}*/

/*for (i = 10; i > -1; i--){
    console.log(i);
}*/

/*for (i = 0; i > -25; i = i - 2){
    console.log(i);
}*/

//let name = 'Kenn';
/*for (i = 0; i < name.length; i++){
    console.log(name[i]);
}*/

/*function nameSpeller (str){
    if (str.length == 1){
        console.log(str);
        return;
    }
    console.log (str[0]);
    nameSpeller(str.substring(1, str.length));
}

nameSpeller(name);*/

let total = 0;

for (i = 1; i < 51; i++){
    total = total + i;
}

console.log(total);

/*let N = 20;

function handShakes (number){
    if (number == 1){
        return 0;
    }
    return number - 1 + handShakes(number - 1);
}

console.log(handShakes(N));*/