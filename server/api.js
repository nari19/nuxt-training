const express = require('express')
const router = express.Router()

router.get('/prefectures', (req, res, next) => {
  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'testuser',
    database: 'testdb',
    password: 'testuser',
  })
  let ret = []
  connection.connect()
  connection.query('SELECT * from prefectures;', function (error, row, fields) {
    if (error) {
      console.log(error)
    }
    const dat = []
    for (let i = 0; i < row.length; i++) {
      dat.push({ id: row[i].id, name: row[i].name })
    }
    ret = JSON.stringify(dat)
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(ret)
  })
  connection.end()
})

module.exports = router
