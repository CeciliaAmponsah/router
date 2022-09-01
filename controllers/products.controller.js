const getProducts = (req, res) => {
  res.status(200).send("Get all products");
};

const createProducts = (req, res) => {
  res.status(201).send("Product has been created");
};

const updateProducts = (req, res) => {
  res.status(200).send("Product has been updated");
};

const deleteProducts = (req, res) => {
  res.status(200).send("Product  has been deleted");
};

module.exports = {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
};
