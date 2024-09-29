const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 8888;

app.use(cors());
app.use(bodyParser.json());

let products = []; // This will act as our database

// Create
app.post("/products", (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).json(product);
});

// Read
app.get("/products", (req, res) => {
  res.json(products);
});

// Update
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
  } else {
    res.status(404).send("Product not found");
  }
});

// Delete
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter((p) => p.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
