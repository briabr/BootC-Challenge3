# BootC-Challenge3's Password Generator

## Description

Create an application that an employee can use to generate a random password based on criteria they've selected. 

## User Story 
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

``` 
## Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Steps in achieving the task 
```
1- Defining the data needed:
   different sets of characters maybe strings or arrays
   numbers
   lowercase characters
   uppercase characters
   special characters
 2- Whether the user chose numbers, lowercase, uppercase or special character
 3- Number of characters used
      Using upper case characters? yes or no
      Using lower case characters? yes or no
      Using special characters? yes or no
 7- Puting the selected characters together
 8- Randomly selecting characters from all of the selected characters 
 9- combine the characters together
 ```
 ## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## ScreenShot of the deployed application

![](./assets/Screen%20Shot%202022-10-23%20at%2012.00.16%20AM.png)

## Deployed Application Link
https://briabr.github.io/Javascript-Password-Generator/


