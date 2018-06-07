/*let x = [];

console.log(typeof(x));

let student = ['Tyler', 'Sasan', 'Brandon', 'Lawrence', 'Rajni', 'Sherri', 'David'];

let cohort = ['Lawrence', 35, true, ['Brandon', 4, 'Sherri'], 6, false];

console.log('Hello', cohort[3][2] + ', you look nice today');*/

//let food = [];

/*food.push('pizza');
food.splice(2, 1, 'hamburger helper :(');
food.splice(3, 0, 'pecan pie');
food.pop();*/

/*for (f in food){
    console.log(food[f]);
}

function testFunction(eats){
    return eats.length ? 'working!' : 'blahblahblah';
}

console.log(testFunction(food));*/

//iterating

/*let food = ['hamburger', 'chicken', 'steak', 'burrito', 'bbq'];

food.forEach(f => console.log(`${f} is on the menu today.`));

food.forEach((value, number) => {console.log(number, value);});*/

let movies = ['titanic', 'avatar', 'avengers', 'the last jedi'];

movies.forEach(m => console.log(m));

movies.push('a new hope');

movies.splice(2, 1, 'attack of the clones');

movies.forEach(m => console.log(m));