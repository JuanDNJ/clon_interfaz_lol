export class IntHeader extends HTMLElement {

	draw: boolean = false;

	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	static get observedAttributes() {
		return [''];
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback() {

		if (this.draw) {
			this.render();
		}

	}

	render() {

		this.draw = true;

		this.shadowRoot!.innerHTML = /*html*/`
			<style>${this.styles()}</style>
			<header class="top">
				<section class="item_top start">
					<h1>Jugar</h1>
				</section>
				<nav class="item_top navigation">
					<ul class="menu info">
						<li class="item_menu"><a class="link" href="#">INICIO</a></li>
						<li class="item_menu"><a class="link" href="#">TFT</a></li>
						<li class="item_menu"><a class="link" href="#">CLASH</a></li>
					</ul>
					<ul class="menu user">
						<li class="item_menu"><a class="link" href="#">Perfil</a></li>
						<li class="item_menu"><a class="link" href="#">Colección</a></li>
						<li class="item_menu"><a class="link" href="#">Mis Objetos</a></li>
						<li class="item_menu"><a class="link" href="#">Tienda</a></li>
					</ul>
				</nav>
				<section class="item_top state_rpoints_eblue">
					<i class="separator"></i>
					<span>R 20</span>
					<span>EA 173k</span>
				</section>
				<section class="item_top state">
					<article class="state-user">User Online</article>
				</section>
			</header>
		`;

	}

	styles() {
		return /*css*/`

	 `;
	}

	disconnectedCallback() {
		this.draw = false;
	}
	adoptedCallback() { }

}

window.customElements.define("int-header", IntHeader);
