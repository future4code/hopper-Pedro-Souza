import { v4 as generateId } from 'uuid'
import { MovieDatabase } from '../data/MovieDatabase'

export class MovieBusiness {
  async create({ title, description, duration_in_minutes, year_of_release }: any):Promise<void> {
    if ( !title || !description || !duration_in_minutes || !year_of_release ) {
      throw new Error("Dados inválidos (title, description, duration_in_minutes, year_of_release)")
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id,
      title, 
      description, 
      duration_in_minutes, 
      year_of_release
    })
  }

  async getAll():Promise<any> {
    const movieDatabase = new MovieDatabase()
    const result = await movieDatabase.getAll()

    return result
  }

}