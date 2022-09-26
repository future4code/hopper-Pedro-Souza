import { Request, Response } from "express";
import connection from "../connection";
import { usuario } from "../types";

export default async function getUsuarios(
    req: Request,
    res: Response
): Promise<void>{
    try {
        const usuarios: usuario[] = await connection("LabecommerceUsers")

        res.send(usuarios)
    } catch (error: any) {
        res.status(500).send("Erro inesperado no servidor")
    }
}