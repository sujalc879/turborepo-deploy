import express from 'express'
import { prisma } from '@repo/prisma/client'
const app = express();
const PORT = 3002;

app.use(express.json());

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    

    try {
        const user = await prisma.user.create({
            data : {
                username,
                password
            }
        });
    
        res.status(200).json({ message : "signup successfull", id : user.id});
        
    } catch (error) {
        
        res.status(403).json({ message : "this username is already exist"});
    }
})

app.listen(PORT, () => {
    console.log("server is running on port " + PORT);
})