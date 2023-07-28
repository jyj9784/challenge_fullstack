// controllers/tasksController.js
const { Task } = require('../db');

module.exports = {
    list(req, res) {
        return Task.findAll()
            .then(tasks => res.status(200).send(tasks))
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        return Task.findByPk(req.params.id)
            .then(task => res.status(200).send(task))
            .catch(error => res.status(400).send(error));
    },
    create(req, res) {
        return Task.create(req.body)
            .then(task => res.status(201).send(task))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Task.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(task => res.status(200).send(task))
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return Task.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => res.status(204).send())
            .catch(error => res.status(400).send(error));
    }
};
