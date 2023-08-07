// teamsController.js
const { Team , Runner} = require('../db');

module.exports = {
  list(req, res) {
    return Team.findAll({
      include: [
        {
          model: Runner,
          attributes: ['id', 'name', 'points'] // 러너의 id와 이름만 선택적으로 가져오기
        }
      ]
    })
      .then(teams => {
        // 각 팀별 총 포인트를 계산하여 응답값에 포함시키기
        const teamsWithTotalPoints = teams.map(team => {
          const totalPoints = team.Runners.reduce((sum, runner) => sum + runner.points, 0);
          return {
            id: team.id,
            teamName: team.teamName,
            totalPoints,
            Runners: team.Runners // 원래 데이터에 포함된 러너 정보 그대로 유지
          };
        });
        res.status(200).send(teamsWithTotalPoints);
      })
      .catch(error => res.status(400).send(error));
  },
  show(req, res) {
    return Team.findByPk(req.params.id, {
        include: [{
            model: Runner,
            attributes: ['id', 'name', 'points'], // 가져올 러너 정보 지정
        }],
    })
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
