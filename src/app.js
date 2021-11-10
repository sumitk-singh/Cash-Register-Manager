function clickHandeler() {
    var billAmount = document.querySelector("#bill-amount-input").value;

    var cashGiven = document.querySelector("#cash-given-input").value;
    var change = (cashGiven - billAmount);

    var two_thousand_note, five_hundred_note, hundred_note, twenty_rs_note, ten_rs_note, one_rs_note;
    var q, r;


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
                        r = r % 10;
                        document.querySelector("#note-of-10").innerText = ten_rs_note;

                        if (r >= 5 && r < 10) {
                            q = five_rs_note = Math.floor(r / 5);
                            r = r % 5;
                            document.querySelector("#note-of-5").innerText = five_rs_note;

                            if (r >= 1 && r < 5) {
                                q = one_rs_note = Math.floor(r / 1);
                                document.querySelector("#note-of-1").innerText = one_rs_note;

                            }
                        }
                    }
                }

            }
        }


    } else if (change >= 500 && change < 2000) {
        document.querySelector("#note-of-2000").innerText = 0;

        q = five_hundred_note = Math.floor(change / 500);
        r = change % 500;
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
                    r = r % 10;
                    document.querySelector("#note-of-10").innerText = ten_rs_note;

                    if (r >= 5 && r < 10) {
                        q = five_rs_note = Math.floor(r / 5);
                        r = r % 5;
                        document.querySelector("#note-of-5").innerText = five_rs_note;

                        if (r >= 1 && r < 5) {
                            q = one_rs_note = Math.floor(r / 1);
                            document.querySelector("#note-of-1").innerText = one_rs_note;

                        }
                    }
                }
            }

        }
    } else if (change >= 100 && change < 500) {
        document.querySelector("#note-of-2000").innerText = 0;
        document.querySelector("#note-of-500").innerText = 0;

        q = hundred_note = Math.floor(change / 100);
        r = change % 100;
        document.querySelector("#note-of-100").innerText = hundred_note;

        if (r >= 20 && r < 100) {
            q = twenty_rs_note = Math.floor(r / 20);
            r = r % 20;
            document.querySelector("#note-of-20").innerText = twenty_rs_note;

            if (r >= 10 && r < 20) {
                q = ten_rs_note = Math.floor(r / 10);
                r = r % 10;
                document.querySelector("#note-of-10").innerText = ten_rs_note;

                if (r >= 5 && r < 10) {
                    q = five_rs_note = Math.floor(r / 5);
                    r = r % 5;
                    document.querySelector("#note-of-5").innerText = five_rs_note;

                    if (r >= 1 && r < 5) {
                        q = one_rs_note = Math.floor(r / 1);
                        document.querySelector("#note-of-1").innerText = one_rs_note;

                    }
                }
            }
        }

    } else if (change >= 20 && change < 100) {
        document.querySelector("#note-of-2000").innerText = 0;
        document.querySelector("#note-of-500").innerText = 0;
        document.querySelector("#note-of-100").innerText = 0;

        q = twenty_rs_note = Math.floor(change / 20);
        r = change % 20;
        document.querySelector("#note-of-20").innerText = twenty_rs_note;

        if (r >= 10 && r < 20) {
            q = ten_rs_note = Math.floor(r / 10);
            r = r % 10;
            document.querySelector("#note-of-10").innerText = ten_rs_note;

            if (r >= 5 && r < 10) {
                q = five_rs_note = Math.floor(r / 5);
                r = r % 5;
                document.querySelector("#note-of-5").innerText = five_rs_note;

                if (r >= 1 && r < 5) {
                    q = one_rs_note = Math.floor(r / 1);
                    document.querySelector("#note-of-1").innerText = one_rs_note;

                }
            }
        }
    } else if (change >= 10 && change < 20) {
        document.querySelector("#note-of-2000").innerText = 0;
        document.querySelector("#note-of-500").innerText = 0;
        document.querySelector("#note-of-100").innerText = 0;
        document.querySelector("#note-of-20").innerText = 0;

        q = ten_rs_note = Math.floor(change / 10);
        r = change % 10;
        document.querySelector("#note-of-10").innerText = ten_rs_note;

        if (r >= 5 && r < 10) {
            q = five_rs_note = Math.floor(r / 5);
            r = r % 5;
            document.querySelector("#note-of-5").innerText = five_rs_note;

            if (r >= 1 && r < 5) {
                q = one_rs_note = Math.floor(r / 1);
                document.querySelector("#note-of-1").innerText = one_rs_note;

            }
        }
    } else if (change >= 5 && change < 10) {
        document.querySelector("#note-of-2000").innerText = 0;
        document.querySelector("#note-of-500").innerText = 0;
        document.querySelector("#note-of-100").innerText = 0;
        document.querySelector("#note-of-20").innerText = 0;
        document.querySelector("#note-of-10").innerText = 0;

        q = five_rs_note = Math.floor(change / 5);
        r = change % 5;
        document.querySelector("#note-of-5").innerText = five_rs_note;

        if (r >= 1 && r < 5) {
            q = one_rs_note = Math.floor(r / 1);
            r = r % 1;
            document.querySelector("#note-of-1").innerText = one_rs_note;

        }
    } else if (change >= 1 && change < 5) {
        document.querySelector("#note-of-2000").innerText = 0;
        document.querySelector("#note-of-500").innerText = 0;
        document.querySelector("#note-of-100").innerText = 0;
        document.querySelector("#note-of-20").innerText = 0;
        document.querySelector("#note-of-10").innerText = 0;
        document.querySelector("#note-of-5").innerText = 0;

        q = one_rs_note = Math.floor(change / 1);
        document.querySelector("#note-of-1").innerText = one_rs_note;

    } else if (billAmount === 0 && cashGiven === 0 || change === 0) {
        document.querySelector("#demo").innerText = "Invalid Bill Amount";
    } else if (change < 0) {
        document.querySelector("#demo").innerText = "Do you wanna wash plates?";
    }
}

//remark
//r represent remainder
//q represent quotent