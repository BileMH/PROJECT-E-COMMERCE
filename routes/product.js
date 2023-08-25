const express = require("express") ;
const router = express.Router();
const { addproduct, deleteproduct, getproducts, getOneProduct, updatedProduct} = require("../controllers/product");




router.post('/addProduct',  addproduct);
// update contact

router.delete('/:_id',  deleteproduct);

router.get ("/allproducts",   getproducts);

router.get('/:_id',  getOneProduct) ;






module.exports = router;