const controller = require("../controllers/moviesControllers")

const express = require("express")
const router = express.Router() //funcinalidade express que ajudara a gerenciar rotas

router.get("/", controller.home)
router.get("/todos", controller.getAll)
router.get("/:titulo", controller.getByTitle)
router.get("/:id", controller.getById)


module.exports = router