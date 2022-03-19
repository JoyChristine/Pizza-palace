//store prices, crust ,size, toppingss in array
//create loop such that 
// let pizzaPrice = {
//     small:600,
//     medium:800,
//     large:1000
// }
// let toppingPrice = {
//     Tomato:80,
//     Onions:80,
//     Mushroom:80,
//     Olives:120,
//     Pineapple:120,
//     Bacon:120,
//     Mince:120,
//     Beef:170,
//     Chicken:170
// };
// let crust = {
//     cr

// }

// function pizzaSize(price) {
//     if (size === 'small'){
//          return (price.small* 1);
//     }else if (size === 'medium'){
//         return (price.medium * 1);
//     }else {
//         return(price.large * 1);
//     }
// }

// var prices = function () {
//   price = 600
//}
// if(flavour === "pepperoni" && size === "small" && crust === "crispy"){
//  totalpriceofpizza = (price * number) +200;
//}











// make-btn get all values filled in the form
$(document).ready(function() {
    $("#make-order").click(function(event) {
        let flavour = $('#flavour option:selected').val();
        let size = $('#size option:selected').val();
       
        let crust = $('#crust option:selected').val();
        let toppings = $('#toppings option:selected').val();
        let number = $("#pizzaNumber").val();
        // console.log(flavour); 

        let order  = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        }
       
        let price, totalPriceOfPizza;
        switch (flavour) {
            //case flavour = "pepperoni" || "hawaiian" || "bbq":
            case flavour = "pepperoni":
            switch(size){
                case size = "small":
                    price = 600;
                    if(crust === "crispy"){
                        totalPriceOfPizza = (price * number) + 50;
                    }else if(crust === "stuffed"){
                        totalPriceOfPizza = (price * number) + 100;
                    }else if(crust === "gluten"){
                         totalPriceOfPizza = (price * number) + 150
                    }
                break;
                case size = "medium":
                    price = 800;
                    if(crust === "crispy"){
                        totalPriceOfPizza = (price * number) + 100;
                    }else if(crust === "stuffed"){
                        totalPriceOfPizza = (price * number) + 150;
                    }else if(crust === "gluten"){
                        totalPriceOfPizza = (price * number) + 200
                    }
                break;
                case size = "large":
                    price = 1000;
                    if(crust === "crispy"){
                        totalPriceOfPizza = (price * number) + 100;
                    }else if(crust === "stuffed"){
                        totalPriceOfPizza = (price * number) + 150;
                    }else if(crust === "gluten"){
                        totalPriceOfPizza = (price * number) + 200
                    }
                break;

            }
            break;
            case flavour = "hawaiian":
            switch(size){
                case size = "small":
                    price = 600;
                    if(crust === "crispy"){
                        totalPriceOfPizza = (price * number) + 50;
                    }else if(crust === "stuffed"){
                        totalPriceOfPizza = (price * number) + 100;
                    }else if(crust === "gluten"){
                         totalPriceOfPizza = (price * number) + 150
                    }
                break;
                case size = "medium":
                    price = 800;
                    if(crust === "crispy"){
                        totalPriceOfPizza = (price * number) + 100;
                    }else if(crust === "stuffed"){
                        totalPriceOfPizza = (price * number) + 150;
                    }else if(crust === "gluten"){
                        totalPriceOfPizza = (price * number) + 200
                    }
                break;
                case size = "large":
                    price = 1000;
                    if(crust === "crispy"){
                        totalPriceOfPizza = (price * number) + 100;
                    }else if(crust === "stuffed"){
                        totalPriceOfPizza = (price * number) + 150;
                    }else if(crust === "gluten"){
                        totalPriceOfPizza = (price * number) + 200
                    }
                break;

            }
            break;
            case flavour = "bbq":
            switch(size){
                case size = "small":
                    price = 600;
                    if(crust === "crispy"){
                        totalPriceOfPizza = (price * number) + 50;
                    }else if(crust === "stuffed"){
                        totalPriceOfPizza = (price * number) + 100;
                    }else if(crust === "gluten"){
                         totalPriceOfPizza = (price * number) + 150
                    }
                break;
                case size = "medium":
                    price = 800;
                    if(crust === "crispy"){
                        totalPriceOfPizza = (price * number) + 100;
                    }else if(crust === "stuffed"){
                        totalPriceOfPizza = (price * number) + 150;
                    }else if(crust === "gluten"){
                        totalPriceOfPizza = (price * number) + 200
                    }
                break;
                case size = "large":
                    price = 1000;
                    if(crust === "crispy"){
                        totalPriceOfPizza = (price * number) + 100;
                    }else if(crust === "stuffed"){
                        totalPriceOfPizza = (price * number) + 150;
                    }else if(crust === "gluten"){
                        totalPriceOfPizza = (price * number) + 200
                    }
                break;

            }
            break;
 
        }
        switch (toppings) {
            case ("tomato"):
            case ("mushroom"):
            case ("greenpepper"):
                totalPriceOfPizza = totalPriceOfPizza+ 80;
                break;
            
            case ("pineapple"):
            case ("bacon"):
            case ("mince"):
                totalPriceOfPizza= totalPriceOfPizza+ 120;
                break;
            case ("beef"):
            case ("chicken"):
                totalPriceOfPizza= totalPriceOfPizza+ 170;
                break;
        }


        //RUN BELOW CODE TO SEE IF ABOVE CALCULATIONS WORK
        // let newOrder = order(flavour, size, crust, toppings, number, totalPriceOfPizza);
        // console.log(newOrder);
        // event.preventDefault();



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


