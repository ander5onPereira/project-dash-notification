import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
    const { name, category, price, description, imageUrl } = req.body;

    const product = await prisma.product.create({
      data: {
        name: name,
        category: category,
        price: price,
        description: description,
        imageUrl: imageUrl,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto.', error });
  }
});

router.get('/', async (_req, res) => {
  try {
    const allProduct = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(allProduct);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: req.params.id },
    });

    if (!product)
      return res.status(404).json({ error: 'Produto não encontrada.' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produto.' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.product.findUnique({ where: { id } });

    if (!existing) {
      return res.status(404).json({ error: 'Produto não encontrada.' });
    }

    const updated = await prisma.product.update({
      where: { id },
      data: {
        name: req.body.name ?? existing.name,
        category: req.body.category ?? existing.category,
        price: req.body.price ?? existing.price,
        description: req.body.description ?? existing.description,
        imageUrl: req.body.imageUrl ?? existing.imageUrl,
      },
    });

    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar produto.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await prisma.product.delete({
      where: { id: req.params.id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar produto.' });
  }
});

export default router;
