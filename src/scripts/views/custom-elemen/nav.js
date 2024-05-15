class Nav extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
      
      `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._updateStyle();

    this.innerHTML = `
      ${this._style.outerHTML}
  
      <nav id="drawer" class="nav-list">
        <ul>
          <li class="nav_item"><a href="/">Home</a></li>
          <li class="nav_item"><a href="#/like">Favorite</a></li>
          <li class="nav_item"><a href="https://github.com/alvinsidiq/" target="_blank" rel="noopener noreferrer">About Us</a></li>
        </ul>
      </nav>
      `;
  }
}

customElements.define("nav-section", Nav);
