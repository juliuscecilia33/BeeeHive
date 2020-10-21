import React, { useState, useEffect } from 'react';
import { ClassBar } from './ClassBar';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

export const Chem = () => {
    const [curTime, setCurTime] = useState(null);

    let dateWithouthSecond = new Date();

    const defaultValue = {
        year: 2020,
        month: 10,
        day: 14,
      };
      const [selectedDay, setSelectedDay] = useState(defaultValue);
    

    useEffect(() => {
        setInterval(() => {
          setCurTime([
            dateWithouthSecond.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
          ])
        }, 1000)
    })


    return (
        <>  
            <ClassBar />
            <div className="fourthpage">
                <div className="time">
                    <h1>{curTime}</h1>
                </div>

                <div className="classTitle">
                    <h1>CHEM 101</h1>
                </div>

                <div>
                    <Calendar 
                        value={selectedDay}
                        onChange={setSelectedDay}
                        colorPrimary="#9c88ff" // added this
                        calendarClassName="custom-calendar" // and this
                        calendarTodayClassName="custom-today-day" // also this
                        shouldHighlightWeekends
                    />
                </div>

                <div>
                    <h1>Professor Info</h1>
                </div>
            </div>            
        </>
    )
}
