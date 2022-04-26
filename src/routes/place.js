const express = require('express');
const router = express.Router();
const {getAllPlace,getOnePlace,newPlace,deleteOnePlace,modifyOnePlace} = require('../controllers/place.controller')
//COMPLETE the router
router.get("/",getAllPlace);

router.get("/:id",getOnePlace)

router.post("/",newPlace)

router.delete("/:id",deleteOnePlace)

router.patch("/:id",modifyOnePlace)
module.exports = router;
