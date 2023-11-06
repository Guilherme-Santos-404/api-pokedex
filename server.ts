import express, { Request, Response } from 'express';
import pokemonRouter from './src/routes/pokemonRoute';
import indexRouter from './src/routes/indexRoute'

const app = express();
const port = 3000;

app.use('/pokemon', pokemonRouter);
app.use('/', indexRouter)

app.get('/temos-que', (req: Request, res: Response) => {
  res.send('Pegar!');
});

app.listen(port, () => {
  console.log(`Server is running at ${port} 😼`);
});