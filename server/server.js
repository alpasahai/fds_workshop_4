var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());

var authRoutes = require('./routes/auth');
app.use('/api', authRoutes); 

app.listen(3000, function () {
  console.log('Server listening on http://localhost:3000');
});