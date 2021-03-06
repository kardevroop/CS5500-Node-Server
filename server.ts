import express, {Request, Response} from 'express';
import mongoose, { Mongoose } from 'mongoose';
//mongoose.connect('mongodb://localhost:27017/tuiter', function(error){
//    if(error) console.log(error);
//    console.log('connection successful');
//});
mongoose.connect('mongodb+srv://admin:IeEAddMqsyWTdC3s@tuitercluster.szy5h.mongodb.net/tuiter?retryWrites=true&w=majority', function(error){
    if(error) console.log(error);
        console.log('connection successful');
    });
import bodyParser from "body-parser";
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import UserDao from './daos/UserDao';
import TuitDao from './daos/TuitDao';
const app = express();

const userDao = UserDao.getInstance();
const tuitDao = TuitDao.getInstance();

app.use(bodyParser.json())

app.get('/hello', (req: Request, res: Response) =>
    res.send('Hello World!'));

app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));

//const userController = new UserController(app, userDao);
//const tuitController = new TuitController(app, tuitDao);

const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);

const PORT = 4000;
app.listen(process.env.PORT || PORT);