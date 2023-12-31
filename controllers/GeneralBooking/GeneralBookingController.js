const BookingModal = require("../../models/GeneralBookings/Modal");

const registerBooking = async (req, res) => {
  try {
    console.log(req.body);
    const obj = { ...req.body};
    console.log(obj);
    const request = await new BookingModal(obj);
    const data = await request.save();

    res.send({
      message: "Order successfully Register.",
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

const GetAllBookings = async (req, res) => {
  try {
    const data = await BookingModal.find();
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};

const GetBookById = async (req, res) => {
  try {
    let data = await BookingModal.findById(req.body.id);
    console.log(data);
    res.send({ data: data, isSuccess: true });
  } catch (error) {
    res.send({ Error: error, isSuccess: false });
  }
};


const RemoveBooking = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await BookingModal.findByIdAndRemove(id);
    res.send("Order Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

module.exports = {
  registerBooking,
  GetAllBookings,
  GetBookById,
  RemoveBooking,
};
