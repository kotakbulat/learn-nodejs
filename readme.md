# Simple Node.js Portfolio Example

A basic portfolio website built with Node.js and Express, designed to demonstrate fundamental Node.js concepts in action through a practical example.

## Purpose

This project serves as a simple, interactive way to understand several core features of Node.js by seeing them implemented in a small web application. It includes:

*   A basic portfolio structure (Home, Projects).
*   Data loaded from a local JSON file.
*   A dedicated page explaining the Node.js features used within the application itself.

## Features Demonstrated

This project showcases the following essential Node.js concepts:

*   **Asynchronous I/O (Non-blocking):** Reading portfolio data from `data/portfolio.json` using `fs.promises` without blocking the server.
*   **Modules (CommonJS `require`):** Organizing code by importing necessary modules like `express`, `path`, and `fs`.
*   **NPM (Node Package Manager):** Managing project dependencies (`express`, `ejs`, `nodemon`) via `package.json`.
*   **Event Loop:** The underlying mechanism enabling Node.js's concurrency (demonstrated implicitly through async operations and request handling).
*   **HTTP Server:** Using the Express framework to easily create and manage an HTTP server.
*   **Routing (Express):** Defining specific URL paths (`/`, `/projects`, `/features`) and handling requests for them.
*   **File System (`fs`) Module:** Interacting with the server's file system to read data.
*   **Middleware (Express):** Using `express.static` to serve static files (CSS) and configuring the view engine (`ejs`).

**You can find explanations of how these features are used within the running application on the `/features` page.**

## Tech Stack

*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Templating Engine:** EJS (Embedded JavaScript)
*   **Data Source:** JSON file (`data/portfolio.json`)
*   **Styling:** Plain CSS
*   **Development Utility:** nodemon (for auto-restarting the server)


## Setup

1.  **Clone the repository (or download the code):**
    ```bash
    git clone <repository-url>
    cd simple-portfolio
    ```
    (Replace `<repository-url>` with the actual URL if you host it on Git)
    *Or, if you just have the files, navigate to the `simple-portfolio` directory in your terminal.*

2.  **Install dependencies:**
    Make sure you have Node.js and npm installed. Then run:
    ```bash
    npm install
    ```
    This will download all the necessary packages listed in `package.json` into the `node_modules` folder.

## Running the Application

1.  **Development Mode (with auto-reload on file changes):**
    ```bash
    npm run dev
    ```
    This uses `nodemon` to watch for changes and restart the server automatically.

2.  **Production Mode:**
    ```bash
    npm start
    ```
    This runs the server using `node` directly.

Once the server is running, it will typically output:
`Server running at http://localhost:3000`

## Accessing the App

Open your web browser and navigate to:

*   **Home:** `http://localhost:3000/`
*   **Projects:** `http://localhost:3000/projects`
*   **Node.js Features Explained:** `http://localhost:3000/features`

## Exploring the Node.js Features

Navigate to the **`/features`** page (`http://localhost:3000/features`) in the running application. This page provides specific details on *how* each of the core Node.js features listed above is implemented within this project code.

## License

Licensed under the ISC License. (Or specify MIT or another license if you prefer)