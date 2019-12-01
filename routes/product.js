const express=require("express");

const db=require("../db");

const utils=require("../utils");
const router=express.Router();

router.get("/",(Request,Response)=>{
    const connection=db.connect();
    const sql=`SELECT * FROM product`;
    connection.query(sql,(error,data)=>{
        connection.end();
        Response.send(utils.createResult(error,data));
    })
})


router.post("/",(Request,Response)=>{
    const {title,desciption,price}=Request.body;  // see here body is given

    const connection=db.connect();

    const sql=`insert into product(title,desciption,price) values('${title}','${desciption}',${price})`
    connection.query(sql,(error,data)=>{
        connection.end();
        Response.send(utils.createResult(error,data));
    })
})

module.exports=router;