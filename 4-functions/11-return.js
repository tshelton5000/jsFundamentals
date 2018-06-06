//return

/*function capitalizeName(name){
    let capName = '';
    for (let l in name){
        if (l == 0){
            capName += name[l].toUpperCase();
        }
        else{
            capName += name[l].toLowerCase();
        }
    }
    return(capName);
}

const newName = capitalizeName('branDON');

console.log(newName);*/

function tipAmount(orderTotal, tipPerc){
    return orderTotal*tipPerc;
}

let tip = tipAmount(100, 0.07);
console.log(tip);