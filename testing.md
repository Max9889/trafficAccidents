# Testing
## Completed By Max Mander

## Test Plan

| Test Case ID | Test Type | Description | Scenario |
|--------------|-----------|-------------|----------|
| TF1.1 | UAT | The system must display car accidents on a map  | 1. The user clicks view as map <br> 2. The collisions are displayed  |
| TF1.2 | UAT | The system must show the nearest accidents to the user (when GeoLocation is shared)  | 1. The user clicks view as map <br> 2. User Clicks Use My Location <br> 3. Marker appears at the user location with the nearest accidents surrounding it  |
| TF1.3 | UAT | The system must centre the map on Bristol if the user cannot share their location  | 1. The user clicks view as map <br> 2. The user denies sharing their location <br> 3. The collisions are displayed and the map is centred on Bristol |
| TF2.1 | UAT | The system must display more information than location  | 1. The user clicks view as map <br> 2. The collisions are displayed across Bristol <br> 3. The user can select a marker and more information is displayed  |
| TF3.1 | UAT | The User can filter the information shown  | 1. The user clicks view as table <br> 2. The user selects any of the filter options <br> 3. Data is filtered  |
| TNF1.1 | UAT | The data shown must be accurate and recent  | 1. The last update from Bristol Open Data will show the recency of the data  |
| TNF1.2 | UAT | The system should be highly available at all times | 1. Frequent checks of the system to ensure availability |
| TNF1.3 | UAT | The User interface should be intuitive  | 1. The user should be able to quickly navigate and explore the system |
| TNF1.4 | UAT | The System should respond to each user input within 5 seconds  | 1a. The user selects View as Map <br> 2a. The map loads within 5 seconds <br> 1b. The user selects Use My Location <br> 2b. The user's location is shown on the map within 5 seconds <br> 1c. The user selects View as Table <br> 2c. The table is displayed within 5 seconds|


Test Runs

| Use-Case ID | Requirement ID | Software Module| Test Case | Status |
|--------------|-----------|-------------|----------|----------|
| UC1 | FR1 | map.html | TF1.1 | Pass |
| UC1 | FR2 | map.html | TF1.2 | Pass |
| UC1 | FR3 | map.html | TF1.3 | Pass |
| UC2 | FR4 | map.html | TF2.1 | Pass |
| UC3 | FR5 | table.html | TF3.1 | Pass |
| UC1/2/3 | NFR1 | table.hmtl & map.html | TNF1.1 | Pass |
| UC1/2/3 | NFR1 | ALL | TNF1.2 | Pass |
| UC1/2/3 | NFR1 | ALL | TNF1.3 | Pass |
| UC1/2/3 | NFR1 | ALL | TNF1.4 | Pass |




