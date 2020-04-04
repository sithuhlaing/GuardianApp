const express = require("express");
const Guardian = require('guardian-js');
require('dotenv').config();
const axios = require("axios");
const router = express.Router();

router.get("/content", function(req, res, next) {
  let {query} = req;
  axios
    .get("https://content.guardianapis.com/search", {
      params: {
        "api-key" : process.env.apiKey,
        "q" : query.q,
        "page": query.page ? query.page : 1,
        "order-by": query.orderBy
      }
    })
    .then(response => {
      res.send(response.data.response);
    })
    .catch(error => {
      next(error);
    });
});

router.get("/tags", function(req, res, next) {
  axios
    .get("https://content.guardianapis.com/tags", {
      params: {
        "api-key" : process.env.apiKey,
        q : req.query.q
      }
    })
    .then(response => {
      res.send(response.data.response);
    })
    .catch(error => {
      next(error);
    });
});

router.get("/sections", function(req, res, next) {
  axios
    .get("https://content.guardianapis.com/sections", {
      params: {
        "api-key" : process.env.apiKey,
        q : req.query.q
      }
    })
    .then(response => {
      res.send(response.data.response);
    })
    .catch(error => {
      next(error);
    });
});

router.get("/editions", function(req, res, next) {
  axios
    .get("https://content.guardianapis.com/editions", {
      params: {
        "api-key" : process.env.apiKey,
        q : req.query.q
      }
    })
    .then(response => {
      res.send(response.data.response);
    })
    .catch(error => {
      next(error);
    });
});

router.get("/item", function(req, res, next) {
  axios
    .get("https://content.guardianapis.com/"+req.query.id, {
      params: {
        "api-key" : process.env.apiKey
      }
    })
    .then(response => {
      res.send(response.data.response.content);
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;