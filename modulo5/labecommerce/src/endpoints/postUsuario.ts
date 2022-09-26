import { Request, Response } from "express";
import connection from "../connection";

export default async function postUsuario(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const {name, email, password} = req.body
        const id = String(Date.now())
    
        await connection("LabecommerceUsers")
        .insert({
            id,
            name,
            email,
            password
        })

        res.status(201).send("Usuário criado")
    } catch (error: any) {
        res.status(500).send("Erro inesperado no servidor")
    }
}