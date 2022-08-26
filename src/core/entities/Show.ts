import { Document, WithId } from "mongodb"

export default interface Show extends WithId<Document>{
    show_id: string,
    type: string,
    title: string,
    director: string,
    country: string,
    listed_in: string
    description: string
}