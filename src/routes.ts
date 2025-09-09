import { Router, Request, Response } from 'express';
import { animes, Anime } from '../src/lib/database';

const router = Router();

// Listar todos os animes
router.get('/animes', (req: Request, res: Response) => {
  res.status(200).json(animes);
});

// Encontrar um anime pelo ID
router.get('/animes/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const anime = animes.find(a => a.id === parseInt(id));

  if (!anime) {
    return res.status(404).json({ message: 'Anime não encontrado.' });
  }

  res.status(200).json(anime);
});

// Adicionar um novo anime
router.post('/animes', (req: Request, res: Response) => {
  const { title, genre, episodes, imageUrl, sinopse } = req.body;
  
  if (!title || !genre || !episodes) {
    return res.status(400).json({ message: 'Todos os campos (title, genre, episodes) são obrigatórios.' });
  }
  
  const newAnime: Anime = {
    id: animes.length > 0 ? Math.max(...animes.map(a => a.id)) + 1 : 1,
    title,
    genre,
    episodes,
    imageUrl,
    sinopse, // Agora a variável 'imageUrl' existe e pode ser usada
  };

  animes.push(newAnime);
  res.status(201).json(newAnime);
});

// Atualizar um anime existente
router.put('/animes/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, genre, episodes } = req.body;
  const animeIndex = animes.findIndex(a => a.id === parseInt(id));

  if (animeIndex === -1) {
    return res.status(404).json({ message: 'Anime não encontrado.' });
  }

  if (!title || !genre || !episodes) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  animes[animeIndex] = {
    ...animes[animeIndex],
    title,
    genre,
    episodes,
  };

  res.status(200).json(animes[animeIndex]);
});

// Deletar um anime
router.delete('/animes/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const initialLength = animes.length;
  
  const animeIndex = animes.findIndex(a => a.id === parseInt(id));
  if (animeIndex === -1) {
    return res.status(404).json({ message: 'Anime não encontrado.' });
  }

  animes.splice(animeIndex, 1);
  res.status(204).send();
});

export default router;