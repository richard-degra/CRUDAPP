const express = require('express');
const router = express.Router();

// Controladores (ainda não fiz)

const product_controller = require('../controllers/product.controller');

// testar URL

router.get('/test', product_controller.test);
router.get('/', product_controller.base);

// rota criação
router.post('/create', product_controller.product_create);

// rota ler

router.get('/:id', product_controller.product_details);

// rotar atualizar

router.put('/:id/update', product_controller.product_update);

// rota deletar

router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;