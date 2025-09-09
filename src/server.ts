import express from 'express';
import dotenv from 'dotenv';
import animeRoutes from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Usar as rotas da API
app.use('/api', animeRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/api/animes`);
});