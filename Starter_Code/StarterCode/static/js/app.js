// add API endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// create functions to call inside the .then() function

function createDropdown(){
    // Create the dropdown menu options for the chart
    for (let i=0; i < testIDs.length; i++) {
        var x = document.getElementById("selDataset");
        var option = document.createElement("option");
        option.text = testIDs[i] ;
        x.add(option)};
}

function filteredList(test){
    // Filter list based on desired ID
        let dropdown = d3.select('#selDataset');
        let dataset = parseInt(dropdown.property("value"));
        // console.log(dataset)
        return parseInt(test.id) === dataset
}

function chartInit(){
    let allData = sampleData.filter(filteredList)[0];
    allData.sample_values.sort((a,b) => b-a);
    let sample_values = allData.sample_values.slice(0,10).reverse();
    let otu_numbers = allData.otu_ids.slice(0,10).reverse();
    let otu_labels = allData.otu_labels.slice(0,10).reverse();
    let otu_ids = []
    for (let i=0;i<otu_numbers.length;i++){
        otu_ids.push("OTU "+ otu_numbers[i])
    }
    console.log(sample_values);
    // Initialize bar chart
    let trace1 = {
        x : sample_values,
        y : otu_ids,
        hovertext : otu_labels,
        marker:
        {
            color: 'rgb(231,76,60)',
        },
        type: "bar",
        orientation : "h",
    };
    let traceData1 = [trace1];
    let layout1 = {
        title: "Top OTUs in Individual #" + allData.id,
            };
    // console.log(traceData1);
    Plotly.newPlot("bar",traceData1,layout1);
    // Initialize bubble chart
    let trace2 = {
        x: allData.otu_ids,
        y: allData.sample_values,
        mode: 'markers',
        marker: {
            size: allData.sample_values,
            color: allData.otu_ids
        },
        hovertext : allData.otu_labels
    }
    let traceData2 = [trace2]
    let layout2 = {
        title: "All OTUs in Individual #" + allData.id,
        margin: {
            l:100,
            r: 100,
            t: 100,
            b: 100
        }
    }
    Plotly.newPlot("bubble",traceData2,layout2);
    // Initialize Gauge Chart
    let filteredMetadata = metaData.filter(filteredList)[0];
    let userData = filteredMetadata.wfreq
    let gaugeData = [{
        value: userData,
        title: {text: "<b>Belly Button Washing Frequency</b><br></br>Washes Per Week"},
        type: "indicator",
        mode: "gauge+number",
        gauge: {
            axis: { range: [null,9],dtick: "1"},
            bar: {color: "maroon"},
            steps: [
                {range: [0,1],color : 'rgb(251,238,230)'},
                {range: [1,2], color: 'rgb(246,221,204)'},
                {range: [2,3], color: 'rgb(237,187,153)'},
                {range: [3,4], color: 'rgb(229,152,102)'},
                {range: [4,5], color: 'rgb(220,118,51)'},
                {range: [5,6], color: 'rgb(211,84,0)'},
                {range: [6,7], color: 'rgb(186,74,0)'},
                {range: [7,8], color: 'rgb(160,64,0)'},
                {range: [8,9], color: 'rgb(134,54,0)'}
            ],
            dtick: 1
        }
    }]
    let gaugeLayout = {
        automargin: true
    }
    Plotly.newPlot("gauge",gaugeData,gaugeLayout)
}


function buildCharts(sample){
    // Build the Horizontal Bar Chart
    let filteredData = sampleData.filter(filteredList)[0];
    filteredData.sample_values.sort((a,b) => b-a);
    let sample_values = filteredData.sample_values.slice(0,10).reverse();
    let otu_numbers = filteredData.otu_ids.slice(0,10).reverse();
    let otu_labels = filteredData.otu_labels.slice(0,10).reverse();
    let otu_ids = []
    for (let i=0;i<otu_numbers.length;i++){
        otu_ids.push("OTU "+ otu_numbers[i])
    }
    let x = sample_values;
    let y = otu_ids
    Plotly.restyle("bar","x",[x]);
    Plotly.restyle("bar","y",[y]);
    Plotly.relayout("bar",{'title':"Top OTUs in Individual #" + sample});
    // Build bubble chart
    let x2 = filteredData.otu_ids;
    let y2 = filteredData.sample_values;
    Plotly.restyle("bubble","x",[x2]);
    Plotly.restyle("bubble","y",[y2]);
    Plotly.relayout("bubble",{title: "All OTUs in Individual #" + sample})
    // Build gauge chart
    let filteredMetadata = metaData.filter(filteredList)[0];
    let userData = filteredMetadata.wfreq;
    Plotly.restyle("gauge","value",[userData])
}

function metadataInit(){
    // Create default metadata table
    let filteredMetadata = metaData.filter(filteredList)[0];
    let panel = document.getElementById("sample-metadata");
    panel.innerHTML = "ID: " + filteredMetadata.id + "<br />";
    panel.innerHTML += "Ethnicity: " + filteredMetadata.ethnicity + "<br />";
    panel.innerHTML += "Gender: " + filteredMetadata.gender + "<br />";
    panel.innerHTML += "Age: " + filteredMetadata.age + "<br />";
    panel.innerHTML += "Location" + filteredMetadata.location + "<br />";
    panel.innerHTML += "bbType " + filteredMetadata.bbtype + "<br />";
    panel.innerHTML += "Wfreq " + filteredMetadata.wfreq;

}

function buildMetadata(sample){
    // Build the Metadata
    let filteredMetadata = metaData.filter(filteredList)[0];
    let panel = document.getElementById("sample-metadata");
    panel.innerHTML = "ID: " + filteredMetadata.id + "<br />";
    panel.innerHTML += "Ethnicity: " + filteredMetadata.ethnicity + "<br />";
    panel.innerHTML += "Gender: " + filteredMetadata.gender + "<br />";
    panel.innerHTML += "Age: " + filteredMetadata.age + "<br />";
    panel.innerHTML += "Location" + filteredMetadata.location + "<br />";
    panel.innerHTML += "bbType " + filteredMetadata.bbtype + "<br />";
    panel.innerHTML += "Wfreq " + filteredMetadata.wfreq;

}

function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildCharts(newSample);
    buildMetadata(newSample);
}


// import API data
let data = d3.json(url).then(function(data){
    // confirm data loaded successfully
    // console.log(data);
    // separate out needed sample data
    sampleData = Object.values(data.samples);
    // separate out metadata
    metaData = Object.values(data.metadata);
    // create testID list
    testIDs = sampleData.map(sampleData => sampleData.id);
    // populate dropdown menu options
    createDropdown()
    // initialize charts
    chartInit()
    // intialize demographics table
    metadataInit()
})
    