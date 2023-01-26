import React, {useState} from 'react'
import Table from './Table'

function App() {

  const [flip, setFlip] = useState(false);

  let key1 = 'table1';
  let key2 = 'table2';

  if(flip){
    key1 = 'table2';
    key2 = 'table1'
  }

  function flipper(){
    setFlip(!flip);
  }

  return (
    <div className='w-1/3 m-auto '>
      <h1 className='text-center text-xl text-indigo-700 mt-4 underline'>Show Table using React useState</h1>
      <div className='flex gap-4 justify-center'>
        <Table key={key1}/>
        <Table key={key2}/>
      </div>
      <button className='bg-red-500 px-4 py-2 rounded-md text-white block m-auto mt-2' onClick={flipper}>Flip</button>
    </div>
  );
    
}

export default App
