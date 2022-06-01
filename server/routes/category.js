const router = require("express").Router();
const categoryController = require("../controller/categoryController");

// ADD A CATEGORY
router.post("/", categoryController.addCategory);

//GET A CATEGORIES
router.get("/:id", categoryController.getCategory);

//GET ALL STUDENT
router.get("/", categoryController.getAllCategories);

//UPDATE A CATEGORY
router.put("/:id", categoryController.updateCategory);

//DELETE A CATEGORY
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
