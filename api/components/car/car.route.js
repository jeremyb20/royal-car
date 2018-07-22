const express = require('express'),
      router = express.Router(),
      cars = require('./car.api');

router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});

router.route('/save_car')
  .post((req, res) => {
    cars.registerCar(req,res);
});

router.route('/get_all_cars')
  .get((req, res) => {
    cars.listCar(req,res);
});

router.route('/update_cars')
  .put((req, res) => {
    cars.updateCar(req,res);
});

module.exports = router;