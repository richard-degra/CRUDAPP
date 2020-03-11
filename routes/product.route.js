const express = require('express');
const router = express.Router();

// Controladores (ainda não fiz)

const product_controller = require('../controllers/product.controller');

// testar URL

router.get('/test', product_controller.test);
router.get('/', product_controller.base);

// rota criação
router.post('/create', product_controller.product_create);

module.exports = router;