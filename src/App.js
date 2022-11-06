import logo from './logo.svg';
import './App.css';

const tabValues = [
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
]

function App() {

  const handleTabChange = () => {
    
  }
  return (
    <div className="search-flight container">
      <div className='grid grid-cols-2'>
        {
          tabValues.map((tab, index) => (
            <div className={`h-20 flex justify-center items-center cursor-pointer ${tab.selected ? "bg-primary" : "bg-secondary"}`} key={index} onClick={() =>handleTabChange(tab)}>
              <p className='text-3.25xl text-white'>{tab.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
