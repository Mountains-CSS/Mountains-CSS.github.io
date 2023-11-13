import React, { useEffect, useState } from 'react';

function Time() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    function displayCurrentDateTime() {
      let now = new Date();

      // Get the current date
      let day = now.toLocaleString("en-us", { weekday: "long" });
      let month = now.toLocaleString("en-us", { month: "long" });
      let date = now.getDate();
      let year = now.getFullYear();

      // Format the date as a string
      let formattedDate = `${day}, ${month} ${date}, ${year}`;

      // Get the current time
      let hours = now.getHours().toString().padStart(2, "0");
      let minutes = now.getMinutes().toString().padStart(2, "0");
      let seconds = now.getSeconds().toString().padStart(2, "0");

      // Format the time as a string
      let formattedTime = `${hours}:${minutes}:${seconds}`;

      // Update state if the values are different
      if (formattedDate !== currentDate) {
        setCurrentDate(formattedDate);
      }

      if (formattedTime !== currentTime) {
        setCurrentTime(formattedTime);
      }
    }

    // Initial call
    displayCurrentDateTime();

    // Update every second
    const intervalId = setInterval(displayCurrentDateTime, 1000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, [currentDate, currentTime]);

  return (
    <div>
      <p>The exact time and date of your location: </p>
      <h1 id="current-date">{currentDate}</h1>
      <h1 id="current-time">{currentTime}</h1>
      <p style={{backgroundColor: "lightblue"}}>Please note that this displays 24-hour time</p>
    </div>
  );
}

export default Time;
