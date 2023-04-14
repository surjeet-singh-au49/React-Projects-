import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

const Header = () => {
  return (
    <nav>
        <h1>Fission Tech</h1>
        <main>
            {/*We use this Hashlink(npm i react-router-hash-link package)  where we give have applied # on all the paths so it can work as Link*/}
            <HashLink to={"/#home"}>Home</HashLink> 
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink> 
            <Link to={"/services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header