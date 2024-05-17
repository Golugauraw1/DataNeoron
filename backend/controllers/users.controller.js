const userModel = require("../models/users.model");

// Controller function to add data
const addData = async (req, res) => {
  try {
    const newData = req.body;

    const save = await userModel.create(newData);

    res.send("Data added successfully");
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Something went wrong: " + error.message);
  }
};
const getAllusers = async (req, res) => {
  try {
    const alldata = await userModel.find({});

    res.status(200).send(alldata);
  } catch (e) {
    res.status(500).send("allData not found", e.message);
  }
};

const countAPI = async (req, res) => {
  try {
    const updateCount = await userModel.findById(id).select("updateCount");

    res.status(200).send(updateCount);
  } catch (e) {
    res.status(500).send("allData not found", e.message);
  }
};
// Controller function to get hello message
const getHelloMessage = (req, res) => {
  res.send("Hello World!");
};

// Controller function to update data by id
const updateDataById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const update = await userModel.findByIdAndUpdate(
      id,
      {
        $set: updatedData,
        $inc: { updateCount: 1 },
      },
      { new: true }
    );

    if (update)
      res.status(200).json({
        message: "update successfully",
      });
  } catch (e) {
    console.log("errrr", e.message);
    res.send("something went wrong", e.message);
  }
};

const deleteDataById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const update = await userModel.deleteOne({ _id: id });
    res.status(200).send({
      deletedProduct: update,
    });
  } catch (e) {
    console.log("errrr", e.message);
    res.send("something went wrong", e.message);
  }
};
module.exports = {
  addData,
  getHelloMessage,
  updateDataById,
  getAllusers,
  deleteDataById,
  countAPI,
};
