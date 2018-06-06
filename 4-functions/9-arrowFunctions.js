//fat arrow functions

/*function laptop(){
    console.log('Sasan\'s laptop is about to explode');
}

laptop();*/

//fat arrow
/*let laptop = () => {
    console.log('Sasan\'s laptop is about to explode.');
}

laptop();*/

//with parameters
let cats = (fleas, ticks) => {
    console.log('Cats have ' + fleas + ' and ' + ticks);
}

cats('fleas', 'ticks');

let turtle = shell => {
    console.log('Turtle have ' + shell);
}

turtle(13);

//concise bodies
let apples = x => console.log(`There are ${x} apples.`);

apples(20);

//block bodies
let bananas = (x) => {console.log(`There are ${x} bananas.`);}

bananas(7);

let func = () => console.log('hi');
func();

/*let func = ()
=> console.log('hi');*/ //not ok code