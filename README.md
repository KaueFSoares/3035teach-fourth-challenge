# Github Api Consumer

**Project current version deployed at:** [github-api-consumer.kauesoares.website](https://github-api-consumer.kauesoares.website)

Welcome to the Github Api Consumer. It provides github users searching and exposes it's data such as the name, bio and repositories info. 
*The project was purposed by 3035 Tech - a software development business - on it's course: 3035 Teach.

## Key Features

### 1. User searching

Provides user searching by username. The username can be passed on the home page ("/") or on the url as "/profile/*username*".

### 2. User data exposing

Consumes the [Github API](api.github.com) for loading the user data such as the name, bio and image.

### 3. Repos data exposing

Consumes the [Github API](api.github.com) for loading the user repositories data such as name, link, description, languange and visibility.

## Technologies Used

The application is developed using the following technologies:

- [React.js](https://reactjs.org/): A JavaScript library for building interactive user interfaces.
- [Tailwind CSS](https://tailwindcss.com/): A highly customizable CSS framework for creating modern designs.
- [Vite](https://vitejs.dev/): An ultra-fast build tool and bundler for web applications.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that adds static types for improved code quality and maintainability.

## Main Libraries Used

This project utilizes several key libraries to enhance its functionality and development process. Here's a brief overview of each library:

- **[react-router-dom](https://github.com/ReactTraining/react-router):** A declarative routing library for React applications, enabling dynamic navigation and routing between different views.

- **[react-icons](https://react-icons.github.io/react-icons/):** A collection of popular icons as React components, simplifying the process of adding icons to the application.

- **[axios](https://github.com/axios/axios):** A promise-based HTTP client for the browser and Node.js, allowing to make asynchronous HTTP requests easily.

## How to Run

1. Clone this repository to your local environment.
2. Get into the project folder
```javascript
   cd project
```
3. In the project directory, execute the following command to install dependencies:
```javascript
   npm install
```
or 
```javascript
  yarn
```
4. After installing dependencies, execute the following command to start the development server:
```javascript
  npm run dev
```
or
```javascript
  yarn run dev
```
5. Open a web browser and access `http://localhost:5173` to view the application.
