const categoriesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth") 

const { 
  findAllCategories, 
  createCategory, 
  findCategoryById, 
  updateCategory, 
  deleteCategory,
  checkIsCategoryExists} = require('../middlewares/categories');
const { 
  sendAllCategories, 
  sendCategoryCreated, 
  sendCategoryById,
  sendCategoryUpdated,
  sendCategoryDeleted } = require('../controllers/categories');
  
categoriesRouter.get(
  '/categories', 
  findAllCategories, 
  sendAllCategories);
categoriesRouter.post(
    "/categories", 
    findAllCategories, 
    createCategory, 
    checkIsCategoryExists,
    sendCategoryCreated,
    checkAuth
);
categoriesRouter.get(
  "/categories/:id", 
  findCategoryById, 
  sendCategoryById)
categoriesRouter.put(
  "/categories/:id",
  updateCategory, 
  sendCategoryUpdated,
  checkAuth
);
categoriesRouter.delete(
  "/categories/:id",
  deleteCategory,
  sendCategoryDeleted,
  checkAuth
);

module.exports = categoriesRouter;