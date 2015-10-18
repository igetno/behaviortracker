			
var doughnutData = (function () {
    var doughnutData = null;
    var startDate = Date.today().last().friday().toString('yyyy-MM-dd');
    $.ajax({
        'url': "/counts/" + startDate ,
        'dataType': "json",
        'async': false,
        'global': false,
        'success': function (data) {
            doughnutData = data;
        }
    });
    return doughnutData ;
})();


options = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,
    
    // Number - Tooltip label font size in pixels
    tooltipFontSize: 55,

    // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive : true,
    
    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 4,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 65, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

};



window.onload = function(){
  var ctx = document.getElementById("chart-area").getContext("2d");
  window.myDoughnut = new Chart(ctx).Doughnut(doughnutData , options );
};

function behaviorClick(type) {
$.ajax({
        'url': "/counts/" + type,
        'type': "PUT",
        'dataType': "json",
        'success': function (data) {
            location.reload();
        }
    });
};