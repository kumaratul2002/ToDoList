import React, { useState } from 'react';
import ToDoList from './ToDoList';



const App=()=> {
  const[InputList,setInputList]=useState("")
  const[items,setitems]=useState([]);                  //    it makes it a array
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  }
  const listofitems=()=>{
         setitems((val)=>{
          return [...val,InputList];
         });
         setInputList("");
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>ToDo list</h1>
          <br/>
          <input type="text" placeholder="Add" value={InputList} onChange={itemEvent}/>   
          <button onClick={listofitems}>+</button>

          <ol>
            {/* <li>{InputList}</li> */}
            {items.map((itemval)=>{
               return <ToDoList text={itemval}/>
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
