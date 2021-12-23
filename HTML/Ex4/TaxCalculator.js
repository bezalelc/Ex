
let tax = [[74640, 10], [32400, 14], [64800, 20], [66960, 31], [258120, 35], [143076, 47]];

function calculate(p) {

    let BaseSalary = $("#BaseSalary");
    let BonusPoint = $("#BonusPoint");
    let salary = $(".input-text");
    let sum = 0;
    let myTax = 0;

    if (p) {
        sum = parseFloat(BaseSalary[0].value) * 12;
    } else {
        for (let i = 0; i < 12; i++) {
            if (salary[i].value !== "")
                sum += parseFloat(salary[i].value);
        }
    }
    alert(sum);
    let i = 0;
    while (sum > 0) {
        if (i === 6) {
            myTax += (sum / 2);
            alert(myTax);
            break;
        }
        if (sum > tax[i][0])
            myTax += (tax[i][0] * tax[i][1]) / 100;
        else
            myTax += (sum * tax[i][1]) / 100;

        sum -= tax[i][0];
        alert(myTax);
        i++;
    }
    if (BonusPoint !== null) {
        myTax -= BonusPoint[0].value * 2580;
        if (myTax < 0)
            myTax = 0;
    }
    return myTax;
}

function add(myTax) {
    let txt = "Total Tax is: " + myTax.toString();
    let a = $(".Tax");
    if (a[0]) {
        a[0].innerHTML = txt;
    } else {
        var newDiv = $("<div><div/>").addClass("Tax");
        newDiv[0].innerHTML = txt;
        newDiv[0].style.color = "red";
        $("main:last").append(newDiv);
    }
}

$(document).ready(function () {
    let totalTaxDiv;
    let checkbox = $('[type=checkbox]');
    checkbox.prop('checked', false);

    checkbox.change(function () {
        if ($(this).is(':checked')) {
            totalTaxDiv = $("#months").fadeOut("slow");
        } else {
            if (totalTaxDiv) {
                totalTaxDiv.fadeIn("slow");
                totalTaxDiv = null;
            }
        }
    });

    $("#Calculate").click(function () {
        let myTax = calculate(totalTaxDiv);
        add(myTax);
    });

});