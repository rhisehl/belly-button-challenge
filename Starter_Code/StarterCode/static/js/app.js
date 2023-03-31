// add API endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// import API data
let data = d3.json(url).then(function(data){console.log(data)});

// create variables for OTUs chart
// let sampleValues = Object.values(data['samples'][0]);
// let otuIds = Object.values(data['samples'][0]['otu_ids']);
// let otuLabels = Object.values(data['samples'][0]['otu_labels'])

let samples = data.map(function(data){return data.samples});

console.log(samples)