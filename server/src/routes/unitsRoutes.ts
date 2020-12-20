import { Router } from 'express';
import unitsControllers from '../controllers/unitsControllers';



class UnitsRoutes {

    public router: Router = Router();
    constructor(){
         this.config();
    }

    config(): void {
        this.router.get('/:usuario', unitsControllers.unitsUsers);
        this.router.get('/', unitsControllers.allUnits);
    } 
}

const unitsRoutes = new UnitsRoutes();
export default unitsRoutes.router;