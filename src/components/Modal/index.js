import React from 'react';

function Modal( { onClose, currentPhoto } ) {
  const { category, name, description, index: i } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer" >
        <h3 className="modalTitle">{ name }</h3>
        <img
          src={ require( `../../assets/large/${ category }/${ i }.jpg` ) }
          alt={ name }
        />
        <p>{ description }</p>
        <button type='button' onClick={ onClose } >Close this modal</button>
      </div>
    </div >
  );
}

export default Modal;
