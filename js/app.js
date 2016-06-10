console.log('I am ready');

$(document).ready(function() {
    $('.button').mouseenter(function() {
        $(this).fadeTo('fast', 0.5);
    });
    $('.button').mouseleave(function() {
        $(this).fadeTo('fast', 1.0);
    });
});


// $(".button").click(function() {
//     console.log("Btn Clicked");
//
// });

$(document).ready(function() {
    $("#add-new").click(function() {
        console.log("Adding");

          var newInput = $("<p>Additional info</p><input name='additional-info' type='text' class='searchbox' placeholder='Additional info'>");
          $('input#product-currency').after(newInput);
        });

    });


// Adds new features to the product

$(document).on('ready', function() {
    $('form#search-form').bind('submit', function(event) {
        event.preventDefault();

        var tbody = $('#product-list > tbody');

        tbody.append('<tr><th scope="row" style="background-color:' + this['new-task-color'].value +
            '"><input type="checkbox" /></th><td>' + this['product-name'].value +
            '</td><td>' + this['product-price'].value + '</td><td>' + this['product-link'].value +
            '</td><td>' + this['product-currency'].value + '</td><td>');

        return false;
    });
});

// Creates a table for the form objects

$("form").submit(function(event) {
    console.log($(this).serializeArray());
    event.preventDefault();
});

// Shows the JSON in the console
