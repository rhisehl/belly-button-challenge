// add API endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"


// import API data
let data = d3.json(url).then(function(data){
    // confirm data loaded successfully
    console.log(data);
    // separate out needed sample data
    var sampleData = Object.values(data.samples);
    // create testID list
    var testIDs = sampleData.map(sampleData => sampleData.id);
    // populate DOM list
    for (let i=0; i < testIDs.length; i++) {
        var x = document.getElementById("selDataset");
        var option = document.createElement("option");
        option.text = testIDs[i] ;
        x.add(option)};
    // create initial chart (??outside the API call)

    // figure out how to make the variables live outside the API call

    // create the functions for buildCharts and buildMetadata (rename?)

    // function below was given by AskBCS as the ideal for the optionChanged. Must live outside API call or won't work.

    }


function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildCharts(newSample);
    buildMetadata(newSample);
}






});

//  
//     // call optionChanged() when DOM changes
// d3.selectAll("#selDataset").on("change",optionChanged);
// function optionChanged(){
//     // Assign dropdown menu option to letiable
//     var dropdownMenu = d3.select('#selDataset');
//     var dataset = parseInt(dropdownMenu.property("value"));
//     function selectID(person){return person.id = dataset};
//     let rawData = Object.values(data.samples);
//     console.log(rawData)
//     var currentSample = rawData.filter(selectID);
//     // create variables for the data of interest
//     currentSample = currentSample.sort((a,b) => b.sample_values - a.sample_values);
//     currentSample = currentSample.slice(0,10);
//     currentSample = currentSample.reverse();

//     let trace1 = {
//         y: currentSample.map(currentSample => currentSample.sample_values),
//         x: currentSample.map(currentSample => currentSample.otu_ids),
//         text: currentSample.map(currentSample => currentSample.otu_labels),
//         type: "bar",
//         orientation: "h"
//     };
//     let traceData = [trace1]
//     let layout = {
//         title: "Top 10 OTUs for Individual ${dataset}",
//         margin: {
//             l: 100,
//             r: 100,
//             t: 100,
//             b: 100
//         }
//     };
//     Plotly.newPlot("plot",traceData,layout)}});