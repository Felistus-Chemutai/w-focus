import React from 'react'

const Api = () => {
   useEffect(() => {
      fetch('https://api.openweathermap.org/data/2.5/weather?lat={0.4371S}&lon={36.9580E}&appid={API key}')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
  return (
    <div>
      
    </div>
  )
}

export default Api;
