import React from "react";
import "./style.css";

/* debo recibir los props */
export function PostItem({ post, deleteTask }) {
  const { id, task, descr, completed} = post;
  let color;
  if (completed === true) {             
  color = 'importante'
  }
 
  const fndeleteTask = () => {
    deleteTask(id)
  }

  return  <li>
            <a href="#" className={color}>
              <button type="reset" id="delete" className="botonX" onClick={fndeleteTask}>X</button>
              <h2>{task}</h2>
              <p>{descr}</p>
            </a>
          </li>

     
}
