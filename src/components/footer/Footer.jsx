import React from 'react';
import "./Footer.scss";
import { FaHouse } from 'react-icons/fa6';
import { FaComment } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';
import { FaUserLarge } from 'react-icons/fa6';

const Footer = () => {
    

    return (

        <div className="container">
            <div className="container1 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="#" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap" /></svg>
                </a>

               <div className='footer'>
               <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                    <li className='Home'>
                        <a href="#" className="nav-link text-secondary">
                            
                            
                            <svg className="bi1 d-block mx-auto mb-1" width="24" height="24"><use href="#home" /></svg>
                           
                            <div className='icon_home' title='Home'>
                                <FaHouse />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-secondary">
                            <svg className="bi2 d-block mx-auto mb-1" width="24" height="24"><use href="#speedometer2" /></svg>
                            
                            <div className='icon_comment' title='Comentarios'>
                                <FaComment />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-secondary">
                            <svg className="bi3 d-block mx-auto mb-1" width="24" height="24"><use href="#table" /></svg>
                           
                            <div className='icon_heard' title='Favoritos'>
                                <FaHeart />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-secondary">
                            <svg className="bi4 d-block mx-auto mb-1" width="24" height="24"><use href="#grid" /></svg>
                           
                            <div className='icon_user' title='Perfil'>
                                <FaUserLarge />
                            </div>
                        </a>
                    </li>
                </ul>
               </div>
            </div>
        </div>



    );


};

export default Footer;
