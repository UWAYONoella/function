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
