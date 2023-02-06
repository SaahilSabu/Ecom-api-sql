const db = require("../models");

// model
const Cart = db.carts;

// functions

//1. Add Cart

const addCart = async (req, res) => {
  const id = req.params.id;
  const { productId, quantity } = req.body;
  let data = {
    user_id: id,
    productId: productId,
    quantity: quantity,
  };

  const cart = await Cart.create(data);
  res.status(200).send(cart);
};

// 2. Get All Carts

const getAllCarts = async (req, res) => {
  const cart = await Cart.findAll({});
  res.status(200).send(cart);
};

module.exports = {
  addCart,
  getAllCarts,
};
