const CarModel = require('./car.model');

module.exports.registerCar = (req, res) => {
    var newCar = Object.assign(new CarModel(), req.body);

    newCar.save((err) => {
        if (err) {
            res.json({ success: false, msj: 'Ha ocurrido un error en el registro de vehiculos' + err });
        } else {
            res.json({ success: true, msj: 'Se registró el vehiculo correctamente' });
        }
    });
};

module.exports.listCar = (req, res) => {
    CarModel.find().then((vehiculos) => {
        res.send(vehiculos);
    });
};

module.exports.updateCar = (req, res) => {
    CarModel.findOneAndUpdate(req.body.id, { $set: req.body }, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'No se ha actualizado. ' + err });

        } else {
            res.json({ success: true, msg: 'Se ha actualizado correctamente.' + res });
        }
    });
};