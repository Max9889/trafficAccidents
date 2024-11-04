# Requirements

## User Needs

### User stories
User stories for a traffic accidents map:
- As a new driver, I want to be able to see where the most accidents happen so i can avoid that area.
- As a bus driver, I want to know what routes i should be the most cautios of when driving as to ensure the journey is as safe as possible.
- As a delivery driver, the more crashes in an area most likely indicates to more traffic, so avoiding that area will allow me to make deliveries faster.
- As a taxi/uber driver, knowing where the accident hotspots are will allow me to take me and my passengers the safest routes.
- As a local business owner, I value knowing where the most traffic accidents happen because I
  **NOT FINISHED**

### Actors
- **Commuters:** Regular users who want to find safer routes.
- **Business Owners:** Companies operating in Bristol who want to reduce accidents related to their fleet.
- **City Planners:** Officials or engineers looking for data to improve road safety.
- **GPS Providers:** Companies integrating collision data into navigation systems.

### Use Cases
TODO: Describe each use case (at least one per team member).
    Give each use case a unique ID, e.g. UC1, UC2, ...
    Summarise these using the use-case template below.

| USE-CASE 1 | VIEW ACCIDENT HOTSPOTS | 
| -------------------------------------- | ------------------- |
| **UC1** | View Accident Hotspots |
| **Description** | Users can view a map displaying high-incident areas in Bristol, filtered by date and severity. |
| **Actors** | User |
| **Assumptions** | The system has access to up-to-date data from Open Data Bristol.</td></tr>
| **Steps** | 1. User accesses the website. <br>2. User selects a time range and severity filter. <br>3. System displays a heatmap of accident hotspots. |
| **Variations** | User can filter by specific types of accidents (e.g., Loss of Control, Nose to Tail)
| **Non-functional** | Navigating through the map should be a smooth user experience. |
| **Issues** | Recent accidents might not appear on the map until the database is updated. |

| USE-CASE 2 | VIEW DETAILED CRASH REPORTS | 
| -------------------------------------- | ------------------- |
| **UC2** | View Detailed Crash Reports |
| **Description** | Users can select an accident and see information regarding it (date, severity, casualties, etc..). |
| **Actors** | User |
| **Assumptions** | The system has access to up-to-date data from Open Data Bristol.</td></tr>
| **Steps** | 1. User accesses the website. <br>2. User selects an accident. <br>3. System displays information regarding the accident. |
| **Variations** | The user will be able to select accidents of different severity |
| **Non-functional** | The data should be displayed quickly after applying filters. |
| **Issues** | The detailed reports could be incorrect. |

| USE-CASE 3 | SORT CRASHES BY SEVERITY | 
| -------------------------------------- | ------------------- |
| **UC2** | SORT CRASHES BY SEVERITY |
| **Description** | Users can sort what crashes appear depending on the severity of the crash |
| **Actors** | User |
| **Assumptions** | The system has access to up-to-date data from Open Data Bristol.</td></tr>
| **Steps** | 1. User accesses the website. <br>2. User selects a level of severity. <br>3. System displays accidents of that severity. |
| **Variations** | The user will be able to filter the data even further  |
| **Non-functional** | It should be clear what to the user what they are sorting the map by. |
| **Issues** | If the user sets the filters too strict, it is possible that no accidents are displayed. |

TODO: Your Use-Case diagram should include all use-cases.

![Insert your Use-Case Diagram Here](images/use-case.png)

## Software Requirements Specification
### Functional requirements
TODO: create a list of functional requirements. 
    e.g. "The system shall ..."
    Give each functional requirement a unique ID. e.g. FR1, FR2, ...
    Indicate which UC the requirement comes from.


### Non-Functional Requirements
TODO: Consider one or more [quality attributes](https://en.wikipedia.org/wiki/ISO/IEC_9126) to suggest a small number of non-functional requirements.
Give each non-functional requirement a unique ID. e.g. NFR1, NFR2, ...

Indicate which UC the requirement comes from.
