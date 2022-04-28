import { useState } from "react";
import './Formulario.css'

function Formulario(){
    return (
        <>
            <h1>Hola bienvenido, sabemos que quieres viajar en un X</h1>
            <form className="form">
                <div>
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" className="form-input" placeholder="Nombre" />
                </div>
                <div>
                    <label htmlFor="correo" className="form-label">Correo:</label>
                    <input type="email" id="correo" name="correo" className="form-input" placeholder="Correo" />
                </div>
                <div>
                    <label htmlFor="Celular" className="form-label">Celular:</label>
                    <input type="text" id="Celular" name="Celular" className="form-input" placeholder="Celular" />
                </div>
                <div>
                    <label htmlFor="edad" className="form-label">Edad:</label>
                    <input type="text" id="edad" name="edad" className="form-input" placeholder="Edad" />
                </div>

                <button type="submit" className="form-button">Registrar</button>
            </form>
        </>
    );
};

export default Formulario;