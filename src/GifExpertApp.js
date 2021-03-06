import React, { useState } from 'react';
import { AddCategory } from './comoponents/AddCategory';
import { GifGrid } from './comoponents/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //   // setCategories( 'HunterXHunter', ...categories );
    //    setCategories( cats => [...cats, 'HunterXHunter']);
    //}

  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={ setCategories }/>
    <hr />

    <ol>
        {
            categories.map( category => ( 
              <GifGrid 
                key={ category }
                category={ category }
              />
            ))
        }
    </ol>
    </>
  )
}
