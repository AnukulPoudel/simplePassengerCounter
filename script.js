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
    }
}

// reset the number of passengers in the bus
function reset(){
    i=0;
    document.getElementById("count-el").innerHTML = i; //updates the value of i in the page

}