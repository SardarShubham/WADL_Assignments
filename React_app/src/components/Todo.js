import React, { useState } from "react";
import './style.css';
export const Todo = () => {
  const [arr, setArray] = useState(["one", "two"]);
  const [val, setVal] = useState("");
  const [selectIndex, setSelectedIndex] = useState();
  const handleAdd = () => {
    let temp = [...arr, val];
    setArray(temp);
  };


  const handleDone = () => {
    let list = document.getElementById("list");
    list.childNodes[selectIndex].style.textDecoration = "line-through";

  }

  const handleOngoing = () => {
    let list = document.getElementById("list");
    list.childNodes[selectIndex].style.color = "blue";
  } 

  const handleSelect = (index) => {


    let list = document.getElementById("list");
    list.childNodes[index].style.fontSize=  "30px";
    list.childNodes[index].style.fontWeight=  600;

    setSelectedIndex(index);
    console.log("selectd index" , index);
    
  }

  const handleClear = () =>{
    let temp = [...arr];
    temp.splice(selectIndex,1);
    console.log(temp);
    setArray(temp);
  }

  return (
    <div className="todo__container">
      <h1 style={{fontSize:"600"}}>Todo list</h1>
      <ol id="list">
        {arr.map((item, index) => {
          return <li onClick={()=>handleSelect(index)}>{item}</li>;
        })}
      </ol>

      <input type="text" placeholder="add new item" onChange={(e) => setVal(e.target.value)} />
      <div className="btn__grp">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleOngoing}>On Going </button>
        <button onClick={handleDone}>Done</button>
      </div>
    </div>
  );
};
