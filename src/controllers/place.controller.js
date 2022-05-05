const config = require("config");
const Joi = require("joi");
const { default: mongoose } = require("mongoose");
const Place = require("../models/places.model");
const placeSchema = require("./schemas/place.schema");

const getAllPlace = async (req, res) => {
  const list = await Place.find({});
  try {
    res.send(list);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

const getOnePlace = async (req, res) => {
  const id = parseInt(req.params.id);
 Place.findById(id,(err,p) => {
      if (err) {
          res.status(404).send(err)
          return
        }
        res.status(200).json(p)
    })
};

const newPlace = async (req, res) => {
  const data = req.body;
  data.created = new Date().toLocaleDateString();
  Place.countDocuments({},async (err,count) => {
      data._id = count
    try {
        Joi.assert(data, placeSchema);
        const place = new Place(data);
        await place.save();
    
        res.status(200).json({
          message: "place has been created",
        });
      } catch (error) {
       res.status(404).json({
           error: error,
       })
      }
  })
};

const deleteOnePlace = async (req, res) => {
    const id = parseInt(req.params.id)
    Place.findOneAndRemove({_id:id},(err,p) => {
        try {
            res.status(200).json({
                message:`${p.name} has been removed`
            }) 
        } catch (error) {
            res.status(404).json({
                error:"place doesn't exists",
            })
        }
           
        })
};
const modifyOnePlace = async (req, res) => {
    const id = parseInt(req.params.id)
    const data = req.body
    console.log(data)
    Joi.assert(data,placeSchema)
    Place.findByIdAndUpdate(id,data,(err,p) =>{
      if (err){
        res.status(404).json({
          error:"place doesn't exists"
        })
      } else {
        res.status(200).json({
          message:"place has benn modified"
        })
      }
    })
};

module.exports = {
  getAllPlace,
  getOnePlace,
  newPlace,
  modifyOnePlace,
  deleteOnePlace,
};
