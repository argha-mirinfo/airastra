import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FlightSearchForm from './pages/flight-search';
import MyBookings from './pages/my-bookings';

function App() {

  const [tabValues, setTabValues] = useState([
    {
      name: "Flight",
      selected: true,
      index: 0
    },
    {
      name: "My Booking",
      selected: false,
      index: 1
    },
  ])
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  const handleTabChange = (tab) => {
    tabValues.forEach(value => {
      if(value.index === tab.index){
        value.selected = true
      } else {
        value.selected = false
      }
    })
    setTabValues(tabValues)
    setSelectedTabIndex(tab.index)
  }
  return (
    <div className="search-flight container">
      <div className='grid grid-cols-2'>
        {
          tabValues.map((tab, index) => (
            <div className={`h-20 flex justify-center items-center cursor-pointer ${tab.selected ? "bg-primary" : "bg-secondary"}`} key={index} onClick={() => handleTabChange(tab)}>
              <p className='text-3.25xl text-white font-bold'>{tab.name}</p>
            </div>
          ))
        }
      </div>

      {
        selectedTabIndex === 0 && <FlightSearchForm />
      }

      {
        selectedTabIndex === 1 && <MyBookings />
      }
    </div>
  );
}

export default App;
