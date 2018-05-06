import express from 'express';
import Employee from '../models/employee';

const router = express.Router();

router.get('/', (req, res) => {
    Employee.findAll(function(err, employees) {
        if (err) return res.status(400).send(err);
        res.send(employees);
    });
});

router.post('/', (req, res) => {
    Employee.create(req.body, (err, employee) => {

        console.log(req.body);

        if (err) return res.status(400).send(err);
        res.send(employee);
    });
});


// delete
// router.delete('/:id', (req, res) => {
//     var id = req.params.id;
//     Car.removeById(id, function(err, cars) {
//       if(err) return res.status(400).send(err);
//       res.send(cars);
//     });
//   });

//   // update
//   router.put('/:id', (req, res) => {
//     var id = req.params.id;
//     Car.update(id, req.body, (err, car) => {
//         if(err) return res.status(400).send(err);
//         res.send(car);
//     });
//   });

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Employee.removeById(id, (err, employee) => {

        console.log(req.body);

        if (err) return res.status(400).send(err);
        res.send(employee);
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    Employee.update(id, (err, employee) => {

        console.log(req.body);

        if (err) return res.status(400).send(err);
        res.send(employee);
    });
});


export default router;