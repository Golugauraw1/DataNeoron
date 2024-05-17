module.exports=(app) =>{
    const userController = require('../controllers/users.controller');
    const router = require("express").Router();
    router.get("/test",userController.getHelloMessage);
    router.get("/getall",userController.getAllusers);
    router.post('/addData', userController.addData);
    router.put('/updateData/:id', userController.updateDataById)
    router.delete('/deleteProduct/:id',userController.deleteDataById)
    router.get("/count",userController.countAPI)

    app.use("/api",router)
}