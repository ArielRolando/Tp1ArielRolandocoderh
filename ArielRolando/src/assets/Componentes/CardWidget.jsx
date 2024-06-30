import React from 'react';

const CardWidget = () => {
    const imagenUrl = 'https://tse2.mm.bing.net/th?id=OIP.cdpiGrAXhG4WpawmvpcnbgHaHa&pid=Api&P=0&h=180';

    const imagenStyle = {
        width: '50px',
        height: 'auto',
       
    };

    const containerStyle = {
        position: 'absolute',
        top: '10%',
        right: '100px',
        width: 'auto',
        
    };

    const buttonContainerStyle = {
        marginLeft: '10px',
    };

    return (
        <div className="container" style={containerStyle}>
            <div className="row ms-5">
                <div className="col d-flex justify-content-end align-items-center">
                    <div className="dropdown mt-1" style={buttonContainerStyle}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Lista de Productos
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">Remeras</button></li>
                            <li><button className="dropdown-item" type="button">Pantalones</button></li>
                            <li><button className="dropdown-item" type="button">Gorras</button></li>
                        </ul>
                    </div>
                    <pre>          </pre>
                    <img src={imagenUrl} alt="carro" style={imagenStyle} />
                </div>
            </div>
        </div>
    );
}

export default CardWidget;
