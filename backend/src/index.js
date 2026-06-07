const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const { initializeFirebase } = require('./config/firebase');
const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/jobs');
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/users');
const companyRoutes = require('./routes/companies');
const notificationRoutes = require('./routes/notifications');
const { errorHandler } = require('./middleware/errorHandler');

// Initialize Firebase
initializeFirebase();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/notifications', notificationRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'ConstructionHQ API',
    version: '0.1.0',
    endpoints: {
      health: '/health',
      auth: '/api/auth',
      jobs: '/api/jobs',
      tasks: '/api/tasks',
      users: '/api/users',
      companies: '/api/companies',
      notifications: '/api/notifications'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`ConstructionHQ API running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});

module.exports = app;
