import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Nav = ( props ) => {

  const {
    // ask why this is an empty array?
    categories = [],
    setCurrentCategory,
    currentCategory
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
              onClick={ () => { 'about'; } }>
              about me
            </a>
          </li>
          <li><span onClick={ () => { 'contact'; } } >contact</span></li>
          { categories.map( ( category ) => (
            <li
              className={ `mx-1 ${ currentCategory.name === category.name && 'navActive' }` }
              key={ category.name } >
              <span
                onClick={ () => {
                  // when the nav link is clicked the currentCategory is set
                  // to category object matching the name of the clicked category
                  setCurrentCategory( category );
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
