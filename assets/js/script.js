// Grab date to put at top of page

let todayDate = $('#todayDate');
let momentDate =  moment().format('MMMM Do YYYY, h:mm a');

// Append date to top of page

todayDate.append(momentDate);

// Get current hours

//let timeZ = new Date().getHours();

// Test setting the time while building this after hours

 let timeZ = 12;

// Hours array

let allHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Function to change background color based on time

function changeColors() {

$('.todo').each(function(i) {

    if (allHours[i] < timeZ) {
        $(this).addClass('past');
    } else if (allHours[i] === timeZ) {
        $(this).addClass('current');
    } else {
        $(this).addClass('future')
    }
});
}

changeColors();

// Function to save text to local storage











