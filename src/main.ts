import './assets/css/normalize.css'
import './assets/css/root.css'
import './assets/css/style.css'
import './core/sprite-svg/SpriteSvg'

import './components/InterfaceLol'
import './components/IntMenu'
import './components/IUser'

const linksMenu = Array.from(document.querySelectorAll('.link')!)
const routes = [
	{
		path: '/',
		name: 'inicio',
		template: `<h1 class="main_title">Inicio</h1>`,
	},
	{
		path: '/tft',
		name: 'tft',
		template: `<h1 class="main_title">Tft</h1>`,
	},
	{
		path: '/clash',
		template: `<h1 class="main_title">Clash</h1>`,
		name: 'clash',
	},
	{
		path: '/perfil',
		name: 'perfil',
		template: `<h1 class="main_title">Perfil</h1>`,
	},
	{
		path: '/coleccion',
		name: 'coleccion',
		template: `<h1 class="main_title">Coleccion</h1>`,
	},
	{
		path: '/objetos',
		name: 'objetos',
		template: `<h1 class="main_title">Objetos</h1>`,
	},
	{
		path: '/tienda',
		name: 'tienda',
		template: `<h1 class="main_title">Tienda</h1>`,
	}
]

linksMenu.forEach(link => {

	link.addEventListener('click', (e: Event) => {
		if (e.target instanceof HTMLAnchorElement) {
			e.preventDefault();
			const href = link.getAttribute('href')

			window.history.pushState({}, '', href)
			render();
		}
	})
})

async function render() {
	const window_view = document.querySelector('.window_view')!;
	let indice = routes.findIndex(rec => rec.path === location.pathname)

	if (indice === -1) {
		indice = 0;
	}
	const page = await fetch(`./src/views/${routes[indice].name}.html`)
	window_view.innerHTML = /*html*/`${await page.text()}	`
}

render()
