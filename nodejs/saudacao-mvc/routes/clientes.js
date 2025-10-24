const express = require('express');
const router = express.Router();    
const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.index);   
router.get('/login', clientesController.login);
router.post('/loginresultadoModel', clientesController.loginresultadoModel);

module.exports = router;    
