// backend/server.js
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
  });
  
  app.listen(3001, 'localhost', () => {
    console.log('Servidor funcionando en http://localhost:3001');
  });
  