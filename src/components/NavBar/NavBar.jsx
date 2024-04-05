import { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Login } from '../../pages/Login/Login'
import SelectedGenerContext from './SelectedGenerContext'


const StyledNav = styled.nav`
    ul{
        display: flex;
        align-content: center;
        list-style: none;
        height: 95px;
        padding: 20px;

        .link{
            text-decoration: none;
            font-weight:bolder;
        }
        .active{
            color: red;
        }
    }
    .inputsLayo {
        display: flex;
        flex-direction: column;

        label {
            font-family: Roboto; 
            font-size: 14px; 
            line-height: 22px; 
            font-weight: 700; 
            color: gray;
            
        }
        select {
            width: 222px; 
            height: 35px; 
            padding-left: 12px; 
            padding-right: 34px; 
            font-family: Roboto; 
            color: gray;
            font-size: 14px; 
            line-height: 22px; 
            font-weight: 400; 
            background: #00000000; 
            border-radius: 6px; 
            border-width: 1px; 
            border-color: #565D6DFF; 
            outline: none; 
            
        }
        option {
            background: black;
            
             
        }
    }

    @media (max-width: 1047px) { /* Ajustar el tamaño a tus necesidades */
        ul {
            flex-direction: column; 
            align-items: center;
            height: auto; 
        }

        .inputsLayo select {
            width: 100%; /* Ocupar todo el ancho disponible */
            
        }
    }

`

const links = [
    {
        label: "CINE COLOMBIA",
        image: './src/assets/layout/ICONOPAG.png',
        link: "/"
    }
];

const cines = [
    { label: 'Unicentro', value: 'cine1' },
    { label: 'Marco Plaza del Mar', value: 'cine2' }
];

const idTeatros = {
    cine1: 1,
    cine2: 2
};

const getCurrentDate = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
};

export const NavBar = ({ setSelectedMovies }) => {
    const location = useLocation();
    const [showLogin, setShowLogin] = useState(false);
    const [selectedCine, setSelectedCine] = useState(cines[0].value); // Películas del primer cine por defecto
    const [idTeatro, setIdTeatro] = useState(null);

    const handleChangeCine = (value) => {
        setSelectedCine(value);
    };

    useEffect(() => {
        if (selectedCine !== "") {
            setIdTeatro(idTeatros[selectedCine]);
        }
    }, [selectedCine]);

    const { setSelectedGenre } = useContext(SelectedGenerContext);

    const handleGenreFilter = (genre) => {
        setSelectedGenre(genre);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (idTeatro !== null) {
                    const endpoint = `https://miniback-webpack.onrender.com/programacion?idTeatro=${idTeatro}`;
                    const response = await fetch(endpoint);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    console.log("Data from backend:", data);

                    const idPeliculas = data.flatMap(sala => sala.idPelicula);
                    console.log("Peliculas:", idPeliculas);
                    setSelectedMovies(idPeliculas);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [idTeatro, setSelectedMovies]);

    const openLogin = () => {
        setShowLogin(true);
    };

    const closeLogin = () => {
        setShowLogin(false);
    };

    const showFilterButtons = location.pathname === '/';

    return (
        <StyledNav>
            <nav>
                <ul className="top-14 left-31 w-1377 h-58 flex justify-between bg-black">

                    {
                        links.map((item, index) => <li key={index}>
                            <NavLink className={({ isActive }) => isActive ? "link active" : "link"} to={item.link}>
                                <div className="flex items-center mt-4 ">
                                    <img className="w-42 h-31 rounded-6" src={item.image} alt="Home" />
                                    <span className="ml-2 font-inter text-base leading-22 font-normal text-gray-400">{item.label}</span>
                                </div>
                            </NavLink>
                        </li>)
                    }

                    {showFilterButtons && (
                        <>
                            <li>
                                <button onClick={() => handleGenreFilter('Acción')} className="mt-4 w-24 h-9 bg-blue-700 rounded-full shadow-md font-inter text-base leading-normal font-normal text-white">Acción</button>
                            </li>
                            <li>
                                <button onClick={() => handleGenreFilter('Terror')} className="mt-4 w-24 h-9 bg-blue-700 rounded-full shadow-md font-inter text-base leading-normal font-normal text-white">Terror</button>
                            </li>
                            <li>
                                <button onClick={() => handleGenreFilter('Ciencia ficción')} className="mt-4 w-44 h-9 bg-blue-700 rounded-full shadow-md font-inter text-base leading-normal font-normal text-white">Ciencia Ficción</button>
                            </li>
                            <li>
                                <button onClick={() => handleGenreFilter('Comedia')} className="mt-4 w-24 h-9 bg-blue-700 rounded-full shadow-md font-inter text-base leading-normal font-normal text-white">Comedia</button>
                            </li>
                        </>
                    )}

                    <li className='inputsLayo'>
                        <label htmlFor="cines">Cines cercanos</label>
                        <select value={selectedCine} onChange={(e) => handleChangeCine(e.target.value)}>
                            <option value="">Selecciona un cine</option>
                            {cines.map((cine, index) => (
                                <option key={index} value={cine.value}>{cine.label}</option>
                            ))}
                        </select>
                    </li>
                    <li className='inputsLayo'>
                        <label htmlFor="cines">Fecha</label>
                        <select>
                            <option>
                                {getCurrentDate()}
                            </option>
                        </select>
                    </li>
                    <li className="mt-4">
                        <button onClick={openLogin} style={{ cursor: 'pointer' }}>
                            <img src='./src/assets/layout/LOGIN.png' alt="Login" />
                        </button>
                        {showLogin && <Login onClose={closeLogin} />}
                    </li>
                </ul>
            </nav>
        </StyledNav>
    );
};