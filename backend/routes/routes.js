const express = require("express")
const itemsController = require("../controllers/itemsController")
const usersController = require("../controllers/usersController")
const router = express.Router()



router.route('/users')
.post(usersController.createAccount)

router.route('/user')
.post(usersController.userLogin)
/* router.route('/usuarioGoogle')
.post(usuariosController.crearCuentaConGoogle) */

router.route('/getUser')
.post(usersController.getUsersExist)


router.route("/items")
.get(itemsController.getProducts)
.post(itemsController.newProduct)

router.route("/items/stocks/:id")
.put(itemsController.modifyStockProduct)

router.route("/items/total/:id")
.put(itemsController.modifyPropertyTotalProduct)

router.route("/items/:id")
.get(itemsController.getProductById)
.delete(itemsController.deleteProductById)

module.exports = router;
