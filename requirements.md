# Requirements
## Completed By Max Mander

## User Needs

### User stories
User stories for a traffic accidents map:
- As a new driver, I want to be able to see where the most accidents happen so i can avoid that area.
- As a bus driver, I want to know what routes i should be the most cautios of when driving as to ensure the journey is as safe as possible.
- As a delivery driver, the more crashes in an area most likely indicates to more traffic, so avoiding that area will allow me to make deliveries faster.
- As a taxi/uber driver, knowing where the accident hotspots are will allow me to take me and my passengers the safest routes.
- As a pedestrian, I want to see data about pedestrian-involved accidents in areas that i frequently walk so that i know the safest areas to walk

### Actors
- **Commuters & Pedestrians:** Regular users who want to find safer routes.
- **Business Owners:** Companies operating in Bristol who want to reduce accidents related to their fleet.
- **City Planners:** Officials or engineers looking for data to improve road safety.
- **GPS Providers:** Companies integrating collision data into navigation systems.

### Use Cases

| USE-CASE 1 | VIEW ACCIDENT HOTSPOTS | 
| -------------------------------------- | ------------------- |
| **UC1** | View Accident Hotspots |
| **Description** | Users can view a map displaying high-incident areas in Bristol. |
| **Actors** | User |
| **Assumptions** | The system has access to up-to-date data from Open Data Bristol.</td></tr>
| **Steps** | 1. User accesses the website. <br>2. User selects to display the information via map. <br>3. System displays a map of accident hotspots. |
| **Variations** | User can share their location |
| **Non-functional** | Navigating through the map should be a smooth user experience. |
| **Issues** | Recent accidents might not appear on the map until the database is updated. |
- Max

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
- Max

| USE-CASE 3 | SORT CRASHES BY SEVERITY | 
| -------------------------------------- | ------------------- |
| **UC3** | SORT CRASHES BY SEVERITY |
| **Description** | Users can sort what crashes appear depending on the severity of the crash |
| **Actors** | User |
| **Assumptions** | The system has access to up-to-date data from Open Data Bristol.</td></tr>
| **Steps** | 1. User accesses the website. <br>2. User selects a level of severity. <br>3. System displays accidents of that severity. |
| **Variations** | The user will be able to filter the data even further  |
| **Non-functional** | It should be clear what to the user what they are sorting the map by. |
| **Issues** | If the user sets the filters too strict, it is possible that no accidents are displayed. | 
- Max

Use Case Diagram: 
[Image](images/UseCase.png)

## Software Requirements Specification
### Functional requirements
FR1 - The system must be able to show the users car accidents in a certain area. (UC1)

FR2 - The system should be able to display the nearest accidents to the user (Geo-location is not supported by all browsers). (UC1)

FR3 - The system must let users see more information surrounding the specific accident. (UC2)

FR4 - The system won't be able to provide the user the nearest recorded accidents if their geo-location is not accessible. (UC1)

FR5 - The system must provide accurate data regarding car accidents. (UC1/2/3)


### Non-Functional Requirements
NFR1 - Reliability: system availability - The system should be highly available at all times to ensure users can access the information at all times. (UC1/2/3)

NFR2 - Usability: user-friendly interface - The interface of the system should be intuitive and responsive. This could involve minimal amount of clicks to provide the user what they want, filters and map should be clearly labelled, and the app should work flawlessly on both desktop and mobile. (UC1/2/3)

NFR3 - Maintainability: Modular Codebase and Clear Documentation - The system should have a modular code structure to allow developers to easily update and add features without interfering with other parts of the system. The documentaion should be thourough and easy to understand (UC1/2/3)
