const xml2js = require('xml2js');

async function fetchFeeds() {
    const rssUrl = 'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada'; // Cambia por el feed que quieras https://feeds.bbci.co.uk/news/rss.xml
    const response = await fetch(rssUrl);
    const xml = await response.text();
    const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });
    // Extrae las noticias del feed
    const items = result.rss.channel[0].item.map(item => ({
        title: item.title[0],
        link: item.link[0],
        pubDate: item.pubDate[0],
        description: item.description[0]
    }));
    return items;
}

module.exports = { fetchFeeds };