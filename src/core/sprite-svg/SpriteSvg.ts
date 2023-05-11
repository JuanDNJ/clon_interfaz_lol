export default class SpriteSvg extends HTMLElement {


    draw: boolean = false;

    constructor() {
        super();
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


        this.innerHTML = /*html*/`
            <style>${this.styles()}</style>
            
             <div id="sprite" class="hidden" >
             
                <svg xmlns="http://www.w3.org/2000/svg">
                    <symbol id="http">
                                <path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z" />
                                <path d="M24 24H0V0h24v24z" fill="none" />
                    </symbol>
                   <symbol id="gif">
                                <g>
                                    <rect fill="none" height="24" width="24" x="0" />
                                </g>
                                <g>
                                    <g>
                                        <rect height="6" width="1.5" x="11.5" y="9" />
                                        <path d="M9,9H6c-0.6,0-1,0.5-1,1v4c0,0.5,0.4,1,1,1h3c0.6,0,1-0.5,1-1v-2H8.5v1.5h-2v-3H10V10C10,9.5,9.6,9,9,9z" />
                                        <polygon points="19,10.5 19,9 14.5,9 14.5,15 16,15 16,13 18,13 18,11.5 16,11.5 16,10.5" />
                                    </g>
                                </g>
                    </symbol>
                    <symbol id="html">
                                <g>
                                    <rect fill="none" height="24" width="24" />
                                </g>
                                <g>
                                    <path d="M3.5,9H5v6H3.5v-2.5h-2V15H0V9h1.5v2h2V9z M17.5,9H13c-0.55,0-1,0.45-1,1v5h1.5v-4.5h1V14H16v-3.51h1V15h1.5v-5 C18.5,9.45,18.05,9,17.5,9z M11,9H6v1.5h1.75V15h1.5v-4.5H11V9z M24,15v-1.5h-2.5V9H20v6H24z" />
                                </g>
                    </symbol>
                    <symbol id="css">
                               <g>
                                    <rect fill="none" height="24" width="24" />
                                </g>
                                <g>
                                    <path d="M9.5,14v-1H11v0.5h2v-1h-2.5c-0.55,0-1-0.45-1-1V10c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v1H13v-0.5h-2v1h2.5 c0.55,0,1,0.45,1,1V14c0,0.55-0.45,1-1,1h-3C9.95,15,9.5,14.55,9.5,14z M17,15h3c0.55,0,1-0.45,1-1v-1.5c0-0.55-0.45-1-1-1h-2.5v-1 h2V11H21v-1c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v1.5c0,0.55,0.45,1,1,1h2.5v1h-2V13H16v1C16,14.55,16.45,15,17,15z M8,10 c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v-1H6.5v0.5h-2v-3h2V11H8V10z" />
                                </g>
                    </symbol>
                    <symbol id="js">
                               <g>
                                    <rect fill="none" height="24" width="24" />
                                </g>
                                <g>
                                    <path d="M12,14v-1h1.5v0.5h2v-1H13c-0.55,0-1-0.45-1-1V10c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v1h-1.5v-0.5h-2v1H16 c0.55,0,1,0.45,1,1V14c0,0.55-0.45,1-1,1h-3C12.45,15,12,14.55,12,14z M9,9v4.5H7.5v-1H6v1C6,14.33,6.67,15,7.5,15H9 c0.83,0,1.5-0.67,1.5-1.5V9C10.5,9,9.83,9,9,9z" />
                                </g>
                    </symbol>
                    <symbol id="php">
                                <g>
                                    <rect fill="none" height="24" width="24" />
                                </g>
                                <g>
                                    <path d="M13,9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2V9z M8,10.5v1C8,12.3,7.3,13,6.5,13h-2v2H3V9h3.5C7.3,9,8,9.7,8,10.5z M6.5,10.5h-2 v1h2V10.5z M21.5,10.5v1c0,0.8-0.7,1.5-1.5,1.5h-2v2h-1.5V9H20C20.8,9,21.5,9.7,21.5,10.5z M20,10.5h-2v1h2V10.5z" />
                                </g>
                    </symbol>
                    <symbol id="hls">
                                <g>
                                    <rect fill="none" height="24" width="24" />
                                </g>
                                <g>
                                    <path d="M6.5,9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2V9z M16.5,15h3c0.55,0,1-0.45,1-1v-1.5c0-0.55-0.45-1-1-1H17v-1h2V11h1.5v-1 c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v1.5c0,0.55,0.45,1,1,1H19v1h-2V13h-1.5v1C15.5,14.55,15.95,15,16.5,15z M14,15v-1.5h-2.5 V9H10v6H14z" />
                                </g>
                    </symbol>
                   <symbol id="view-carousel">
                                <rect fill="none" height="24" width="24" />
                                <path d="M2,7h4v10H2V7z M7,19h10V5H7V19z M18,7h4v10h-4V7z" />
                    </symbol>
                    <symbol id="offline">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM11.48 20v-6.26H8L13 4v6.26h3.35L11.48 20z" />
                    </symbol>
                    <symbol id="euro">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z" />
                    </symbol>
                    <symbol id="touch">
                                <g>
                                    <rect fill="none" height="24" width="24" x="0" />
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <path d="M9,11.24V7.5C9,6.12,10.12,5,11.5,5S14,6.12,14,7.5v3.74c1.21-0.81,2-2.18,2-3.74C16,5.01,13.99,3,11.5,3S7,5.01,7,7.5 C7,9.06,7.79,10.43,9,11.24z M18.84,15.87l-4.54-2.26c-0.17-0.07-0.35-0.11-0.54-0.11H13v-6C13,6.67,12.33,6,11.5,6 S10,6.67,10,7.5v10.74c-3.6-0.76-3.54-0.75-3.67-0.75c-0.31,0-0.59,0.13-0.79,0.33l-0.79,0.8l4.94,4.94 C9.96,23.83,10.34,24,10.75,24h6.79c0.75,0,1.33-0.55,1.44-1.28l0.75-5.27c0.01-0.07,0.02-0.14,0.02-0.2 C19.75,16.63,19.37,16.09,18.84,15.87z" />
                                        </g>
                                    </g>
                                </g>
                    </symbol>
                    <symbol id="auto-reload">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" />
                    </symbol>
                    <symbol id="admin-panel">
                            <g>
                                <rect fill="none" height="24" width="24" />
                            </g>
                            <g>
                                <g>
                                    <path d="M17,11c0.34,0,0.67,0.04,1,0.09V6.27L10.5,3L3,6.27v4.91c0,4.54,3.2,8.79,7.5,9.82c0.55-0.13,1.08-0.32,1.6-0.55 C11.41,19.47,11,18.28,11,17C11,13.69,13.69,11,17,11z" />
                                    <path d="M17,13c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4C21,14.79,19.21,13,17,13z M17,14.38c0.62,0,1.12,0.51,1.12,1.12 s-0.51,1.12-1.12,1.12s-1.12-0.51-1.12-1.12S16.38,14.38,17,14.38z M17,19.75c-0.93,0-1.74-0.46-2.24-1.17 c0.05-0.72,1.51-1.08,2.24-1.08s2.19,0.36,2.24,1.08C18.74,19.29,17.93,19.75,17,19.75z" />
                                </g>
                            </g>
                    </symbol>
                    <symbol id="article">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </symbol>
                    <symbol id="article">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </symbol>
                    <symbol id="view-list">
                             <rect fill="none" height="24" width="24" />
                             <path d="M3,14h4v-4H3V14z M3,19h4v-4H3V19z M3,9h4V5H3V9z M8,14h13v-4H8V14z M8,19h13v-4H8V19z M8,5v4h13V5H8z" />
                    </symbol>
                    <symbol id="list">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                    </symbol>
                    <symbol id="dashboard">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                    </symbol>
                    <symbol id="info">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </symbol>
                    <symbol id="done">
                          <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                    </symbol>
                    <symbol id="settings">
                         <g>
                            <path d="M0,0h24v24H0V0z" fill="none" />
                            <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
                        </g>
                    </symbol>
                    <symbol id="account-circle">
                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </symbol>
  
                    <symbol id="3points-horizontal">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </symbol>
                    <symbol id="3points-vertical">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </symbol>
                    <symbol id="add-moderator">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M13.22 22.61c-.4.15-.8.29-1.22.39-5.16-1.26-9-6.45-9-12V5l9-4 9 4v6c0 .9-.11 1.78-.3 2.65-.81-.41-1.73-.65-2.7-.65-3.31 0-6 2.69-6 6 0 1.36.46 2.61 1.22 3.61zM19 20v2.99s-1.99.01-2 0V20h-3v-2h3v-3h2v3h3v2h-3z" />
                    </symbol>
                    <symbol id="alert">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z" />
                    </symbol>
                    <symbol id="arrow-back">
                        <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
                        <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
                    </symbol>
                    <symbol id="arrow-forward">
                        <g>
                            <path d="M0,0h24v24H0V0z" fill="none" />
                        </g>
                        <g>
                            <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
                        </g>
                    </symbol>
                    <symbol id="arrow-bottom">
                        <rect fill="none" height="24" width="24" />
                        <path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z" />
                    </symbol>
                    <symbol id="arrow-left">
                        <rect fill="none" height="24" width="24" />
                        <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z" />
                    </symbol>
                    <symbol id="arrow-right">
                        <rect fill="none" height="24" width="24" />
                        <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />

                    </symbol>
                    <symbol id="arrow-top">
                        <rect fill="none" height="24" width="24" />
                        <path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z" />
                    </symbol>
                    <symbol id="cancel">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                    </symbol>
                    <symbol id="close">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </symbol>
                    <symbol id="cookie">
                        <g>
                            <rect fill="none" height="20" width="20" />
                        </g>
                        <g>
                            <g>
                                <path d="M17.96,9.2C16.53,9.17,15,7.64,15.81,5.82c-2.38,0.8-4.62-1.28-4.15-3.65C5.88,0.95,2,5.74,2,10c0,4.42,3.58,8,8,8 C14.71,18,18.43,13.94,17.96,9.2z M6.75,12.5c-0.69,0-1.25-0.56-1.25-1.25S6.06,10,6.75,10S8,10.56,8,11.25S7.44,12.5,6.75,12.5z M8.75,8.5C8.06,8.5,7.5,7.94,7.5,7.25C7.5,6.56,8.06,6,8.75,6S10,6.56,10,7.25C10,7.94,9.44,8.5,8.75,8.5z M12.5,13.25 c-0.41,0-0.75-0.34-0.75-0.75s0.34-0.75,0.75-0.75c0.41,0,0.75,0.34,0.75,0.75S12.92,13.25,12.5,13.25z" />
                            </g>
                        </g>
                    </symbol>
                    <symbol id="download-done">
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <g>
                                <polygon points="20.13,5.41 18.72,4 9.53,13.19 5.28,8.95 3.87,10.36 9.53,16.02" />
                                <rect height="2" width="14" x="5" y="18" />
                            </g>
                        </g>
                    </symbol>
                    <symbol id="download-offline">
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <path d="M12,2C6.49,2,2,6.49,2,12s4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z M11,10V6h2v4h3l-4,4l-4-4H11z M17,17H7v-2h10V17z" />
                        </g>
                    </symbol>
                    <symbol id="delete">
                        <g>
                            <rect fill="none" height="20" width="20" />
                        </g>
                        <g>
                            <g>
                                <polygon points="13,4 11,4 10,3 6,3 5,4 3,4 3,5 13,5" />
                                <path d="M12.5,8c-0.17,0-0.33,0.03-0.5,0.05V6H4v8c0,0.55,0.45,1,1,1h3.76c0.81,1.21,2.18,2,3.74,2c2.49,0,4.5-2.01,4.5-4.5 S14.99,8,12.5,8z M12.5,16C10.57,16,9,14.43,9,12.5S10.57,9,12.5,9s3.5,1.57,3.5,3.5S14.43,16,12.5,16z" />
                                <polygon points="13,12.42 13,10 12,10 12,13 14.6,14.5 15.1,13.63" />
                            </g>
                        </g>
                    </symbol>
                    <symbol id="download">
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <path d="M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z" />
                        </g>
                    </symbol>
                    <symbol id="downloading">
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <g>
                                <path d="M18.32,4.26C16.84,3.05,15.01,2.25,13,2.05v2.02c1.46,0.18,2.79,0.76,3.9,1.62L18.32,4.26z M19.93,11h2.02 c-0.2-2.01-1-3.84-2.21-5.32L18.31,7.1C19.17,8.21,19.75,9.54,19.93,11z M18.31,16.9l1.43,1.43c1.21-1.48,2.01-3.32,2.21-5.32 h-2.02C19.75,14.46,19.17,15.79,18.31,16.9z M13,19.93v2.02c2.01-0.2,3.84-1,5.32-2.21l-1.43-1.43 C15.79,19.17,14.46,19.75,13,19.93z M13,12V7h-2v5H7l5,5l5-5H13z M11,19.93v2.02c-5.05-0.5-9-4.76-9-9.95s3.95-9.45,9-9.95v2.02 C7.05,4.56,4,7.92,4,12S7.05,19.44,11,19.93z" />
                            </g>
                        </g>
                    </symbol>
                    <symbol id="shoping-cart-checkout">
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <path d="M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22s2-0.9,2-2S8.1,18,7,18z M17,18c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2 S18.1,18,17,18z M8.1,13h7.45c0.75,0,1.41-0.41,1.75-1.03L21,4.96L19.25,4l-3.7,7H8.53L4.27,2H1v2h2l3.6,7.59l-1.35,2.44 C4.52,15.37,5.48,17,7,17h12v-2H7L8.1,13z M12,2l4,4l-4,4l-1.41-1.41L12.17,7L8,7l0-2l4.17,0l-1.59-1.59L12,2z" />
                        </g>
                    </symbol>
                    <symbol id="star">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </symbol>
                    <symbol id="warning-amber">
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
                                    <polygon points="13,16 11,16 11,18 13,18" />
                                    <polygon points="13,10 11,10 11,15 13,15" />
                                </g>
                            </g>
                        </g>
                    </symbol>
                    <symbol id="warning">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                    </symbol>
                    <symbol id="refresh">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                    </symbol>
                    <symbol id="person-groups">
                        <rect fill="none" height="24" width="24" />
                        <g>
                            <path d="M12,12.75c1.63,0,3.07,0.39,4.24,0.9c1.08,0.48,1.76,1.56,1.76,2.73L18,18H6l0-1.61c0-1.18,0.68-2.26,1.76-2.73 C8.93,13.14,10.37,12.75,12,12.75z M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1 C4.76,14.04,4.39,14,4,14c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85 C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M12,6c1.66,0,3,1.34,3,3 c0,1.66-1.34,3-3,3s-3-1.34-3-3C9,7.34,10.34,6,12,6z" />
                        </g>
                    </symbol>
                    <symbol id="person-group">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </symbol>
                    <symbol id="person">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </symbol>
                    <symbol id="person-remove">
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <path d="M14,8c0-2.21-1.79-4-4-4S6,5.79,6,8s1.79,4,4,4S14,10.21,14,8z M17,10v2h6v-2H17z M2,18v2h16v-2c0-2.66-5.33-4-8-4 S2,15.34,2,18z" />
                        </g>
                    </symbol>
                    <symbol id="person-add">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </symbol>
                    <symbol id="notifidication-active">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42z" />
                    </symbol>
                    <symbol id="notifidication-important">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-5 0h-2v-2h2v2zm0-4h-2V8h2v4zm-1 10c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z" />
                    </symbol>
                    <symbol id="menu">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                    </symbol>
                    <symbol id="menu-open">
                        <path d="M0,0h24v24H0V0z" fill="none" />
                        <path d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z" />
                    </symbol>
                    <symbol id="man">
                        <g>
                            <rect fill="none" height="20" width="20" />
                        </g>
                        <g>
                            <g>
                                <circle cx="10" cy="3.75" r="1.75" />
                                <path d="M11.5,7h-3C7.67,7,7,7.67,7,8.5V13h1.5v5h3v-5H13V8.5C13,7.67,12.33,7,11.5,7z" />
                            </g>
                        </g>
                    </symbol>
                    <symbol id="male">
                        <rect fill="none" height="20" width="20" />
                        <path d="M16,4h-4.5v1.5h1.94l-2.76,2.76C9.99,7.78,9.15,7.5,8.25,7.5C5.9,7.5,4,9.4,4,11.75C4,14.1,5.9,16,8.25,16 s4.25-1.9,4.25-4.25c0-0.9-0.28-1.74-0.76-2.43l2.76-2.76V8.5H16V4z M8.25,14.5c-1.52,0-2.75-1.23-2.75-2.75S6.73,9,8.25,9 S11,10.23,11,11.75S9.77,14.5,8.25,14.5z" />
                    </symbol>
                    <symbol id="female">
                        <rect fill="none" height="20" width="20" />
                        <path d="M14.25,8.25C14.25,5.9,12.35,4,10,4S5.75,5.9,5.75,8.25c0,2.09,1.51,3.82,3.5,4.17V14h-1.5v1.5h1.5V17h1.5v-1.5h1.5V14h-1.5 v-1.58C12.74,12.07,14.25,10.34,14.25,8.25z M7.25,8.25C7.25,6.73,8.48,5.5,10,5.5s2.75,1.23,2.75,2.75S11.52,11,10,11 S7.25,9.77,7.25,8.25z" />
                    </symbol>
                    <symbol id="logout">
                        <g>
                            <path d="M0,0h24v24H0V0z" fill="none" />
                        </g>
                        <g>
                            <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
                        </g>
                    </symbol>
                    <symbol id="login">
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z" />
                        </g>
                    </symbol>
                    <symbol id="home">
                        <g>
                            <rect fill="none" height="20" width="20" />
                        </g>
                        <g>
                            <g>
                                <path d="M15,8.29V5h-2v1.57L10,4l-7,6h2v6h4v-4h2v4h4v-6h2L15,8.29z M9,9c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1H9z" />
                            </g>
                        </g>
                    </symbol>
                    <symbol id="facebook">
                        <rect fill="none" height="24" width="24" />
                        <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
                    </symbol>
                    <symbol id="expand-more">
                        <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
                    </symbol>
                    <symbol id="expand-less">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
                    </symbol>
                    <symbol id="exit-app">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                    </symbol>
                    <symbol id="error">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </symbol>

                </svg>
            </div>
           
        `;

    }
    styles() {
        return /*css*/`
            
            #sprite  {
                position:absolute;
                top:0px;
                left:0px;
                z-index:auto;
                display: inline-block !important;
                height: 0;
                width: 0;
                visibility: hidden;
                opacity: 0;
            }
      `;
    }
    disconnectedCallback() {

        this.draw = false;

    }
}

window.customElements.define("sprite-svg", SpriteSvg);