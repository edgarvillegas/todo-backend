const express = require('express');
const app = express();
app.use(express.json());

app.post('/agrega_todo', (req, res) => {
  console.log('Todo recibido:', req.body);
  res.status(201).send({ mensaje: 'Todo guardado correctamente' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
