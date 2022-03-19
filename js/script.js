//store prices, crust ,size, toppings in array
//create loop such that 
let pizzaPrice = {
    small:600,
    medium:800,
    large:1000
}
let toppingPrice = [{
    Tomato:80,
    Onions:80,
    Mushroom:80,
    Olives:120,
    Pineapple:120,
    Bacon:120,
    Mince:120,
    Beef:170,
    Chicken:170


}];

function pizzaSize(price) {
    if (size === 'small'){
         return (price.small* 1);
    }else if (size === 'medium'){
        return (price.medium * 1);
    }else {
        return(price.large * 1);
    }
}

// make-btn get all values filled in the form
$(document).ready(function() {
    $("#make-order").click(function() {
        let size = $('#size option:selected').val();
        let flavour = $('#flavour option:selected').val();
        let crust = $('#crust option:selected').val();
        let toppings = $('#toppings option:selected').val();
        let number = $("#pizzaNumber").val();
        // console.log(flavour); 
    });
});









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


