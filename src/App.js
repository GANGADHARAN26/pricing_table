
import Header from './Header';
import Shop from './Shop';
import Container from './Container';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  //use state for counting cart
  const [CountCart,setCount]=useState([]);
  //function to add a count
 const addCount =(item)=>{
  setCount([...CountCart,item])
 }
 //function to remove a count
 const removeCount =(item)=>{
  setCount(CountCart.filter(CountItem=>CountItem!==item))
 }
  return (
    <div className="App">
        <Shop Count={CountCart.length}/>
        <Header />
        <Container
        //passing the function as a property to  the shopping cart
        addCount={addCount}
        removeCount={removeCount}
        />
        <Footer /> 
    </div>
  );
}

export default App;
 