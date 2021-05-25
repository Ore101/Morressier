# Carer Web - Technical Testing Task

## Scenario
Carer jobs are constantly being added to our website. Using https://www.ceracare.co.uk/ (live website, don't bring it down please) complete the tasks below.

## Task 1
We are going to push changes to the search infrastructure, the functionality should stay the same. In order to ensure we have delivered quality, reliable and stable software what approach should we take?
1. Add a TEST-PLAN.md explaining your test approach for this task, including different levels & types of test

## Task 2
1. Fix the broken test
1. Add a negative scenario
1. Refactor anything you would improve

## Tips
1. Some carer branches cover multiple locations
1. Make sure to comment and add details of your thought process and any assumptions you have made
1. Don't spend too long on it (2 hours max)

## Setup
node version (`v14.16.1`)    
npm version (`6.14.12`)

1. `npm install`
1. `npm test`



TEST PLAN 

Project Name Cera 001

1.0 Introduction
The objective of this document is to identify the functional and non-functional features to be tested, the types of testing to be performed, the personnel for testing, the resources and schedule required to complete testing, the risk associated with the plan.
This release will have limited features. Over a period of time, new and new functionalities will be added to the site.
The purpose of this document is to test the search functionality of the Cera website developed for Cera. This document will be used by all stakeholders including developers and testers.

1.1	Test Item
Testing should be done on both front-end and back-end of the application on the Windows and Apple environments.
Functional testing and external interface are in scope and need to be tested the Cera site will be compatible with Chrome version 9.0.257 and above, IE version 11.0 and above, Firefox version 88.0 and above.

1.2 Feature to be tested 
The features to be tested are changes made to the search infrastructure 

1.3 Feature not to be tested 
Non-functional testing like performance, stress is beyond scope of this project.

1.4 Approach 
I will adopt a risk-based approach to testing, focusing on the changes and new requirements. I will follow Agile methodology in this project.
Identify the changes i.e. what are the requirements being pushed. I want a comprehensive list of requirements in order to know what to and how to test these changes.
Test each requirement from the list. Functional testing of new requirements and ensure they don’t break or pose a risk to existing functionalities.
Following deployment of changes to search infrastructure, carry out Regression testing of search infrastructure and ensure functionality remains the same and there are no regression issues.
Test types will include:
a)	Functional Testing of requirements
b)	Retesting of fixed defects
c)	Regression testing of the search infrastructure to ensure features working previously are not broken following deployment of changes.
d)	The existing automation test suite that is run as part of the CI/CD process

1.5 Pass/Fail Criteria
The major functionality of the Cera application should work as intended and the pass percentage of test cases should be more than 95% and there should not be any critical bugs.

1.6 Suspension Criteria 
If any of the main Cera functionalities is/are not functioning as expected or system login issues then testing would be suspended, the bugs would be documented and reassigned to the developer for fixing.
Existing automation test suite that is run as part of the CI/CD process have past testing.
All Items/Features to be delivered for this release have passed UAT testing by the end user (Cera employee) on the UAT environment.

1.7 Test Deliverables 	
Tests will cover both positive and negative scenarios.
a)	Test Cases
b)	Bug Report
c)	Test report

1.8 Testing Tasks
Test environment should be accessible prior to test execution phase. Test summary report needs to be prepared. 

1.9 Environment Needs
a)	Hardware: Laptop or desktop
b)	Software: Windows OS, Chrome and IE Browser, Jira, TestRail, Git, GitHub, Cypress

2.0 Responsibilities
Test plan should be prepared by Test Lead. Preparation and execution of test cases should be carried out by tester.

2.1 Schedule
Test execution – 20 man-hours, Test reporting – 1 man-hour

2.2 Risk and Contingencies
a)	Risk: In-case of a wrong budget estimation, cost may overrun.
b)	Contingency Plan: Establish scope before beginning the testing tasks and pay attention to the project planning and also track the budget estimates regularly.

2.3 Approvals 
Project manager should agree on completion of the project and determine the next step to proceed.
