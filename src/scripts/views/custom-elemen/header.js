class Header extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
      .header {
        display: flex;
        align-items: center;  }
    
    .header_title {
        flex: 1; 
        display: flex;
        align-items: center; 
    }
    
    .header_logo {
        width: 50px; 
        height: auto; 
        margin-right: 20px; 
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
  
      <header class="header">
      <div tabindex="0" class="header_title">
      <img src="images/heros/maldis.png" alt="Maldis Resto Logo" class="header_logo">
        <h1>Maldis Resto </h1>
      </div>
      <button id="menu" class="header__menu">☰</button>
      <nav id="drawer" class="nav-list">
      <ul>
        <li class="nav_item"><a href="/">Home</a></li>
        <li class="nav_item"><a href="#/like">Favorite</a></li>
        <li class="nav_item"><a href="https://github.com/alvinsidiq/" target="_blank" rel="noopener noreferrer">About Us</a></li>
      </ul>
    </nav>
    </header>
  
      `;
  }
}

customElements.define("header-section", Header);
