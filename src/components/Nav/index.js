import React from 'react';
const Nav = () => {

  const categories = [
    { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects', },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, nature' },
  ];

  function categorySelected( category ) {
    console.log( category );
  }

  return (
    <header>
      <h2>
        <a data-testid='link' href="/">
          <span role='img' aria-label='camera'> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2"><a data-testid='about' href="#about" onClick={ () => { categorySelected( 'about' ); } }>about me</a></li>
          <li><span onClick={ () => { categorySelected( 'contact' ); } }>contact</span></li>
          { categories.map( ( category ) => (
            <li className="mx-1" key={ category.name } >
              <span onClick={ () => { categorySelected( category.name ); } }>{ category.name }</span>
            </li>
          ) ) }
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
