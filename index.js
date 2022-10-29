// document.getElementById("count-el").innerText = 5;

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el"); // pass in arguments

let count = 0;


//function increment

function increment() {
    console.log("Button was called");
    count += 1;
    console.log(count)
    // document.getElementById("count-el").innerText = count;  -----normal way to increment 
    countEl.textContent = count;
}

// Create a function, save(), which logs out the count when it's called
let saveEl = document.getElementById("save-el");

function save()
{
    let saveCount = count + " - ";
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "    
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    saveEl.textContent += saveCount;
    countEl.textContent = 0;
    count = 0;
    console.log(count);
}




