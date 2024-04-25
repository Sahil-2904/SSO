import React, { useState } from "react";
// import AddIcon from "@mui/icons/Add";
// import Fab from "@mui/core/Fab";
// import Zoom from "@mui/core/Zoom";
import { createSvgIcon } from '@mui/material/utils';

function CreateArea(props) {

    const PlusIcon = createSvgIcon(
        // credit: plus icon from https://heroicons.com/
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>,
        'Plus',
      );  
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="flex justify-center p-2">
      <form className="create-note flex flex-col gap-5 shadow p-5 rounded-xl w-2/5">
        {isExpanded ? (
          <input className="text-xl rounded-lg shadow-sm p-2 transition-all ease-linear duration-200 outline-none" name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        ) : null}

        <textarea className="text-lg rounded-lg shadow-sm p-2 outline-none" onClick={expand} name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <div className="flex w-10 justify-center rounded-xl p-1 shadow-lg">
          <PlusIcon  onClick={submitNote}/>
        </div>
        
        {/* <Zoom in={isExpanded ? true : false}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom> */}
      </form>
    </div>
  );
}

export default CreateArea;
