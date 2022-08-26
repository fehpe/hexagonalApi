import Show from "../entities/Show"

export default interface ShowRepository {
    getById(id: string): Promise<Show> 
}