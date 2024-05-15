class Hero extends HTMLElement {
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
      align-items: center; /* Menengahkan horizontal */
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      background-size: cover; /* Memastikan gambar latar belakang mengisi seluruh slide */
      background-position: center; /* Menengahkan gambar latar belakang */
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
        <h1>Your Restaurant, Your Choice</h1>
        <p ">Find Your Next Favorite Restaurant - Discover the best restaurants in your city!</p>
      </div>
      <div class="slide" style="background-image: url('images/heros/hero-image_2.jpg');">
        <h1>Your Restaurant, Your Choice</h1>
        <p>Find Your Next Favorite Restaurant - Discover the best restaurants in your city!</p>
      </div>
      <div class="slide" style="background-image: url('images/heros/hero-image-5.jpg');">
        <h1>Your Restaurant, Your Choice</h1>
        <p>Find Your Next Favorite Restaurant - Discover the best restaurants in your city!</p>
      </div>
      <div class="slide" style="background-image: url('images/heros/hero-image_4.jpg'); ">
      <h1>Your Restaurant, Your Choice</h1>
      <p>Find Your Next Favorite Restaurant - Discover the best restaurants in your city!</p>
    </div>
    </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 6000); // Pindah slide setiap 6 detik
});

customElements.define("hero-section", Hero);
