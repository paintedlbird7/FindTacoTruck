const express = require('express');
const router = express.Router();

// GET
router.get('', (req, res) => {
    const locals = {
        title: "Find Taco Truck",
        description: "Find Taco Truck created with NodeJs, Express & MongoDb."
      }  
    res.render('index', { locals })
})

router.get('/about', (req, res) => {  
    res.render('about')
})

module.exports = router;