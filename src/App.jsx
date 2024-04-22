
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';

function App() {

  const coffees = useLoaderData();
console.log(coffees)

  return (
    <div className=' container mx-auto text-center'>
    
      <h1 className='text-6xl text-purple-600'>Hot Hot Cold Coffee: {coffees.length}</h1>

      <div className='grid grid-cols-3 gap-5 mt-10'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard> )
        }
      </div>
      
    </div>
  )
}

export default App
