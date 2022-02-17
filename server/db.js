// @ts-nocheck

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const axios = require('axios');
let exchangerate = {}
function Exchangerate() {
  axios
  .get('https://api.exchangerate.host/latest?base=USD')
  .then(res => {
    exchangerate = res.data.rates;
  })
  .catch(error => {
    console.error(error)
  });
}
Exchangerate();


app.get("/", function (req, res) {
    res.json({
      status: "erorr",
      res: "enter valid api",
    });
  }
);

app.get("/exchangerate", function (req, res) {
  if(Object.keys(exchangerate).length !== 0) {
    res.json({
      status: "success",
      "base": "USD",
      exchangerate: exchangerate,
    });
  } else {
    res.json({
      status: "eror",
    });
  }
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
