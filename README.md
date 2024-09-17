# ParaBank Test Automation

Automated test of ParaBank website in Cypress.io Automation Test Framework

# Project tests Overview

- Fund Transfer
- Bill Payment
- Loan Application
- Transaction Search

# Recommended Prerequisites

## Environment:

- Node.js (version 12 or newer)

## Server:

- Apache Tomcat 10.1.29

## Framework:

- Cypress.io (version 13 or newer)

## Libraries:

- Faker.js (version 9)
- Cypress-xpath (version 2)
- mochawesome (version 3.8.2)

# Tomcat Installation and Configuration

## Installation

Go to /Tomcat-installation and unzip the file depending on your's OS
Add the following to the <tomcat install>/config/context.xml make sure to place this block before </Context> tag. This setting will provide 100 MB for caching:
'''
<Resources cachingAllowed="true" cacheMaxSize="102400" />
'''
To support clean re-deployments of ParaBank please add the following to the <Context> tag of the <tomcat install>/config/context.xml
'''
<Context antiResourceLocking="true">
'''

## Configuration

Go to /conf folder
Open the tomcat-users.xml and add the following command before </tomcat-users>

'''
<user username="tomcat" password="tomcat" roles="tomcat, manager-gui"/>
'''

## Starting server

Go to /apache-tomcat-10.1.29/bin
Run the following command to start/stop the server

'''
./startup.sh (shutdown.sh to stop)| for Unix systems
./startup.bat (shutdown.bat to stop)| for Windows systems
'''

Go to (http://localhost:8080/manager/html/)
Enter the username and password you created in the tomcat-users.xml file
Click "Choose file" button in "WAR file to deploy" section
Choose parabank.war file from repository (tools/apache-tomcat-10.1.29/webapps/parabank.war)
Deploy file
Now you'll be able to visit page below
'''
http://localhost:8080/parabank/index.htm
'''

# Configuration project's environment

'''

git clone https://github.com/xmilov3/ParaBank.git
cd ParaBank
npm install --save-dev

'''

# Start tests

## To run tests you have to follow steps below:

Start Tomcat server and open cypress
'''
cd /apache-tomcat-10.1.29/bin/
./startup.sh (for Unix)
.startup.bat (for Windows)
'''
Go to /cypress/e2e folder in downloaded repository
'''
npx cypress open (for UI testing)
npx cypress run (for Headless Mode testing)
'''
Choose "E2E Testing"
Select testing browser and click "Start E2E Testing"
Go to /e2e folder
Click the test to run it
