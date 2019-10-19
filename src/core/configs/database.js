const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(
    'mongodb://localhost:5001/instaclone',
    { 
      useNewUrlParser: true,
      useFindAndModify: false 
    }
  );
  console.log('Conectei!');
}