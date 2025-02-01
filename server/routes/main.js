const express = require('express');
const router = express.Router();
const Taco = require('../models/Taco');


/**
 * GET /
 * HOME
*/
router.get('', (req, res) => {
    const locals = {
        title: "Find Taco Truck",
        description: "Find Taco Truck created with NodeJs, Express & MongoDb."
      }  
    res.render('index', { locals })
})

function insertTacoData () {
  Taco.insertMany([
    {
        FACILITY_NAME: "PALETERIA RAMIREZ",
      },
      {
        FACILITY_NAME: "VANESSA'S HOT DOG",
      },
      {
        FACILITY_NAME: "CHURROS LAND",
      },
  ])
}
insertTacoData();

router.get('/about', (req, res) => {  
    res.render('about')
})

module.exports = router;