// index.js (Main server file)
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Export the server for testing
module.exports = server;