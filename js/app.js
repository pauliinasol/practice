$(document).ready(function() {
    $('.button').mouseenter(function() {
        $(this).fadeTo('fast', 0.5);
    });
    $('.button').mouseleave(function() {
        $(this).fadeTo('fast', 1.0);
    });
});



$(document).ready(function() {
    $("#add-new").click(function() {

        newInput = $("<div class='newfeature'><p>Additional info <button id='remove'>Remove feature</button> </p> <input name='additional-info' id='additional-info' type='text' class='searchbox' placeholder='Additional info'></div>");
        $('input#product-currency').after(newInput);
        $("#remove").click(function() {
            $(newInput).remove();
        });
    });
});

// Adds a new dynamic feature to the form


$("form").submit(function(event) {
    json = $(this).serializeArray();
    console.log(json);
    event.preventDefault();
});

// Shows the JSON in the console

$(document).ready(function() {
    $("#open-modal").on("click", openModal);
    $("#close-modal").on("click", closeModal);
});

function openModal() {
    $("#modal").toggle();
}

function closeModal() {
    $("#modal").toggle();
}
// Handles the JSON modal

$(document).on('ready', function() {
    $('form#search-form').bind('submit', function(event) {
        event.preventDefault();
        var tbody = $('#product-list > tbody');

        if (json.length == 5) {
            console.log("Additional feature doesn't exist");
            tbody.append('<tr><th scope="row" style="background-color:' + this['new-product-color'].value +
                '"> </th><td>' + this['product-name'].value +
                '</td><td>' + this['product-price'].value + '</td><td>' + this['product-link'].value +
                '</td><td>' + this['product-currency'].value + '</td><td>' + ' ');
        } else if (json[5].value) {
            console.log("Additional feature exists");
            tbody.append('<tr><th scope="row" style="background-color:' + this['new-product-color'].value +
                '"> </th><td>' + this['product-name'].value +
                '</td><td>' + this['product-price'].value + '</td><td>' + this['product-link'].value +
                '</td><td>' + this['product-currency'].value + '</td><td>' + this['additional-info'].value);
        }
    });
});

// Submits the form information to the table

$("form").submit(function(event) {
    var formData = $(this).serializeArray();
    var jsonData = JSON.stringify(formData);
    console.log(jsonData);
    var newHTML = [];
    for (var i = 0; i < jsonData.length; i++) {
        newHTML.push('<span>' + jsonData[i] + '</span>');
    }
    $(".modal-body").html('<p>JSON:<p>' + newHTML.join(""));
    event.preventDefault();
});

// Shows the json data of new products
