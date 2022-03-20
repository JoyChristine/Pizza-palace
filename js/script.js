
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
        //If else -switch 
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
        let newOrder = order(flavour, size, crust, toppings, number, totalPriceOfPizza);
        console.log(newOrder);
        event.preventDefault();


        //make list appear after pressing make order btn 
        $("#order-list").slideDown();
        //$("#order-list").text(" ");
        $("#order-list").append ("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
        + newOrder.s + "<br>" + "Crust :     "
        + newOrder.c + "<br>" + "Toppings :     "
        + newOrder.t + "<br>" + " Number of pizzas :    "
        + newOrder.n + "<br>" + "Total Price :  "
        + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
        


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
    // //make delivery form appear onclick the make delivery btn
    $(".make").click(function() {
        $('#delivery').slideDown();
        $('#order-list').slideUp();
    })
    $("#submit-delivery").click(function() {
        $("#delivery").slideUp();
    })
    // //alert customer that details have been recorded
    $('#submit-delivery').click(function(event) {
        var person = document.getElementById("fname").value;
        var street = document.getElementById("street").value;
        var house = document.getElementById("hseNo").value;

        alert('Dear' + " " + person + " "+ 'we have received your message.' + 'We will deliver in 15 minutes to House Number ' + "" + house + "," + 'on' + ' ' + street + " street." + 'Thank you for ordering with us.');
        event.preventDefault();

    })
});


