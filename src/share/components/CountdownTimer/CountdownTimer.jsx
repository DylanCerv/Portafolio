import React, { useEffect, useState } from 'react'

export default function CountdownTimer({ className = '', moth='05-10T00:00:00' }) {

    const today = new Date();
    const may10 = new Date(today.getFullYear(), 4, 10);

    let date;

    if (today > may10) {
      // Ya pasó el 10 de mayo de este año.
      date = new Date(today.getFullYear() + 1, 4, 10);
    } else {
      // Todavía no ha llegado el 10 de mayo de este año.
      date = may10;
    }

    const birthdayDate = new Date(date);

    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  
    function getTimeRemaining() {
      const now = new Date();
      const difference = birthdayDate - now;
  
      if (difference <= 0) {
        birthdayDate.setFullYear(now.getFullYear() + 1);
        return getTimeRemaining();
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      return { days, hours, minutes, seconds };
    }
  
    useEffect(() => {
      const updateTimer = () => {
        setTimeRemaining(getTimeRemaining());
      };
  
      const intervalId = setInterval(updateTimer, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className={`countdown-timer ${className}`}>
        <p className='text-lg font-semibold'>
          {timeRemaining.days} días, {timeRemaining.hours} horas, {timeRemaining.minutes} minutos, {timeRemaining.seconds} segundos
        </p>
      </div>
    );
}
