
// pick up btn alert 
$(document).ready(function() {
    $(".pick").click(function(event){
        alert('Thanks for your order! We are waiting for you!');
        event.preventDefault();
    });
    //hide delivery form
    $("#delivery").hide();
    //make delivery form appear onclick the make delivery btn
    $(".make").click(function() {
        $('#delivery').toggle();
    })
    //alert customer that details have been recorded
    $('#submit-delivery').click(function(event) {
        var person = document.getElementById("fname").value;
        var street = document.getElementById("street").value;
        var house = document.getElementById("hseNo").value;

        alert('Dear' + " " + person + " "+ 'we have received your message.' + 'We will deliver in 15 minutes to House Number ' + "" + house + "," + 'on' + ' ' + street + " street." + 'Thank you for ordering with us.');
        event.preventDefault();

    })
});


