import { useState } from "react";
import guardarRegistro from '../../logic/api';
import LigthBox from '../ligthBox/LigthBox'
import './Formulario.css'

function Formulario(props){

    const [datos, setDatos] = useState({
        nombre: '',
        correo: '',
        celular: '',
        edad: ''
    });

    const [datosMensaje, setDatosMensaje] = useState({
        titulo: 'Exito',
        texto:'El registro se guardo correctamente.',
        mostrar: false
    });

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        });
    }

    const enviar = async (event) => {
        event.preventDefault();
        try{
            const request = {
                'nombre': datos.nombre,
                'correo': datos.correo,
                'celular': parseInt(datos.celular),
                'edad': parseInt(datos.edad),
                'viaje_en' : props.transporte
            }
            await guardarRegistro(request);
            mensaje('Exito', 'El registro se guardo correctamente.', 'success')
            event.target.reset();
        }catch(error){
            mensaje('Error', error.response.data, 'danger');
        }
    }

    const mensaje = (titulo, texto, tipo) => {
        setDatosMensaje({
            'titulo': titulo,
            'texto': texto,
            'tipo': tipo,
            'mostrar': true
        })

        setTimeout(() => {
            setDatosMensaje({
                'titulo': '',
                'texto': '',
                'tipo': 'success',
                'mostrar': false
            })
        }, 5000)
    }

    return (
        <>
            <h1>Hola bienvenido</h1>
            <h2>sabemos que quieres viajar en un {props.transporte}</h2>
            <form className="form" onSubmit={enviar}>
                <div className="form-group">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" className="form-input" placeholder="Nombre" onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="correo" className="form-label">Correo:</label>
                    <input type="email" id="correo" name="correo" className="form-input" placeholder="Correo" onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="celular" className="form-label">Celular:</label>
                    <input type="number" id="Celular" name="celular" className="form-input" placeholder="Celular" onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="edad" className="form-label">Edad:</label>
                    <input type="number" min="18" max="100" id="edad" name="edad" className="form-input" placeholder="Edad" onChange={handleInputChange} required/>
                </div>
                <button type="submit" className="form-button">Registrar</button>
            </form>

            <LigthBox titulo={datosMensaje.titulo} texto={datosMensaje.texto} tipo={datosMensaje.tipo} mostrar={datosMensaje.mostrar}></LigthBox>

        </>
    );
};

export default Formulario;