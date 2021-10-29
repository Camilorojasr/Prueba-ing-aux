
const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) =>{
    conn.query('SELECT * FROM usuario', (err, usuarios) => {
      if (err) {
        res.json(err);
      }
      res.render('usuarios', {
        data: usuarios
      });
    });
  });

};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO usuario (nombre, ubicacion) set ? ', [data], (err, usuario) => {
      console.log(usuario);
      res.send('words')
    });
  });


};


module.exports = controller;
