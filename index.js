const express = require('express');
const app = express();
const port = 3000;

// লিংকগুলোর একটি অ্যারে
const links = [
  "https://drive.google.com/uc?export=download&id=1257kFevdMZutEDNO-8iVjU6_TkyQPx_W",
  "https://drive.google.com/uc?export=download&id=12AxleoSoeDS4T7o67kkAiUDGzoyUR0Yo"
];

// API রুট, যা র্যান্ডম লিংক প্রদান করবে
app.get('/random-link', (req, res) => {
  const randomLink = links[Math.floor(Math.random() * links.length)];
  res.status(200).json({ link: randomLink });
});

// ডিফল্ট রুট
app.get('/', (req, res) => {
  res.send("Welcome to the Random Link API!");
});

// অ্যাপটি শুরু করুন
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
