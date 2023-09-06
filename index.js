const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

console.log('Server started on port 5500');

console.log(path.join(__dirname, 'public'))

app.listen(5500);

app.get('/', (req, res) => {
  res.sendFile('/home/anmolk/Documents/VideoPlayerWeb/login/loginPage.html');
});
