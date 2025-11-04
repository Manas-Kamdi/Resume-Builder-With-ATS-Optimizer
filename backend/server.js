const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectToDatabase } = require('./config/db');

connectToDatabase();

const app = express();
const PORT = process.env.PORT || 4455;

// Increase the payload size limits
app.use(express.json({ limit: '50mb' }));
app.use(cors());

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const resumeRoutes = require('./routes/resume');

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/resume', resumeRoutes);

// Serve frontend build (if present)
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


