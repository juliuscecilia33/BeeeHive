import React, { useEffect, useState } from 'react'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

export const MainCoursePage = () => {
    // let date = new Date();

    const [curTime, setCurTime] = useState(null);
    // const [newDate, setNewDate] = useState(date);

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
            <div className="mainpage">
                <div className="time">
                    <h1>{curTime}</h1>
                </div>

                <div className="classTitle">
                    <h1>Welcome Back, Hayley</h1>
                </div>

                <div className="calendar">
                    <Calendar 
                        value={selectedDay}
                        onChange={setSelectedDay}
                        colorPrimary="#9c88ff" // added this
                        calendarClassName="custom-calendar" // and this
                        calendarTodayClassName="custom-today-day" // also this
                        shouldHighlightWeekends
                    />
                </div>

            </div>
        </>
    )
}
