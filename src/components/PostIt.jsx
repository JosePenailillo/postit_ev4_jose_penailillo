import React, { Fragment, useState, useRef } from "react";
import {v4 as uuid} from 'uuid';
import { PostItem } from "./PostItem";
import "./style.css";

export function PostIt() {
  let importancia;
  importancia = false
  const cambiarImportancia = () =>{
    importancia = !importancia;
    if (importancia === true){
      return console.log(true)  
    }
    if (importancia === false){
      return console.log(false)
    }
  }
  
  const [posts, setPosts] = useState([]);
  
  const tituloRef = useRef();
  const descrRef = useRef();

  const agregarNota = () => {
      /* Rescatar el valor del input */
    const titulo = tituloRef.current.value
    console.log(titulo);
    const descr = descrRef.current.value
    console.log(descr);
    

    

    if(titulo.trim() === '' || descr.trim() === '') return;
    console.log('agregando tarea...');
    
    

    
    /* Metodo definido por react para operar los elementos */
    setPosts((prevPosts) => {
      const newPost = {
        id : uuid(),
        titulo: titulo,
        descr: descr,
        completed: importancia
      };
     
      
      return[...prevPosts, newPost]

      
    });
    tituloRef.current.value = null
    descrRef.current.value = null
  };

  const deletePost = (id) => {
    console.log(id)
    const filteredPost = posts.filter(post => post.id !== id)
    setPosts(filteredPost)
  }
 

 
  return (
    <Fragment>
      <h1>Simulador de Post It</h1>
      <form>
      <div className="input-group">
        <input
          type="text"
          ref={tituloRef}
          id= 'tarea'
          className="form-control ms-2 me-2"
          placeholder="Ingrese una tarea"
        />
        <input
          type="text"
          ref={descrRef}
          id= 'comentario'
          className="form-control ms-2"
          placeholder="Comentario"
        />
        {/* Botón importante */}
        <div className="form-check me-5 ms-5">
          <input className="form-check-input" onClick={cambiarImportancia} type="checkbox" />
          <label className="form-check-label" form="flexCheckDefault">
            Importante
          </label>
        </div>
          
        {/* Boton agregar */}
        <button type="reset" value="Reset" className="btn btn-agregar me-4 text-blanco" onClick={agregarNota}>
          Agregar
        </button>
        
      </div>
      </form>
      {/* Cargar post it */}
      <div>
       <ul>
          {posts.map((post) => (
            <PostItem post={post} deletePost={deletePost} key={post.id} ></PostItem>
          ))}
         </ul>
      </div>

      
    </Fragment>
  );
}
