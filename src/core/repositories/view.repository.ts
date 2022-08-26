import View from "../entities/View"

export default interface ViewRepository {
    saveViewInRepository(view: View): Promise<boolean> 
}