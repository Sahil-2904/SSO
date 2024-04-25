const mongoose = require('mongoose');

// Your MongoDB connection string
const dbUri = process.env.DATABASE_URL;

// Options for Mongoose
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Connect to the MongoDB database
mongoose.connect(dbUri, options)
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Export the connection so other files can import it
module.exports = mongoose;
