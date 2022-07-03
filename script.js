// Pseudo Code
// initialize a variable to hold the passengers number
// create a function
// update the value in the website using document.getElementById("id-name").innerHTML
// increment the variable that hols the passengers number

let i = 0;

// count the number of passengers in the bus
function increment() {
    {
        i = i + 1;  //incrementing the value of i by 1 times.
        document.getElementById("count-el").innerHTML = i; //updates the value of i in the page
        //                         \
        //                          `~ is called "pass in arguments" or parameters                        
    }
}

// reset the number of passengers in the bus
function decrement() {
    if (i > 0) {  //checks if the value of i is less than 0 or not.Used to stop the value from going below 0 like -1, -1 etc..
        i = i - 1;
        document.getElementById("count-el").innerHTML = i; //updates the value of i in the page
    }
}

//save the numbers of passengers last time
let textToBeUpdated = document.getElementById("save");
function save(){
    let updatedText = `${i} - `; 
    textToBeUpdated.innerHTML += updatedText;
    console.log(i);
}

//NOTE:: document.getElementById("");
//                      \
//                       `~ is also a function (it is inside object called document so it is also knows as method)
//                              A method is  a function inside an object.       