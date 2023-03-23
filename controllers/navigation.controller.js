const navigationController =(req,res)=>{
    console.log("session",req.session)
    let navbarItems =["Login","Register","About"];
    res.json({navbarItems})


}
module.exports = navigationController