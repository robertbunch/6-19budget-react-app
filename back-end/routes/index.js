var express = require('express');
var router = express.Router();
const db = require('../db');

router.post('/setup',async (req, res)=>{
  const { name, budget } = req.body;
  const insertQuery = `
    INSERT INTO dudes (name, budget)
      VALUES
    ($1, $2)
  `
  const inserted = await db.query(insertQuery,[name,budget])
  res.json({
    msg: "added"
  })
});

router.get('/get-dudes',(req, res)=>{
  res.json({
    msg: "you found me!"
  })
})

module.exports = router;
