// export type User = {
//     id: string,
//     email: string,
//     password: string
// }

export class User {
    private id: string
    public email: string
    public password: string

    constructor(
        id: string,
        email: string,
        password: string,
    ){
        this.id = id,
        this.email = email,
        this.password = password
    }

    public getId(): string{
        return this.id
    }

    public setId(newId: string){
        this.id = newId
    }
}