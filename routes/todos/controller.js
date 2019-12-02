const {connection} = require("../../config")

module.exports = {
getAll: (req, res) => {
    console.log(req.params.name);
    
    connection.query(`select * from todo WHERE name='${req.params.name}'`, (error, results, fields) => {
        if (error) {
            res.status(500).send({msg: "have error"})
        } else {
            res.status(200).send({
                msg: "show data",
                data : results
            })
        }
    })
},
addOne: (req, res) => {
    console.log(req.body);
    
    connection.query(
        `INSERT INTO todo (id, todo, name, email) VALUES (NULL, '${req.body.todo}', '${req.body.name}', '${req.body.email}')`, (error, results, fields) => {
        if (error) {
            res.status(500).send({msg: "have error add"})
        } else {
            res.status(200).send({
                msg: "show data",
                data : results
            })
        }
    })
},

updateOne: (req, res) => {
    console.log(req.body);
    
    connection.query(
    //    ` UPDATE todo SET todo = 'makan lagi update again' WHERE todo.id = 1`,


        `UPDATE todo SET ? WHERE id = ?`,
         [req.body, `${req.params.id}`],
          (error, results, fields) => {
        if (error) {
            res.status(500).send({msg: "have error add"})
        } else {
            res.status(200).send({
                msg: "show data",
                data : results
            })
        }
    })
},
deleteOne: (req, res) => {
    console.log(req.body);
    
    connection.query(
    //    ` UPDATE todo SET todo = 'makan lagi update again' WHERE todo.id = 1`,


        `DELETE from todo WHERE id = ?`,
         [req.params.id],
          (error, results, fields) => {
        if (error) {
            res.status(500).send({msg: "have error add"})
        } else {
            res.status(200).send({
                msg: "show data",
                data : results
            })
        }
    })
}


}