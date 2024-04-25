import React from "react";
// import DeleteIcon from "@mui/material/Delete";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="flex flex-col p-4 rounded-xl gap-2 shadow-md">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
        {/* <span class="material-icons-outlined">
delete
</span> */}
      </button>
    </div>
  );
}

export default Note;
