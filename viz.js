var fs = require('fs');
var contents = fs.readFileSync('./exercise2-olympics.json', 'utf8');
console.log(contents);

var margin = {top: 30, right: 50, bottom: 10, left: 50},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


var svg = d3.select("#my_dataviz")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform","translate(" + margin.left + "," + margin.top + ")");


var color = d3.scaleOrdinal()
              .domain(["setosa", "versicolor", "virginica" ])
              .range([ "#440154ff", "#21908dff", "#fde725ff"])


dimensions = ["Petal_Length", "Petal_Width", "Sepal_Length", "Sepal_Width"]
