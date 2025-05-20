const express = require('express');
const router = express.Router();
const rssFetcher = require('../services/rssFetcher');

router.get('/news', async (req, res) => {
    try {
        const feeds = await rssFetcher.fetchFeeds();
        res.json(feeds);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching RSS feeds', error: error.message });
    }
});

module.exports = router;