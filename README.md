# AngularCodingExample

This repo is for a coding interview task with the following requirements:

Develop a small Angular application. The application should contain two screens.
- Person list - this screens lists all of the people
- Person form - this screens adds / edits a person

## General Requirements
1. Use [Angular Material](https://material.angular.io/).
2. The website should be responsive and usable on desktop and mobile devices to achieve this use [Angular Flex Layout](https://github.com/angular/flex-layout)
Dates need to be in dd/MM/yyyy format

## Component/Service Requirements

### Person List
- You can choose your preferred way to display the list. Make sure it conforms to the other specifications in this document. In addition,
- Clicking a person in the list should take you to the person form where you can edit the details
- Each Person’s first name, last name, email address and DOB should be displayed in the list

### People Form
The form should be built using Angular Reactive Forms and relevant validation should be applied to each field (relevant messages should be shown).  The form should contain the following fields:
- First name
- Last name
- Date of birth
- Telephone number
- Email
- Clicking save should save the person to the person service (only save valid data). See the next page for details of the person service

### Person Service
- You don’t need to save your data to a server, just persist it into an angular service You should have some dummy data that is there when the application loads. Adding a person should persist that data to the service (if you refresh the page the data will revert to your dummy data).