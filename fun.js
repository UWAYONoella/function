function myFunc(theObject) {
    theObject.brand = "Toyota";
    theObject.year=2000;
  }
const myCar={
    brand: "Honda",
    model: "Accord",
    year: 1998
};

myFunc(myCar);
console.log(myCar.year);
(a,b=1)=>{
   const result=a*b;
}
console.log((4,5));



var x=10;
function createFunction(){
  const x=20;
  return new Function('return x');
}
function createFunction1(){
  const x=20;
  function f(){
    return x;
  }
  return f;
}
const f1=createFunction();
console.log(f1());
const f2=createFunction1();
console.log(f2());
// destructuring assignment
// let arr=["marry","Jane"];
// let [firstName,lastName]=arr;
let [firstName,lastName]="marry Jane".split(' ');
alert(firstName);
alert(lastName);

// let [firstName, lastName] = "John Smith".split(' ');
// alert(firstName); 
// alert(lastName);  
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
console.log(new Set);

// let me = {};
// [firstName,lastName] = "John Smith".split(' ');
// alert(firstName);
// alert(lastName); 

// let me={
//   name:"UWAYO",
//   age:20
// };
// for (let [key,value] of Object.entries(me)){
// console.log(`${key}:${value}`)
// }

let me = new Map();
 me.set("name","UWAYO");
  me.set("age","20");
for (let [key,value] of me){
  console.log(`${key}:${value}`);
}

// Nested destructuring

let family={
  father: {
    name:"ELI",
    age:45
  },
  mother:{
    nome:"Marry",
    year:40
  },
  children:{
    names:["ALI","KENNY","MATTER"],
    old:[20,15,10]
  }
};
let {
father:{
 name,
  age
  },
  mother:{
  nome,
    year
  },
  children:{
    names:[name1,name2,name3],
    old:[age1,age2,age3]
  }
}=family;
console.log (family);

// Smart function parameters
let course={
  title:"Math",
  hour:4,
  marks:80
}
function myCorse({title,hour,marks}){
  alert(`${title} ${hour} ${marks}`);
}
myCorse(course);
// task



let user = {
  ame: "John",
  year: 30
 
};

let { ame, year:ge, isAdmin = false} = user;
alert(isAdmin);
alert(age);




