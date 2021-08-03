import { connectDatabase, insertDocument } from "../../lib/db-util"

async function handler(req,res){
    if(req.method === "POST"){
        const { email, name, message} = req.body

        if(!email || !email.includes('@' || !name || name.trim() === '' || !message || message.trim() === '')){
            res.status(422).json({message: "Invalid input."})
        }
        const newMessage = {
            email,
            name,
            message
        }
        let client;
        try{
             client = await connectDatabase()
        }catch(error){
            res.status(500).json({message:'could not connect to database'})
            return;
        }
        try{
            const result = await insertDocument(client,"messages",newMessage)
            newMessage.id = result.insertedId
        }catch(error){
            client.close();
            res.status(500).json({message:'could not insert to database'})
            return; 
        }

        client.close()
        res.status(201).json({message: "Successfully stored message!", message: newMessage})
    }
}

export default handler;