const express = require('express');
const app = express();
const clientRoutes = require('./routes/clientRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use('/api/clients', clientRoutes);
app.use(errorHandler);

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});