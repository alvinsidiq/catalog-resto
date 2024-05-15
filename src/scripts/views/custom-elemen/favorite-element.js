class Favorite extends HTMLElement {
    constructor() {
      super();
  
      this._style = document.createElement("style");
    }
  
    _updateStyle() {
      this._style.textContent = `
      .jumbotron {
        position: relative;
        width: 100%;
        height: 400px; /* Sesuaikan tinggi jumbotron sesuai kebutuhan */
        overflow: hidden; /* Untuk memastikan gambar latar belakang tidak melebihi jumbotron */
      }
      
      .slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center; /* Menengahkan vertikal */
        align-items: center; 
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        background-size: cover; 
        background-position: center; 
      }
      
      .slide.active {
        opacity: 1;
      }
      
      .arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;
        cursor: pointer;
      }
      
      .arrow.left {
        left: 10px;
      }
      
      .arrow.right {
        right: 10px;
      }
  
      @media (max-width: 768px) {
        h1 {
          font-size: 24px; 
           text-align: center; 
        }
        
  .paragraf {
          font-size: 16px; 
           text-align: center; 
        }
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
  
      <div class="jumbotron">
      <div class="slide active" style="background-image: url('images/heros/hero-imagr-6.jpg');">
        <h1>Your Restaurant Favorite </h1>
        <p ">F
        "The favorite restaurant you often visit."</p>
      </div>
    
    </div>
      `;
    }
  }
  
 
  
  customElements.define("favorite-section", Favorite);
  