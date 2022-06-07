import React, { useState, useEffect } from "react";
import List from "./List.jsx";
import Heading from "./Heading.jsx";
import Footer from "./Footer.jsx";
import "../css/main.css";

const Main = () => {
    const [ inputValue, setInputValue ] = useState();
    const [ lists, setList ] = useState([]);

    //fetch values from the localstorage
    useEffect(() => {
        var getText = JSON.parse(localStorage.getItem("toDoReact"));
        if(getText){
            setList(getText);
        }
    }, []);

    //putting values into the localstorage
    useEffect(() => {
        localStorage.setItem("toDoReact", JSON.stringify(lists));
    }, [lists]);

    //updating the status of task 
    function setTaskStatus(listObject){
        var newStatus;
        if(listObject.status === "undone"){
            newStatus = "done"
        }else {
            newStatus = "undone"
        }
        
        lists.forEach(list => {
            if(list === listObject){
               list.status = newStatus;
            }
        });

        setList(() => {
            return [ ...lists ];
        });
        
    }
   
    //getting task from the input field
    function inputValueOnChange(e){
        setInputValue(e.target.value);
    }

    //creating task on "Enter" key
    function onEnterKey(e){
        if(e.key === "Enter"){
            submitOnClick();
        }     
    }

    //function invoke on click event
    function submitOnClick(){
        if(inputValue){
            var obj = {text: inputValue, status: "undone"}

            setList(oldValue => {    
               return [...oldValue, obj]
            });
            setInputValue(""); 
        }else {
            alert("Text Box can not be emplty");
        }
              
    }

    //deleting perticular task
    function deleteMe(valueToDel){
        console.log(valueToDel);
        var upArr = lists.filter((list) => {
            return valueToDel !== list;
        });
        setList(() => {
            return [ ...upArr ]
        });
      }

    return (    
        <>
            <div className="main_container">
               <Heading />
               <div className="todo_container">
                  <input className="input_box"  placeholder="do you have any task?" type="text"  onKeyPress={onEnterKey} onChange={inputValueOnChange} value={inputValue} />
                  <button className="add_button" onClick={submitOnClick}>+</button>
                  <ol className="ol_list">
                      {lists.map((list, index) => {
                          return <List key={index} listObject={list} del={deleteMe} tskStatusFun={setTaskStatus} />
                      })}                   
                  </ol> 
                  <Footer />
               </div>
            </div>
        </>
    )
}


export default Main;