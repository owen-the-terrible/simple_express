const express = require('express');
const axios = require("axios")
const server = express();
const port = 4000 | 1337
server.use(express.urlencoded({extended: true}));
server.use(express.json())

// ... add your routes and middleware ...
server.get('/news', async (req, res) => {
    try {
      const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=8523bd2a5fef471f8fed4a36a53f9a25";
      const response = await axios.get(url);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving news');
    }
  });
  
// module.exports = (req, res) => {
  server.listen(port,() => {
    // const { port } = server.address();
    console.log(`Express server listening on ${port} `);
  });
// };
