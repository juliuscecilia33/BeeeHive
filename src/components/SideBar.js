import React from 'react';
import { Link } from 'react-router-dom';
import Hayley from './images/hayley.png';
import Logo from './images/logo.png';
import Flask from './images/flask.png';
import Plus from './images/plus_sign.png';
import Atom from './images/reactlogob.png';

export const SideBar = () => {

    return (
        <>
            <div className="sidebar">
                <div className="container">
                    <div className="profile">
                        <div className="buttons">
                            <div className="red"></div>
                            <div className="yellow"></div>
                            <div className="green"></div>
                        </div>
                        <div className="parent">
                            <img class="profile" src={Hayley} alt="hayley" />
                        </div>
                    </div>

                    <hr />

                    <div className="servers">
                        
                        <div className="parent1">
                            <div className="hexagon server1"></div>
                            <img src={Atom} alt="Atom" />
                        </div>

                        
                        <div className="parent2">
                            <Link to={"/Chem"}> 
                                <div className="hexagon server2"></div>
                                <img src={Flask} alt="Flask" />
                            </Link>
                        </div>
                        
                        <div className="parent3">
                            <div className="hexagon server3"></div>
                            <img src={Plus} alt="Plus" />
                        </div>
                    </div>

                    <div class="parent">
                        <div className="hexprofile">
                            <Link to={"/"}> 
                                    <div className="hexagon profile4"></div>
                                    <img class="logo" src={Logo} alt="Logo" />
                            
                                    {/* <Logo className="logo" /> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
}
