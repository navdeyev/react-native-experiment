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
    
    - Try to Eject
  
## The app  
At the moment the app loads a list of users from https://jsonplaceholder.typicode.com/users. 
The starting screen renders the list of users, providing the option of viewing detailed info on each one of them.
User details are displayed on a separate screen. The details screen has an expandable section with user's address.
There is an option to edit the user details, which takes the user to a simple form with basic mandatory field validation.
At the moment, the changes done in the form are not saved.

## About
This project has been initialised with Create React Native App.

## Ejecting
CRNA adds the Expo wrapper to the project by default, which is not necessarily a good thing.
Running `eject` allows you to get rid of this wrapper by generating CRNA build scrips by adding `ios` and `android` folders.
In my case I started the development with TypeScript, but ejecting created scripts for regular JS.
So, I had to do the transformation of TypeScript to JS by adding `tsc --watch` command to `package.json`.
Now every change in `*.ts` files is reflected in `build/dist` folder.
The last step is to update `index.js` to import `App` from `./build/dist/App.js`.
This setup allows to actually build and run a standalone app on a virtual device.

## How to run
To run the app start by executing `yarn tsc` command in a terminal. 
Open another terminal and execute `yarn android` or `yarn ios`, depending on which development environment you have.
This will execute the packager and open the virtual device to run the app.
