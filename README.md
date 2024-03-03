# Server-Client
# Weather App Server-Client Architecture

This project demonstrates a simple server-client architecture for fetching weather information based on the city name.

## Server

The server is built using Node.js and Express.js. It exposes a REST API endpoint `/weather` that accepts a query parameter `city` and returns weather information for the specified city.

### Setup

1. Make sure you have Node.js installed on your machine.

2. Clone this repository:

    ```
    git clone <repository-url>
    ```

3. Navigate to the server directory:

    ```
    cd server
    ```

4. Install dependencies:

    ```
    npm install
    ```

5. Start the server:

    ```
    npm start
    ```

6. The server will start running on `http://localhost:3000`.

### API Endpoint

- `/weather?city=<city-name>`: This endpoint retrieves weather information for the specified city.

## Client

The client is a basic HTML, CSS, and JavaScript application. It provides a user interface for entering the city name and fetching weather information from the server.

### Setup

1. Open the `client` directory.

2. Open the `index.html` file in a web browser.

3. Enter the city name in the input field and click the "Get Weather" button.

4. The weather information for the specified city will be displayed on the page.

## Technologies Used

- Node.js
- Express.js
- HTML
- CSS
- JavaScript

## Note

- Ensure that the server is running (`http://localhost:3000`) before using the client interface.

- This is a basic demonstration and may require enhancements for production use, such as error handling, input validation, and security measures.
