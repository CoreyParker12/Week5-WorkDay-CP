// REFERENCES
// 1. https://api.jquery.com/attr/
// 2. https://api.jquery.com/siblings/#siblings-selector
// 3. https://api.jquery.com/val/#val

// Grab date to put at top of page

let todayDate = $('#todayDate');
let momentDate =  moment().format('MMMM Do YYYY, h:mm a');

// Append date to top of page

todayDate.append(momentDate);

// Get current hours

//let timeZ = new Date().getHours();

// Used for testing times outside daily hours

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

// REFERENCES
// 1, 2, and 3

$('.save-button').on('click', function() {

    let saveTime = $(this).siblings('.todo').attr('id');
    let saveTodo = $(this).siblings('.todo').val();
    localStorage.setItem(saveTime, saveTodo);

});










