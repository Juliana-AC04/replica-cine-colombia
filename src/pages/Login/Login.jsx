import { useState } from 'react'
import styled from 'styled-components';

const SyledModal = styled.div `
    position: fixed;
    z-index: 2; 
    top: 0;
    left: 0;
    width:100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;

    div{ 
        width: 434px; 
        height: 438px;
        background-color: white;
        position: relative;
        border-radius: 6px; 
        border-color: transparent; 
        outline: none; 

        .buttonClose{
            font-family: Roboto; 
            font-weight: 500; 
            position: absolute;
            top: -13px;
            right: -13px;
            width: 35px;
            height: 35px;
            border-radius: 50px;
            border: none;
            color: #565D6DFF; /* neutral-600 */
            background: #F3F4F6FF;
            cursor: pointer;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        margin-left: 30px;

        h1{
            display: flex;
            align-items: center;
            justify-content: center; 
            font-family: Roboto; 
            font-size: 48px;
            line-height: 68px;
            font-weight: 700;
            color: #171A1FFF;
            margin: auto; 
            margin-top: 30px;
        }
        p{
            display: flex;
            align-items: center;
            justify-content: center; 
            font-family: Roboto; 
            font-size: 18px; 
            line-height: 28px; 
            font-weight: 700; 
            color: #9095A1FF; 
        }
        div {
            display: flex;
            flex-direction: column;
            width: 322px; 
            height: 29px; 
            margin: 20px;

            label {
                font-family: Roboto; 
                font-size: 14px; 
                line-height: 22px; 
                font-weight: 700; 
            }
            input {
                padding-left: 0px; 
                padding-right: 12px; 
                font-family: Roboto; 
                font-size: 14px; 
                line-height: 22px; 
                font-weight: 400; 
                background: #00000000; /* transparent */
                border-top-left-radius: 6px; 
                border-top-right-radius: 6px; 
                border-width: 0px; 
                box-shadow: 0 1px 0 #9095a1; 
                outline: none; 
            }
        }
        .rememberContra {
            margin: 20px;
            font-family: Roboto; /* Body */
            font-size: 14px; 
            line-height: 22px; 
            font-weight: 400; 
            color: #171A1FFF;
            margin-bottom: 10px;

            input{
                margin: 2px;
                box-shadow: 0px 0px 2px #19508a; 
                font-family: Roboto; 
                font-size: 14px; 
                line-height: 22px; 
                font-weight: 400; 
                color: #171A1FFF; 
                opacity: 0.4;
                border-radius: 3px;
                margin-right: 5px; 
            }
        }  
        button {
            width: 359px; 
            height: 44px; 
            padding: 0 16px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-family: Roboto; 
            font-size: 16px; 
            line-height: 26px; 
            font-weight: 400; 
            color: #FFFFFFFF; /* white */
            background: #19508AFF; /* primary-500 */
            opacity: 1; 
            border: none; 
            border-radius: 6px; /* border-m */
            box-shadow: 0px 8px 17px #19508a, 0px 0px 2px #19508a; 
        }     

    }
`

export const Login = ({ onClose }) => {
    const [rememberMe, setRememberMe] = useState(false);

    const handleCheckboxChange = () => {
      setRememberMe(!rememberMe);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí se puede enviar los datos del formulario, incluido el estado de "rememberMe"
    };


  return (
    <SyledModal>
        <div>
            <button className='buttonClose' onClick={onClose}>X</button>
            <form onSubmit={handleSubmit}>
                <h1>Bienvenido</h1>
                <p>Inicia Sesión</p>
                <div>
                    <label htmlFor="email">Correo electrónico</label>
                    <input  placeholder="example.email@gmail.com" type="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input placeholder="Ingresa tu contraseña" type="password" name="password" required />
                </div>                
                <label className='rememberContra'>
                    <input type="checkbox" checked={rememberMe} onChange={handleCheckboxChange} />
                    Recordarme
                </label>
                <button type="submit">Iniciar sesión</button>
            </form>        
        </div>
    </SyledModal>
  )
}


