$(document).ready(function() {
    $("#submit").click(function(event){
        var person = document.getElementById("fname").value;
        var street = document.getElementById("street").value;
        var building = document.getElementById("building").value;
        var house  = document.getElementById("hseNo").value;
        alert('Dear' + " " + person + " "+ 'we have received your order!. It will be delivered at' + " "+
         street + " "+ 'street,' + " " + 'building'+ " " + building + " "  + " "+ 'house number' + " " + house + " " + " "+
         'Thank you for reaching out to us.');
        event.preventDefault();
    });
});


