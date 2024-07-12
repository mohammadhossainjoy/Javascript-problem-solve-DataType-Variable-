/*Exercise-3: See what happens when you have multiple variables of the same name. Which one takes precedence?(
*/
let name = "Mohammad";

function example() {
    
    let name = "Hossain";
    console.log(name); 
}

example();
console.log(name); 


{
    let name = "Joy";
    console.log(name); 
}

console.log(name); 
