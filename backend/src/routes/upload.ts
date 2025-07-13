import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { Pool } from 'pg';

const router = Router();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const uploadDir = path.join(__dirname, '..', '..', 'public', 'uploads');
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (_req:any, _file:any, cb:any) {
    cb(null, uploadDir);
  },
  filename: function (_req:any, file:any, cb:any) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

const upload = multer({ storage });
router.get('/', async (_req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', upload.single('file'), (req:any, res:any) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'Nenhum arquivo enviado' });
  }

  const fileUrl = `/uploads/${req.file.filename}`;
  return res.json({ success: true, fileUrl });
});

export default router;
