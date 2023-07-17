const ProductModal = require("../../models/ProductSchema/Modal");

const AddProduct = async (req, res) => {
  try {
    console.log(req.body);
    const obj = { ...req.body, isApproved: false };
    console.log(obj);
    const request = await new ProductModal(obj);
    const data = await request.save();

    res.send({
      message: "Product successfully Added.",
      isSuccess: true,
    });
  } catch (error) {
    res.send({
      Error: error,
      isSuccess: false,
      message: "something went wrong please try again.!",
    });
  }
};

const GetAllProducts = async (req, res) => {
  try {
    const data = await ProductModal.find();
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};

const GetSingleProducts = async (req, res) => {
  try {
    let data = await ProductModal.findById(req.body.id);
    console.log(data);
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};



const RemoveProducts = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await ProductModal.findByIdAndRemove(id);
    res.send("Product Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

module.exports = {
  RemoveProducts,
  GetSingleProducts,
  GetAllProducts,
  AddProduct,
};
