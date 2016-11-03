const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log('app running on port 3000');
});