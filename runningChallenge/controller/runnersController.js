const { Runner } = require('../db');

module.exports = {
    list(req, res) {
        return Runner.findAll()
            .then(runners => res.status(200).send(runners))
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        return Runner.findByPk(req.params.id)
            .then(runner => res.status(200).send(runner))
            .catch(error => res.status(400).send(error));
    },
    create(req, res) {
        return Runner.create(req.body)
            .then(runner => res.status(201).send(runner))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Runner.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(runner => res.status(200).send(runner))
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return Runner.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => res.status(204).send())
            .catch(error => res.status(400).send(error));
    }
};
