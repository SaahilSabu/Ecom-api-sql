const db = require("../models");

// model
const Review = db.reviews;

// functions

//1. Add Review

const addReview = async (req, res) => {
  const id = req.params.id;

  let data = {
    product_id: id,
    rating: req.body.rating,
  };

  const review = await Review.create(data);
  res.status(200).send(review);
};

// 2. Get All Reviews

const getAllReviews = async (req, res) => {
  const reviews = await Review.findAll({});
  res.status(200).send(reviews);
};
const review = async (req, res) => {
  const id = req.params.id;

  const reviews = await Review.findAll({ where: { product_id: id } });
  res.status(200).send(reviews);
};

module.exports = {
  addReview,
  getAllReviews,
  review,
};
