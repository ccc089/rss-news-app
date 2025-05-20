async function cargarNoticias() {
    const contenedor = document.getElementById('news');
    contenedor.innerHTML = 'Cargando noticias...';
    try {
        const res = await fetch('/api/rss/news');
        const noticias = await res.json();
        contenedor.innerHTML = '';
        noticias.forEach(noticia => {
            const div = document.createElement('div');
            div.className = 'noticia';
            div.innerHTML = `
                <h2><a href="${noticia.link}" target="_blank">${noticia.title}</a></h2>
                <p>${noticia.description}</p>
                <small>${noticia.pubDate}</small>
                <hr>
            `;
            contenedor.appendChild(div);
        });
    } catch (e) {
        contenedor.innerHTML = 'Error al cargar noticias.';
    }
}

window.onload = cargarNoticias;