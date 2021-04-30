let clickStartButtonTime;
let totalTime;
let beforeClickStopButtonTotalTime = 0;

$(document).ready(function() {
    $("#start-button").click(function() {
        clickStartButtonTime = Date.now();
        start = setInterval(countUp, 100);
        $(this).prop("disabled", true);
        $("#stop-button").prop("disabled", false);
    });

    $("#stop-button").click(function() {
        clearInterval(start);
        beforeClickStopButtonTotalTime = totalTime;
        $(this).prop("disabled", true);
        $("#start-button").prop("disabled", false);
    });

    $("#reset-button").click(function() {
        beforeClickStopButtonTotalTime = 0;
        clickStartButtonTime = Date.now();

        $("#millisecond").text(0);
        $("#second").text(0);
        $("#minute").text(0);
        $("#hour").text(0);
    });

    function countUp() {
        totalTime = beforeClickStopButtonTotalTime + (Date.now() - clickStartButtonTime);
        let hour = Math.floor(totalTime / 3600000);
        let minute = Math.floor((totalTime % 3600000) / 60000);
        let second = Math.floor(totalTime % 60000 / 1000);
        let millsecond = Math.floor(totalTime % 1000 / 100);
        
        $("#millisecond").text(millsecond);
        $("#second").text(second);
        $("#minute").text(minute);
        $("#hour").text(hour);
    }
});
