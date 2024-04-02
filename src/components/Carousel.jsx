import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components'; 
import { getAllMovies } from '../services/movieServices';
import { useNavigate } from 'react-router-dom';

const StyledCarousel = styled(Slider)`
  .container {
    height: 26rem;
    background-color: black;
  }

  #img {
    height: 25rem;
  }

  .carousel-item {
    opacity: 0.8; 
    position: relative;
    text-align: center;
  }

  .highlighted {
    opacity: 1; 
    transform: scale(1.1); 
    z-index: 1; 
    transition: transform 0.3s ease; 
    background-color: black;
  
  img {
    border-radius: 0.5rem; 
  }
}
  .movie-info {
    position: absolute;
    bottom: 7rem; 
  }
`;

const Carousel = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    // const [showDetails, setShowDetails] = useState(false);
    const sliderRef = useRef(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await getAllMovies();
                const fetchedImages = response.results.map(movie => ({
                    id: movie.id,
                    url: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
                    title: movie.title,
                    releaseDate: movie.release_date,
                    genres: movie.genre_ids
                        .map(genreId => {
                            switch (genreId) {
                                case 28:
                                    return 'Acción';
                                case 12:
                                    return 'Aventura';
                                case 16:
                                    return 'Animación';
                                case 35:
                                    return 'Comedia';
                                case 10751:
                                    return 'Familia';
                                default:
                                    return '';
                            }
                        })
                        .filter(genre => genre !== ''),
                }));
                setImages(fetchedImages);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    // useEffect(() => {
    //     if (showDetails) {
    //         window.location.reload();
    //     }
    // }, [showDetails]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        autoplay: true,
        autoplaySpeed: 3000,
        className: 'bg-black',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0',
                },
            },
        ],
        afterChange: index => {
            setCurrentSlide(index);
        },
    };

    const handleImageClick =(idMovie, index) => {
        navigate(`details/${idMovie}`);
        sliderRef.current.slickGoTo(index);
    };

    return (
        <>
        <StyledCarousel {...settings} ref={sliderRef}>
            {images.map((image, index) => (
                <div key={image.id} className={`carousel-item ${index === currentSlide ? 'highlighted' : ''}`} onClick={() => handleImageClick(image.id, index)}>
                    <div className="container relative">
                        <img src={image.url} alt="Movie poster" id="img" className="mt-11" />
                        <div className="movie-info text-white absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-lg font-bold">{image.title}</h3>
                            <h4 className="text-sm">Título en inglés: {image.originalTitle}</h4>
                            <p className="text-sm">Estreno: {image.releaseDate}</p>
                            <p className="text-sm">Géneros: {image.genres.join(', ')}</p>
                        </div>
                    </div>
                </div>
            ))}
        </StyledCarousel>
         </>
    );
};

export default Carousel;
