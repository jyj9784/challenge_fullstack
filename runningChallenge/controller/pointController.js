// controllers/pointsController.js
const { Point } = require('../db');

module.exports = {
    list(req, res) {
        return Point.findAll()
            .then(points => res.status(200).send(points))
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        return Point.findByPk(req.params.id)
            .then(point => res.status(200).send(point))
            .catch(error => res.status(400).send(error));
    },
    create(req, res) {
        return Point.create(req.body)
            .then(point => res.status(201).send(point))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Point.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(point => res.status(200).send(point))
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return Point.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => res.status(204).send())
            .catch(error => res.status(400).send(error));
    }
};
