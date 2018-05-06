const db = require('../config/db');
const uuid = require('uuid');
// CREATE TABLE IF NOT EXISTS employee(numid integer primary key autoincrement, id text, make text);
db.run(`CREATE TABLE IF NOT EXISTS employee(
  id integer primary key autoincrement,
  guid text,
  name text)`);
exports.create = function(employee, cb) {

    db.run('INSERT INTO employee (guid, name) VALUES (?, ?)',
        uuid(),
        employee.name,

        (err) => {
            if (err) return cb(err);
            db.get('SELECT * FROM employee WHERE id = (SELECT MAX (id) FROM employee);', cb);
        }
    );
};

exports.findAll = function(cb) {
    db.all('SELECT * FROM employee', function(err, employee) {
        cb(err, employee);
    });
};

exports.findById = function(id, cb) {
    db.all(`SELECT * FROM employee WHERE ID = '${id}'`, function(err, employee) {
        cb(err, employee);
    });
};

exports.update = function(id, employee, cb) {
    db.run(`UPDATE employee SET name = '${employee.name}' WHERE ID = '${id}'`, cb);
};

exports.removeById = function(id, cb) {
    db.all(`DELETE FROM employee WHERE ID = '${id}'`, (err, employee) => {
        if (err) return cb(err);

        cb(err, employee);
    });
};