import { Request, Response} from 'express';

import pool from '../database';

class UnitsControllers {

    public async unitsUsers (req: Request, res: Response) {
        const usuario = req.params.usuario;
        const users = await pool.query('SELECT * ' +
            'from unidades_residenciales, unidades_administradas, ciudades ' +
            'where usuario = \'' + usuario + '\' and ' + 
            'unidades_residenciales.nit_unidad = unidades_administradas.nit_unidad and ' +
            'ciudad_unidad = codigo_ciudad');
            console.log(users.recordsets);
            res.json(users.recordsets[0]);
    }

    public async allUnits (req: Request, res: Response) {
        const users = await pool.query('SELECT * from unidades_administradas');
            console.log(users.recordsets);
            res.json(users.recordsets[0]);
    }


}

const unitsControllers = new UnitsControllers();
export default unitsControllers;