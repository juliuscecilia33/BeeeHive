import React from 'react';
import { Link } from 'react-router-dom'

// console.log(GrayArrow);

export const ClassBar = () => {


    return (
        <>
            <div className="classbar">
                <div className="dropDown">
                    <div className="top">
                        <h1>CHEM 101</h1>
                        <div className="logo"></div>
                    </div>
                </div>

                <div className="class">
                    <div className="classInfo">
                        <h1>INFORMATION</h1>
                        <ul>
                            <li>Syllabus</li>
                            <li>Announcements</li>
                        </ul>
                    </div>

                    <div className="homework">
                        <h1>HOMEWORK</h1>   
                        <ul>                           
                            
                            <Link to={"./SecondCoursePage"}>
                                <li>HW 1</li>
                            </Link>

                            <li>HW 2</li>

                            <li>HW 3</li>
                        </ul>  
                    </div>

                    <div className="cluster">
                        <h1>CLUSTERS</h1>
                        <ul>
                            <li>Cluster 1</li>
                            <li>Cluster 2</li>
                            <Link to={"./ClusterPage"}>
                                <li>Cluster 3</li>
                            </Link>
                        </ul>  
                    </div>
                </div>
            </div>            
        </>
    )
}
