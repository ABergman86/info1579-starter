//TODO: Include your multi-line comment header
/*
    Name: Amanda Bergman
    Date: Sept. 14, 2026
    Assignment: Module 1 Applied Prog. Assign 
    Quarter: Fall 2026
    Instructor: Tania Kuisma
*/

// TODO: Import "use strict" directive
"use strict";

// DO NOT MODIFY
const display = (label, value) =>
  (document.getElementById("output").innerHTML += `${label}: ${value}<br>`);
// END DO NOT MODIFY

// ADD YOUR CODE BELOW

// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)
const myName = "Amanda Bergman";
let totalModules = 10;
let isEnrolled = true;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.
const welcomeMessage = `Welcome, to ${myName}'s Webpage!`;
  console.log(`Welcome, to ${myName}'s Webpage!`);

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
let totalStudyHours = totalModules * 6;

// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
let dailyStudyHours = totalStudyHours / 7;
let dailyStudyMinutes = dailyStudyHours * 60;

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
let adjustedDailyHours = (totalStudyHours - dailyStudyHours) / 6;
let adjustedDailyMinutes = adjustedDailyHours * 60;

// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100
let modulesCompleted = 2;
let percentComplete = (modulesCompleted / totalModules) * 100;
let percentRemaining = 100 - percentComplete;

// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
display ("Welcome Message", welcomeMessage);
display("My Name", myName);
display("Enrolled", isEnrolled);
display("Total Modules", totalModules);
display("Daily Study Hours (7 days)", dailyStudyHours.toFixed(2));
display("Daily Study Minutes (7 days)", dailyStudyMinutes.toFixed(2));
display("Daily Study Hours (with rest day)", adjustedDailyHours.toFixed(2));
display("Daily Study Minutes (with rest day)", adjustedDailyMinutes.toFixed(2));

// TODO: Display your results with a % sign
display("Percent Complete", `${percentComplete.toFixed(2)}%`);
display("Percent Remaining", `${percentRemaining.toFixed(2)}%`);
