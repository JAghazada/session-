const addBasketController = async(req,res)=>{
    const {name,count} = req.body;
    let userID = req.session.userID 
    if(userID===undefined)
        return res.json({msg:"Please sign in!"})
    let basket = req.session.productBasket || {};
    let userBasket = basket[userID] || []
    userBasket.push({name,count});
    basket[userID] = userBasket
    req.session.productBasket = basket
    res.json({"basket":userBasket})
}
const getBasketProductsController = async(req,res)=>{
    res.json({"products":req.session.productBasket[req.session.userID]})
}
module.exports = {addBasketController,getBasketProductsController}