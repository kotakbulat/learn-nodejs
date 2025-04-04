const express = require('express');
const path = require('path');
const fs = require('fs/promises'); // Using the promise-based version of fs

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default

// --- Middleware ---
// Serve static files (CSS, images etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public'))); // Feature: Middleware (Express)

// Set the view engine to EJS
app.set('view engine', 'ejs'); // Feature: Templating Configuration
app.set('views', path.join(__dirname, 'views')); // Specify the views directory

// --- Data Reading (Async) ---
const portfolioDataPath = path.join(__dirname, 'data', 'portfolio.json');

async function getPortfolioData() {
    try {
        // Feature: Asynchronous I/O (Non-blocking), File System (fs) Module
        const data = await fs.readFile(portfolioDataPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading portfolio data:", err);
        // In a real app, provide better error handling / fallback data
        return { name: 'Error', title: 'Could not load data', bio: '', contact: {}, projects: [] };
    }
}

// --- Routes --- Feature: HTTP Server & Routing (Express)

// Home Page
app.get('/', async (req, res) => {
    const portfolio = await getPortfolioData(); // Demonstrates async call in route
    res.render('index', { portfolio: portfolio }); // Pass data to EJS template
});

// Projects Page
app.get('/projects', async (req, res) => {
    const portfolio = await getPortfolioData(); // Demonstrates async call in route
    res.render('projects', { portfolio: portfolio }); // Pass data to EJS template
});

// Node.js Features Page (Static EJS, no dynamic data needed from JSON here)
app.get('/features', (req, res) => {
    // Pass minimal data needed by header/footer if any
    res.render('features', { portfolio: { name: "Node Features Demo" } });
});

// --- Error Handling (Basic Example) ---
app.use((req, res) => {
    res.status(404).send("Sorry, page not found!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


// --- Start Server ---
app.listen(port, () => {
    // Feature: Callback (used with listen, also fundamental to async operations)
    console.log(`Server running at http://localhost:${port}`);
    console.log('Demonstrating: Async I/O, Modules, NPM, Event Loop (implicit), HTTP Server, FS Module, Middleware');
});

// Feature: Modules (CommonJS require) - Used throughout for express, path, fs
// Feature: NPM - Used to install express, ejs, nodemon (check package.json)
// Feature: Event Loop - Manages all async operations and request handling behind the scenes