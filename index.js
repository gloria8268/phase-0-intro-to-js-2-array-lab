// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
    cats.push(name)
}
destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat('Bob');

const destructivelyRemoveLastCat = () => {
    cats.pop();
}
destructivelyRemoveLastCat();

const destructivelyRemoveFirstCat = () => {
    cats.shift();
}
destructivelyRemoveFirstCat();

const appendCat = (name) => {
    const newCats = cats.concat();
    newCats.push(name);
    return newCats;
}
appendCat('Broom');


const prependCat = (name) => {
    const newCats2 = cats.concat();
    newCats2.unshift(name);
    return newCats2;
}
prependCat('Arnold');


const removeLastCat = () => {
    const newCats3 = cats.slice(0, -1);
    return newCats3;
}
removeLastCat();

const removeFirstCat = (name) =>  {
    const newCats4 = cats.slice(1);
    return newCats4;
}
removeFirstCat();

// const appendCat = (name) => {
//     const newCats = [...cats, name];
//     return newCats;
// }
// appendCat('Broom');

// const prependCat = name => {
//     const newCats2 = [name, ...cats];
//     return newCats2;
// }
// prependCat('Arnold')


