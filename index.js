const express = require('express');
const app = express();
const port = 3000;

// Array of audio links
const audioLinks = [
  "https://drive.google.com/uc?export=download&id=1257kFevdMZutEDNO-8iVjU6_TkyQPx_W",
  "https://drive.google.com/uc?export=download&id=12AxleoSoeDS4T7o67kkAiUDGzoyUR0Yo"
];

// Default route
app.get('/', (req, res) => {
  res.send("Welcome to the Random Music API! Use /random-link to get a random song.");
});

// Random link route
app.get('/random', (req, res) => {
  const randomLink = audioLinks[Math.floor(Math.random() * audioLinks.length)];
  res.json({ song_url: randomLink });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
