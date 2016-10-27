function filterByCategory(data) {
    var keys = [
        {label: "anger", value:0, color: "#e60000", pos: 0, neg: 0, ambi: 0, neutral: 0},
        {label: "anticipation", value:0, color: "#ff8000", pos: 0, neg: 0, ambi: 0, neutral: 0},
        {label: "fear", value:0, color: "#ffff66", pos: 0, neg: 0, ambi: 0, neutral: 0},
        {label: "surprise", value:0, color: "#ffff1a", pos: 0, neg: 0, ambi: 0, neutral: 0},
        {label: "joy", value:0, color: "#00cc44", pos: 0, neg: 0, ambi: 0, neutral: 0},
        {label: "trust", value:0, color: "#66b3ff", pos: 0, neg: 0, ambi: 0, neutral: 0},
        {label: "sadness", value:0, color: "#3333ff", pos: 0, neg: 0, ambi: 0, neutral: 0},
        {label: "disgust", value:0, color: "#bf00ff", pos: 0, neg: 0, ambi: 0, neutral: 0}
    ]
   var positive=0, negative=0, neutral = 0, pos_and_neg=0;

    for (var i in data) {
        if (data[i].anger==1) {
           keys[0].value++;
           if (data[i].positive==1 && data[i].negative==1)
              keys[0].ambi++;
           else if (data[i].positive==1)
              keys[0].pos++;
           else if (data[i].negative==1)
              keys[0].neg++;
           else keys[0].neutral++;
        }
        if (data[i].anticipation==1) {

           keys[1].value++;
           if (data[i].positive==1 && data[i].negative==1)
              keys[1].ambi++;
           else if (data[i].positive==1)
              keys[1].pos++;
           else if (data[i].negative==1)
              keys[1].neg++;
           else keys[1].neutral++;

        }
        if (data[i].fear==1) {

            keys[2].value++;
           if (data[i].positive==1 && data[i].negative==1)
              keys[2].ambi++;
           else if (data[i].positive==1)
              keys[2].pos++;
           else if (data[i].negative==1)
              keys[2].neg++;
           else keys[2].neutral++;

        }
        if (data[i].surprise==1) {
            keys[3].value++;
           if (data[i].positive==1 && data[i].negative==1)
              keys[3].ambi++;
           else if (data[i].positive==1)
              keys[3].pos++;
           else if (data[i].negative==1)
              keys[3].neg++;
           else keys[3].neutral++;

        }
        if (data[i].joy==1) {
            keys[4].value++;
           if (data[i].positive==1 && data[i].negative==1)
              keys[4].ambi++;
           else if (data[i].positive==1)
              keys[4].pos++;
           else if (data[i].negative==1)
              keys[4].neg++;
           else keys[4].neutral++;

        }
        if (data[i].trust==1) {
            keys[5].value++;
           if (data[i].positive==1 && data[i].negative==1)
              keys[5].ambi++;
           else if (data[i].positive==1)
              keys[5].pos++;
           else if (data[i].negative==1)
              keys[5].neg++;
           else keys[5].neutral++;

        }
        if (data[i].sadness==1) {
            keys[6].value++;
           if (data[i].positive==1 && data[i].negative==1)
              keys[6].ambi++;
           else if (data[i].positive==1)
              keys[6].pos++;
           else if (data[i].negative==1)
              keys[6].neg++;
           else keys[6].neutral++;

        }
        if (data[i].disgust==1) {
            keys[7].value++;
           if (data[i].positive==1 && data[i].negative==1)
              keys[7].ambi++;
           else if (data[i].positive==1)
              keys[7].pos++;
           else if (data[i].negative==1)
              keys[7].neg++;
           else keys[7].neutral++;
        }

    }
    return keys;


}



