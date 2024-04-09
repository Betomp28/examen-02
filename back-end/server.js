const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3008;

app.use(morgan('dev'));
app.use (cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });

const user = {
  name: 'John',
  age: 25,
};   

app.get('/api', (req, res) => {
  res.send("conectado");
});

app.post('/user', (req, res) => {
  console.log("req.body");
  res.send(user);
}); 

