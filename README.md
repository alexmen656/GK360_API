# GK 360 API
This project provides a lightweight and efficient API to retrieve structured information about Austrian municipalities, counties, and federal states, along with associated details such as contact information, statistics, and images. It is designed to be scalable and user-friendly, with endpoints that are easy to integrate into other systems. The data retrieval is based on web scraping techniques utilizing Cheerio, a JavaScript-based library for web scraping and parsing HTML. You can explore the core web scrapers behind this project at `/api_new/web_scrappers`, as it forms the heart of the system.

![Screenhot](https://github.com/alexmen656/GK360_API/blob/main/screenshot.png)

## Features
- Federal States Management: Retrieve all federal states in a structured format.
- Counties Management: Access data about counties and their associated municipalities.
- Municipalities Management: Query detailed information about specific municipalities by their unique codes.
- Rich Data Integration: Includes metadata like contact information, statistics, and images for enhanced utility.

## Technology Stack
- Web Scraping: Node.js, Cheerio (JavaScript-based web scraping and HTML parsing)
- Frontend(Documentation): Vite, HTML, JS, SCSS(CSS)
- Backend: PHP
- Databse: MySQL

## How to Use
- Clone or download the project files.
- Install Node.js dependencies with `npm install`
- Install Node.js dependencies in `/api_new//web_scrappers/` with `npm install`
- Update the config.php file with your database credentials and error log path.
- Host the project on a server that supports PHP and a MySQL database.
- Use the provided endpoints to query data as needed.

## Resources for the documentation
- [Bootstrap 5](https://getbootstrap.com) - the latest Bootstrap version gives the base structure
- [Vite](https://vitejs.dev) - a new generation frontend developer tooling
- [Sass](https://vitejs.dev) - the most popular css preprocessor to write advanced styles
- [GitHub](https://vitejs.dev) - version controller tool, used to maintain the updates of the project
- [Unicons](https://vitejs.dev) - a free collection of scaleable and colorable svg UI icons
- [Prism](https://vitejs.dev) - a javascript library for syntax highlighting code blocks
