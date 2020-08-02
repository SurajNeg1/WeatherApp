import React from 'react';
const api={
  key:"562c88c38a0c60d409562ec90d70a628",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {

  const dateBuilder=(d)=>{
    let months=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day= days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="app">
      <main>
          <div className="search-box">
            <input type="text" className="search-bar"
                    placeholder="Search.."
             />
          </div>
          <div className="loaction-box">
            <div className="location">New York,US</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className= "weather-box">
              <div className="temp">10°c</div>
              <div className="weather">Sunny</div>
          </div>
      </main>

    </div>
  );
}

export default App;
