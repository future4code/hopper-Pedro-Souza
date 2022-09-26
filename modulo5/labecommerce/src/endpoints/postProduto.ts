import { Request, Response } from "express";
import connection from "../connection";

export default async function postProduto(
    req: Request,
    res: Response
): Promise<void> {    
    try {
        const {name, price, image_url} = req.body
        const id = String(Date.now())
    
        await connection("LabecommerceProducts")
        .insert({
            id,
            name,
            price,
            image_url
        })

        res.status(201).send("Produto criado")
    } catch (error: any) {
        res.status(500).send("Erro inesperado no servidor")
    }
}