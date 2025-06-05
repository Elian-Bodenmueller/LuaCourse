import express from 'express';
import path from 'path';
import { lessons } from '@luacourse/shared';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/lessons', (_req, res) => {
  res.json(lessons);
});

app.get('/api/lessons/:id', (req, res) => {
  const id = Number(req.params.id);
  const lesson = lessons.find((l) => l.id === id);
  if (lesson) {
    res.json(lesson);
  } else {
    res.status(404).send({ message: 'Lesson not found' });
  }
});

const frontendDist = path.join(__dirname, '../../dist/apps/frontend');
app.use('/', express.static(frontendDist));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
