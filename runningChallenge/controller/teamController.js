// teamsController.js
const { Team } = require('../db');

module.exports = {
    list(req, res) {
        return Team.findAll()
            .then(teams => res.status(200).send(teams))
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        return Team.findByPk(req.params.id)
            .then(team => res.status(200).send(team))
            .catch(error => res.status(400).send(error));
    },
    create(req, res) {
        return Team.create(req.body)
            .then(team => res.status(201).send(team))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Team.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(team => res.status(200).send(team))
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return Team.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => res.status(204).send())
            .catch(error => res.status(400).send(error));
    }
};
