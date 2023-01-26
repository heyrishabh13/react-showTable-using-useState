import React,{useState} from 'react';
import TableRow from './TableRow';


function Table(){
    
    const [num, setNum] = useState(2);

    function showNextTable(){

        setNum(num + 1);
    }

    function showPreviousTable(){

        setNum(num - 1);
    }

    return (
    <div className='p-2 '>
      <button className='bg-violet-700 px-4 py-2 rounded-md text-white' onClick={showNextTable}>Next</button>
      <button className='bg-violet-700 px-4 py-2 rounded-md text-white ml-2' onClick={showPreviousTable}>Previous</button>
    
      <TableRow number={num} index='1'/>
      <TableRow number={num} index='2'/>
      <TableRow number={num} index='3'/>
      <TableRow number={num} index='4'/>
    </div>
    );
}

export default Table;