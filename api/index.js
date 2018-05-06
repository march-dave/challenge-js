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

        if (err) return res.status(400).send(err);
        res.send(employee);
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Employee.removeById(id, (err, employee) => {

        if (err) return res.status(400).send(err);
        res.send(employee);
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;

    Employee.update(id, req.body, (err, employee) => {

        if (err) return res.status(400).send(err);
        res.send(employee);
    });
});

export default router;