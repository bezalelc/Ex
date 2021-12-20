$(document).ready(function () {
    let p;
    $('input[type=checkbox]').change(function () {
        if ($(this).is(':checked')) {
            p = $("#months").detach();
        } else {
            if (p) {
                p.appendTo("main");
                p = null;
            }
        }
    });
});