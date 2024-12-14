const express = require('express');
const app = express();
const port = 4000;

const audioLinks = [
  "https://drive.google.com/uc?export=download&id=1257kFevdMZutEDNO-8iVjU6_TkyQPx_W",
  "https://drive.google.com/uc?export=download&id=12AxleoSoeDS4T7o67kkAiUDGzoyUR0Yo",
  "https://drive.google.com/uc?export=download&id=12L2YlrCvqjGmlNNAKfna7Wl1PauDPNuq",
  "https://drive.google.com/uc?export=download&id=12LJJwimiJJ8w40k0yBIb-h7mTDzG4Kd9",
  "https://drive.google.com/uc?export=download&id=12UqnKAtGWR0sqLfJS8sKqTB0DQB342x8",
  "https://drive.google.com/uc?export=download&id=12WBGB4IweSr6uH1nwWLNFqoWL3-E1LdP",
  "https://drive.google.com/uc?export=download&id=1Pmrb3nBrm1y_SxMGoqdS5SweDv0-R-2h",
  "https://drive.google.com/uc?export=download&id=1PyaKnAKf7emuMZRgsjBtUZgE8sspl-gy",
  "https://drive.google.com/uc?export=download&id=1Q-Z5I2akLPdIw5THQrXYPTAGRm3ZJKQj",
  "https://drive.google.com/uc?export=download&id=1Q7fh5kedGx7-_nNNlVUYHOKHxSmlrPvM",
  "https://drive.google.com/uc?export=download&id=1Q0lSUkKlpP0XN_WDRHYD5k8IaA2oqWAX",
  "https://drive.google.com/uc?export=download&id=1QOCJjFG9hhv-1fS5-PDozgO_KdO55j1w",
  "https://drive.google.com/uc?export=download&id=1QjES732TzlV2E8BBfUCG-s9dj1cw36RV",
  "https://drive.google.com/uc?export=download&id=1QnaxbgJvF1b8blgtLaRbATPVnm8MkGWv",
  "https://drive.google.com/uc?export=download&id=1QRKba6KRIy6YFx1lScby7lzKBnrZPP0y",
  "https://drive.google.com/uc?export=download&id=1Qt3rJ-5fJHawVYAVadUocLHuULbPOatc",
  "https://drive.google.com/uc?export=download&id=1QxbkftiQYT9C7cLz8EQn6mUW5A8v_h1R",
  "https://drive.google.com/uc?export=download&id=1QtZltsNgX5bifazJv81nd9nas5ardlQO",
  "https://drive.google.com/uc?export=download&id=1R2MxRLgYE5W9u3_BIhcWfu3HkPL7K0ZJ",
  "https://drive.google.com/uc?export=download&id=1R846rhnSjLYuV0ogu4LG-m4hhhfbQns3",
  "https://drive.google.com/uc?export=download&id=1R6eKFjomGkjthHFto3bRP6Ci5fw084Tz",
  "https://drive.google.com/uc?export=download&id=1R-i3Z53CTNDGgR4gxuNLW274KTPYAjN5",
  "https://drive.google.com/uc?export=download&id=1RUtIKiVZMu9tJ8ZWTXxSz6JuXHaVaCXk",
  "https://drive.google.com/uc?export=download&id=1RaN6ko3ggUbgemlkNOfIQD0Su9uHsoTk",
  "https://drive.google.com/uc?export=download&id=1RlKKtzb1uHppsPmgHhevAEQmoKzmzsH2",
  "https://drive.google.com/uc?export=download&id=1Re2mMOuuprOUz_IBI9P_UR4jJy421NGb",
  "https://drive.google.com/uc?export=download&id=1RHjJo_QMvN7Bu7-cOZLQUoJgEm0-dgsQ",
  "https://drive.google.com/uc?export=download&id=1RyZceMs0_3SW8uyxlT0_rQlHzoDRjO-u",
  "https://drive.google.com/uc?export=download&id=1Rt3Z7dLvK15AK54uRpbcALJqDRBQBqjK",
  "https://drive.google.com/uc?export=download&id=1S-L30HFbr-053vTQ7Q7xej7leymLsAeW",
  "https://drive.google.com/uc?export=download&id=1RjnK1r1t91ucY77FJytJqn1UD3Q6Y1Vc",
  "https://drive.google.com/uc?export=download&id=1RukzVj3lvNHh9hyQkJdVlCXHafszCOhp"
];

app.get('/', (req, res) => {
  res.send("Welcome to the Random Music API! Use /random to get a random song.");
});

app.get('/random', (req, res) => {
  const randomLink = audioLinks[Math.floor(Math.random() * audioLinks.length)];
  res.json({ song_url: randomLink });
});

app.listen(port, () => {
  console.log(`Random Music API is running at http://localhost:${port}`);
});
