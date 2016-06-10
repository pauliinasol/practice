console.log('I am ready');

$(document).ready(function() {
    $('#button').mouseenter(function() {
        $('#button').fadeTo('fast', 0.5);
    });
    $('#button').mouseleave(function() {
        $('#button').fadeTo('fast', 1.0);
    });
});


    $("#button").click(function() {
        console.log("Btn Clicked");

      });

      jQuery(document).on('ready', function() {
          jQuery('form#search-form').bind('submit', function(event){
              event.preventDefault();

              var tbody = jQuery('#product-list > tbody');

              tbody.append('<tr><th scope="row" style="background-color:' + this['new-task-color'].value +
                  '"><input type="checkbox" /></th><td>' + this['new-task-date'].value +
                  '</td><td>' + this['new-task-priority'].value + '</td><td>' + this['new-task-name'].value +
                  '</td><td>' + this['new-task-desc'].value + '</td><td>' + this['new-task-email'].value + '</td></tr>');

              return false;
          });
      });
