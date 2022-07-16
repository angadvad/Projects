let mountains = ['Everest', 'Fuji', 'Nanga Parbat','Eden','Wellington'];
let numbers = [1,2,3,4,5];

let swaponeandfour = (array) => {
    array[0]="index one";
    array[3]="index four";
    return array;
}

console.log(swaponeandfour(mountains));
console.log(swaponeandfour(numbers));