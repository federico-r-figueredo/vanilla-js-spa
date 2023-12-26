import Header from '../templates/Header.js';
import Home from '../pages/Home.js';
import Pokemon from '../pages/Pokemon.js';
import NotFound from '../pages/NotFound.js';
import About from '../pages/About.js';
import getHash from '../utils/getHash.js';
import resolveRoutes from '../utils/resolveRoutes.js';

const routes = {
    '/': Home,
    '/:id': Pokemon,
    '/about': About
};

async function router() {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    const hash = getHash();
    const route = await resolveRoutes(hash);
    const render = routes[route] ?? NotFound;
    content.innerHTML = await render();
}

export default router;
