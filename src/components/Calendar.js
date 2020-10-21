import React from 'react'
import {Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const myEventsList = [
    { start: new Date(), end: new Date(), title: "special event" }
  ];

const localizer = momentLocalizer(moment);

export default Calendar = () => {
    return(
        <div>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 400, width: 600}}/>
        </div>
    );
};