import React from 'react';
import { ClassBar } from './ClassBar';

export const SecondCoursePage = () => {
    
    return (
        <>
            <ClassBar />
            <div className="secondpage">

                <div className="taskbar">
                    <div className="bar">
                        <h1>HW 1</h1>
                    </div>
                </div>

                <div className="chat">
                    <div className="heading">
                        <h1>HW 1</h1>  
                        <p>What's the buzz?</p>
                    </div>

                    <hr />

                    <div className="textchat">
                         <div className="messages">
                            <div className="message">
                                <div className="profileimage1"></div>
                                <div className="text1">
                                    <div className="user">
                                        <h3>Sabina C.</h3>
                                        <p>11:40pm</p>
                                    </div>
                                    <div className="textdesc">
                                        <p>hey guys have you started #5 i'm having some problems</p>
                                        {/* <p>have you started #5</p>
                                        <p>i'm having some problems</p> */}
                                    </div>
                                </div>
                            </div>

                            <div className="message">
                                <div className="profileimage2"></div>
                                <div className="text2">
                                    <div className="user2"></div>
                                    <div className="textdesc2"></div>
                                </div>
                            </div>

                            <div className="message">
                                <div className="profileimage3"></div>
                                <div className="text3">
                                    <div className="user3"></div>
                                    <div className="textdesc3"></div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>

                <div className="messageinput">
                    <input type="text" name="name" placeholder="Send Message" />
                </div>
            </div>            
        </>
    )
}
