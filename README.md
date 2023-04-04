#Belly Button Biodiversity

## Dashboard Overview

The  dashboard shows the top OTUs for the selected individual, the makeup of all OTUs, and the frequency they wash their belly buttons.

![image](https://user-images.githubusercontent.com/116215793/229922872-07c10352-20f3-4f59-b80a-e6f8983fcc64.png)

## Dashboard Code

The overall code is structured so that the URL for the API endpoint is created, then all functions are created, and finally the API data is imported and all functions are called within the data promsie.

![image](https://user-images.githubusercontent.com/116215793/229923247-67afe0ce-49eb-45f0-98cf-773f4504fa68.png)

### Code Breakdown

The first two functions created are the createDropdown() and filteredList() functions. The createDropdown function compiles all the options for the individual dropdown, while the filteredList function is used in later functions to filter out the data by a specific individual.

![image](https://user-images.githubusercontent.com/116215793/229923549-91111789-9447-49d8-b032-6b339eaa6ab9.png)

The chartInit() function creates all three charts when the webpage is loaded. The data is filtered and sorted before being sliced to the top 10 OTUs for the bar chart. For the bubble chart, the filtered data is taken and added directly to that chart. For the gauge, the metadata for wash frequency is filtered to the individual before being added to the gauge.

![image](https://user-images.githubusercontent.com/116215793/229923877-ca0e4c18-2172-4dbf-b0c3-4cdb3d97ef28.png)

The metaDataInit() function is similar to the chartInit() function. It filters the metadata by the individual and then adds all data into the panel.

![image](https://user-images.githubusercontent.com/116215793/229924138-e31fa28e-0e3f-4cb5-80f2-4c577c64ab31.png)

The optionChanged() function updates the charts and panel based on the new dropdown selection.

![image](https://user-images.githubusercontent.com/116215793/229924282-0eddd675-42bd-45ee-b3b3-1ebcdbd643a0.png)

buildCharts() updates all three charts by filtering the data, repeating the sort and slice for the bar chart, and resetting the x and y variables and the titles of the graphs to match the new individual. The gauge chart is updated by filtering the metadata and updating that.

![image](https://user-images.githubusercontent.com/116215793/229924564-fb784393-9517-4d7b-a3e4-5f4bbe27f726.png)

buildMetaData() is almost identical to metaDataInit(). It clears the data in the panel and rebuilds it with the new information. 

![image](https://user-images.githubusercontent.com/116215793/229924749-74096ed0-312a-4d69-a743-1b48892d172f.png)

## Contributors
AskBCS provided the optionChanged() code.
Pseudocode framework provided by Bootcampspot
API data provided by Bootcampspot

