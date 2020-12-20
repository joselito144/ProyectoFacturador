import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors'
import usersRoutes from './routes/usersRoutes';
import unitsRoutes from './routes/unitsRoutes';



class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/users', usersRoutes);
        this.app.use('/units', unitsRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Hemos iniciado en el puerto', this.app.get('port'));
        });
    }
}

const server = new Server;
server.start();