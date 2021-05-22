// REFERENCES
// 1. https://api.jquery.com/attr/
// 2. https://api.jquery.com/siblings/#siblings-selector
// 3. https://api.jquery.com/val/#val
// 4. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// Grab date to put at top of page

// Append date to top of page

setInterval(function() {

    let todayDate = $('#todayDate');
    let momentDate =  moment().format('MMMM Do YYYY, h:mm:ss a');
    todayDate.html(momentDate);

});

// Get current hours

let thisHour = new Date().getHours(); 

// Used for testing times outside daily hours

//let thisHour = 12;

// Hours array

let allHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Function to change background color based on time

function changeColors() {

    $('.todo').each(function(i) {
        if (allHours[i] < thisHour) {
            $(this).addClass('past');
        } else if (allHours[i] === thisHour) {
            $(this).addClass('current');
        } else {
            $(this).addClass('future')
        }
    });

}

changeColors();

// Function to save text to local storage
// REFERENCE - 1, 2, and 3

$('.save-button').on('click', function() {

    let saveTime = $(this).siblings('.todo').attr('id');
    let saveTodo = $(this).siblings('.todo').val();
    localStorage.setItem(saveTime, saveTodo);

});

// Load from local storage when page refreshes
// Uses the value of the key from local storage called '________' and put it in the ID on the page 
// REFERENCE - 4

 $('.todo').each(function() {

    grabTodo = $(this).attr('id');
    $(`#${grabTodo}`).val(localStorage.getItem(`${grabTodo}`));

});














