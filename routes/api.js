const router = require("express").Router();


router.get("/api/workouts/range", (req, res) => {

})

router.post("/api/workouts", (req, res) => {

})

router.get("/api/workouts", (req, res) => {
        Workout.find({})
          .sort({ date: -1 })
          .then(dbTransaction => {
            res.json(dbTransaction);
          })
          .catch(err => {
            res.status(400).json(err);
          });
});

router.put("/api/workouts/:id", (req, res) => {

})

module.exports = router;