
var startTime = new Date().getTime();
var set_time = 0;
var wsbl = 0;
var nextTime = 10;
var b = 4;
var intDiff = 0;
var bajie = 1;
var day = 0,
    hour = 0,
    minute = 0,
    second = 0;
weimiao = 0//时间默认值
var count = 0;


function daojishi() {
    count++;
    var offset = new Date().getTime() - (startTime + count * 1000);
    nextTime = 1000 - offset;
    if (nextTime < 0)
        nextTime = 1;
    $(".daoji_time").each(function () {
        set_time = $(this).attr("data-data");
        intDiff = parseInt(set_time);//倒计时总秒数量
        if (intDiff >= 0) {
            day = Math.floor(intDiff / (60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
            minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);        }
        else {
            return;
        }
      
        if (hour <= 9) hour = '0' + hour;
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;

        if ($(this).attr("data-data") <= 0) {
            $(this).text("马上揭晓");
        }
        else {
            $(this).find('.time_tian').text(day);
            $(this).find('.time_shi').text(hour);
            $(this).find('.time_fen').text(minute);
            $(this).find('.time_miao').text(second);
            intDiff = intDiff - 1;
            $(this).attr("data-data", set_time - 1);
        }
    });
    setTimeout(daojishi, nextTime);
};
setTimeout(daojishi, 1000);