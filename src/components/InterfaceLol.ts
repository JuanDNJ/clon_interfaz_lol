export class InterfaceLol extends HTMLElement {

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

		`;

	}

	styles() {
		return /*css*/`
			:host{
				display: flex;
				width: 1280px;
				height: 720px;
				margin: 0 auto;
			}

	 `;
	}

	disconnectedCallback() {
		this.draw = false;
	}
	adoptedCallback() { }

}

window.customElements.define("interface-lol", InterfaceLol);
