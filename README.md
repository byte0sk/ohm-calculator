# 4 Band Resistor Calculator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Available Scripts](#available-scripts)

## Description

This project was created to help users calculate the resistance of a 4 band resistor.

The user can input the colors of the bands and the resistance will be calculated.

## Technologies Used

- React
- MongoDB
- Mongoose
- Express
- Node.js
- JavaScript

## Installation

To run this project, you will need to copy the `.env` file (provided by the developer) into the server folder:
```
ohm-calculator/server
```

in order to make the connection to MongoDB.

also, install the following dependencies:

Node `v16.20.2` installation
```
nvm install v16.20.2
```

Nodemon installation
```
yarn global add nodemon
```

Install Server dependencies
```
yarn install-server
```

Install Client dependencies
```
yarn install
```

## Available Scripts

Have in mind that you'll need 2 consoles to run the app, one for the server and one for the client.

In the project directory, you can run the server with:

### `yarn start-server`

In the project directory, you can run the client with:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
