import styles from "./sliderIndex.module.css";

export function SliderIndex() {
  return (
    <div id="carouselIndexSlider" className="carousel slide" data-bs-ride="carousel">
      <div className={`carousel-inner ${styles.SliderIndex}`}>
        <div className="carousel-item active">
          <img src="./imagenSlider/1.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./imagenSlider/2.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./imagenSlider/3.png" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselIndexSlider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselIndexSlider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
