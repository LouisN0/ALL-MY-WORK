// - # Exo 1
//     - ## let a = 1; -> 2
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 1

//     - ## Afficher le changement des variables
let a = 1
let b = 2
let c = 3
let swap = a
a = b
b = c
c = swap
console.log(a, b, c)

// - # Exo 2
//     - ## Afficher 4, 3, 2, 1
//     - ## let a = 1; -> 4
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 2
//     - ## let d = 4; -> 1

//     - ## Afficher le changement des variables

let a1 = 1;
let b1 = 2;
let c1 = 3;
let d1 = 4;
let swap1 = d1
d1 = a1
a1 = swap1
swap1 = c1
c1 = b1
b1 = swap1

console.log(a1,b1,c1,d1)

// - #  Exo 3
//     - ## let a = 1; -> 2
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 4
//     - ## let d = 4; -> 1

//     - ## Afficher le changement des variables

let a2 = 1;
let b2 = 2;
let c2 = 3;
let d2 = 4;
let swap2 = a2
a2 = b2
b2 = c2
c2 = d2
d2 = swap2
console.log(a2,b2,c2,d2)


// - # Exo 4
//     - ## Afficher 4, 3, 2, 1 avec une variable temporaire
//     - ## let tableau = [1, 2, 3, 4];

let tableau = [1, 2, 3, 4];
tableau[0] = 1;
tableau[1] = 2;
tableau[2] = 3;
tableau[3] = 4;
let swap3 = tableau[3]
tableau[3] = tableau[0]
tableau[0] = swap3
swap3 = tableau[2]
tableau[2] = tableau[1]
tableau[1] = swap3

console.log(tableau[0],tableau[1],tableau[2],tableau[3])


// - # Exo 5
//     - ## let a = 1 -> 4
//     - ## let b = 2 -> 5
//     - ## let c = 3 -> 1
//     - ## let d = 4 -> 2
//     - ## let e = 5 -> 6
//     - ## let f = 6 -> 3

//     - ## Afficher le changement des variables

let a4 = 1
let b4 = 2
let c4 = 3
let d4 = 4
let e4 = 5
let f4 = 6

let swap4 = a4
a4 = d4
d4 = b4
b4 = e4
e4 = f4
f4 = c4
c4 = swap4

console.log(a4,b4,c4,d4,e4,f4)