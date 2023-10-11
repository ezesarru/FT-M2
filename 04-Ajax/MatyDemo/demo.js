let nums = [1, 2, 5, 3, 8, 9, 5, 20, 5];
let cincos = [];

// nums.forEach(function(elemento){
    // if(elemento === 5){
        // cincos.push(elemento)
    // }
// })
// -----------Arrow Function-----------------

// nums.forEach((elemento)=>{
    // if(elemento === 5){
        // cincos.push(elemento)
    // }
// })
// -------Ternario-------------

// nums.forEach((elemento)=> elemento === 5 ? cincos.push(elemento) : '')

//-----------Filter----------------
let numsFiltered = nums.filter(num => num === 5)
console.log(numsFiltered);


//---------Objetos Literales------------


// function objeto(name, age){
    // let cohorte = 'FT 44a'

    // let obj = {
        // name,
        // age,
        // cohorte
    // }
    // console.log(obj)
// };

// objeto('Maty', 32)


//------------------------------------------


// const saludar = (saludo)=>{
    // let name = 'Maty';

    // console.log(saludo + ' ' + name);

    // console.log(`${saludo} ${name} te amamos un monton!`);
// };

// saludar('Holiss')



//-----------------------------------------------


// let [a, b, c] = [5, 6, 9]

// console.log(a);
// console.log(b);
// console.log(c);


// let obj = {
    // name: 'FT 44a',
    // age: '3 semanas'
// }


// let {age, name} = obj

// console.log(age);
// console.log(name);
// console.log(obj);



// function saludar(saludo = 'Hola'){
    // console.log(saludo);
// }

// saludar('Hi')


//------------------------


function arr(){
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    console.log([...arr1, ...arr2]);
    console.log(arr1);
    console.log(arr2);
}

arr()