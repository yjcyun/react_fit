const express = require('express');
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const purchaseRouter = require('./routes/purchaseRoutes');
const path = require('path');

const app = express();

// CONNECT TO DB
connectDB();

// MIDDLEWARE
app.use(express.json({ extended: false }));

// DEFINE ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/purchases', purchaseRouter);

// SERVER STATIC ASSETIS IN PRODUCTION
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

// LISTEN FOR SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));