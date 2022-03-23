import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Nav = ( props ) => {

  const {
    // ask why this is an empty array?
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  useEffect( () => {
    document.title = capitalizeFirstLetter( currentCategory.name );
  }, [ currentCategory ] );


  return (
    <header className='flex-row px-1'>
      <h2>
        <a data-testid='link' href="/">
          <span role='img' aria-label='camera'>📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid='about'
              href="#about"
              onClick={ () => { setContactSelected( false ); } }>
              About me
            </a>
          </li>
          <li className={ `mx-2 ${ contactSelected && 'navActive' }` } >
            <span onClick={ () => { setContactSelected( true ); } } >Contact</span>
          </li>
          { categories.map( ( category ) => (
            <li
              className={ `mx-1 ${ currentCategory.name === category.name && !contactSelected && 'navActive'
                }` }
              key={ category.name }
            >
              <span
                onClick={ () => {
                  // when the nav link is clicked the currentCategory is set
                  // to category object matching the name of the clicked category
                  setCurrentCategory( category );
                  setContactSelected( false );
                } }
              >
                { capitalizeFirstLetter( category.name ) }
              </span>
            </li>
          ) ) }
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
