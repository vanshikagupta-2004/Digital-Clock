


//showing date on web page
const clock = document.querySelector("#clock");


//my helper function function format time for leading zeros

function formatTimeUnit(unit){
    if(unit<10)
        return "0"+unit;
    else{
        return unit;
    }
}

// clock.innerText = new Date()

//this is my date object
function updateClock(){
    const now = new Date();
    // const hours = formatTimeUnit(now.getHours());
    const hour24 = now.getHours();
    let hour12 = hour24%12;
    if(hour12===0)
    {
        hour12=12;
    }

    const ampm = hour24>=12?"PM":"AM";


    const minutes = formatTimeUnit(now.getMinutes());
    const seconds = formatTimeUnit(now.getSeconds());


const timeString = hour12+":"+minutes+":"+seconds+" "+ampm;

clock.innerText = timeString;
}




//my function repeatedly run after 1 second using setInterval Function

setInterval(updateClock,1000);






// Awesome, Vanshika! You’ve now learned:

// How to extract time using Date

// How to display it on the page

// How to update it every second with setInterval()

// How to format it with leading zeros using a helper function

// That’s a full beginner-friendly JavaScript project — and you built it step by step 💪✨



