// @ts-nocheck

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const axios = require("axios");
let exchangerate = {};
function Exchangerate() {
  axios
    .get("https://api.exchangerate.host/latest?base=USD")
    .then((res) => {
      exchangerate = res.data.rates;
    })
    .catch((error) => {
      console.error(error);
    });
}
Exchangerate();

const path = require("path");
app.use(express.static(path.join(__dirname, "fruits")));

const baseURL = "http://localhost:3000/";
const fruits = [
  {
    fruitId: 1,
    fruitName: "Apple",
    fruitPrice: 1.32,
    fruitImg: `${baseURL}Apple.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 2,
    fruitName: "Apricot",
    fruitPrice: 2.64,
    fruitImg: `${baseURL}apricot.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 3,
    fruitName: "Avocado",
    fruitPrice: 1.7,
    fruitImg: `${baseURL}avocado.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 4,
    fruitName: "Banana",
    fruitPrice: 0.62,
    fruitImg: `${baseURL}banana.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 5,
    fruitName: "Blackberry",
    fruitPrice: 10.17,
    fruitImg: `${baseURL}blackberry.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 6,
    fruitName: "Blueberry",
    fruitPrice: 1.78,
    fruitImg: `${baseURL}bluberry.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 7,
    fruitName: "Boysenberry",
    fruitPrice: 24.99,
    fruitImg: `${baseURL}boysenberry.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 8,
    fruitName: "Cantaloupe",
    fruitPrice: 2.97,
    fruitImg: `${baseURL}canteloupe.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 9,
    fruitName: "Clementine",
    fruitPrice: 5.37,
    fruitImg: `${baseURL}clementine.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 10,
    fruitName: "Date-Palm",
    fruitPrice: 16.48,
    fruitImg: `${baseURL}date-palm.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 11,
    fruitName: "Dragonfruit",
    fruitPrice: 28,
    fruitImg: `${baseURL}dragon-fruit.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 12,
    fruitName: "Elderberry",
    fruitPrice: 9.5,
    fruitImg: `${baseURL}elderberry.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 13,
    fruitName: "Fig",
    fruitPrice: 3.729,
    fruitImg: `${baseURL}fig.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 14,
    fruitName: "Grape",
    fruitPrice: 1.25,
    fruitImg: `${baseURL}grape.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 15,
    fruitName: "Guava",
    fruitPrice: 5.48,
    fruitImg: `${baseURL}guava.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 16,
    fruitName: "Kiwi",
    fruitPrice: 2.75,
    fruitImg: `${baseURL}kiwi.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 17,
    fruitName: "strawberry",
    fruitPrice: 2.75,
    fruitImg: `${baseURL}Strawberry.jpg`,
    fruitSale: 0,
  },
];



app.get("/exchangerate", function (req, res) {
  if (Object.keys(exchangerate).length !== 0) {
    res.json({
      status: "success",
      base: "USD",
      exchangerate: exchangerate,
    });
  } else {
    res.json({
      status: "eror",
    });
  }
});

app.get("/fruits", function (req, res) {
  let pageSize = req.query.pageSize;
  let pageNumber = req.query.pageNumber;
  let pagesCount = Math.ceil(fruits.length/pageSize);
  let fruitArrayStart = pageSize * (pageNumber - 1);
  let fruitArrayend = (pageSize * pageNumber);
  if(pageNumber > pagesCount) {
    res.json({
      status: "error",
      fruits: "there is no more fruits",
    });
  } else {
    res.json({
      status: "success",
      pagesCount: pagesCount,
      fruits: fruits.slice(fruitArrayStart, fruitArrayend),
    });
  }
});

saleFruit = {
  fruitId: 17,
  fruitName: "strawberry",
  fruitPrice: 2.75,
  fruitImg: `${baseURL}Strawberry.jpg`,
  firstSaleImg: `${baseURL}strawperry-offer.jpg`,
  secondSaleImg: `${baseURL}strawperry-offer1.jpg`,
  fruitSale: 30,
}
app.get("/sale-fruit", function (req, res) {
  res.json({
    status: "success",
    // saleEndTime: 84600000,
    saleEndTime: 5000,
    saleFruit: saleFruit,
  });
});

app.get("/all-fruits", function (req, res) {
  res.json({
    status: "success",
    fruits: fruits,
  });
});

app.get("/", function (req, res) {
  res.json({
    status: "erorr",
    res: "enter valid api",
  });
});

// var requestURL = 'https://api.exchangerate.host/latest?base=USD';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload = function() {
//   var response = request.response;
//   console.log(response);
// }

app.listen(3000);
