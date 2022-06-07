import React from 'react';
import "../css/main.css";


const List = (props) => {

  return (<>
     <div className="task_list">
       <li className={props.listObject.status} onClick={() => props.tskStatusFun(props.listObject)}>{props.listObject.text}</li>
       <span onClick={() => props.del(props.listObject)} className="fa fa-trash-o"></span>
     </div>
  </>)
}

export default List;