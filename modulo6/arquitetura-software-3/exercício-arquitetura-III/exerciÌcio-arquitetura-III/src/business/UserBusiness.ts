import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidEmail } from "../error/InvalidEmail";
import { InvalidRequest } from "../error/InvalidRequest";
import { ShortName } from "../error/ShortName";
import { UserInputDTO } from "../model/userDTO";
import { generateId } from "../services/generateId";

export class UserBusiness {
   public createUser = async (input: UserInputDTO) => {
      try {
         const { name, nickname, email, password } = input

         if (
            !name ||
            !nickname ||
            !email ||
            !password
         ) {
            throw new InvalidRequest()
         }

         if (!email.includes("@")) {
            throw new InvalidEmail()
         }

         if (name.length < 3) {
            throw new ShortName()
         }

         const id: string = generateId()

         const userDatabase = new UserDatabase()

         await userDatabase.insertUser({
            id,
            name,
            nickname,
            email,
            password
         })

      } catch (error: any) {
         throw new CustomError(error.statusCode, error.message || error.sqlMessage)
      }
   }
}
