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

// make database imgs served
const path = require("path");
app.use(express.static(path.join(__dirname, "fruits")));
app.use(express.static(path.join(__dirname, "team")));
app.use(express.static(path.join(__dirname, "news")));

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

let saleFruit = {
  fruitId: 17,
  fruitName: "strawberry",
  fruitPrice: 2.75,
  fruitImg: `${baseURL}Strawberry.jpg`,
  firstSaleImg: `${baseURL}strawperry-offer.jpg`,
  secondSaleImg: `${baseURL}strawperry-offer1.jpg`,
  fruitSale: 30,
};

let team = [
  {
    name: "Saira-Hakim",
    job: "Local-shop-owner",
    image: `${baseURL}Saira-Hakim.png`,
    describe:
      "Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    name: "David-Niph",
    job: "Local-shop-owner",
    image: `${baseURL}David-Niph.png`,
    describe:
      "Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    name: "Jacob-Sikim",
    job: "Local-shop-owner",
    image: `${baseURL}Jacob-Sikim.png`,
    describe:
      "Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
];

let news = [
  {
    id: 1,
    title: "You will vainly look for fruit on it in autumn.",
    createdBy: "Admin",
    img: `${baseURL}news-bg-1.jpg`,
    date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
    text: "news-Lorem",
  },
  {
    id: 2,
    title: "A man's worth has its season, like tomato.",
    createdBy: "Admin",
    img: `${baseURL}news-bg-2.jpg`,
    date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
    text: "news-Lorem",
  },
  {
    id: 3,
    title: "Good thoughts bear good fresh juicy fruit.",
    createdBy: "Admin",
    img: `${baseURL}news-bg-3.jpg`,
    date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
    text: "news-Lorem",
  },
  {
    id: 4,
    title: "Fall in love with the fresh orange",
    createdBy: "Admin",
    img: `${baseURL}news-bg-4.jpg`,
    date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
    text: "news-Lorem",
  },
  {
    id: 5,
    title: "Why the berries always look delecious",
    createdBy: "Admin",
    img: `${baseURL}news-bg-5.jpg`,
    date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
    text: "news-Lorem",
  },
  {
    id: 6,
    title: "Love for fruits are genuine of John Doe",
    createdBy: "Admin",
    img: `${baseURL}news-bg-6.jpg`,
    date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
    text: "news-Lorem",
  },
];

let comments = [
  {
    newsID: 1,
    comment: [
      {
        createdBy: "Jenny Joe",
        img: `${baseURL}Saira-Hakim.png`,
        date: "Thu Mar 24 2022 00:48:31",
        text: "news-Lorem",
        replay: [
          {
            createdBy: "Simon Soe",
            img: `${baseURL}Jacob-Sikim.png`,
            date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
            text: "news-Lorem",
          },
        ],
      },
      {
        createdBy: "Addy Aoe",
        img: `${baseURL}David-Niph.png`,
        date: Date(),
        text: "news-Lorem",
        replay: [],
      },
    ],
  },
  {
    newsID: 2,
    comment: [
      {
        createdBy: "Alvena Conroy",
        img: `${baseURL}Saira-Hakim.png`,
        date: "Thu Mar 24 2022 00:48:31",
        text: "news-Lorem",
        replay: [
          {
            createdBy: "Armand Pagac",
            img: `${baseURL}Jacob-Sikim.png`,
            date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
            text: "news-Lorem",
          },
        ],
      },
      {
        createdBy: "Ross Predovic",
        img: `${baseURL}David-Niph.png`,
        date: Date(),
        text: "news-Lorem",
        replay: [],
      },
    ],
  },
  {
    newsID: 3,
    comment: [
      {
        createdBy: "Chelsey Krajcik",
        img: `${baseURL}Saira-Hakim.png`,
        date: "Thu Mar 24 2022 00:48:31",
        text: "news-Lorem",
        replay: [
          {
            createdBy: "Emil Murphy",
            img: `${baseURL}Jacob-Sikim.png`,
            date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
            text: "news-Lorem",
          },
        ],
      },
      {
        createdBy: "Allie Lebsack",
        img: `${baseURL}David-Niph.png`,
        date: Date(),
        text: "news-Lorem",
        replay: [],
      },
    ],
  },
  {
    newsID: 4,
    comment: [
      {
        createdBy: "Jenny Joe",
        img: `${baseURL}Saira-Hakim.png`,
        date: "Thu Mar 24 2022 00:48:31",
        text: "news-Lorem",
        replay: [
          {
            createdBy: "Simon Soe",
            img: `${baseURL}Jacob-Sikim.png`,
            date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
            text: "news-Lorem",
          },
        ],
      },
      {
        createdBy: "Addy Aoe",
        img: `${baseURL}David-Niph.png`,
        date: Date(),
        text: "news-Lorem",
        replay: [],
      },
    ],
  },
  {
    newsID: 5,
    comment: [
      {
        createdBy: "Alvena Conroy",
        img: `${baseURL}Saira-Hakim.png`,
        date: "Thu Mar 24 2022 00:48:31",
        text: "news-Lorem",
        replay: [
          {
            createdBy: "Armand Pagac",
            img: `${baseURL}Jacob-Sikim.png`,
            date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
            text: "news-Lorem",
          },
        ],
      },
      {
        createdBy: "Ross Predovic",
        img: `${baseURL}David-Niph.png`,
        date: Date(),
        text: "news-Lorem",
        replay: [],
      },
    ],
  },
  {
    newsID: 6,
    comment: [
      {
        createdBy: "Chelsey Krajcik",
        img: `${baseURL}Saira-Hakim.png`,
        date: "Thu Mar 24 2022 00:48:31",
        text: "news-Lorem",
        replay: [
          {
            createdBy: "Emil Murphy",
            img: `${baseURL}Jacob-Sikim.png`,
            date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
            text: "news-Lorem",
          },
        ],
      },
      {
        createdBy: "Allie Lebsack",
        img: `${baseURL}David-Niph.png`,
        date: Date(),
        text: "news-Lorem",
        replay: [],
      },
    ],
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

// get fruits by page size and page number
app.get("/fruits", function (req, res) {
  let pageSize = req.query.pageSize;
  let pageNumber = req.query.pageNumber;
  let pagesCount = Math.ceil(fruits.length / pageSize);
  let fruitArrayStart = pageSize * (pageNumber - 1);
  let fruitArrayend = pageSize * pageNumber;
  if (pageNumber > pagesCount) {
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

app.get("/sale-fruit", function (req, res) {
  res.json({
    status: "success",
    saleEndTime: 184600000,
    saleFruit: saleFruit,
  });
});

app.get("/all-fruits", function (req, res) {
  res.json({
    status: "success",
    fruits: fruits,
  });
});

app.get("/team", function (req, res) {
  res.json({
    status: "success",
    team: team,
  });
});

app.get("/news", function (req, res) {
  let pageSize = req.query.pageSize;
  let pageNumber = req.query.pageNumber;
  let pagesCount = Math.ceil(fruits.length / pageSize);
  let newsArrayStart = pageSize * (pageNumber - 1);
  let newsArrayend = pageSize * pageNumber;
  if (pageNumber > pagesCount) {
    res.json({
      status: "error",
      fruits: "there is no more fruits",
    });
  } else {
    res.json({
      status: "success",
      pagesCount: pagesCount,
      news: news.slice(newsArrayStart, newsArrayend),
    });
  }
});

app.get("/comment", function (req, res) {
  const newsID = parseInt(req.query.id);
  let comment = comments.find((x) => x.newsID === newsID);
  if (comment) {
    res.json({
      status: "success",
      comment: comment,
    });
  } else {
    res.json({
      status: "error",
      comment: "there is not comments",
    });
  }
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
