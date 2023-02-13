import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/manor-logotype.png'
import {parentCategories} from '../utils/mock-data/parentCategories'


const createLinks = (links) => 
  Object.values(
    links.reduce((acc, el) =>{
      if(el.categorie <= "5"){
        acc[el.id]={
          ...el,
          children:[]
        };
      }else {
        acc[el.categorie].children.push(el)
      }
      return acc;
    },{})

  )

const Navbar = () => {
  // return (
  //   <>
  //     <img src={logo} alt="" width="10%" />
  //     <hr />
  //   </>
  // )

  const [toggle, setToggle] = useState ({});
   const toggleSubmenu = (id) => (e) => {
    e.preventDefault();

    setToggle((ids) => ({
      ...ids,
      [id]:!ids[id]
    }))
   };

  const cat  = createLinks(parentCategories).map((obj) =>{
    return (
      <ul className='navbar'>
        <li categorieid={obj.categorie} key={obj.id}>
          <Link to={obj.icon}>
            <span className='link_name'>{obj.title}</span>
            <i className='arrow' onClick={toggleSubmenu(obj.id)}>ver mas</i>
          </Link>
          {toggle[obj.id] && (
            <ul className='sub-menu'>
              {obj.children.map((nestedObj) => (
                <li key={nestedObj.id}>
                  <Link to={nestedObj.icon}>{nestedObj.title}</Link>
                </li>
              ))}

            </ul>
          )}

        </li>

      </ul>
    )
  })
  return <div className='sidebar'>{cat}</div>
};


export default Navbar