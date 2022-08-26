import Customer from "../entities/Customer";
import Show from "../entities/Show";
import View from "../entities/View";
import ShowRepository from "../repositories/show.repository";
import ViewRepository from "../repositories/view.repository";

const saveView = (showRepository: ShowRepository, viewRepository: ViewRepository) => async (customer: Customer, show_id: string): Promise<View> => {
    
    // obtiene show por id
     const show: Show = await showRepository.getById(show_id)

    // crea la view
    const view: View = {
        show_id: show.show_id,
        show_title: show.title,
        show_country: show.country,
        customer_email: customer.email,
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString()
    }

    // guarda la view
    viewRepository
    .saveViewInRepository(view)
    .catch((err: unknown) => {
        if (err instanceof Error) {
            console.log(`Things exploded (${err.message})`)
        }
    })

    // Retorna la vista
    return view

}

export default saveView;