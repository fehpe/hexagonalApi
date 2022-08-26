import ShowMongo from "../../dataSources/showMongo.dataSource";
import ViewMongo from "../../dataSources/viewMongo.dataSource";
import saveView from "./saveView.interactor";

const showRepository = new ShowMongo()
const viewRepository = new ViewMongo()
export default saveView(showRepository, viewRepository)