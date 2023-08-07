const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');  // Import routes
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);  // Use imported routes
app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
