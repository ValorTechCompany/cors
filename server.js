const express = require('express');const cors = require('cors');const request = require('request');const app = express();


// Enable CORS
app.use(cors());


// Proxy endpoint
app.get('/cors/*', (req, res) => {
const url = req.params[0];    request({ url, method: req.method, headers: req.headers }).pipe(res);});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(CORS Anywhere running on port${PORT});});```### Step 3: Create thepackage.json File

