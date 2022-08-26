import { Request, Response } from "express";
import saveView from "../core/interactors";

const newView = async (req: Request, _res: Response) => {
    console.log("Se registra una nueva vista para: " + req.body.customer.email )
    const view = await saveView(req.body.customer, req.body.show)
    _res.json(view)
}

export default newView