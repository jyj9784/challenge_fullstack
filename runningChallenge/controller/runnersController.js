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
    },
    updatePoints(req, res) {
        const runnerId = req.params.id;
        const pointsToUpdate = req.body.points;

        if (!pointsToUpdate || isNaN(pointsToUpdate)) {
            return res.status(400).send("Invalid points value.");
        }

        // 먼저 해당 ID의 러너를 찾습니다.
        Runner.findByPk(runnerId)
            .then(runner => {
                if (!runner) {
                    return res.status(404).send("Runner not found.");
                }

                // 입력한 포인트 값을 러너 모델에 반영합니다.
                return Runner.update({ points: pointsToUpdate }, {
                    where: {
                        id: runnerId
                    }
                })
                .then(() => {
                    // 업데이트된 러너 정보를 다시 조회하여 응답으로 보냅니다.
                    return Runner.findByPk(runnerId)
                        .then(updatedRunner => res.status(200).send(updatedRunner))
                        .catch(error => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};
