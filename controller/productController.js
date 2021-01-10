
const productModel = require("../models/productModel");

module.exports = {
    getProduct : async (req,res)=>{
       try{
          const products =  await productModel.find().exec();
          res.json({products});
       } catch(err){
           console.log(err);
       }
    },
    editProductById : async (data)=>{
      try{
          const {timeEnd} = data;
          if(timeEnd){
            const product = await productModel.findOneAndUpdate({_id : data.idProduct} , {
              timeEnd : timeEnd,
            },{new : true});
            return product;
          }else{
              const product = await productModel.findOneAndUpdate({_id : data.idProduct} , {
              quatity : data.newQuantity,
              isSale : data.isSale,
            },{new : true});
          return product;
          }
      }catch(err){
          console.log('lay san pham bi loi ',err);
      }
    }
}