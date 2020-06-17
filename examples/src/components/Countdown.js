import React from "react";

function CountDown() {
  const [remainingTime, setRemainingTime] = React.useState(10000);
  const end = React.useRef(newDate().getItme() + remainingTime);
  React.useEffect(() => {
    const interval = setInterval(() => {
      const newRemainingTime = end.current - new Date().getTime();
      if (newRemainingTime <= 0) {
        clearInterval(interval);
        setRemainingTime(0);
      } else {
        setRemainingTime(newRemainingTime);
      }
    });
    return () => clearInterval(interval);
  }, []);
  return remainingTime;
}

export { CountDown };
