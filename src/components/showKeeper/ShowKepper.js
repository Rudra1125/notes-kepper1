import axios from "axios";
import React from "react";
import "./ShowKeeper.css";
const ShowKepper = ({ keeperList,setKeeperList }) => {
  
    const deleteNotes = (id) => {
        axios.post("http://localhost:8000/api/delete", { id:id })
            .then(res => setKeeperList(res.data));
    }
  
    return (
    <div className="showKeeper row">
      { keeperList.map(note => (
        <div className="keeperCard col-md-3" key={note._id}>
          <h1 className="title">
            {note.title}
            <i className="deleteIcon  fa fa-trash" aria-hidden="true" onClick={() => deleteNotes(note._id)} />

          </h1>
          <textarea className="descriptionBox" value={note.description} readOnly/>
        </div>
      ))}
    </div>
  );
};

export default ShowKepper;
