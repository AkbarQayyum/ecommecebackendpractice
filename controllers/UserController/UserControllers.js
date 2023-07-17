const { response } = require("express");
const Users = require("../../models/UserModal");


const jwt = require("jsonwebtoken");




const getAllUsers = async (req, res) => {
  try {
    const data = await Users.find();

    res.send(data);
  } catch (error) {
    res.send({ Error: error });
  }
};

const getuserById = async (req, res) => {
  try {
    let data = await Users.findOne({
      email: req.body.username,
      password: req.body.password,
    });
    console.log(data);
    if (data) {
      console.log("hello");
      let token = jwt.sign({ ...data }, process.env.SECRET);
      res.send({
        isSuccess: true,
        token: token,
        user: { ...data?._doc, password: null },
        message: "user login successfully",
      });
    } else {
      res.send({
        isSuccess: false,
        message: "email or password does not match.",
      });
    }
  } catch (error) {
    res.send({ Error: error });
  }
};
 



module.exports = {
 
  getAllUsers,
  getuserById,

};
