import React from 'react';

const ItemListContainer = () => {
    const containerStyle = {
        marginTop: '540px'  
    
    };

    return (
        <div style={containerStyle}>
            <p className='mt-5' style={{ textAlign: 'center', fontSize: '16px', color: '#333' }}>
                <ul style={{ listStyle: 'none', padding: '0' }}>
                    <li style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '5px', border: '1px solid #ccc' }} className="disabled" aria-disabled="true">TODO LO QUE TE HACE FELIZ</li>
                    <li style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '5px', border: '1px solid #ccc' }}>TODOS LOS TALLES</li>
                    <li style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '5px', border: '1px solid #ccc' }}>TODOS LOS COLORES</li>
                    <li style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '5px', border: '1px solid #ccc' }}>TODOS LOS ESTILOS</li>
                    <li style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '5px', border: '1px solid #ccc' }}>PARA TODOS LOS GENEROS</li>
                </ul>
            </p>
        </div>
    );
}

export default ItemListContainer;
