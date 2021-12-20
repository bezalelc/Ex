
let tax = [[74640,10],[32388,14],[64788,20],[66948,31],[21509,35],[11922,47]];

function calculate(p){

    let BaseSalary = $("#BaseSalary");
    let BonusPoint = $("#BonusPoint");
    let salary = $(".input-text");
    let sum = 0;
    let myTax = 0;

    if(p){
        sum = parseFloat(BaseSalary[0].value)*12;
        alert(sum);
    }else{
        for(let i = 0; i < 12; i++){
            if(salary[i].value !== "")
                sum += parseFloat(salary[i].value);
        }
    }
    let i = 0;
    while (sum > 0){
        if(i === 6){
            myTax += (sum/50);
            break;
        }
        if(sum > tax[i][0])
            myTax += (tax[i][0]*tax[i][1])/100;
        else
            myTax += (sum*tax[i][1])/100;

        sum -= tax[i][0];
        i++;
    }
    if(BonusPoint !== null) {
        myTax -= BonusPoint[0].value * 2580;
        if(myTax < 0)
            myTax = 0;
    }
    return myTax;
}

function add(myTax){
    let txt = "Total Tax is: " + myTax.toString();
    let a = $(".Tax");
    if(a[0]){
        a[0].innerHTML = txt;
    }else{
        var newDiv = $("<div><div/>").addClass("Tax");
        newDiv[0].innerHTML = txt;
        $("main:last").append(newDiv);
    }
}

$(document).ready(function () {
    let p;
    $('[type=checkbox]').change(function () {
        if ($(this).is(':checked')) {
            p = $("#months").fadeOut("slow");
        } else {
            if (p) {
                p.fadeIn("slow");
                p = null;
            }
        }
    });

    $("#Calculate").click(function() {
        let myTax = calculate(p);
        add(myTax);
    });

});