function clickHandeler() {
    var billAmount = document.querySelector("#bill-amount-input").value;

    var cashGiven = document.querySelector("#cash-given-input").value;
    var change = (cashGiven - billAmount);

    var two_thousand_note, five_hundred_note, hundred_note, twenty_rs_note, ten_rs_note, one_rs_note;
    var q, r;
    if (change > 1) {

        if (change >= 2000) {
            q = two_thousand_note = Math.floor(change / 2000);
            r = change % 2000;
            document.querySelector("#note-of-2000").innerText = two_thousand_note;

            if (r >= 500 && r < 2000) {
                q = five_hundred_note = Math.floor(r / 500);
                r = r % 500;
                document.querySelector("#note-of-500").innerText = five_hundred_note;

                if (r >= 100 && r < 500) {
                    q = hundred_note = Math.floor(r / 100);
                    r = r % 100;
                    document.querySelector("#note-of-100").innerText = hundred_note;

                    if (r >= 20 && r < 100) {
                        q = twenty_rs_note = Math.floor(r / 20);
                        r = r % 20;
                        document.querySelector("#note-of-20").innerText = twenty_rs_note;

                        if (r >= 10 && r < 20) {
                            q = ten_rs_note = Math.floor(r / 10);
                            r = r % 21;
                            document.querySelector("#note-of-10").innerText = ten_rs_note;

                            if (r >= 5 && r < 10) {
                                q = five_rs_note = Math.floor(r / 5);
                                r = r % 5;
                                document.querySelector("#note-of-5").innerText = five_rs_note;

                                if (r >= 1 && r < 5) {
                                    q = one_rs_note = Math.floor(r / 1);
                                    document.querySelector("#note-of-1").innerText = noe_rs_note;

                                }
                            }
                        }
                    }

                }
            }

            // ---------
            //consider the change is: 3666
            // division by 2000        q=2, r=1666
            // division by 500````````q=3, r=166
            // division by 100````````q=1, r=66
            // division by 50````````q=1, r=16
            // division by 20````````q=0, r=16
            // division by 10````````q=1, r=6
            // division by 1````````q=6, r=0




        }
    } else if (billAmount === 0 && cashGiven === 0 || change === 0) {
        document.querySelector("#demo").innerText = "Invalid Bill Amount";
    } else if (change < 0) {
        document.querySelector("#demo").innerText = "Do you wanna wash plates?";
    }

}