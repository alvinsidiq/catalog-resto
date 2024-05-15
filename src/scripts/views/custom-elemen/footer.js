class Footer extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
      footer {
        background-color: rgb(221, 87, 70);
        padding: 1rem;
        width: 100%;
        text-align: center;
      }
      
      footer p {
       color:black;
        font-size: 16px;
        font-weight: bold;
      }
     
      `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._updateStyle();

    this.innerHTML = `
      ${this._style.outerHTML}

      <footer>
      <p tabindex="0">Copyright © 2024 - Maldis Resto</p>
    </footer>
  
      `;
  }
}

customElements.define("footer-section", Footer);
