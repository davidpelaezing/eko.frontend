import { useEffect, useState } from "react";
import './LigthBox.css'

function LigthBox(props){

    const clase = "ligth-box " + props.tipo;

    return (
        <>
            <div className={props.mostrar ? clase + " d-block" : clase + " d-none"}>
                <h2>{props.titulo}</h2>
                <h3>{props.texto}</h3>
            </div>
        </>
    );
};

export default LigthBox;