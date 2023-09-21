'use strict';



const {
  getIssues,
  createIssue,
  updateIssue,
  deleteIssue
} = require('../controllers')



module.exports = function (app) {
  app
    .route("/api/issues/:project")

    .get(getIssues)
    .post(createIssue)
    .put(updateIssue)
    .delete(deleteIssue);
};

/*module.exports = function (app) {

  app.route('/api/issues/:project')

    .get(function (req, res) {
      let project = req.params.project;

    })

    .post(function (req, res) {
      let project = req.params.project;

    })

    .put(function (req, res) {
      let project = req.params.project;

    })

    .delete(function (req, res) {
      let project = req.params.project;

    });

};*/

/*
newIssue.save((err, issueData) => {
      return (err) 
        ? res.json({error: 'error saving data'})
        : res.json(issueData)
      });  */