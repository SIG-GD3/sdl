alert("JS file linked successfully!");

const averageHumanLifespanYears = 60; 
const weeksInYear = 52; 

const averageWeeksInLifetime = averageHumanLifespanYears * weeksInYear;

console.log("Average number of weeks in human lifetime:", averageWeeksInLifetime);

const currentHour = new Date().getHours();
const now = new Date();

function getTimeOfDay(hour) {
  if (hour >= 5 && hour < 12) {
    return "morning";
  }
  else if (hour >= 12 && hour < 18) {
    return "afternoon";
  }
  else {
    return "night";
  }
}

const timeOfDay = getTimeOfDay(currentHour);

document.getElementById("result").innerHTML = "Average number of weeks in human lifetime: " + averageWeeksInLifetime;
document.getElementById("result").innerHTML += "<br>Time of the day: " + timeOfDay;
document.getElementById("result").innerHTML += "<br>Hour of the day: " + currentHour;
document.getElementById("result").innerHTML += "<br>Hour of the day: " + now;


// Get the current date and time
const currentDate = new Date();
// Extract individual components
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Note: Month is zero-based, so we add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
// Format the date and time
const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
// Display the formatted date and time
console.log("Current date and time:", formattedDateTime);