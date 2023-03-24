const addBasketController = async(req,res)=>{
    const {name,count} = req.body;
    console.log(name,count);
    let basket = req.session.productBasket || []
    basket.push({name,count})
    req.session.productBasket = basket
    res.json({"basket":basket})

}
const getBasketProductsController = async(req,res)=>{
    res.json({"products":req.session.productBasket})
}
module.exports = {addBasketController,getBasketProductsController}