import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';

if (typeof window !== 'undefined') {

  console.log(checkForName); 

  alert("I EXIST"); 

  console.log("CHANGE!!"); 
}

export { checkForName, handleSubmit };