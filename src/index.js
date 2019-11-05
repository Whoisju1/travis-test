import express from 'express';

const app = express();

app.use('/api', (req, res) => res.send({ data: 'content from the backend' }));

app.use(express.static('public'));

const PORT = 8080;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
