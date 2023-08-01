import '../styles/components/Carousel.css';
import offer1 from '../assets/images/offer-1.png';
import offer2 from '../assets/images/offer-2.png';

const Carousel = () => {
    return (
        <div id="offers-carousel" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#offers-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#offers-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#offers-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={offer1} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item">
                    <img src={offer2} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item">
                    <img src={offer1} className="d-block w-100" alt="" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#offers-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#offers-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;