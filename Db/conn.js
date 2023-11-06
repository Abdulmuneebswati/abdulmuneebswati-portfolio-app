const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log('Successful'))
  .catch((err) => console.log(err));
