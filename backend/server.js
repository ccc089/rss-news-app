const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rssRoutes = require('./routes/rss');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.send('Servidor RSS funcionando');
});

app.use('/api/rss', rssRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});