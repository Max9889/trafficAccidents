# Requirements

## User Needs

### User stories
User stories for an oven:
 - As a home-cook, I want to be able to change the temperature on my oven so that I can cook different food.
 - As a home-cook, I want my oven to distribute heat well so that it cooks food evenly.
 - As a home-cook, I want my oven to have different settings so that I can cook food in different ways.
 - As a home-cook, I want my oven to be big enough so that it can accommodate large amounts of food
 - As a home-cook, I want my oven to be energy efficient so that it lowers the running cost of the oven


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
| **Actors** | Commuter, Business Owner |
| **Assumptions** | The system has access to up-to-date data from Open Data Bristol.</td></tr>
| **Steps** | 1. User accesses the website. <br>2. User selects a time range and severity filter. <br>3. System displays a heatmap of accident hotspots. |
| **Variations** | User can filter by specific types of accidents (e.g., Loss of Control, Nose to Tail)
| **Non-functional** | Must display data within 2 seconds of applying filters. |
| **Issues** | None at the moment. |

| USE-CASE 2 | VIEW DETAILED CRASH REPORTS | 
| -------------------------------------- | ------------------- |
| **UC2** | View Detailed Crash Reports |
| **Description** | Users can select an accident and see information regarding it (date, severity, casualties, etc..). |
| **Actors** | Commuter, Business Owner |
| **Assumptions** | The system has access to up-to-date data from Open Data Bristol.</td></tr>
| **Steps** | 1. User accesses the website. <br>2. User selects an accident. <br>3. System displays information regarding the accident. |
| **Variations** | The user will be able to select accidents of  different severity |
| **Non-functional** | Must display data within 2 seconds of applying filters. |
| **Issues** | None at the moment. |

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
