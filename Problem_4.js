/*Exercise-4: What is the difference between null and undefined? */


//------------Undefined--------------
let m;
console.log(m); // Output: undefined

function man() {
}
console.log(man()); // Output: undefined

//------------NULL--------------
let n = null;
console.log(n); // Output: null

let car = {
  model: "BMW",
  price: 30000000,
  speed: null // speed is intentionally set to null, indicating no speed
};
console.log(car.speed); // Output: null
