var total  = 0;
$.getJSON("./data.json", function(json) {
    var highestamount = 0;
    $.each(json,function(i, dayData){
        if(dayData.amount >= highestamount){
            highestamount = dayData.amount;
        }
    });
    total = highestamount * 100 / 70;
    var html = '';
    $.each(json,function(i, dayData){
        html += '<li>\
                    <span style="height:'+percentage(dayData.amount)+'%"';
                    if(dayData.amount == highestamount){ html += ' class="highest"'; }
                    html +=' title="'+dayData.day+'" amount="$'+dayData.amount+'"></span>\
                </li>';
    });
    $('.chart').html(html);
});

function percentage(amount){
    return amount / total * 100;
}