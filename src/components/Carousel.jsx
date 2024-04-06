import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { getAllMovies, getMovie } from "../services/movieServices";
import { useNavigate } from "react-router-dom";

const StyledCarousel = styled(Slider)`
  .container {
    height: 26rem;
  }

  #img {
    height: 25rem;
    object-fit: cover;
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
`;

const Carousel = ({ selectedMovies, viewerAge }) => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await getAllMovies();
        const fetchedImages = await Promise.all(
          response.results.map(async (movie) => {
            const movieDetails = await getMovie(movie.id);
            return {
              id: movie.id,
              url: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
              title: movie.title,
              originalTitle: movieDetails.original_title,
              releaseDate: movie.release_date,
              genres: movie.genre_ids
                .map((genreId) => {
                  switch (genreId) {
                    case 28:
                      return "Acción";
                    case 12:
                      return "Aventura";
                    case 16:
                      return "Animación";
                    case 35:
                      return "Comedia";
                    case 10751:
                      return "Familia";
                    default:
                      return "";
                  }
                })
                .filter((genre) => genre !== ""),
              runtime: movieDetails.runtime,
            };
          })
        );
        setImages(
          fetchedImages.filter((image) => selectedMovies.includes(image.id))
        );
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [selectedMovies]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000,
    className: "bg-black",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };

  const handleImageClick = (idMovie, index) => {
    navigate(`details/${idMovie}`);
    sliderRef.current.slickGoTo(index);
  };

  const getClassification = (age, genres) => {
    let classification = "";

    if (
      genres.includes("Acción") &&
      (genres.includes("Ciencia ficción") || genres.includes("Aventura"))
    ) {
      classification = "Apto para todo público";
    } else if (
      (genres.includes("Acción") || genres.includes("Aventura")) &&
      genres.includes("Animación")
    ) {
      classification = "Apto para todo público";
    } else if (genres.includes("Acción") && genres.includes("Suspense")) {
      classification = "Apto para mayores de 15 años";
    } else if (
      genres.includes("Fantasía") &&
      genres.includes("Acción") &&
      genres.includes("Aventura") &&
      genres.includes("Animación")
    ) {
      classification = "Apto para mayores de 15 años";
    } else if (genres.includes("Terror") && genres.includes("Suspense") || genres.includes("Acción") ) {
      classification = "Apto para mayores de 15 años";
    } 
    return classification;
  };

  return (
    <>
      <StyledCarousel {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-item ${
              index === currentSlide ? "highlighted" : ""
            }`}
            onClick={() => handleImageClick(image.id, index)}
          >
            <div className="container relative ">
              <img
                src={image.url}
                alt="Movie poster"
                id="img"
                className="mt-11 "
              />
              <div className="movie-info text-white absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold">{image.title}</h3>
                <h4 className="text-sm">
                  Título en inglés: {image.originalTitle}
                </h4>
                <p className="text-sm">Estreno: {image.releaseDate}</p>
                <p className="text-sm">Géneros: {image.genres.join(", ")}</p>

                {index === currentSlide && (
                  <div className="flex justify-center mb-4 gap-1 rounded-xl ">
                    <p className="text-sm bg-white text-black ">
                      {getClassification(viewerAge, image.genres)}
                    </p>
                    <p className="text-sm bg-white text-black ">
                      {image.runtime} Min
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </StyledCarousel>
    </>
  );
};

export default Carousel;
