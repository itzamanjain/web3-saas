import { Router } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const router = Router();    

const JWT_SECRET = "aman123";

const prismaClient = new PrismaClient();


router.post("/signin",async(req,res) =>{
    const hardCodeAddress = "0x1234567890";

    const user = await prismaClient.user.findFirst({
        where:{
            address:hardCodeAddress
        }
    });

    if(user){
        const token = jwt.sign({
            userId : user.id
        },"JWT_SECRET")
        res.json({
            token
        })

    }else{
        const newUser = await prismaClient.user.create({
            data:{
                address:hardCodeAddress
            }
        })
        const token = jwt.sign({
            userId : newUser.id
        },"JWT_SECRET")
        res.json({
            token
        })

    }

})


export default router;