// Create a card function for the TODO template

import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  // Add useState
  const [modalVisible, setModalVisible] = useState(false);


  // Add a function here to delete
  function deleteHandler() {
    // console.log('Clicked Delete on');
    // console.log(props.text)
    // Show an overlay here. Switch by utilizing the useState
    setModalVisible(true);
  }

  function closeDeleteHandler() {
    setModalVisible(false);
  }

  return (
    <>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
      </div>
      {modalVisible && 
      <>
        <Modal onCancel={closeDeleteHandler} onConfirm={closeDeleteHandler}  />
        <Backdrop onClick={closeDeleteHandler} />
      </>  
      }
      
    </>
  );
}

export default Todo;
