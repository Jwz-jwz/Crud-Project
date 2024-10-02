import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import cors from "cors";

const port = 7777;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.get("/", (request, response) => {
  response.send("Hello tanii get huselt irlee");
});
///////Get request
app.get("/products", (request, response) => {
  fs.readFile("./data/products.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }
    let dbData = data ? JSON.parse(data) : [];

    response.json({
      success: true,
      products: dbData,
    });
  });
});

/////Post request
app.post("/product", (request, response) => {
  const { productName, category, price } = request.body;
  fs.readFile("./data/products.json", "utf-8", (readError, data) => {
    let dbData = data ? JSON.parse(data) : [];

    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    const newProduct = {
      id: Date.now().toString(),
      productName: productName,
      category: category,
      price: price,
    };
    dbData.push(newProduct);

    fs.writeFile("./data/products.json", JSON.stringify(dbData), (error) => {
      if (error) {
        response.json({
          success: false,
          error: error,
        });
      } else {
        response.json({
          success: true,
          product: newProduct,
        });
      }
    });
  });
});

//Delete request
app.delete("/product", (request, response) => {
  const { id } = request.body;

  fs.readFile("./data/products.json", "utf-8", (readError, data) => {
    let dbData = data ? JSON.parse(data) : [];

    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    const filteredData = dbData.filter((data) => data.id !== id);

    if (filteredData.length === dbData.length) {
      response.json({
        success: false,
        error: "Product id not found",
      });
    }

    fs.writeFile(
      "./data/products.json",
      JSON.stringify(filteredData),
      (error) => {
        if (error) {
          response.json({
            success: false,
            error: error,
          });
        } else {
          response.json({
            success: true,
            products: filteredData,
          });
        }
      }
    );
  });
});
//Edit request
app.put("/product", (request, response) => {
  const { id, productName, category, price } = request.body;

  fs.readFile("./data/products.json", "utf-8", (readError, data) => {
    let dbData = data ? JSON.parse(data) : [];

    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    const editedData = dbData.map((data) => {
      if (data?.id === id) {
        return {
          id: id,
          productName: productName,
          category: category,
          price: price,
        };
      }
      return data;
    });

    fs.writeFile(
      "./data/products.json",
      JSON.stringify(editedData),
      (error) => {
        if (error) {
          response.json({
            success: false,
            error: error,
          });
        } else {
          response.json({
            success: true,
            products: editedData,
          });
        }
      }
    );
  });
});

app.listen(port, () => {
  console.log(`server ajillaj ehelle http://localhost:${port}`);
});
