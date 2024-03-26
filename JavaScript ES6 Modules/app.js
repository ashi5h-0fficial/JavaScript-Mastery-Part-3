//Module: breaking large code into multiple files.

import { firstname } from "./utils/firstName.js";
// Or import { firstname as fname } from "./utils/firstName.js";
// import { age } from "./utils/age.js";

import age from "./utils/age.js";

import { person } from "./utils/person.js";

console.log("firstname: ",firstname);
// console.log("firstname: ",fname);
console.log("Age: ",age);

const user1=new person("Ashish", "soni", 28);
console.log(user1);

user1.info();

/*
--> We can import and export anything: const,variables, functions,classes,object,arrays..
--> export default krne se {} lgane ki jrurt nhi hoti.
--> ek file me 1 hi export default hota hai, usse jada nhi.
--> {} ye named export hote hai, we have to write name of component, we are importing. 
*/

console.log(age);