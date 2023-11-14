import express from 'express';
import products from './data/products.js';
const port = 8001;
const app = express();

app.get('/', (req, res) => {
  res.send('Server is ready!!!!?');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  }).on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already in use, please free the port or use a different one.`);
    } else {
      console.log(`An error occurred: ${e.message}`);
    }
});
  