import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan("dev"))

app.get("/", (_, res) => {
    res.json({message: "Hello"})
})


export default app;