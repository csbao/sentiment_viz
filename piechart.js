//pie chart

var width = 1080,
    height = 600,
    radius = Math.min(width, height) / 4;

var color = d3.scale.ordinal()
    .range(["#3385ff", "#ff3300", "#8000ff", "#d3d3d3"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var labelArc = d3.svg.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

var pie = d3.layout.pie()
    .value(function(d) { console.log(d.value); return d.value; });


var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong><center><span style='color: "+color(d.data.label)+"'>"+d.data.label+"</span></center></strong><br>Word Count: <span style='font-weight: bold'>" + d.data.value + "</span>";
  });

//  .attr("text", function(d) { console.log(d); console.log("hi");
//    return "<strong>Word Count:</strong> <span style='color:red'>" + d.data.value + "</span>";
//  });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.call(tip);


d3.csv("words.csv", function(error, data) {
  if (error) throw error;
  var positive=0, negative=0, neutral = 0, pos_and_neg=0;
  for (var i in data) {
    if (data[i].positive==1 && data[i].negative==1) {
        pos_and_neg++;
    }
    else if (data[i].positive==1)
        positive++;
    else if (data[i].negative==1)
        negative++;
    else neutral++;
  }
  var sum = positive+negative+pos_and_neg+neutral;
  data2 = [{ 'label': 'positive', 'value': positive },
           {  'label': 'negative', 'value': negative },
           {  'label': 'ambivalent', 'value': pos_and_neg},
           { 'label': 'neutral', 'value': neutral }]
  var arcOver = d3.svg.arc()
        .outerRadius(radius + 10);
  var g = svg.selectAll(".arc")
      .data(pie(data2))
    .enter().append("g")

      .attr("class", "arc")



  g.append("path")
      .attr("d", arc)

      .style("fill", function(d) { return color(d.data.label); })

        .on("mouseenter", function(d) {
            d3.select(this)
               .attr("stroke","white")
               .transition()
               .duration(400)
               .attr("d", arcOver)
               .attr("stroke-width",3)
               ;



        })
        .on("mouseleave", function(d) {
            d3.select(this).transition()
               .attr("d", arc)
               .attr("stroke","none");

        })
       .on('mouseover', tip.show )
       .on('mouseout', tip.hide );



  g.append("text")
      .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
      .attr("dy", ".35em")

      .text(function(d) {
        var percentage = Math.round(d.data.value/sum*100)
        if (percentage < 5) return ""
        else return percentage +"%" });




  });

