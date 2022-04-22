import express from "express";
import cors from 'cors';
import Connect from './Config/db.js';

import TodoController from "./Controller/Controller.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/todolist",TodoController);

const port = 8007;
Connect();
app.listen(port,()=>console.log(`listening on localhost:${port}`))