// Import required modules
const express = require('express');
const cors = require('cors');
// Create an Express application
const app = express();
app.use(cors());

// Define a route
app.get('/weather', (req, res) => {
    const { city, date } = req.query

    if (city == "ThanhHoa")
    {
        return  res.send({
            temperature: '25°C',
            description: 'Sunny'
        })
    }
    if (city == "HaiDuong")
    {
        return res.send({
            temperature:  '10°C',
            description: 'Cloudy with rain'
        })
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