d3.csv("words.csv", function(error, data) {
    emotionCounts = filterByCategory(data);
    console.log(emotionCounts)
    var chart = document.getElementById("chart"),
    axisMargin = 20,
    margin = 20,
    valueMargin = 4,
    width = 1000,
    height = 600,
    barHeight = (height-axisMargin-margin*2)* 0.9/emotionCounts.length,
    barPadding = (height-axisMargin-margin*2)*0.1/emotionCounts.length,
    data, bar, svg, scale, xAxis, labelWidth = 0;


    var anger=[{"label": "positive", "value": emotionCounts[0].pos},
               {"label": "negative", "value": emotionCounts[0].neg},
               {"label": "ambivalent", "value": emotionCounts[0].ambi},
               {"label": "neutral", "value": emotionCounts[0].neutral}]

    var anticipation=[{"label": "positive", "value": emotionCounts[1].pos},
               {"label": "negative", "value": emotionCounts[1].neg},
               {"label": "ambivalent", "value": emotionCounts[1].ambi},
               {"label": "neutral", "value": emotionCounts[1].neutral}]
    var fear=[{"label": "positive", "value": emotionCounts[2].pos},
               {"label": "negative", "value": emotionCounts[2].neg},
               {"label": "ambivalent", "value": emotionCounts[2].ambi},
               {"label": "neutral", "value": emotionCounts[2].neutral}]
    var surprise=[{"label": "positive", "value": emotionCounts[3].pos},
               {"label": "negative", "value": emotionCounts[3].neg},
               {"label": "ambivalent", "value": emotionCounts[3].ambi},
               {"label": "neutral", "value": emotionCounts[3].neutral}]

    var joy=[{"label": "positive", "value": emotionCounts[4].pos},
               {"label": "negative", "value": emotionCounts[4].neg},
               {"label": "ambivalent", "value": emotionCounts[4].ambi},
               {"label": "neutral", "value": emotionCounts[4].neutral}]

    var trust=[{"label": "positive", "value": emotionCounts[5].pos},
               {"label": "negative", "value": emotionCounts[5].neg},
               {"label": "ambivalent", "value": emotionCounts[5].ambi},
               {"label": "neutral", "value": emotionCounts[5].neutral}]

    var sadness=[{"label": "positive", "value": emotionCounts[6].pos},
               {"label": "negative", "value": emotionCounts[6].neg},
               {"label": "ambivalent", "value": emotionCounts[6].ambi},
               {"label": "neutral", "value": emotionCounts[6].neutral}]

    var disgust=[{"label": "positive", "value": emotionCounts[7].pos},
               {"label": "negative", "value": emotionCounts[7].neg},
               {"label": "ambivalent", "value": emotionCounts[7].ambi},
               {"label": "neutral", "value": emotionCounts[7].neutral}]

    var color = d3.scale.ordinal()
        .range(["#3385ff", "#ff3300", "#8000ff", "#d3d3d3"]);
    max = d3.max(emotionCounts.map(function(i){
      return i.value;
    }));




    svg = d3.select(chart)
        .append("svg")
        .attr("width", width+100)
        .attr("height", height);

    bar = svg.selectAll("g")
      .data(emotionCounts)
      .enter()
      .append("g");

    bar.attr("class", "bar")
      .attr("cx",0)
      .attr("transform", function(d, i) {
         return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
      })


    scale = d3.scale.linear()
      .domain([0, max])
      .range([0, width - margin*2 - labelWidth]);

    xAxis = d3.svg.axis()
      .scale(scale)
      .orient("bottom");

    bar.append("rect")
      .attr("transform", "translate("+labelWidth+", 0)")
      .attr("height", barHeight)
      .style("fill", function(d) { return d.color; })
      .transition().duration(2000)
      .attr("width", function(d){
        return scale(d.value);
      });

    bar.selectAll("rect")
        .attr("width", 0)


    bar.append("text")
      .attr("class", "value")
      .attr("y", barHeight / 2)
      .attr("dx", -valueMargin + labelWidth) //margin right
      .attr("dy", ".35em") //vertical align middle
      .attr("text-anchor", "end")
      .text(function(d){
        return d.value + ' words associated with ' +d.label;
        console.log("wtf")
      })
     .attr("opacity", 0) //start off with 0 opacity
     .attr("x", function(d){
        var width = this.getBBox().width;
        return Math.max(width + valueMargin, scale(d.value));
      });


    bar.selectAll("text")
        .transition().duration(1000).delay(1500)
        .attr("opacity", 1) //transition to 100% opacity




    //append pie charts here
    var kolor = d3.scale.ordinal().range(['blue', 'red', 'grey', 'purple']);

    var arx = d3.svg.arc()
            .outerRadius(40-10)
            .innerRadius(0);
    var labelArx = d3.svg.arc()
            .outerRadius(40-40)
            .innerRadius(40-40);
    var newPie = d3.layout.pie()
            .sort(null)
            .value(function(d) { return d.value; });
    all = [anger, anticipation, fear, surprise, joy, trust, sadness, disgust]
    console.log(all[0])
    console.log(newPie(anger))
   var g = bar.selectAll(".arc")
    .data(newPie(anger))
    .enter().append("g")
    .attr("class", "arc")
           .append("svg:g")
        .attr("transform", function(d) { return experiment(emotionCounts)})

//     .attr("cx", function(d){
//            var width = this.getBBox().width;
//            return Math.max(width + valueMargin, scale(d.value));
//        })

    g.append("path")
        .attr("d", arx)
        .style("fill", function(d) { return kolor(d.data.label)})


//    g.append("text")
//            .attr("transform", function(d) { return "translate(" + labelArx.centroid(d) + ")"})
//            .attr("dy", ".35em")
//            .text(function(d) { return d.data.label });
//
//

    svg.insert("g",":first-child")
     .attr("class", "axis")
     .attr("transform", "translate(" + (margin + labelWidth) + ","+ (height - axisMargin - margin)+")")
     .call(xAxis);


    });

 function experiment(values) {
    var maxi = d3.max(emotionCounts.map(function(i){
      return i.value;})), margin=20;
    var scalex = d3.scale.linear()
      .domain([0, maxi])
      .range([0, width - margin*2]);
    return "translate("+scalex(maxi)+","+60+")";
}
