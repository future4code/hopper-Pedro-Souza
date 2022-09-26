import { Request, Response } from "express";
import connection from "../connection";
import { compra } from "../types";

export default async function getCompras(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const user_id = req.params.user_id
        const compras: compra[] = await connection("LabecommercePurchases")
        .where('user_id', `${user_id}`)

        res.send(compras)
    } catch (error: any) {
        res.status(500).send("Erro inesperado no servidor")
    }
}