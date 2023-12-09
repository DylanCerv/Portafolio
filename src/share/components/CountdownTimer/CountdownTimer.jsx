import React, { useEffect, useState } from 'react'

export default function CountdownTimer({ className = '', date='2023-05-10T00:00:00' }) {

    const birthdayDate = new Date(date);

    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  
    function getTimeRemaining() {
      const now = new Date();
      const difference = birthdayDate - now;
  
      if (difference <= 0) {
        // Si la fecha de cumpleaños ya ha pasado en el año actual, calcula la diferencia para el próximo año
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
