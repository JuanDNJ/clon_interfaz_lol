export class IntMenu extends HTMLElement {

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
			 <slot name="default" title="Menu"></slot>
		`;
		console.log(this.id);
	}

	styles() {
		return /*css*/`
			:host {
				display: flex;
			}

			::slotted(*){
				display: flex;
				flex-flow: row;
				padding: .3rem;
				list-style: none;
				gap: 1rem;
				padding: 0;
				margin: 0;
			}
	 `;
	}

	disconnectedCallback() {
		this.draw = false;
	}
	adoptedCallback() { }

}

window.customElements.define("int-menu", IntMenu);
