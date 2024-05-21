# About

The project is a React + Express application designed for managing events. Its primary functionalities include adding new events, modifying existing ones, purchasing tickets, and tracking the availability of tickets. In addition to the mentioned functionalities, the data in this project is stored in MongoDB.

## Technologies
* <a href="https://vitejs.dev/" target="blank"><img src="https://github.com/get-icon/geticon/blob/master/icons/vite.svg" height="25" /> Vite </a>
* <a href="https://react.dev/" target="blank"><img src="https://github.com/get-icon/geticon/blob/master/icons/react.svg" height="25" /> React </a>
* <a href="https://www.javascript.com/" target="blank"><img src="https://github.com/get-icon/geticon/blob/master/icons/javascript.svg" height="25" /> JavaScript </a>
* <a href="https://expressjs.com/" target="blank"><img src="https://github.com/get-icon/geticon/blob/master/icons/express.svg" height="25" /> Express </a>
* <a href="https://www.mongodb.com/" target="blank"><img src="https://github.com/get-icon/geticon/blob/master/icons/mongodb.svg" height="25" /> MongoDB </a>

## Prerequisites

**Node.js and npm:** You can download and install Node.js from the [official website](https://nodejs.org/en/download/) or use a package manager for your operating system.

## Setup

- Clone the repository <br>
```
git clone <repository-url>
```

## Server side

Install dependencies

```
cd ./server
```
```
npm install
```

Create a .env file and fill up the environment variable for your personal mongodb connecttion url.

```
MONGO_URL=<url>
```
### Running the code

```bash
cd ./server
npm run dev
```

## Client side

### Install dependencies

```bash
cd ./client
npm install
```

### Proxy

Watch for the port of your rest api. By default it will bind on port 8080 and the frontend proxy settings also depend on this configuration. If you for some reasons change the port of the backend, don't forget to change the ./client/package.json proxy settings as well.

### Runnig the code

```bash
cd ./client
npm start
```

And the create-react-app react-scripts package will start your frontend on the 3000 port and you can visit the http://localhost:3000 on your preferred browser.
