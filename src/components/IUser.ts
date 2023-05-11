export class IUser extends HTMLElement {

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
			 <section class="icono">
			 <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="">
			 <span class="user_level">324</span>
			 </section>
			 <section class="name">
			 		<strong>${this.getAttribute('name')}</strong>
					<span class="status_user"><i class="i_online"></i> En Linea</span>
					<slot name="icon_notification"></slot>
			 </section>
		`;

	}

	styles() {
		return /*css*/`
			:host{
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 10px;
			}
			.icono{
				width: 48px;
					height: 48px;
					border-radius: 50%;
					border: 5px double goldenrod;

					position: relative;
			}
			.icono img{
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 50%;
			}
			.user_level{
				position: absolute;
				bottom: -10px;
				left: 50%;
				font-size: 9px;
				color: white;
				transform: translateX(-50%);
				background-color: #333;
				border: 1px solid goldenrod;
				border-radius: .5rem;
				padding: 2px;
			}
			.name{
				display: flex;
				flex-flow: column;
				justify-items: center;
				position: relative;
				align-items: flex-start;
			}
			.name strong{
				flex: 1;
				margin-bottom: .5rem;
				font-size: 1.2rem;
				color: white;
			}
			.status_user{
				color: green;
				display: inline-flex;
				align-items: center;
				gap: .5rem;
			}
			.status_user > i.i_online{
				width: 10px;
				height: 10px;
				background-color: lime;
				border-radius: 50%;
				border: 1px solid white;
			}
			::slotted(*){
				position: absolute;
				bottom: 0;
				right: 0;
				font-size: 1.5rem;
				cursor: pointer;
				pointer-events: all;
			}

	 `;
	}

	disconnectedCallback() {
		this.draw = false;
	}
	adoptedCallback() { }

}

window.customElements.define("int-user", IUser);
