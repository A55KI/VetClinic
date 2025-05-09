const express = require('express');
const app = express();

app.use(express.json());
app.use('/clients', require('./routes/clientRoutes'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(3000, () =>
  console.log('Server running on http://localhost:3000')
);