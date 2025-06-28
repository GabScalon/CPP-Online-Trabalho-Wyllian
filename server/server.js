const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Construct MongoDB connection string from separate environment variables
const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/?${process.env.MONGO_OPTIONS}`;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
})
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', require('./routes/users'));
// Add more routes as needed

// Basic route for testing
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
