import express from 'express';

const app = express();

app.use('/api', (req, res) => res.send({ it: 'works' }));

app.listen(4000, () => console.log('listening on PORT 4000'));
