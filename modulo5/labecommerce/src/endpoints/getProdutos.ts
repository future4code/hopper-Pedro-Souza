import { Request, Response } from "express";
import connection from "../connection";
import { produto } from "../types";

export default async function getProdutos(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const produtos: produto[] = await connection("LabecommerceProducts")

        res.send(produtos)
    } catch (error: any) {
        res.status(500).send("Erro inesperado no servidor")
    }
}