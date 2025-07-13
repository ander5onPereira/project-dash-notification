import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
    const { isActive, imageKey, title, resume, description } = req.body;

    const news = await prisma.news.create({
      data: {
        isActive,
        imageKey,
        title,
        resume,
        description,
      },
    });

    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar notícia.' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const allNews = await prisma.news.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(allNews);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar notícias.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const news = await prisma.news.findUnique({
      where: { id: req.params.id },
    });

    if (!news)
      return res.status(404).json({ error: 'Notícia não encontrada.' });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar notícia.' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.news.findUnique({ where: { id } });

    if (!existing) {
      return res.status(404).json({ error: 'Notícia não encontrada.' });
    }

    const updated = await prisma.news.update({
      where: { id },
      data: {
        isActive: req.body.isActive ?? existing.isActive,
        imageKey: req.body.imageKey ?? existing.imageKey,
        title: req.body.title ?? existing.title,
        resume: req.body.resume ?? existing.resume,
        description: req.body.description ?? existing.description,
      },
    });

    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar notícia.' });
  }
});
router.get('/active/:status', async (req, res) => {
  try {
    const status = req.params.status === 'true';

    const news = await prisma.news.findMany({
      where: { isActive: status },
    });

    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar notícias ativas/inativas.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await prisma.news.delete({
      where: { id: req.params.id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar notícia.' });
  }
});

export default router;
