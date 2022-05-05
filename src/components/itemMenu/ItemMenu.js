function ItemMenu({index, transporte, handleTransporteChange}){
    return (
        <li><button onClick={() => handleTransporteChange(index)}>{transporte}</button></li>
    );
}

export default ItemMenu;