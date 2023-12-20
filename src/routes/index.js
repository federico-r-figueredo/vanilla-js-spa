import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import NotFound from '../pages/NotFound';

const routes = {
    '/': Home,
    '/:id': Character
};

async function router() {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
}

export default router;
