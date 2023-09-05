import Daily from "./components/Daily";
// import Hourly from "./components/Hourly";
import Navbar from "./components/Navbar";
import WeatherSearch from "./components/WeatherSearch";


function App() {
  return (
    <>
      <Navbar title="WeatherWise" />
      <h3 className="container my-5 text-center">Welcome to WeatherWise: Place to search weather</h3>
      <WeatherSearch />
      {/* <Hourly/> */}
      <div className="container my-4 border">
      <h4 className="container text-center my-3">4 Days Weather Forecast</h4>
      <h6 className="container text-center text-secondary" style={{marginBottom: '30px',}}>Buy Premium to access this section</h6>
        <Daily />
      </div>
    </>
  );
}

export default App;
