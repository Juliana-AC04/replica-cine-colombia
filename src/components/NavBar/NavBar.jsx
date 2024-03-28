import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Login } from '../../pages/Login/Login'


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


`

const links = [
    {
        label: "CINE COLOMBIA",
        image: './src/assets/layout/ICONOPAG.png',
        link: "/"
    }
];

const cines = [
    { label: 'Marco Plaza del Mar', value: 'cine1' },
    { label: 'Unicentro', value: 'cine2' },
    { label: 'Teatro Colombia', value: 'cine3' }
];

const fechas = [
    { label: '08 de Abril', value: 'fecha1' },
    { label: '09 de Abril', value: 'fecha2' },
    { label: '10 de Abril', value: 'fecha3' }
];
  

export const NavBar = () => {
    const [showLogin, setShowLogin] = useState(false);

    const openLogin = () => {
        setShowLogin(true);
    };

    const closeLogin = () => {
        setShowLogin(false);
    };

    return (
        <StyledNav>
            <nav>
                <ul  className="top-14 left-31 w-1377 h-58 flex justify-between bg-black">                    
                    {
                    links.map((item, index)=><li key={index}>
                        <NavLink className={({isActive})=>isActive?"link active":"link"} to={item.link}> 
                        <div className="flex items-center mt-4 "> 
                            <img className="w-42 h-31 rounded-6" src={item.image} alt="Home" />
                            <span className="ml-2 font-inter text-base leading-22 font-normal text-gray-400">{item.label}</span>
                        </div>
                        </NavLink>
                    </li>)
                    }
                                      
                    <li className='inputsLayo'>
                        <label htmlFor="cines">Cines cercanos</label>
                        <select>
                        {cines.map((item, index) => (
                            <option key={index} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                        </select>
                    </li>
                    <li className='inputsLayo'>
                        <label htmlFor="cines">Fecha</label>
                        <select>
                        {fechas.map((item, index) => (
                            <option key={index} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                        </select>
                    </li>
                    <li className="mt-4">
                        <button onClick={openLogin} style={{cursor: 'pointer' }}>
                        <img src='./src/assets/layout/LOGIN.png' alt="Login" />
                        </button>
                        {showLogin && <Login onClose={closeLogin} />} {/* Renderiza el componente Login si showLogin es true */}
                    </li>                   
                </ul>                

               
            </nav>
        </StyledNav>
    );
}
