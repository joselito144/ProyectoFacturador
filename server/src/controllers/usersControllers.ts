import { Request, Response} from 'express';

import pool from '../database';

class UsersControllers {

    public async list (req: Request, res: Response) {
        const users = await pool.query('SELECT * FROM usuarios')
        console.log(users.recordsets);
        res.json(users.recordsets[0]);
    }

    public async getOne (req: Request, res: Response) {
        const { usuario } = req.body;
        console.log(req.body.contrasenia);
        const users = await pool.query('SELECT contrasenia FROM usuarios where usuario = \'' + usuario + "\'");
        console.log('Contrasenia: ' + users.rowsAffected[0]);
        if (users.rowsAffected[0] === 0){
            res.json(0);
        }
        else
        {
            if(req.body.contrasenia === users.recordsets[0][0].contrasenia) {
                res.json(true);
            }
            else{
                res.json(false);
            }
        }
    }


}

const usersControllers = new UsersControllers();
export default usersControllers;