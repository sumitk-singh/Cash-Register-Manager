function clickHandeler() {
    var billAmount = document.querySelector("#bill-amount-input").value;
    var cashGiven = document.querySelector("#cash-given-input").value;
    var change = (cashGiven - billAmount);


    if (change > 1) {
        if (change >= 2000) {
            var change_of_2000 = change / 2000;
            document.getElementById("demo").innerText = "Your change is Rs. " + change_of_2000;
            // var change_of_500 = change % 2000;


        }
    }

}