# react-native-experiment

This is a practice project which was started to explore the similarities and differences 
between react applications and react-native applications.

I wanted to familiarize myself with:

    - React-native framework and it's native components
    - React-native's supporting infrastructure and tooling
    - React-navigation for native navigation on mobile devices
    - Styled-components in the context of react-native
    - Jest testing with react-native
    - TypeScript typings for react-native
    - Internationalization concept
  
## The app  
At the moment the app loads a list of users from https://jsonplaceholder.typicode.com/users. 
The starting screen renders the list of users, providing the option of viewing detailed info on each one of them.
User details are displayed on a separate screen. The details screen has an expandable section with user's address.
There is an option to edit the user details, which takes the user to a simple form with basic mandatory field validation.
At the moment, the changes done in the form are not saved.

## About
This project has been initialised with Create React Native App.

## How to run
To run the app type `yarn android` or `yarn ios`, depending on which development environment you have.
This will execute the packager and open the virtual device to run the app.
