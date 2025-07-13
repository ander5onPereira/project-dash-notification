import express from 'express';
import cors from 'cors';
import path from 'path';
import uploadRouter from './routes/upload';
import newsRouter from './routes/news';
const app = express();
app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api/upload', uploadRouter);
app.use('/api/news', newsRouter);

app.listen(3000, () => {
  console.log('🚀 Backend running at http://localhost:3000');
});
