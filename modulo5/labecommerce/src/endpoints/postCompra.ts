import { Request, Response } from "express";
import connection from "../connection";

export default async function postCompra(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const {user_id, product_id, quantity} = req.body
        const id = String(Date.now())
        
        const produto = await connection("LabecommerceProducts")
        .where('id', `${product_id}`)
    
        const total_price = produto[0].price * quantity

        await connection("LabecommercePurchases")
        .insert({
            id,
            user_id,
            product_id,
            quantity,
            total_price
        })

        res.status(201).send("Compra registrada")
    } catch (error: any) {
        res.status(500).send("Erro inesperado no servidor")
    }
}