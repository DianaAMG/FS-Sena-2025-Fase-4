const express = require('express');
const router = express.Router();

// Importa el controlador
const empleadoCtrl = require('../controllers/empleado.controller');

// Rutas para empleados
router.get('/', empleadoCtrl.getEmpleados);
router.post('/', empleadoCtrl.createEmpleados);
router.get('/:id', empleadoCtrl.getUnicoEmpleado);
router.put('/:id', empleadoCtrl.editarEmpleado);
router.delete('/:id', empleadoCtrl.eliminarEmpleado);

module.exports = router;
