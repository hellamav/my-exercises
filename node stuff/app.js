/*import os from 'os';



process.stdout.write('Hello World');


process.stdout.clearLine(0);

process.stdout.cursorTo(0);
process.stdout.write('New message');


console.log(os.totalmem());
*/

// FETCH APIs
//CREATE - post
//READ - get
//UPDATE - put/patch
//DELETE - delete

"use script";

const input = document.getElementById("input");
const button = document.getElementById("button");
const output = document.getElementById("output");

//AXIOS
// GET method for READ

let read = (URL) => {
  axios
    .get(URL)
    .then((response) => {
      output.innerText = JSON.stringify(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

button.onclick =()=> read(input.value);



//POST method for CREATE




  
  
