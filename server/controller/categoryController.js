const { Category } = require("../models/model");

const categoryController = {
  //ADD A CATEGORY
  addCategory: async (req, res) => {
    try {
      const newCategory = new Category(req.body);
      const savedCategory = await newCategory.save();
      res.status(200).json(savedCategory);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET ALL CATEGORIES
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET A CATEGORY
  getCategory: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE A CATEGORY
  updateCategory: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      await category.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE A CATEGORY
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = categoryController;
